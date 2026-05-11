# Code Walkthrough

This walkthrough describes the current PLC code after the latest implementation updates. It is intentionally practical: read it alongside the files in `XAE/VekSi_PLC`.

## 1. Main project structure

```text
XAE/VekSi_PLC/
|-- Functions/
|   |-- MAIN.TcPOU
|   |-- FB_ValveControl.TcPOU
|   |-- FB_SensorIO.TcPOU
|   |-- FB_MqttManager.TcPOU
|   `-- FB_CSVLogger.TcPOU
|-- State_Var/
|   |-- E_CommandSource.TcDUT
|   |-- E_ValveState.TcDUT
|   |-- E_MQTTState.TcDUT
|   |-- E_CSVLogState.TcDUT
|   |-- ST_ValveData.TcDUT
|   |-- ST_SensorData.TcDUT
|   |-- ST_MqttConfig.TcDUT
|   `-- ST_MQTT_Command.TcDUT
`-- Variables_Lists/
    |-- GVL_Config.TcGVL
    |-- GVL_IO.TcGVL
    |-- GVL_System.TcGVL
    `-- GVL_HMI.TcGVL
```

## 2. `MAIN` is the cycle conductor

`MAIN` runs once per PLC cycle and does the following:

1. Seeds `GVL_HMI.HMI_MQTT_Config` from `GVL_Config.MQTT_DEFAULT_*` while the init flag is false.
2. Detects a rising edge into HMI mode and copies actual valve positions into the HMI setpoint variables.
3. Copies HMI setpoints/resets to `GVL_System.Valve[N]`.
4. Copies MQTT setpoints from `fbMqttManager.rMqttValveSetpoint[N]`.
5. Selects one system command source: `HMI`, `MQTT`, or `Manual`.
6. Calls `FB_SensorIO`.
7. Calls three `FB_ValveControl` instances.
8. Clears one-shot reset/write/apply commands.
9. Calls `FB_MqttManager`.
10. Calls `FB_CsvLogger`.
11. Mirrors runtime values to `GVL_HMI.ACT_*` display variables.
12. Computes `SystemReady`, `AnyFaultActive`, and `AnySensorFault`.

## 3. Command-source selection

The current design uses `E_CommandSource`:

```iecst
TYPE E_CommandSource :
(
    HMI    := 0,
    MQTT   := 1,
    Manual := 2
);
END_TYPE
```

`MAIN` uses `GVL_HMI.HMI_CommandSource` to choose active setpoints before calling each valve FB:

| Source | Behavior |
| --- | --- |
| `HMI` | `Active_Setpoint := HMI_Setpoint`; `bCommandUpdate := HMI_UPDATE`. |
| `MQTT` | If enabled and connected, `Active_Setpoint := MQTT_Setpoint`; `bCommandUpdate := bNewRemoteCommand`. |
| `Manual` | Uses `Manual_Setpoint`, disables absolute update edge, and valve FB enters jog mode. |

`FB_ValveControl` therefore only receives `Active_Setpoint`, `currentcommandsrc`, and `bUpdate`; it no longer performs HMI-vs-MQTT priority logic internally.

## 4. `FB_ValveControl`

The valve FB controls one axis with PLCopen MC2 function blocks:

- `MC_Power`
- `MC_Home`
- `MC_MoveAbsolute`
- `MC_ReadActualPosition`
- `MC_Halt`
- `MC_Reset`
- `MC_Jog`

Important inputs:

| Input | Purpose |
| --- | --- |
| `Axis` | NC axis reference. |
| `Active_Setpoint` | Already selected `0–100 %` target from `MAIN`. |
| `currentcommandsrc` | Current source enum for mode and source tracking. |
| `bUpdate` | Rising edge used to accept a new selected setpoint. |
| `ZeroPosition`, `TopPosition` | Limit/homing signals. |
| `JogUp`, `JogDown` | Manual hardware-panel jog buttons. |
| `Move_Stop`, `Reset`, `bHoming` | Operator control edges/commands. |

Key behavior:

