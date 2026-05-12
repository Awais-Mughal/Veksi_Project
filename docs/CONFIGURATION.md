# Configuration Reference

Compile-time constants live in `XAE/VekSi_PLC/Variables_Lists/GVL_Config.TcGVL`. Runtime HMI-facing controls live in `GVL_HMI`, especially `HMI_CommandSource`, `HMI_MQTT_*`, `HMI_CSV_Enable`, and `WriteTrigger`.

## Valve motion constants

| Constant | Type | Current default | Unit | Notes |
| --- | --- | ---: | --- | --- |
| `VALVE_FULL_STROKE_MM` | `REAL` | `126` | mm | Full valve travel for 100% command. Must be calibrated to the actual actuator. |
| `VALVE_POSITION_TOLERANCE` | `REAL` | `0.5` | % | Dead-band for `InPosition` and move decisions. |
| `VALVE_MOVE_VELOCITY` | `LREAL` | `1.5` | mm/s | Normal absolute move speed. |
| `VALVE_MOVE_ACCELERATION` | `LREAL` | `16.9085` | mm/s² | Acceleration ramp. |
| `VALVE_MOVE_DECELERATION` | `LREAL` | `16.9085` | mm/s² | Deceleration / halt ramp. |
| `VALVE_MOVE_JERK` | `LREAL` | `53.5391` | mm/s³ | Jerk value passed to MC2 move/halt FBs. |
| `VALVE_HOMING_VELOCITY` | `LREAL` | `1.0` | mm/s | Reference value passed to valve FB; verify NC homing settings too. |

## Sensor scaling constants

| Constant | Type | Default | Notes |
| --- | --- | ---: | --- |
| `WATER_LEVEL_RAW_MIN` | `INT` | `0` | Raw count at engineering minimum. |
| `WATER_LEVEL_RAW_MAX` | `INT` | `32767` | Raw count at engineering maximum. |
| `WATER_LEVEL_ENG_MIN_MM` | `REAL` | `0.0` | Water-level engineering minimum. |
| `WATER_LEVEL_ENG_MAX_MM` | `REAL` | `1000.0` | Water-level engineering maximum; calibrate to tank/canal height. |
| `TEMP_RAW_SCALE_FACTOR` | `REAL` | `0.1` | EL3202 tenths-of-degree scaling. |
| `TEMP_OFFSET_C` | `REAL` | `0.0` | Temperature trim. |
| `SENSOR_FAULT_THRESHOLD` | `INT` | `-100` | Raw values at/below this are treated as disconnected/faulted. |

## CSV logging constants

| Constant | Default | Notes |
| --- | --- | --- |
| `CSV_LOG_INTERVAL_S` | `T#15M` | Periodic row interval. |
| `CSV_FILE_PATH` | `C:\TwinCAT\3.1\Boot\Log\` | Base folder; keep trailing backslash. |
| `CSV_FILENAME_PREFIX` | `IrrigationLog_` | Combined with `YYYY-MM.csv`. |

Final filename pattern: `C:\TwinCAT\3.1\Boot\Log\IrrigationLog_YYYY-MM.csv`.

## MQTT defaults

These constants are copied into `GVL_HMI.HMI_MQTT_Config` by `MAIN` during startup initialization.

| Constant | Current default |
| --- | --- |
| `MQTT_DEFAULT_BROKER_IP` | `imsiot.aws.thinger.io` |
| `MQTT_DEFAULT_PORT` | `8883` |
| `MQTT_DEFAULT_CLIENT_ID` | `Beckhoff` |
| `MQTT_DEFAULT_USERNAME` | `ims_iot` |
| `MQTT_DEFAULT_PASSWORD` | `123456789` |
| `MQTT_DEFAULT_TOPIC_PREFIX` | `irrigation` |
| `MQTT_DEFAULT_MAIN_TOPIC` | `irrigation/status` |
| `MQTT_DEFAULT_SUB_TOPIC` | `irrigation/command` |
| `MQTT_DEFAULT_PUBLISH_INTERVAL` | `300` seconds |

> Security note: credentials in PLC source are visible to anyone with repository or symbol access. Replace development credentials before production use.

## Runtime controls in `GVL_HMI`

| Variable | Purpose |
| --- | --- |
| `HMI_CommandSource` | System command source: `HMI`, `MQTT`, or `Manual`. |
| `HMI_UPDATE` | Applies HMI numeric setpoints when HMI source is selected. |
| `HMI_MQTT_bEnable` | Master MQTT connection enable. |
| `HMI_MQTT_mPublish` | Manual publish trigger. |
| `HMI_MQTT_ApplyConfig` | Reconnect trigger after MQTT config edits. |
| `HMI_CSV_Enable` | Master CSV logging enable. |
| `WriteTrigger` | Force one CSV row. |
| `sHMI_mode`, `sMqtt_mode`, `sMannual_mode` | PLC-written booleans for HMI mode indication. |

## Task cycle

`TASK_CYCLE_MS` is documented as `10 ms` and should match the TwinCAT task period. If the task period changes in XAE, update the constant/documentation together.
