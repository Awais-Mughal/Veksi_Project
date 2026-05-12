# Code Reading Reference

This document is a compact, current code-reading guide for the main PLC files. It replaces the older literal line-by-line notes that had drifted from the implementation.

## `GVL_Config.TcGVL`

| Section | What to check |
| --- | --- |
| Valve motion | `VALVE_FULL_STROKE_MM := 126`, tolerance, velocity, acceleration, deceleration, jerk, homing velocity. |
| Sensor scaling | Water-level raw min/max, engineering min/max, temperature scale/offset. |
| Fault detection | `SENSOR_FAULT_THRESHOLD := -100`. |
| CSV | `CSV_LOG_INTERVAL_S := T#15M`, path, filename prefix. |
| MQTT defaults | Broker, port, client ID, credentials, topics, publish interval. |
| Task | `TASK_CYCLE_MS := 10`. |

## `GVL_IO.TcGVL`

`GVL_IO` is the physical I/O boundary. It contains:

- Analog raw sensor values: water-level channels, temperature channels, and position-feedback channels.
- Limit signals: top and bottom position per valve.
- Jog pushbuttons for each valve.
- Jog LED outputs for each valve.

Before real hardware tests, verify which variables are explicitly mapped with `AT %I*` / `%Q*` and which still need TwinCAT I/O links.

## `GVL_HMI.TcGVL`

Read it in groups:

1. `HMI_CommandSource` selects `HMI`, `MQTT`, or `Manual`.
2. Valve sections expose HMI setpoints/commands and ACT feedback.
3. Sensor display variables mirror `GVL_System.Sensors`.
4. MQTT variables control enable/publish/config and show connection diagnostics.
5. CSV variables control enable/forced write and show file/error status.
6. Mode booleans `sHMI_mode`, `sMqtt_mode`, and `sMannual_mode` are PLC-written HMI indicators.

## `GVL_System.TcGVL`

`GVL_System` is the runtime bus. Important fields:

| Field | Purpose |
| --- | --- |
| `Valve[1..3]` | Whole per-valve runtime struct. |
| `bCommandUpdate_HMI` | Mirrors `HMI_UPDATE`. |
| `bCommandUpdate_MQTT` | Pulses on valid MQTT command. |
| `bCommandUpdate` | Selected source update edge passed to valve FBs. |
| `Sensors` | Latest scaled sensor data. |
| `CSV_*` | Logger status. |
| `MQTT_*` | MQTT status and diagnostics. |
| `SystemReady`, `AnyFaultActive`, `AnySensorFault` | System health. |

## `ST_ValveData.TcDUT`

Key fields:

- `HMI_Setpoint`, `MQTT_Setpoint`, `Manual_Setpoint`, `Active_Setpoint`.
- `Actual_Position`, `Actual_Pos_Raw`.
- `Source` and `lastsrc` for current/last command source tracking.
- `State` and `currentState_string`.
- `IsHomed`, `InPosition`, `IsFault`, `FaultCode`.
- `Reset_Cmd`.

## `E_ValveState.TcDUT`

Current enum values:

| Value | Name |
| ---: | --- |
| 0 | `INIT` |
| 1 | `HOMING` |
| 2 | `IDLE` |
| 3 | `MOVING` |
| 4 | `HALT` |
| 5 | `HOLD` |
| 6 | `MANNUAL_JOG` |
| 7 | `FAULT` |
| 8 | `RESET` |

The misspelling `MANNUAL_JOG` is currently part of the code and should be treated as the actual enum name unless the PLC code is refactored.

## `MAIN.TcPOU`

Read `MAIN` by numbered blocks:

| Step | Purpose |
| --- | --- |
| 0 | Seed MQTT defaults and handle HMI-mode rising edge. |
| 1 | Copy HMI setpoints/resets and MQTT setpoints into `GVL_System`. |
| Source `CASE` | Select active command source and mode indicator booleans. |
| 2 | Call `FB_SensorIO`. |
| 3–5 | Call valve FBs for valves 1–3. |
| 6 | Clear reset commands. |
| 7 | Timestamp code is currently commented out. |
| 8 | Build arrays and call `FB_MqttManager`; clear apply config. |
| 9 | Call `FB_CsvLogger`; clear write trigger. |
| 10 | Mirror `GVL_System` values to `GVL_HMI.ACT_*`; convert source enum to text. |
| 11 | Compute system health flags. |

## `FB_ValveControl.TcPOU`

Read in sections:

1. Edge detection and manual jog allow logic.
2. Selected setpoint tracking from `Active_Setpoint` on `bUpdate` rising edge.
3. `MC_Power` and drive-fault trap.
4. `MC_ReadActualPosition` and percent conversion.
5. Manual-mode forced transition to `MANNUAL_JOG`.
6. State machine.
7. Jog LED logic.
8. Output assignment.

Important pattern: the FB uses `rActiveSetpoint` internally, converts it to `rTarget_mm`, and moves only when the difference from `Actual_Position` exceeds `PosTolerance`.

## `FB_MqttManager.TcPOU`

Read in this order:

1. Edge detection for apply-config and manual publish.
2. State machine for connection lifecycle.
3. `fbMqttClient.Execute(bConnectCmd)`.
4. Incoming queue drain and JSON parse.
5. Manual publish block.
6. Cyclic publish timer block.
7. Output status assignment.
8. `BuildStatusJson` method.

Current command fields are `Valve1`, `Valve2`, and `Valve3` only.

## `FB_CsvLogger.TcPOU`

Read in this order:

1. `FB_LocalSystemTime` update.
2. Enable guard.
3. Trigger logic: interval timer or forced write edge.
4. `CSV_PREPARE`: filename and existence check.
5. `CSV_OPEN`: open append file.
6. `CSV_WRITE_HDR`: header for new file.
7. `CSV_WRITE_ROW`: build timestamp/valve/sensor row.
8. `CSV_CLOSE`: close file handle.
9. `CSV_ERROR`: report and retry later.

When changing CSV content, update both the header and row builder together.