- `rtUpdate` clamps the selected setpoint and calculates `rTarget_mm`.
- `rTarget_mm = rActiveSetpoint / 100 * FullStroke_mm`.
- Actual axis position is read every cycle and converted back to percent.
- Manual source forces the FB into `MANNUAL_JOG` except from fault/reset/init.
- Jog commands are allowed only when one direction is pressed, the matching limit is not reached, and no fault is active.
- `lastcommandsrc` is updated while moving or jogging and is later shown on the HMI/MQTT/CSV paths.

## 5. `FB_SensorIO`

`FB_SensorIO` is the sensor scaling boundary. It reads raw `GVL_IO` values and writes one structured output, `GVL_System.Sensors`.

Typical responsibilities:

- Water-level raw count to percent and millimeters.
- Temperature raw counts to degrees Celsius.
- Position-feedback raw channels.
- Low-pass filtering controlled by `rLpfAlpha`.
- Fault flags when raw values are at/below `SENSOR_FAULT_THRESHOLD`.

Run order matters: `MAIN` calls this before MQTT and CSV so published/logged sensor values are current for that cycle.

## 6. `FB_MqttManager`

The MQTT manager owns all broker behavior:

- State machine: `DISABLED`, `CONNECTING`, `CONNECTED`, `DISCONNECTING`, `WAIT_RECONNECT`.
- Applies `ST_MqttConfig` to `FB_IotMqttClient` while connecting.
- Auto-subscribes to `SubscribeTopic` on each new connection.
- Drains the MQTT message queue.
- Parses incoming command JSON into `ST_MQTT_Command`.
- Clamps `Valve1`, `Valve2`, and `Valve3` command values to `0–100`.
- Builds status JSON manually in `BuildStatusJson`.
- Publishes on manual HMI trigger or cyclic timer.

Current incoming JSON struct:

```iecst
TYPE ST_MQTT_Command :
STRUCT
    Valve1 : DINT;
    Valve2 : DINT;
    Valve3 : DINT;
END_STRUCT
END_TYPE
```

## 7. `FB_CsvLogger`

The CSV logger is non-blocking and state-machine based because file I/O can span multiple PLC cycles.

Inputs:

- `bEnable` from `GVL_HMI.HMI_CSV_Enable`.
- `bForceWrite` from `GVL_HMI.WriteTrigger`.
- `tLogInterval` from `GVL_Config.CSV_LOG_INTERVAL_S`.
- `stValve` whole array from `GVL_System.Valve`.
- `stSensors` from `GVL_System.Sensors`.

It creates monthly files named `IrrigationLog_YYYY-MM.csv`, writes the header for new files, appends one row, closes the file, and updates error/status outputs.

## 8. HMI and `GVL_HMI`

`GVL_HMI` follows this convention:

- `HMI_*`: HMI writes, PLC reads.
- `ACT_*`: PLC writes, HMI reads.

The current HMI is a development/test view. It exposes direct controls for HMI setpoints, MQTT enable/publish, CSV force write, mode selection, and diagnostics. Production work should refine the layout but keep the same PLC symbol ownership model.

## 9. Common changes

### Change full stroke calibration

Edit:

```iecst
GVL_Config.VALVE_FULL_STROKE_MM := <measured_mm>;
```

Then rebuild/download and verify 0%, 50%, and 100% positions.

### Add a new MQTT command field

1. Add the field to `ST_MQTT_Command`.
2. Parse/map it in the `bSuccess` block in `FB_MqttManager`.
3. Add an output or system variable if another module needs it.
4. Wire it in `MAIN`.
5. Document the payload in `docs/MQTT_PROTOCOL.md`.

### Add a CSV column

1. Extend the header string in `FB_CsvLogger`.
2. Append the value in `CSV_WRITE_ROW`.
3. Increase string size if needed.
4. Update `docs/CSV_FORMAT.md`.

### Add a production HMI control

1. Add a `GVL_HMI.HMI_*` or `ACT_*` variable if no suitable symbol exists.
2. Wire it in `MAIN`.
3. Bind the HMI control to `%s%ADS.PLC1.GVL_HMI.<VariableName>%/s%`.
4. Keep `GVL_IO` for physical I/O, not normal HMI controls.
