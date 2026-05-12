# Setup and Commissioning

## Prerequisites

- TwinCAT 3.1 Engineering / XAE compatible with the project files.
- TwinCAT runtime / XAR on the target IPC or development runtime.
- TC2_MC2 library for motion control.
- TF6701 / Tc3_IotBase and Tc3_JsonXml libraries for MQTT/JSON.
- Tc2_Utilities and Tc2_System for file I/O/time functions.
- Visual Studio with TwinCAT integration.
- MQTT broker for MQTT testing.

## Open the solution

1. Open `VeKsi_Project.sln` in Visual Studio / TwinCAT XAE.
2. Restore/resolve TwinCAT libraries if prompted.
3. Open the PLC project under `XAE/VekSi_PLC`.
4. Confirm `Functions/`, `State_Var/`, and `Variables_Lists/` compile paths are intact.

## Link motion axes

Create or verify three NC axes and link them to the PLC axis references:

| PLC axis ref | Physical / NC axis |
| --- | --- |
| `MAIN.Axis_Valve1` | Valve 1 EPP7041 axis |
| `MAIN.Axis_Valve2` | Valve 2 EPP7041 axis |
| `MAIN.Axis_Valve3` | Valve 3 EPP7041 axis |

Verify units so `MC_MoveAbsolute.Position` is interpreted in the same axis units expected by `VALVE_FULL_STROKE_MM`.

## Link I/O

At minimum, verify these `GVL_IO` groups:

| Group | Variables |
| --- | --- |
| Water level / analog | `AI_L1V11`, `AI_L1V20`, `AI_L2V21` |
| Temperature | `AI_Tmp_1`, `AI_Tmp_2` |
| Position feedback | `AI_PosFeedback_1..3` |
| Limits | `bTop_position_N`, `bBottom_position_N` |
| Jog buttons | `bValveN_JogUp_PB`, `bValveN_JogDown_PB` |
| Jog LEDs | `bValveN_JogUp_LED`, `bValveN_JogDown_LED` |

Some variables are currently placeholders without explicit `AT %I*` / `%Q*` mapping. Link them in the TwinCAT I/O tree before real hardware tests.

## Calibrate before real motion

1. Set `VALVE_FULL_STROKE_MM` to the measured full valve travel. Current default is `126` mm.
2. Confirm top and bottom limit switch polarity.
3. Confirm homing mode per valve. Valve 1 currently uses `MC_DefaultHoming`; valves 2 and 3 use `MC_Direct` in `MAIN`.
4. Start with slow velocity/acceleration values.
5. Test with mechanical travel clear and emergency stop available.

## Configure MQTT

Defaults are in `GVL_Config` and copied to `HMI_MQTT_Config`:

```iecst
MQTT_DEFAULT_BROKER_IP := 'imsiot.aws.thinger.io';
MQTT_DEFAULT_PORT := 8883;
MQTT_DEFAULT_CLIENT_ID := 'Beckhoff';
MQTT_DEFAULT_MAIN_TOPIC := 'irrigation/status';
MQTT_DEFAULT_SUB_TOPIC := 'irrigation/command';
```

For development, update broker/credentials from the HMI test panel or directly in `GVL_Config`, then press/apply the HMI reconnect trigger.

## Build, activate, and run

1. Build the PLC project.
2. Activate the TwinCAT configuration.
3. Login to the PLC.
4. Start the runtime.
5. Watch the valve states, MQTT state, CSV status, and sensor fault flags.

## Deploy / use the HMI

1. Open `HMI/HMI.hmiproj`.
2. Publish to the local engineering HMI server or the target IPC HMI server.
3. Browse to the HMI live view.
4. Remember that the current HMI is a **development/test HMI**, not a final production screen.

## Smoke tests

| Test | Expected result |
| --- | --- |
| Select HMI mode, enter 50% for Valve 1, press Update | Valve 1 moves toward 50%; state goes `MOVING` then `HOLD`. |
| Press Stop during a move | Valve enters `HALT` and adopts current position after halt. |
| Press Homing | Valve re-enters `HOMING`, then returns to `IDLE` when complete. |
| Select MQTT mode, enable MQTT, send command JSON | Parsed setpoints become active when connected; source shows MQTT during movement. |
| Select Manual mode and use jog buttons | Valve enters `MANNUAL_JOG`; jog LEDs blink/limit LEDs latch as coded. |
| Click Force Write Log | A row is appended to `IrrigationLog_YYYY-MM.csv` or an error flag appears. |

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Valve does not move | NC axis link, drive power, top/bottom limit polarity, selected command source, update edge. |
| MQTT does not connect | Broker host/port/credentials, firewall, `ACT_MQTT_State`, `ACT_MQTT_ErrorMsg`. |
| MQTT command received but no move | `HMI_CommandSource` must be MQTT, `HMI_MQTT_bEnable` true, connection active, command values changed. |
| CSV not written | `HMI_CSV_Enable`, path permissions, disk space, `ACT_CSV_Error`. |
| Sensor fault active | Raw values in `GVL_IO`, sensor wiring, `SENSOR_FAULT_THRESHOLD`. |
