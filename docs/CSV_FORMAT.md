# CSV Logging Format

## Storage and rotation

`FB_CsvLogger` writes monthly CSV files to the configured TwinCAT boot log folder.

```text
C:\TwinCAT\3.1\Boot\Log\IrrigationLog_YYYY-MM.csv
```

| Setting | Source | Default |
| --- | --- | --- |
| Base path | `GVL_Config.CSV_FILE_PATH` | `C:\TwinCAT\3.1\Boot\Log\` |
| Prefix | `GVL_Config.CSV_FILENAME_PREFIX` | `IrrigationLog_` |
| Interval | `GVL_Config.CSV_LOG_INTERVAL_S` | `T#15M` |

A new file is created each month. The header row is written once for a newly created file.

## Columns

| # | Column | Type / unit | Source |
| ---: | --- | --- | --- |
| 1 | `Timestamp` | system time string | `FB_LocalSystemTime` / `SYSTEMTIME_TO_STRING` |
| 2 | `V1_Setpoint_%` | REAL % | `stValve[1].Active_Setpoint` |
| 3 | `V1_Actual_%` | REAL % | `stValve[1].Actual_Position` |
| 4 | `V1_Source` | string | `HMI`, `MQTT`, `Manual`, or `NONE` |
| 5 | `V1_State` | enum numeric/string conversion | `stValve[1].State` |
| 6 | `V2_Setpoint_%` | REAL % | `stValve[2].Active_Setpoint` |
| 7 | `V2_Actual_%` | REAL % | `stValve[2].Actual_Position` |
| 8 | `V2_Source` | string | `HMI`, `MQTT`, `Manual`, or `NONE` |
| 9 | `V2_State` | enum numeric/string conversion | `stValve[2].State` |
| 10 | `V3_Setpoint_%` | REAL % | `stValve[3].Active_Setpoint` |
| 11 | `V3_Actual_%` | REAL % | `stValve[3].Actual_Position` |
| 12 | `V3_Source` | string | `HMI`, `MQTT`, `Manual`, or `NONE` |
| 13 | `V3_State` | enum numeric/string conversion | `stValve[3].State` |
| 14 | `WaterLevel_mm` | REAL mm | `stSensors.rWaterLevel_mm` |
| 15 | `WaterLevel_%` | REAL % | `stSensors.rWaterLevel_pct` |
| 16 | `Temperature1_C` | REAL °C | `stSensors.rTemperature_C[1]` |
| 17 | `Temperature2_C` | REAL °C | `stSensors.rTemperature_C[2]` |

## Header

```text
Timestamp,V1_Setpoint_%,V1_Actual_%,V1_Source,V1_State,V2_Setpoint_%,V2_Actual_%,V2_Source,V2_State,V3_Setpoint_%,V3_Actual_%,V3_Source,V3_State,WaterLevel_mm,WaterLevel_%,Temperature1_C,Temperature2_C
```

## Valve state mapping

| Value | State | Meaning |
| ---: | --- | --- |
| 0 | `INIT` | Power-up / drive-ready check |
| 1 | `HOMING` | Homing with `MC_Home` |
| 2 | `IDLE` | Ready and waiting |
| 3 | `MOVING` | Absolute move active |
| 4 | `HALT` | Controlled halt active |
| 5 | `HOLD` | At target / holding |
| 6 | `MANNUAL_JOG` | Manual hardware-panel jog mode |
| 7 | `FAULT` | Latched fault |
| 8 | `RESET` | `MC_Reset` in progress |

## Triggers

Rows are written when either condition is true:

1. The interval timer reaches `tLogInterval`.
2. `GVL_HMI.WriteTrigger` has a rising edge from the HMI **Force Write Log** button.

`MAIN` clears `WriteTrigger` after the logger call so each HMI press is a one-shot request.

## Error handling

On file errors, `GVL_System.CSV_FileError` and `GVL_HMI.ACT_CSV_Error` become true. The logger enters `CSV_ERROR` and returns to idle after the trigger clears, allowing a later retry.
