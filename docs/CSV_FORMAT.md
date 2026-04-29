# CSV Logging Format

## Storage location

Default path (CX5140 IPC):

```text
C:\TwinCAT\3.1\Boot\Log\IrrigationLog_YYYY-MM.csv
```

Configurable via:

- `GVL_Config.CSV_FILE_PATH` (default `C:\TwinCAT\3.1\Boot\Log\`)
- `GVL_Config.CSV_FILENAME_PREFIX` (default `IrrigationLog_`)

## Rotation

**Monthly** — a new file is automatically created at the start
of each month. Filename includes the year and month, e.g.:

- `IrrigationLog_2026-04.csv`
- `IrrigationLog_2026-05.csv`

The header row is written **once**, when the file is first
created. Subsequent appends to the same file skip the header.

## Column reference

| # | Column            | Type / Unit | Source                                    |
| -:|-------------------|-------------|-------------------------------------------|
| 1 | `Timestamp`       | `YYYY-MM-DD HH:MM:SS` | `FB_LocalSystemTime`            |
| 2 | `V1_Setpoint_%`   | REAL %      | `GVL_System.Valve[1].Active_Setpoint`     |
| 3 | `V1_Actual_%`     | REAL %      | `GVL_System.Valve[1].Actual_Position`     |
| 4 | `V1_Source`       | string      | `HMI` / `MQTT` / `NONE`                   |
| 5 | `V1_State`        | INT         | `E_ValveState` enum value                 |
| 6 | `V2_Setpoint_%`   | REAL %      | `GVL_System.Valve[2].Active_Setpoint`     |
| 7 | `V2_Actual_%`     | REAL %      | `GVL_System.Valve[2].Actual_Position`     |
| 8 | `V2_Source`       | string      | `HMI` / `MQTT` / `NONE`                   |
| 9 | `V2_State`        | INT         | `E_ValveState` enum value                 |
| 10| `V3_Setpoint_%`   | REAL %      | `GVL_System.Valve[3].Active_Setpoint`     |
| 11| `V3_Actual_%`     | REAL %      | `GVL_System.Valve[3].Actual_Position`     |
| 12| `V3_Source`       | string      | `HMI` / `MQTT` / `NONE`                   |
| 13| `V3_State`        | INT         | `E_ValveState` enum value                 |
| 14| `WaterLevel_mm`   | REAL mm     | `GVL_System.Sensors.rWaterLevel_mm`       |
| 15| `WaterLevel_%`    | REAL %      | `GVL_System.Sensors.rWaterLevel_pct`      |
| 16| `Temperature1_C`  | REAL °C     | `GVL_System.Sensors.rTemperature_C[1]`    |
| 17| `Temperature2_C`  | REAL °C     | `GVL_System.Sensors.rTemperature_C[2]`    |

## E_ValveState integer mapping

| Value | State name | Meaning                                  |
| ----- | ---------- | ---------------------------------------- |
| 0     | INIT       | Waiting for drive ready                  |
| 1     | HOMING     | Executing MC_Home                        |
| 2     | IDLE       | At rest, ready for commands              |
| 3     | MOVING     | Executing MC_MoveAbsolute                |
| 4     | HOLD       | At target position                       |
| 5     | HALT       | Operator halt in progress                |
| 6     | FAULT      | Latched fault (needs Reset)              |
| 7     | RESET      | MC_Reset in progress                     |

## Example data row

```text
Timestamp,V1_Setpoint_%,V1_Actual_%,V1_Source,V1_State,V2_Setpoint_%,V2_Actual_%,V2_Source,V2_State,V3_Setpoint_%,V3_Actual_%,V3_Source,V3_State,WaterLevel_mm,WaterLevel_%,Temperature1_C,Temperature2_C
2026-04-28-12:00:00,50.0,49.8,HMI,4,25.0,25.1,MQTT,4,75.0,74.9,HMI,4,653.0,65.3,22.5,21.8
```

## Triggers

A row is written when **either** of these conditions is met:

1. **Timer expiry** — `tIntervalTimer` (default `T#15M` from
   `GVL_Config.CSV_LOG_INTERVAL_S`).
2. **Manual button** — `WriteTrigger` rising edge from the HMI
   "Force Write Log" button.

## Disable logging

Untick the **CSV Logging Enabled** checkbox on the HMI
(`HMI_CSV_Enable` = FALSE). The state machine returns to
`CSV_IDLE` and stops writing.

## Inspecting / archiving

- The file is plain UTF-8 CSV — open directly in Excel or any
  text editor.
- For long-term archiving, copy off the IPC by:
  - SMB share to `\\<ipc-name>\C$\TwinCAT\3.1\Boot\Log\`
  - SCP/SFTP if SSH is enabled
  - Mounted USB drive

## Error handling

If the file write fails (disk full, permission, etc.):

- `GVL_System.CSV_FileError` is set TRUE
- `GVL_HMI.ACT_CSV_Error` reflects this for HMI display
- The state machine enters `CSV_ERROR`; on the next trigger
  it will retry. Persistent failures should be investigated.
