# Line-by-Line Code Reference

A **literal annotation** of every meaningful line in the project's
ST source. Where `CODE_WALKTHROUGH.md` explains the shape of the
forest, this file walks every tree.

Read it next to the actual `.TcPOU` / `.TcGVL` / `.TcDUT` files
in TwinCAT — copy any block of code into this document's matching
section to find a line-by-line gloss.

## How to read this document

Every code listing in this file is followed by a numbered list
where each entry maps to a line (or a small group of related
lines) in the listing above it. Format:

```text
LINE-NUMBER  | what the line does | why it's there
```

Line numbers refer to the listing **immediately above**, not the
on-disk file (those vary as the code evolves).

### ST syntax cheatsheet (referenced throughout)

| Token            | Meaning                                                      |
| ---------------- | ------------------------------------------------------------ |
| `:=`             | Assignment (NOT equality). `a := 5` stores 5 in a.           |
| `=`              | Equality test. `a = 5` returns BOOL.                         |
| `<>`             | Not equal.                                                   |
| `(* ... *)`      | Multi-line comment. `// ...` is a single-line comment.       |
| `VAR ... END_VAR`| Declaration block. Different prefixes for input/output/local.|
| `:=` in `VAR`    | Initial value. `n : INT := 5;` sets n to 5 at first scan.    |
| `AT %I*`         | "Auto-link to a hardware input" — the I/O Mapping screen connects this to a real EtherCAT signal. |
| `AT %Q*`         | "Auto-link to a hardware output."                            |
| `IF ... THEN ... END_IF` | Conditional block.                                   |
| `CASE x OF ... END_CASE` | Switch statement on enum/int.                       |
| `R_TRIG`         | "Rising edge detector." Output `Q` is TRUE for ONE cycle on a 0→1 change. |
| `TON`            | "Timer On Delay." `Q` becomes TRUE after `IN` has been TRUE for `PT` time. |
| `=>`             | Output assignment in an FB call. `result => myVar` writes the FB's `result` to `myVar`. |
| `ADR(x)`         | Address of x. Used when an FB needs a pointer.               |
| `SIZEOF(x)`      | Size of x in bytes. Used with `ADR()` for safe pointer ops.  |
| `CONCAT(a, b)`   | String concatenation; returns the joined string.             |
| `LIMIT(min,x,max)` | Clamp x into [min, max]; returns the clamped value.        |
| `T#15M`          | Time literal: 15 minutes.                                    |
| `$R$N`           | String literal for `\r\n` (CRLF newline).                    |

---

## 1. GVL_Config — compile-time constants

These are the project's tunables. Every value here is `CONSTANT`,
meaning it cannot change while the PLC runs. To change one, edit
the file, rebuild, and download the project.

### Listing — full file

```iecst
{attribute 'qualified_only'}
VAR_GLOBAL CONSTANT

    // Valve Motion Parameters
    VALVE_FULL_STROKE_MM        : REAL   := 6.096;
    VALVE_POSITION_TOLERANCE    : REAL   := 0.5;
    VALVE_MOVE_VELOCITY         : LREAL  := 1.5;
    VALVE_MOVE_ACCELERATION     : LREAL  := 16.9085;
    VALVE_MOVE_DECELERATION     : LREAL  := 16.9085;
    VALVE_MOVE_JERK             : LREAL  := 53.5391;
    VALVE_HOMING_VELOCITY       : LREAL  := 1.0;

    // Sensor Scaling — Water Level
    WATER_LEVEL_RAW_MIN         : INT    := 0;
    WATER_LEVEL_RAW_MAX         : INT    := 32767;
    WATER_LEVEL_ENG_MIN_MM      : REAL   := 0.0;
    WATER_LEVEL_ENG_MAX_MM      : REAL   := 1000.0;

    // Sensor Scaling — Temperature
    TEMP_RAW_SCALE_FACTOR       : REAL   := 0.1;
    TEMP_OFFSET_C               : REAL   := 0.0;

    // Sensor Fault Detection
    SENSOR_FAULT_THRESHOLD      : INT    := -100;

    // CSV Logging
    CSV_LOG_INTERVAL_S          : TIME   := T#15M;
    CSV_FILE_PATH               : STRING := 'C:\TwinCAT\3.1\Boot\Log\';
    CSV_FILENAME_PREFIX         : STRING := 'IrrigationLog_';

    // MQTT Defaults
    MQTT_DEFAULT_BROKER_IP      : STRING := '192.168.1.100';
    MQTT_DEFAULT_PORT           : UINT   := 1883;
    MQTT_DEFAULT_CLIENT_ID      : STRING := 'BeckhoffIrrigationPLC';
    MQTT_DEFAULT_USERNAME       : STRING := '';
    MQTT_DEFAULT_PASSWORD       : STRING := '';
    MQTT_DEFAULT_TOPIC_PREFIX   : STRING := 'irrigation';
    MQTT_DEFAULT_MAIN_TOPIC     : STRING := 'irrigation/status';
    MQTT_DEFAULT_SUB_TOPIC      : STRING := 'irrigation/command';
    MQTT_DEFAULT_PUBLISH_INTERVAL : UINT := 300;

    // Task Cycle Time
    TASK_CYCLE_MS               : UINT   := 10;

END_VAR
```

### Annotation

| Line | Code | Purpose |
|------|------|---------|
| 1 | `{attribute 'qualified_only'}` | Forces every reference elsewhere to be written as `GVL_Config.NAME`. Prevents naming collisions if two GVLs share a constant name. |
| 2 | `VAR_GLOBAL CONSTANT` | Block of compile-time constants visible to all POUs. Cannot be written to at runtime. |
| 5 | `VALVE_FULL_STROKE_MM : REAL := 6.096;` | Physical travel of the actuator at 100 % open, in mm. **Calibrate to your hardware** — every percentage on the HMI is computed from this. |
| 6 | `VALVE_POSITION_TOLERANCE : REAL := 0.5;` | Dead-band for "in position", in %. If `\|actual − setpoint\| ≤ 0.5 %`, the FB stops chasing. Bigger value = faster IDLE/HOLD; smaller = more precise. |
| 7 | `VALVE_MOVE_VELOCITY : LREAL := 1.5;` | Normal-move max speed in mm/s. LREAL because TC2_MC2's `MC_MoveAbsolute.Velocity` input expects LREAL. |
| 8-9 | `VALVE_MOVE_ACCELERATION/DECELERATION` | Ramp rates in mm/s². Same value here = symmetric trapezoidal motion. |
| 10 | `VALVE_MOVE_JERK : LREAL := 53.5391;` | Jerk limit in mm/s³. Non-zero = S-curve profile; 0.0 = trapezoidal. S-curve is gentler on the actuator but slower. |
| 11 | `VALVE_HOMING_VELOCITY : LREAL := 1.0;` | Reference homing speed. The actual speed used during MC_Home is set in the NC Axis "Homing" tab — this constant is documentation only. |
| 14 | `WATER_LEVEL_RAW_MIN : INT := 0;` | ADC count corresponding to 4 mA on the EL3074 channel (= empty tank / 0 mm). |
| 15 | `WATER_LEVEL_RAW_MAX : INT := 32767;` | ADC count corresponding to 20 mA on the EL3074 channel. EL3074's default 16-bit signed scaling tops out at 32767. |
| 16-17 | `WATER_LEVEL_ENG_MIN_MM / MAX_MM` | Engineering range in mm. Set MAX to your tank height. **Calibrate.** |
| 20 | `TEMP_RAW_SCALE_FACTOR : REAL := 0.1;` | EL3202 PT100 RTD card outputs tenths of a degree as INT. So raw 250 → 25.0 °C. |
| 21 | `TEMP_OFFSET_C : REAL := 0.0;` | Optional trim. Use for sensor calibration: if probe reads 0.3 °C high, set offset = -0.3. |
| 24 | `SENSOR_FAULT_THRESHOLD : INT := -100;` | Any raw count ≤ this is treated as disconnected. Disconnected EL3074 channels typically read large negative values (e.g. -32768). |
| 27 | `CSV_LOG_INTERVAL_S : TIME := T#15M;` | Time literal `T#15M` = 15 minutes between automatic log rows. Change to `T#1M` for testing. |
| 28 | `CSV_FILE_PATH : STRING := 'C:\TwinCAT\3.1\Boot\Log\';` | Trailing backslash required — the FB just concatenates the filename onto the end. |
| 29 | `CSV_FILENAME_PREFIX : STRING := 'IrrigationLog_';` | Prepended to `YYYY-MM.csv` to form the filename. |
| 32 | `MQTT_DEFAULT_BROKER_IP : STRING := '192.168.1.100';` | Default broker IP used on first scan. Operators edit this from the HMI at runtime. |
| 33 | `MQTT_DEFAULT_PORT : UINT := 1883;` | Standard MQTT port (8883 for TLS). |
| 34 | `MQTT_DEFAULT_CLIENT_ID : STRING := 'BeckhoffIrrigationPLC';` | Unique client identifier for the broker — must differ for each PLC connecting to the same broker. |
| 35-36 | `MQTT_DEFAULT_USERNAME / PASSWORD := '';` | Empty by design — operators enter real credentials from the HMI to avoid hardcoded secrets in source. |
| 37-39 | Topics | `irrigation/status` for outgoing, `irrigation/command` for incoming. Prefix `irrigation` is reserved if you later add per-valve topics. |
| 40 | `MQTT_DEFAULT_PUBLISH_INTERVAL : UINT := 300;` | Default publish period in seconds. 300 s = 5 min. Converted to TIME inside MAIN. |
| 43 | `TASK_CYCLE_MS : UINT := 10;` | Documentation only — must match the actual TwinCAT task setting (Real-Time → Tasks → PlcTask → Cycle ticks). |

---

## 2. GVL_IO — hardware-mapped variables

The link between EtherCAT terminals and the PLC code. Every
variable here has (or should have) an `AT %I*` decoration that
the I/O Mapping screen connects to a physical channel.

### Listing

```iecst
{attribute 'qualified_only'}
VAR_GLOBAL

    AI_L1V11           : INT  := -999;   // AT %I*  — water level (primary)
    AI_L1V20           : INT  := -999;   // AT %I*  — water level (spare)
    AI_L2V21           : INT  := -999;   // AT %I*  — water level (spare)

    AI_Tmp_1           : INT  := -999;   // AT %I*  — temperature probe 1
    AI_Tmp_2           : INT  := -999;   // AT %I*  — temperature probe 2

    AI_PosFeedback_1   : INT  := -999;   // AT %I*  — supplementary AI 1
    AI_PosFeedback_2   : INT  := -999;   // AT %I*  — supplementary AI 2
    AI_PosFeedback_3   : INT  := -999;   // AT %I*  — supplementary AI 3

    bTop_position_1    AT %I* : BOOL;    // top limit switch (over-travel)
    bBottom_position_1 AT %I* : BOOL;    // bottom limit / homing cam

END_VAR
```

### Annotation

| Line | Code | Purpose |
|------|------|---------|
| 1 | `{attribute 'qualified_only'}` | Forces references to be `GVL_IO.AI_L1V11` etc. — clearer than bare names. |
| 2 | `VAR_GLOBAL` | Block of runtime globals (unlike GVL_Config, these are NOT constant). |
| 4 | `AI_L1V11 : INT := -999;` | Primary water-level analog input. INT (16-bit) is the EL3074's native output type. The `:= -999` initial value is a sentinel — until you wire `AT %I*` to a real channel, the value stays at -999, which `FB_SensorIO` then flags as "disconnected" via `SENSOR_FAULT_THRESHOLD`. |
| 4 | `// AT %I*` (in comment) | Currently *commented out* in the project; you must enable the `AT %I*` directive when you wire the channel. Same for AI_L1V20, AI_L2V21, AI_Tmp_*, AI_PosFeedback_*. |
| 5-6 | `AI_L1V20`, `AI_L2V21` | Optional secondary/tertiary water level inputs. Currently unused but kept for hardware flexibility. |
| 8-9 | `AI_Tmp_1`, `AI_Tmp_2` | Two PT100 RTD inputs from the EL3202. Outputs raw INT in tenths of °C. |
| 11-13 | `AI_PosFeedback_1..3` | Spare analog inputs intended for supplementary position sensors (e.g. potentiometer feedback if you don't trust the stepper open-loop). The NC axes use the EPP7041's encoder feedback by default; these are diagnostic only. |
| 15 | `bTop_position_1 AT %I* : BOOL;` | Top limit switch — protects against over-travel. Used by NC software limits, not by the PLC code directly. |
| 16 | `bBottom_position_1 AT %I* : BOOL;` | Bottom limit switch + homing cam. Wired into `FB_ValveControl.ZeroPosition` so MC_Home knows when to register zero. |

**Note:** there's only ONE limit-switch pair declared but three
valves. In `MAIN.TcPOU`, all three valves share `bBottom_position_1`
as their homing cam. To support per-valve homing, add
`bBottom_position_2` and `_3` here, link them in I/O Mapping, and
update the `ZeroPosition := ...` lines in MAIN.

---

## 3. GVL_System — runtime data bus

The internal bus that function blocks read and write. Each field
has exactly one writer (commented in the file header) — no two
FBs ever fight over the same variable.

### Listing

```iecst
VAR_GLOBAL

    Valve                : ARRAY[1..3] OF ST_ValveData;

    Sensors              : ST_SensorData;

    CSV_LastWriteTime    : DT;
    CSV_FileError        : BOOL;
    CSV_RowsWritten      : UDINT;
    CSV_CurrentFile      : STRING;
    CSV_LoggerState      : E_CSVLogState;

    MQTT_Connected       : BOOL;
    MQTT_Error           : BOOL;
    MQTT_LastErrorCode   : HRESULT;
    MQTT_LastErrorMsg    : STRING(128);
    MQTT_LastRxTopic     : STRING(255);
    MQTT_LastRxPayload   : STRING(2048);
    MQTT_LastJsonStatus  : STRING(2048);
    MQTT_NewCommand      : BOOL;

    SystemReady          : BOOL;
    AnyFaultActive       : BOOL;
    AnySensorFault       : BOOL;

END_VAR
```

### Annotation

| Line | Code | Purpose |
|------|------|---------|
| 3 | `Valve : ARRAY[1..3] OF ST_ValveData;` | Three valve "blackboards". Index 1 = Valve 1, etc. Written by `FB_ValveControl` instances; read by MAIN, `FB_MqttManager`, and `FB_CsvLogger`. To add a 4th valve, change to `ARRAY[1..4]`. |
| 5 | `Sensors : ST_SensorData;` | Single struct containing every scaled sensor reading. Written by `FB_SensorIO`; consumed by everyone else. |
| 7 | `CSV_LastWriteTime : DT;` | DT = "Date & Time", a 32-bit timestamp. Set by `FB_CsvLogger` after each successful row write. The HMI displays this so the operator can confirm logging is alive. |
| 8 | `CSV_FileError : BOOL;` | TRUE if the last file operation failed (disk full, permission, etc.). |
| 9 | `CSV_RowsWritten : UDINT;` | Counter — declared but currently unused. Reserved for future diagnostics. |
| 10 | `CSV_CurrentFile : STRING;` | Active filename including monthly rotation suffix (e.g. `IrrigationLog_2026-04.csv`). |
| 11 | `CSV_LoggerState : E_CSVLogState;` | Mirror of the FB's internal state for HMI display. Useful when debugging file-I/O hangs. |
| 13 | `MQTT_Connected : BOOL;` | TRUE when the broker connection is healthy. |
| 14 | `MQTT_Error : BOOL;` | TRUE on any connection-related error (rejected, dropped, reconnecting). |
| 15 | `MQTT_LastErrorCode : HRESULT;` | HRESULT is Beckhoff's 32-bit error code type — 0 means OK; negative numbers indicate specific failures (look up in TF6701 docs). |
| 16 | `MQTT_LastErrorMsg : STRING(128);` | Human-readable error text (set by `FB_MqttManager`). |
| 17-18 | `MQTT_LastRxTopic / Payload` | Last received message — for diagnostics on the HMI. |
| 19 | `MQTT_LastJsonStatus : STRING(2048);` | Last *outgoing* JSON, so the HMI can display "what would I publish right now?" without subscribing to the broker. |
| 20 | `MQTT_NewCommand : BOOL;` | TRUE for one cycle when a valid JSON command arrives. Useful for triggering UI flashes / log entries. |
| 22 | `SystemReady : BOOL;` | All valves homed AND no faults. Drives the big "READY" lamp on the HMI. |
| 23 | `AnyFaultActive : BOOL;` | OR of all valve `IsFault` flags. |
| 24 | `AnySensorFault : BOOL;` | Mirror of `Sensors.bAnySensorFault` — promoted to GVL_System for convenience. |

---

## 4. GVL_HMI — HMI binding contract

Every variable in this GVL is bound to a TcHMI control through
ADS symbol paths. The naming convention is rigid and load-bearing.

### Conventions

| Prefix  | Direction              | Example                       |
| ------- | ---------------------- | ----------------------------- |
| `HMI_*` | HMI writes, PLC reads  | `HMI_Valve1_Setpoint` (input) |
| `ACT_*` | PLC writes, HMI reads  | `ACT_Valve1_Position` (gauge) |

If you don't follow this, the HMI editor will still let you bind
inputs to ACT_* (or vice versa), and you'll get silent races at
runtime.

### Listing — Valve 1 section

```iecst
HMI_Valve1_Setpoint     : REAL;
HMI_Valve1_Reset        : BOOL;
HMI_Valve1_Stop         : BOOL;
HMI_Valve1_Homing       : BOOL;
HMI_Valve1_MQTT_Enable  : BOOL;
HMI_UPDATE              : BOOL;

ACT_Valve1_Position     : REAL;
ACT_Valve1_State        : E_ValveState;
ACT_Valve1_Source       : E_ValveSource;
ACT_Valve1_SourceText   : STRING(8);
ACT_Valve1_Fault        : BOOL;
ACT_Valve1_FaultCode    : UDINT;
Raw_Valve1_Setpoint     : LREAL;
Raw_Valve1_Position     : LREAL;
```

### Annotation

| Line | Code | Purpose |
|------|------|---------|
| 1 | `HMI_Valve1_Setpoint : REAL;` | Bound to the setpoint spinner on the HMI. Operator types a percentage (0–100). Read by MAIN step 1. |
| 2 | `HMI_Valve1_Reset : BOOL;` | Reset-fault button. Self-clears in MAIN step 6 after one cycle. |
| 3 | `HMI_Valve1_Stop : BOOL;` | Emergency stop button. NOT self-clearing — it's a momentary press from the HMI which the FB consumes only while held. |
| 4 | `HMI_Valve1_Homing : BOOL;` | Re-home button. Edge-triggered — the FB uses `R_TRIG`, so holding has no effect. |
| 5 | `HMI_Valve1_MQTT_Enable : BOOL;` | Per-valve MQTT permission checkbox. ANDed in MAIN with `HMI_MQTT_bEnable` and the per-command enable bit. |
| 6 | `HMI_UPDATE : BOOL;` | **Shared** Apply button — pressing once triggers all 3 valves to take their HMI setpoints. The fact that it's shared is intentional: operator clicks once after editing all setpoints. |
| 8 | `ACT_Valve1_Position : REAL;` | Current actual position, 0–100 %. Bound to a gauge / numeric display. |
| 9 | `ACT_Valve1_State : E_ValveState;` | Current state machine state (INT under the hood). The HMI shows this as a coloured lamp. |
| 10 | `ACT_Valve1_Source : E_ValveSource;` | Enum value for who issued the last command (HMI / MQTT / NONE). |
| 11 | `ACT_Valve1_SourceText : STRING(8);` | Same as `ACT_Valve1_Source` but as a string ('HMI', 'MQTT', 'NONE') because TcHMI text controls bind to STRING, not enums. Set in MAIN step 10. |
| 12 | `ACT_Valve1_Fault : BOOL;` | Lamp colour indicator. Mirror of `IsFault`. |
| 13 | `ACT_Valve1_FaultCode : UDINT;` | The MC2 ErrorID for the operator to look up. |
| 14-15 | `Raw_Valve1_Setpoint / Position : LREAL;` | The "raw" mm values, useful for advanced diagnostics. The "Raw_" prefix is a small inconsistency vs the HMI_/ACT_ rule but well-established. |

**Sections for Valve 2 and Valve 3** follow exactly the same
pattern — copy/paste with index changed.

### Listing — Sensor displays

```iecst
ACT_WaterLevel_pct  : REAL;
ACT_WaterLevel_mm   : REAL;
ACT_Temperature1_C  : REAL;
ACT_Temperature2_C  : REAL;
ACT_SensorFault     : BOOL;
```

All five are pure displays (PLC writes in MAIN step 10).

### Listing — MQTT controls

```iecst
HMI_MQTT_bEnable     : BOOL;
HMI_MQTT_mPublish    : BOOL;
HMI_MQTT_Config      : ST_MqttConfig;
HMI_MQTT_ApplyConfig : BOOL;

ACT_MQTT_Connected   : BOOL;
ACT_MQTT_Error       : BOOL;
ACT_MQTT_ErrorMsg    : STRING(128);
ACT_MQTT_JsonPreview : STRING(2048);
ACT_MQTT_LastRxTopic : STRING(255);
ACT_MQTT_NewCommand  : BOOL;
```

### Annotation

| Line | Code | Purpose |
|------|------|---------|
| 1 | `HMI_MQTT_bEnable : BOOL;` | Master MQTT enable. Combined with per-valve flags via AND in MAIN step 1. |
| 2 | `HMI_MQTT_mPublish : BOOL;` | "Publish Now" button. Edge-triggered inside `FB_MqttManager`. |
| 3 | `HMI_MQTT_Config : ST_MqttConfig;` | Whole config struct bound to a panel of HMI text inputs. Operator edits, presses Apply. |
| 4 | `HMI_MQTT_ApplyConfig : BOOL;` | Apply & Reconnect button. Self-clears in MAIN step 8. |

### Listing — CSV controls

```iecst
HMI_CSV_Enable        : BOOL := TRUE;
WriteTrigger          : BOOL;
ACT_CSV_CurrentFile   : STRING;
ACT_CSV_LastWriteTime : DT;
ACT_CSV_Error         : BOOL;
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `HMI_CSV_Enable : BOOL := TRUE;` | Initialised TRUE so logging is on by default. Passed to `FB_CsvLogger.bEnable`. |
| 2 | `WriteTrigger : BOOL;` | "Force Write Log" button. Self-clears in MAIN step 9. Note: this one *doesn't* follow the `HMI_` prefix convention — kept for backward compatibility. |
| 3-5 | `ACT_CSV_*` | Mirrors of `GVL_System.CSV_*` for HMI display. |

### Listing — System-wide

```iecst
HMI_ResetAll    : BOOL;
ACT_SystemReady : BOOL;
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `HMI_ResetAll : BOOL;` | "Reset all" button — propagates to all 3 valves' Reset_Cmd and self-clears in MAIN step 1. |
| 2 | `ACT_SystemReady : BOOL;` | Green "ready" lamp. Set in MAIN step 11. |

---

## 5. Data types (DUTs)

### 5.1 E_ValveState

```iecst
{attribute 'qualified_only'}
{attribute 'strict'}
{attribute 'to_string'}
TYPE E_ValveState :
(
    INIT    := 0,
    HOMING  := 1,
    IDLE    := 2,
    MOVING  := 3,
    HALT    := 4,
    HOLD    := 5,
    FAULT   := 6,
    RESET   := 7
);
END_TYPE
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `{attribute 'qualified_only'}` | Forces references to be `E_ValveState.IDLE` etc. — prevents collision with similarly named identifiers. |
| 2 | `{attribute 'strict'}` | Compiler refuses implicit INT-to-enum casts. Catches `eState := 5;` typos. |
| 3 | `{attribute 'to_string'}` | Generates a `TO_STRING(eState)` overload — useful for CSV logging and debug strings. |
| 6 | `INIT := 0` | Initial state — default value for a freshly declared `E_ValveState` variable (because of the `:= 0`). |
| 7-13 | other states | Each gets an explicit integer for stability if you later log the value as INT (which the CSV logger does). |

### 5.2 E_ValveSource

```iecst
{attribute 'qualified_only'}
{attribute 'strict'}
{attribute 'to_string'}
TYPE E_ValveSource :
(
    NONE    := 0,
    HMI     := 1,
    MQTT    := 2
);
END_TYPE
```

Three values, set by `FB_ValveControl` whenever a setpoint is
applied. NONE is the default until the first command arrives.

### 5.3 E_CSVLogState

```iecst
TYPE E_CSVLogState :
(
    CSV_IDLE      := 0,
    CSV_PREPARE   := 1,
    CSV_OPEN      := 2,
    CSV_WRITE_HDR := 3,
    CSV_WRITE_ROW := 4,
    CSV_CLOSE     := 5,
    CSV_ERROR     := 6
);
END_TYPE
```

Internal state for `FB_CsvLogger`. The integer values are not
shown on the HMI — only logged for diagnostics.

### 5.4 ST_ValveData

```iecst
TYPE ST_ValveData :
STRUCT
    HMI_Setpoint     : REAL;
    MQTT_Setpoint    : REAL;
    Active_Setpoint  : REAL;
    Actual_Position  : REAL;
    Actual_Pos_Raw   : LREAL;
    Source           : E_ValveSource;
    MQTT_Enabled     : BOOL;
    State            : E_ValveState;
    IsHomed          : BOOL;
    InPosition       : BOOL;
    IsFault          : BOOL;
    FaultCode        : UDINT;
    Reset_Cmd        : BOOL;
END_STRUCT
END_TYPE
```

| Line | Code | Purpose |
|------|------|---------|
| 3 | `HMI_Setpoint : REAL;` | Latest setpoint from HMI — copied here by MAIN step 1. |
| 4 | `MQTT_Setpoint : REAL;` | Latest setpoint parsed by FB_MqttManager — copied here by MAIN. |
| 5 | `Active_Setpoint : REAL;` | The setpoint currently applied to the valve (could be HMI or MQTT). For diagnostics + CSV. |
| 6 | `Actual_Position : REAL;` | Feedback from MC_ReadActualPosition, scaled to %. |
| 7 | `Actual_Pos_Raw : LREAL;` | Same feedback in raw mm. Reserved for diagnostics — currently `FB_ValveControl` outputs to GVL_HMI directly instead. |
| 8 | `Source : E_ValveSource;` | Who issued the command. |
| 9 | `MQTT_Enabled : BOOL;` | The triple-AND result computed in MAIN — gates the MQTT command path inside the FB. |
| 10-13 | State, IsHomed, InPosition, IsFault, FaultCode | Live status from the state machine. |
| 14 | `Reset_Cmd : BOOL;` | Triggered by HMI Reset or HMI_ResetAll, consumed by FB_ValveControl as a rising edge, then cleared by MAIN. |

### 5.5 ST_SensorData

```iecst
TYPE ST_SensorData :
STRUCT
    rWaterLevel_pct    : REAL;
    rWaterLevel_mm     : REAL;
    rWaterLevel_raw    : INT;
    bWaterLevelFault   : BOOL;
    rTemperature_C     : ARRAY[1..2] OF REAL;
    rTemperature_raw   : ARRAY[1..2] OF INT;
    bTempFault         : ARRAY[1..2] OF BOOL;
    rPosFeedback_mm    : ARRAY[1..3] OF REAL;
    rPosFeedback_raw   : ARRAY[1..3] OF INT;
    bPosFeedbackFault  : ARRAY[1..3] OF BOOL;
    bAnySensorFault    : BOOL;
END_STRUCT
END_TYPE
```

| Line | Code | Purpose |
|------|------|---------|
| 3-4 | `rWaterLevel_pct / mm` | Filtered water-level reading from primary sensor. |
| 5 | `rWaterLevel_raw : INT;` | Raw ADC count for diagnostics — useful when calibrating. |
| 6 | `bWaterLevelFault : BOOL;` | TRUE when raw ≤ SENSOR_FAULT_THRESHOLD. |
| 7 | `rTemperature_C : ARRAY[1..2] OF REAL;` | Two PT100 channels in °C. The array indexing matches the EL3202's channel numbering. |
| 8-9 | `rTemperature_raw / bTempFault` | Same pattern as water level — raw + fault per probe. |
| 10-12 | `rPosFeedback_*` | Three-element arrays for the supplementary AI inputs. Currently informational only. |
| 13 | `bAnySensorFault : BOOL;` | OR of all individual fault flags — convenient single check. |

### 5.6 ST_MqttConfig

```iecst
TYPE ST_MqttConfig :
STRUCT
    sBrokerAddress         : STRING(255) := '192.168.1.100';
    nPort                  : UINT        := 1883;
    sClientId              : STRING(64)  := 'BeckhoffIrrigationPLC';
    sUsername              : STRING(64)  := '';
    sPassword              : STRING(64)  := '';
    bUseTls                : BOOL        := FALSE;
    sTopicPrefix           : STRING(64)  := 'irrigation';
    sMainTopic             : STRING(128) := 'irrigation/status';
    SubscribeTopic         : STRING(128) := 'irrigation/command';
    tStatusPublishInterval : TIME := T#5M;
    tReconnectDelay        : TIME := T#30S;
    bUseStatusPublish      : BOOL := TRUE;
    bApplyConfig           : BOOL;
END_STRUCT
END_TYPE
```

| Line | Code | Purpose |
|------|------|---------|
| 3 | `sBrokerAddress : STRING(255) := '192.168.1.100';` | The default value here is the cold-start fallback; MAIN step 0 also seeds it from `GVL_Config.MQTT_DEFAULT_BROKER_IP`. |
| 4 | `nPort : UINT := 1883;` | Standard MQTT port. UINT (16-bit unsigned) covers all valid TCP ports. |
| 5 | `sClientId : STRING(64);` | Must be unique per broker — two PLCs with the same client ID will kick each other off. |
| 6-7 | Credentials | Empty by default, operator types them on the HMI. |
| 8 | `bUseTls : BOOL := FALSE;` | TLS support flag (declared but currently the FB doesn't act on it — wire if needed for production). |
| 9 | `sTopicPrefix : STRING(64);` | Convenience prefix for future expansion. The current code uses `sMainTopic` and `SubscribeTopic` directly. |
| 10-11 | `sMainTopic / SubscribeTopic` | Full topic strings for the publish/subscribe channels. |
| 12 | `tStatusPublishInterval : TIME := T#5M;` | Cyclic publish period. |
| 13 | `tReconnectDelay : TIME := T#30S;` | Used by the `WAIT_RECONNECT` state's TON to throttle retry attempts. |
| 14 | `bUseStatusPublish : BOOL := TRUE;` | Master switch for the cyclic publisher (manual publish always works regardless). |
| 15 | `bApplyConfig : BOOL;` | Declared but not used in this struct's current code path — `GVL_HMI.HMI_MQTT_ApplyConfig` is the actual button. Reserved for future use. |

### 5.7 ST_MQTT_Command

```iecst
{attribute 'TcJsonObject' := ''}
TYPE ST_MQTT_Command :
STRUCT
    Valve1          : DINT;
    Valve2          : DINT;
    Valve3          : DINT;
    Valve1_Enable   : BOOL;
    Valve2_Enable   : BOOL;
    Valve3_Enable   : BOOL;
END_STRUCT
END_TYPE
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `{attribute 'TcJsonObject' := ''}` | Marks this struct as JSON-serialisable. Beckhoff's `FB_JsonReadWriteDatatype.SetSymbolFromJson` uses this to know the field names map to JSON keys. |
| 4-6 | `Valve1..3 : DINT;` | Setpoints from the JSON (e.g. `{"Valve1": 50}`). DINT (32-bit signed) is used because Beckhoff's JSON parser maps integer JSON values to DINT by default — `LIMIT(0.0, DINT_TO_REAL(...), 100.0)` clamps and converts inside the FB. |
| 7-9 | `Valve1..3_Enable : BOOL;` | Per-valve permission bits from JSON (e.g. `"Valve1_Enable": true`). Field names must match JSON keys exactly. |

---

## 6. MAIN.TcPOU — declarations

### Listing

```iecst
PROGRAM MAIN
VAR
    fbSensorIO      : FB_SensorIO;
    fbValve1        : FB_ValveControl;
    fbValve2        : FB_ValveControl;
    fbValve3        : FB_ValveControl;
    fbCsvLogger     : FB_CsvLogger;
    fbMqttManager   : FB_MqttManager;

    Axis_Valve1     : AXIS_REF;
    Axis_Valve2     : AXIS_REF;
    Axis_Valve3     : AXIS_REF;

    fbSysTime       : FB_LocalSystemTime;
    sTimestamp      : STRING(64);
    sTempStr        : STRING(8);

    aValveSetpoint  : ARRAY[1..3] OF REAL;
    aValveActual    : ARRAY[1..3] OF REAL;
    aValveSource    : ARRAY[1..3] OF STRING(8);

    bMqttConfigInit : BOOL := FALSE;
END_VAR
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `PROGRAM MAIN` | Declares MAIN as a PROGRAM (single instance, called by the task once per cycle). |
| 2 | `VAR` | Start of local variable block. Local to MAIN — not visible outside. |
| 3 | `fbSensorIO : FB_SensorIO;` | Single instance of the sensor FB. Each FB instance has its own state — declaring it here makes it persist across cycles. |
| 4-6 | `fbValve1..3 : FB_ValveControl;` | Three independent valve FBs. Each has its own state machine, timers, edge detectors, etc. |
| 7 | `fbCsvLogger : FB_CsvLogger;` | One CSV logger for the whole system (logs all valves into one file). |
| 8 | `fbMqttManager : FB_MqttManager;` | One MQTT manager handling both publish + subscribe. |
| 10-12 | `Axis_Valve1..3 : AXIS_REF;` | NC axis references. Must be linked to actual NC axes via the I/O Mapping screen — without that link the motion FBs return errors. |
| 14 | `fbSysTime : FB_LocalSystemTime;` | Beckhoff utility to read the IPC clock. Wraps NT calls so it's safe to call every cycle. |
| 15 | `sTimestamp : STRING(64);` | Where we assemble `YYYY-MM-DD HH:MM:SS` for MQTT and CSV. STRING(64) is plenty. |
| 16 | `sTempStr : STRING(8);` | Scratch buffer for zero-padding individual fields. |
| 18-20 | `aValveSetpoint, aValveActual, aValveSource` | **Critical workaround.** TwinCAT does NOT allow per-element array assignment inside an FB call. So we populate these locals each cycle, then pass the whole arrays into `fbMqttManager`. Without this you get compile errors C0032/C0044/C0046/C0018. |
| 22 | `bMqttConfigInit : BOOL := FALSE;` | First-scan latch. The `:= FALSE` initial value runs once at PLC start. Set TRUE after step 0 runs, so subsequent cycles skip the init. |

---

## 7. MAIN — Step 0: One-time MQTT config init

### Listing

```iecst
IF NOT bMqttConfigInit THEN
    GVL_HMI.HMI_MQTT_Config.sBrokerAddress         := GVL_Config.MQTT_DEFAULT_BROKER_IP;
    GVL_HMI.HMI_MQTT_Config.nPort                  := GVL_Config.MQTT_DEFAULT_PORT;
    GVL_HMI.HMI_MQTT_Config.sClientId              := GVL_Config.MQTT_DEFAULT_CLIENT_ID;
    GVL_HMI.HMI_MQTT_Config.sUsername              := GVL_Config.MQTT_DEFAULT_USERNAME;
    GVL_HMI.HMI_MQTT_Config.sPassword              := GVL_Config.MQTT_DEFAULT_PASSWORD;
    GVL_HMI.HMI_MQTT_Config.sTopicPrefix           := GVL_Config.MQTT_DEFAULT_TOPIC_PREFIX;
    GVL_HMI.HMI_MQTT_Config.sMainTopic             := GVL_Config.MQTT_DEFAULT_MAIN_TOPIC;
    GVL_HMI.HMI_MQTT_Config.SubscribeTopic         := GVL_Config.MQTT_DEFAULT_SUB_TOPIC;
    GVL_HMI.HMI_MQTT_Config.tStatusPublishInterval := UDINT_TO_TIME(UINT_TO_UDINT(GVL_Config.MQTT_DEFAULT_PUBLISH_INTERVAL) * 1000);
    GVL_HMI.HMI_MQTT_Config.bUseStatusPublish      := TRUE;
    bMqttConfigInit := TRUE;
END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `IF NOT bMqttConfigInit THEN` | Run only when the latch is FALSE — i.e. exactly once after a cold start. |
| 2-9 | `GVL_HMI.HMI_MQTT_Config.X := GVL_Config.MQTT_DEFAULT_X;` | Copy each compile-time default into the runtime, HMI-editable copy. After this, the operator owns these values. |
| 10 | `tStatusPublishInterval := UDINT_TO_TIME(...UINT_TO_UDINT(...) * 1000);` | Convert seconds (UINT) to TIME (UDINT in ms). The chain UINT→UDINT→×1000→TIME avoids overflow if someone sets a long interval. |
| 11 | `bUseStatusPublish := TRUE;` | Enable cyclic publishing by default. Operator can disable from the HMI. |
| 12 | `bMqttConfigInit := TRUE;` | Latch — block re-entry. |

---

## 8. MAIN — Step 1: HMI → GVL_System copy

### Listing

```iecst
GVL_System.Valve[1].HMI_Setpoint := GVL_HMI.HMI_Valve1_Setpoint;
GVL_System.Valve[1].Reset_Cmd    := GVL_HMI.HMI_Valve1_Reset;

GVL_System.Valve[2].HMI_Setpoint := GVL_HMI.HMI_Valve2_Setpoint;
GVL_System.Valve[2].Reset_Cmd    := GVL_HMI.HMI_Valve2_Reset;

GVL_System.Valve[3].HMI_Setpoint := GVL_HMI.HMI_Valve3_Setpoint;
GVL_System.Valve[3].Reset_Cmd    := GVL_HMI.HMI_Valve3_Reset;

IF GVL_HMI.HMI_ResetAll THEN
    GVL_System.Valve[1].Reset_Cmd := TRUE;
    GVL_System.Valve[2].Reset_Cmd := TRUE;
    GVL_System.Valve[3].Reset_Cmd := TRUE;
    GVL_HMI.HMI_ResetAll := FALSE;
END_IF

GVL_System.Valve[1].MQTT_Setpoint := fbMqttManager.rMqttValveSetpoint[1];
GVL_System.Valve[2].MQTT_Setpoint := fbMqttManager.rMqttValveSetpoint[2];
GVL_System.Valve[3].MQTT_Setpoint := fbMqttManager.rMqttValveSetpoint[3];

GVL_System.Valve[1].MQTT_Enabled :=
    GVL_HMI.HMI_MQTT_bEnable AND
    GVL_HMI.HMI_Valve1_MQTT_Enable AND
    fbMqttManager.bMqttValveEnable[1];

GVL_System.Valve[2].MQTT_Enabled :=
    GVL_HMI.HMI_MQTT_bEnable AND
    GVL_HMI.HMI_Valve2_MQTT_Enable AND
    fbMqttManager.bMqttValveEnable[2];

GVL_System.Valve[3].MQTT_Enabled :=
    GVL_HMI.HMI_MQTT_bEnable AND
    GVL_HMI.HMI_Valve3_MQTT_Enable AND
    fbMqttManager.bMqttValveEnable[3];

GVL_System.Valve[1].Active_Setpoint := GVL_HMI.HMI_Valve1_Setpoint;
GVL_System.Valve[2].Active_Setpoint := GVL_HMI.HMI_Valve2_Setpoint;
GVL_System.Valve[3].Active_Setpoint := GVL_HMI.HMI_Valve3_Setpoint;
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `GVL_System.Valve[1].HMI_Setpoint := GVL_HMI.HMI_Valve1_Setpoint;` | Copy operator's setpoint from the HMI binding into the per-valve struct. The FB only reads from `Valve[1]`, never directly from GVL_HMI — this decouples them. |
| 2 | `GVL_System.Valve[1].Reset_Cmd := GVL_HMI.HMI_Valve1_Reset;` | Same idea for reset. Cleared again in Step 6. |
| 4-8 | Repeat for valve 2 and 3 | Three near-identical blocks. If you find this repetitive, consider a FOR loop in a future refactor. |
| 10 | `IF GVL_HMI.HMI_ResetAll THEN` | "Reset all" button — fan-out to every valve. |
| 11-13 | `GVL_System.Valve[1..3].Reset_Cmd := TRUE;` | Force-set each valve's reset command. The actual reset edge fires inside FB_ValveControl. |
| 14 | `GVL_HMI.HMI_ResetAll := FALSE;` | Self-clear — same pattern as the per-valve resets. Makes the button momentary. |
| 17-19 | `... .MQTT_Setpoint := fbMqttManager.rMqttValveSetpoint[i];` | Carry the latest MQTT setpoint into each valve struct. |
| 21-25 | `MQTT_Enabled := triple-AND` | The safety gate: MQTT can override only when (a) operator turned on master MQTT, (b) operator enabled it for this valve, and (c) the incoming command set the per-valve enable bit. All three must be TRUE. |
| 35-37 | `Active_Setpoint := HMI_Setpoint;` | Diagnostic copy. Note this overwrites every cycle and the FB's own arbitration may pick MQTT over HMI — this assignment is a pre-fill that gets corrected later when the FB reports back. |

---

## 9. MAIN — Step 2: Sensor I/O

### Listing

```iecst
fbSensorIO(
    bEnable   := TRUE,
    rLpfAlpha := 0.1,
    stOut     => GVL_System.Sensors
);
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `fbSensorIO(` | Begin FB call. The FB's internal state persists between cycles because it's declared in VAR. |
| 2 | `bEnable := TRUE,` | Always on. Set this FALSE if you ever want to bypass the sensor pipeline (e.g. for simulation). |
| 3 | `rLpfAlpha := 0.1,` | 10 % new sample, 90 % history per cycle. Stronger filtering = lower α (e.g. 0.05); raw passthrough = 1.0. |
| 4 | `stOut => GVL_System.Sensors` | Output assignment (`=>`). The whole struct is written to the runtime bus in one operation. |

---

## 10. MAIN — Steps 3, 4, 5: Three valve calls

All three calls are identical except for the index and the
HMI_Valve*N* binding. Showing valve 1; valves 2 and 3 are the
same template with the index changed.

### Listing — Valve 1

```iecst
fbValve1(
    Axis             := Axis_Valve1,
    HMI_Setpoint     := GVL_System.Valve[1].HMI_Setpoint,
    MQTT_Setpoint    := GVL_System.Valve[1].MQTT_Setpoint,
    MQTT_Enabled     := GVL_System.Valve[1].MQTT_Enabled,
    Enable           := TRUE,
    eHomingSelection := MC_Direct,
    Reset            := GVL_System.Valve[1].Reset_Cmd,
    Move_Stop        := GVL_HMI.HMI_Valve1_Stop,
    UPDATE           := GVL_HMI.HMI_UPDATE,
    ZeroPosition     := GVL_IO.bBottom_position_1,
    bHoming          := GVL_HMI.HMI_Valve1_Homing,
    MoveVelocity     := GVL_Config.VALVE_MOVE_VELOCITY,
    MoveAccel        := GVL_Config.VALVE_MOVE_ACCELERATION,
    MoveDecel        := GVL_Config.VALVE_MOVE_DECELERATION,
    MoveJerk         := GVL_Config.VALVE_MOVE_JERK,
    HomeVelocity     := GVL_Config.VALVE_HOMING_VELOCITY,
    FullStroke_mm    := GVL_Config.VALVE_FULL_STROKE_MM,
    PosTolerance     := GVL_Config.VALVE_POSITION_TOLERANCE,

    Actual_Position  => GVL_System.Valve[1].Actual_Position,
    State            => GVL_System.Valve[1].State,
    Source           => GVL_System.Valve[1].Source,
    IsHomed          => GVL_System.Valve[1].IsHomed,
    InPosition       => GVL_System.Valve[1].InPosition,
    IsFault          => GVL_System.Valve[1].IsFault,
    FaultCode        => GVL_System.Valve[1].FaultCode,
    rTarget_mm       => GVL_HMI.Raw_Valve1_Setpoint,
    rActual_mm       => GVL_HMI.Raw_Valve1_Position
);
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `fbValve1(` | Begin FB call. |
| 2 | `Axis := Axis_Valve1,` | Pass the AXIS_REF by reference (it's VAR_IN_OUT). The FB calls `Axis.ReadStatus()` and the MC2 motion FBs use it. |
| 3 | `HMI_Setpoint := GVL_System.Valve[1].HMI_Setpoint,` | Latest HMI setpoint. The FB never reads GVL_HMI directly. |
| 4 | `MQTT_Setpoint := GVL_System.Valve[1].MQTT_Setpoint,` | Latest MQTT setpoint. |
| 5 | `MQTT_Enabled := GVL_System.Valve[1].MQTT_Enabled,` | The triple-AND result. If FALSE, the FB ignores `MQTT_Setpoint`. |
| 6 | `Enable := TRUE,` | Drive power-on. Could be wired to an HMI master switch if you wanted to add one. |
| 7 | `eHomingSelection := MC_Direct,` | Tells MC_Home to set position to 0 without physical motion. Switch to `MC_DefaultSeq` (or similar) if you have a real cam-based homing setup. |
| 8 | `Reset := GVL_System.Valve[1].Reset_Cmd,` | Edge-triggered reset request. |
| 9 | `Move_Stop := GVL_HMI.HMI_Valve1_Stop,` | Operator emergency-stop button — wired direct from HMI for minimum latency. |
| 10 | `UPDATE := GVL_HMI.HMI_UPDATE,` | Shared Apply button (one for all 3 valves). Edge-triggered inside the FB. |
| 11 | `ZeroPosition := GVL_IO.bBottom_position_1,` | Bottom limit switch / homing cam. Currently shared across valves — a real install needs separate switches. |
| 12 | `bHoming := GVL_HMI.HMI_Valve1_Homing,` | Re-home button. Edge-triggered. |
| 13-18 | Motion params from GVL_Config | Pulled from constants — you can override per-valve here if a particular valve needs slower speeds. |
| 19 | `FullStroke_mm := GVL_Config.VALVE_FULL_STROKE_MM,` | The mm ↔ % conversion factor inside the FB. |
| 20 | `PosTolerance := GVL_Config.VALVE_POSITION_TOLERANCE,` | "In-position" dead-band. |
| 22 | `Actual_Position => GVL_System.Valve[1].Actual_Position,` | Output — write actual position into the system bus. The HMI mirrors this in step 10. |
| 23 | `State => GVL_System.Valve[1].State,` | Current state (INIT/HOMING/...) for HMI display + CSV. |
| 24 | `Source => GVL_System.Valve[1].Source,` | Who issued the last command. |
| 25-28 | `IsHomed, InPosition, IsFault, FaultCode` | Status flags written direct into the system bus. |
| 29-30 | `rTarget_mm / rActual_mm => GVL_HMI.Raw_Valve1_*` | Raw mm values bypass GVL_System and write straight to the HMI for diagnostics. |

**Steps 4 and 5** repeat the same call for `fbValve2` and
`fbValve3` with index 2 and 3 substituted everywhere. To extend:
copy the whole block, change every `1` to the new index, and add
matching entries in GVL_HMI and ST_MQTT_Command.

---

## 11. MAIN — Step 6: Auto-clear Reset

### Listing

```iecst
GVL_System.Valve[1].Reset_Cmd := FALSE;
GVL_HMI.HMI_Valve1_Reset      := FALSE;
GVL_System.Valve[2].Reset_Cmd := FALSE;
GVL_HMI.HMI_Valve2_Reset      := FALSE;
GVL_System.Valve[3].Reset_Cmd := FALSE;
GVL_HMI.HMI_Valve3_Reset      := FALSE;
```

| Line | Code | Purpose |
|------|------|---------|
| 1, 3, 5 | `GVL_System.Valve[i].Reset_Cmd := FALSE;` | The system-bus copy is cleared. |
| 2, 4, 6 | `GVL_HMI.HMI_Valve*N*_Reset := FALSE;` | The HMI binding is cleared too. Both writes are needed because step 1 copies HMI → system but the FB consumed the *system* edge — without clearing both, the next cycle would re-read TRUE from the HMI side. |

This is the standard "self-clearing button" pattern. It runs
*after* the FB call so the FB has had its rising edge.

---

## 12. MAIN — Step 7: Build timestamp string

### Listing

```iecst
fbSysTime(bEnable := TRUE, dwCycle := 1);

sTimestamp := UINT_TO_STRING(fbSysTime.systemTime.wYear);
sTimestamp := CONCAT(sTimestamp, '-');
sTempStr   := UINT_TO_STRING(fbSysTime.systemTime.wMonth);
IF fbSysTime.systemTime.wMonth < 10 THEN sTempStr := CONCAT('0', sTempStr); END_IF
sTimestamp := CONCAT(sTimestamp, sTempStr);
sTimestamp := CONCAT(sTimestamp, '-');
sTempStr   := UINT_TO_STRING(fbSysTime.systemTime.wDay);
IF fbSysTime.systemTime.wDay < 10 THEN sTempStr := CONCAT('0', sTempStr); END_IF
sTimestamp := CONCAT(sTimestamp, sTempStr);
sTimestamp := CONCAT(sTimestamp, ' ');
sTempStr   := UINT_TO_STRING(fbSysTime.systemTime.wHour);
IF fbSysTime.systemTime.wHour < 10 THEN sTempStr := CONCAT('0', sTempStr); END_IF
sTimestamp := CONCAT(sTimestamp, sTempStr);
sTimestamp := CONCAT(sTimestamp, ':');
sTempStr   := UINT_TO_STRING(fbSysTime.systemTime.wMinute);
IF fbSysTime.systemTime.wMinute < 10 THEN sTempStr := CONCAT('0', sTempStr); END_IF
sTimestamp := CONCAT(sTimestamp, sTempStr);
sTimestamp := CONCAT(sTimestamp, ':');
sTempStr   := UINT_TO_STRING(fbSysTime.systemTime.wSecond);
IF fbSysTime.systemTime.wSecond < 10 THEN sTempStr := CONCAT('0', sTempStr); END_IF
sTimestamp := CONCAT(sTimestamp, sTempStr);
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `fbSysTime(bEnable := TRUE, dwCycle := 1);` | Read the IPC clock. `dwCycle := 1` means update every cycle (vs. every N cycles for less precise but faster usage). After this call, `fbSysTime.systemTime` holds wYear, wMonth, wDay, etc. |
| 3 | `sTimestamp := UINT_TO_STRING(fbSysTime.systemTime.wYear);` | Start with the year — e.g. '2026'. |
| 4 | `sTimestamp := CONCAT(sTimestamp, '-');` | Append a hyphen — '2026-'. |
| 5 | `sTempStr := UINT_TO_STRING(fbSysTime.systemTime.wMonth);` | e.g. '4' for April. UINT_TO_STRING produces no leading zero. |
| 6 | `IF wMonth < 10 THEN sTempStr := CONCAT('0', sTempStr); END_IF` | Zero-pad single-digit months: '4' → '04'. |
| 7 | `sTimestamp := CONCAT(sTimestamp, sTempStr);` | '2026-04'. |
| 8-11 | Day section | Same pattern: hyphen, day, zero-pad. → '2026-04-28'. |
| 12 | `sTimestamp := CONCAT(sTimestamp, ' ');` | A space separating date from time. |
| 13-16 | Hour section | '2026-04-28 12'. |
| 17 | `sTimestamp := CONCAT(sTimestamp, ':');` | Colon separator. |
| 18-21 | Minute section | '2026-04-28 12:30'. |
| 22 | `sTimestamp := CONCAT(sTimestamp, ':');` | Colon. |
| 23-26 | Second section | '2026-04-28 12:30:15'. |

The verbosity is deliberate — this format must match what the
JSON consumers and CSV log expect. A function would be cleaner;
a future refactor could extract `BuildTimestamp()` as a method.

---

## 13. MAIN — Step 8: MQTT manager

### Listing — array buffer build

```iecst
aValveSetpoint[1] := GVL_System.Valve[1].Active_Setpoint;
aValveSetpoint[2] := GVL_System.Valve[2].Active_Setpoint;
aValveSetpoint[3] := GVL_System.Valve[3].Active_Setpoint;

aValveActual[1] := GVL_System.Valve[1].Actual_Position;
aValveActual[2] := GVL_System.Valve[2].Actual_Position;
aValveActual[3] := GVL_System.Valve[3].Actual_Position;

aValveSource[1] := GVL_HMI.ACT_Valve1_SourceText;
aValveSource[2] := GVL_HMI.ACT_Valve2_SourceText;
aValveSource[3] := GVL_HMI.ACT_Valve3_SourceText;
```

| Line | Code | Purpose |
|------|------|---------|
| 1-3 | `aValveSetpoint[i] := GVL_System.Valve[i].Active_Setpoint;` | Populate the local array with each valve's active setpoint (the one currently being chased — could be HMI or MQTT). |
| 5-7 | `aValveActual[i] := GVL_System.Valve[i].Actual_Position;` | Likewise for actual position. |
| 9-11 | `aValveSource[i] := GVL_HMI.ACT_Valve*N*_SourceText;` | Source strings ('HMI' / 'MQTT' / 'NONE'). Note we read from GVL_HMI here because MAIN step 10 already converted the enum to a string for HMI display, and we reuse that translation. |

**Why these locals?** The next FB call passes them as whole
arrays. TwinCAT does not allow per-element array assignment
inside an FB call's parameter list (you'd get C0032/C0044/C0046/C0018
compile errors). Populate locals first, then pass as a unit.

### Listing — FB call

```iecst
fbMqttManager(
    bEnable              := GVL_HMI.HMI_MQTT_bEnable,
    stConfig             := GVL_HMI.HMI_MQTT_Config,
    bApplyConfig         := GVL_HMI.HMI_MQTT_ApplyConfig,
    bPublish             := GVL_HMI.HMI_MQTT_mPublish,
    bEnableStatusPublish := GVL_HMI.HMI_MQTT_Config.bUseStatusPublish,
    tStatusPublishTime   := GVL_HMI.HMI_MQTT_Config.tStatusPublishInterval,
    sStatusTopic         := GVL_HMI.HMI_MQTT_Config.sMainTopic,

    rValveSetpoint       := aValveSetpoint,
    rValveActual         := aValveActual,
    sValveSource         := aValveSource,

    rTemperature_C       := GVL_System.Sensors.rTemperature_C[1],
    rWaterLevel_pct      := GVL_System.Sensors.rWaterLevel_pct,
    rWaterLevel_mm       := GVL_System.Sensors.rWaterLevel_mm,
    sTimestamp           := sTimestamp,

    bConnected           => GVL_System.MQTT_Connected,
    bError               => GVL_System.MQTT_Error,
    nErrorCode           => GVL_System.MQTT_LastErrorCode,
    sErrorMsg            => GVL_System.MQTT_LastErrorMsg,
    sLastRxTopic         => GVL_System.MQTT_LastRxTopic,
    sLastRxPayload       => GVL_System.MQTT_LastRxPayload,
    sJsonStatusPayload   => GVL_System.MQTT_LastJsonStatus,
    bNewRemoteCommand    => GVL_System.MQTT_NewCommand
);

GVL_HMI.HMI_MQTT_ApplyConfig := FALSE;
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `bEnable := GVL_HMI.HMI_MQTT_bEnable,` | Master MQTT on/off. When FALSE the FB disconnects. |
| 3 | `stConfig := GVL_HMI.HMI_MQTT_Config,` | Whole config struct passed by value. The FB reads these on every cycle but only applies them on Apply Config. |
| 4 | `bApplyConfig := GVL_HMI.HMI_MQTT_ApplyConfig,` | The Apply button — edge-triggered inside the FB. |
| 5 | `bPublish := GVL_HMI.HMI_MQTT_mPublish,` | Publish-Now button. Edge-triggered. |
| 6 | `bEnableStatusPublish := ...bUseStatusPublish,` | Enable cyclic publishing. |
| 7 | `tStatusPublishTime := ...tStatusPublishInterval,` | Cyclic publish period (TIME). |
| 8 | `sStatusTopic := ...sMainTopic,` | Topic for cyclic publish (we just use sMainTopic for both manual and cyclic). |
| 10-12 | Three array passes | The whole-array assignments that required the local buffers above. |
| 14 | `rTemperature_C := GVL_System.Sensors.rTemperature_C[1],` | Note: a single REAL, not the array. The FB only publishes probe 1 — to expose probe 2, extend the FB's interface and BuildStatusJson. |
| 15-16 | Water level pct + mm | Both are published (covered by the recent change to add water_level_mm to the JSON). |
| 17 | `sTimestamp := sTimestamp,` | Pass the just-built timestamp. |
| 19-26 | Output assignments | Connection status, errors, RX/TX diagnostics, new-command flag. All written into GVL_System for the HMI to mirror later. |
| 28 | `GVL_HMI.HMI_MQTT_ApplyConfig := FALSE;` | Self-clear the Apply button. The FB has consumed the rising edge — without this, every cycle would re-trigger reconnects. |

---

## 14. MAIN — Step 9: CSV logger

### Listing

```iecst
fbCsvLogger(
    bEnable          := GVL_HMI.HMI_CSV_Enable,
    bForceWrite      := GVL_HMI.WriteTrigger,
    tLogInterval     := GVL_Config.CSV_LOG_INTERVAL_S,
    sBasePath        := GVL_Config.CSV_FILE_PATH,
    sPrefix          := GVL_Config.CSV_FILENAME_PREFIX,
    stValve          := GVL_System.Valve,
    stSensors        := GVL_System.Sensors,

    dtLastWrite      => GVL_System.CSV_LastWriteTime,
    bError           => GVL_System.CSV_FileError,
    sCurrentFilename => GVL_System.CSV_CurrentFile,
    eState           => GVL_System.CSV_LoggerState
);

GVL_HMI.WriteTrigger := FALSE;
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `bEnable := GVL_HMI.HMI_CSV_Enable,` | Master CSV on/off. When FALSE the FB returns immediately. |
| 3 | `bForceWrite := GVL_HMI.WriteTrigger,` | "Force Write" button — edge-triggered inside the FB. |
| 4 | `tLogInterval := GVL_Config.CSV_LOG_INTERVAL_S,` | Periodic write interval (default `T#15M`). |
| 5 | `sBasePath := GVL_Config.CSV_FILE_PATH,` | Folder, must end with backslash. |
| 6 | `sPrefix := GVL_Config.CSV_FILENAME_PREFIX,` | Filename prefix. |
| 7 | `stValve := GVL_System.Valve,` | Whole array of 3 valve structs — passed by reference. |
| 8 | `stSensors := GVL_System.Sensors,` | Whole sensor struct. |
| 10-13 | Output assignments | Status mirrored to GVL_System. |
| 15 | `GVL_HMI.WriteTrigger := FALSE;` | Self-clear the button. |

---

## 15. MAIN — Step 10: Mirror to HMI

This step is mostly mechanical — copy each `GVL_System.X` to its
corresponding `GVL_HMI.ACT_X`. The interesting bit is the enum →
string translation.

### Listing — Valve 1 mirror

```iecst
GVL_HMI.ACT_Valve1_Position  := GVL_System.Valve[1].Actual_Position;
GVL_HMI.ACT_Valve1_State     := GVL_System.Valve[1].State;
GVL_HMI.ACT_Valve1_Source    := GVL_System.Valve[1].Source;
GVL_HMI.ACT_Valve1_Fault     := GVL_System.Valve[1].IsFault;
GVL_HMI.ACT_Valve1_FaultCode := GVL_System.Valve[1].FaultCode;
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `ACT_Valve1_Position := GVL_System.Valve[1].Actual_Position;` | HMI gauge value (0–100 %). |
| 2 | `ACT_Valve1_State := GVL_System.Valve[1].State;` | Enum to drive a coloured lamp on the HMI. |
| 3 | `ACT_Valve1_Source := GVL_System.Valve[1].Source;` | Enum form, used for logic. |
| 4 | `ACT_Valve1_Fault := ... .IsFault;` | Lamp colour. |
| 5 | `ACT_Valve1_FaultCode := ... .FaultCode;` | Number to display for the operator to look up. |

### Listing — Source enum → string translation

```iecst
CASE GVL_System.Valve[1].Source OF
    E_ValveSource.MQTT: GVL_HMI.ACT_Valve1_SourceText := 'MQTT';
    E_ValveSource.HMI:  GVL_HMI.ACT_Valve1_SourceText := 'HMI';
    ELSE                GVL_HMI.ACT_Valve1_SourceText := 'NONE';
END_CASE
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `CASE GVL_System.Valve[1].Source OF` | Switch on the enum value. |
| 2 | `E_ValveSource.MQTT: ... := 'MQTT';` | If it's MQTT, write the string 'MQTT' to the HMI binding. |
| 3 | `E_ValveSource.HMI: ... := 'HMI';` | Same for HMI. |
| 4 | `ELSE ... := 'NONE';` | Default for E_ValveSource.NONE (or any other unexpected value). |
| 5 | `END_CASE` | Close the switch. |

The CASE blocks for valves 2 and 3 follow the same template.
The string version is what the HMI text box binds to (TcHMI's
text controls work with STRING but not with custom enums).

### Listing — Sensor mirrors

```iecst
GVL_HMI.ACT_WaterLevel_pct  := GVL_System.Sensors.rWaterLevel_pct;
GVL_HMI.ACT_WaterLevel_mm   := GVL_System.Sensors.rWaterLevel_mm;
GVL_HMI.ACT_Temperature1_C  := GVL_System.Sensors.rTemperature_C[1];
GVL_HMI.ACT_Temperature2_C  := GVL_System.Sensors.rTemperature_C[2];
GVL_HMI.ACT_SensorFault     := GVL_System.Sensors.bAnySensorFault;
```

Direct copy, no translation. Fields are pre-scaled by FB_SensorIO.

### Listing — MQTT + CSV mirrors

```iecst
GVL_HMI.ACT_MQTT_Connected   := GVL_System.MQTT_Connected;
GVL_HMI.ACT_MQTT_Error       := GVL_System.MQTT_Error;
GVL_HMI.ACT_MQTT_ErrorMsg    := GVL_System.MQTT_LastErrorMsg;
GVL_HMI.ACT_MQTT_JsonPreview := GVL_System.MQTT_LastJsonStatus;
GVL_HMI.ACT_MQTT_LastRxTopic := GVL_System.MQTT_LastRxTopic;
GVL_HMI.ACT_MQTT_NewCommand  := GVL_System.MQTT_NewCommand;

GVL_HMI.ACT_CSV_CurrentFile   := GVL_System.CSV_CurrentFile;
GVL_HMI.ACT_CSV_LastWriteTime := GVL_System.CSV_LastWriteTime;
GVL_HMI.ACT_CSV_Error         := GVL_System.CSV_FileError;
```

All direct copies. Errors/status surface in the corresponding
HMI panels.

---

## 16. MAIN — Step 11: System health

### Listing

```iecst
GVL_System.AnyFaultActive :=
    GVL_System.Valve[1].IsFault OR
    GVL_System.Valve[2].IsFault OR
    GVL_System.Valve[3].IsFault;

GVL_System.AnySensorFault := GVL_System.Sensors.bAnySensorFault;

GVL_System.SystemReady :=
    GVL_System.Valve[1].IsHomed AND
    GVL_System.Valve[2].IsHomed AND
    GVL_System.Valve[3].IsHomed AND
    NOT GVL_System.AnyFaultActive;

GVL_HMI.ACT_SystemReady := GVL_System.SystemReady;
```

| Line | Code | Purpose |
|------|------|---------|
| 1-4 | `AnyFaultActive := V1 OR V2 OR V3 .IsFault` | TRUE if any valve is faulted. Drives a system-wide alarm lamp. |
| 6 | `AnySensorFault := Sensors.bAnySensorFault;` | Convenience promotion of the sensor aggregate flag. |
| 8-12 | `SystemReady := V1.IsHomed AND V2 AND V3 AND NOT AnyFault` | Master readiness flag — all valves homed, no faults. |
| 14 | `ACT_SystemReady := SystemReady;` | Mirror to HMI for the green "READY" lamp. |

Note: `AnySensorFault` is computed but doesn't gate `SystemReady`.
A sensor fault is informational only — the system still operates
without sensors. If you want to block operation on sensor fault,
add `AND NOT GVL_System.AnySensorFault` to the SystemReady AND chain.


---

## 17. FB_ValveControl — Line-by-Line

**File:** `XAE/VekSi_PLC/Functions/FB_ValveControl.TcPOU`

FB_ValveControl is the most complex building block in the project. One instance
runs for each valve. It manages drive power, homing, position moves, halt, and
fault recovery through an 8-state PLCopen-compatible state machine backed by
TwinCAT's TC2_MC2 motion-control library.

### 17.1 VAR_IN_OUT — Axis Reference

```iecst
VAR_IN_OUT
    Axis : AXIS_REF;
END_VAR
```

| Variable | Type | Purpose |
|----------|------|---------|
| `Axis` | `AXIS_REF` | Beckhoff NC axis descriptor. Declared `VAR_IN_OUT` so every MC2 function block inside this FB shares the same axis object by reference (no copy). Must be linked to a physical NC axis in the I/O mapping. |

**Why VAR_IN_OUT and not VAR_INPUT?**
`AXIS_REF` is a large struct that MC2 FBs update internally on every call.
`VAR_IN_OUT` passes by reference — changes made inside the FB are visible to the
caller (MAIN). `VAR_INPUT` would create a local copy and MC2 state changes would
be lost at the end of the cycle.

---

### 17.2 VAR_INPUT — Inputs from MAIN

```iecst
VAR_INPUT
    HMI_Setpoint        : REAL;
    MQTT_Setpoint       : REAL;
    MQTT_Enabled        : BOOL;

    eHomingSelection    : MC_HomingMode;
    bHoming             : BOOL;

    Enable              : BOOL;
    Reset               : BOOL;
    Move_Stop           : BOOL;
    UPDATE              : BOOL;
    ZeroPosition        : BOOL;

    MoveVelocity        : LREAL;
    MoveAccel           : LREAL;
    MoveDecel           : LREAL;
    MoveJerk            : LREAL;
    HomeVelocity        : LREAL;

    FullStroke_mm       : REAL;
    PosTolerance        : REAL;
END_VAR
```

| Variable | Type | Purpose |
|----------|------|---------|
| `HMI_Setpoint` | `REAL` | Target opening % sent from the HMI. Range 0.0–100.0. |
| `MQTT_Setpoint` | `REAL` | Target opening % delivered by the MQTT broker. Range 0.0–100.0. |
| `MQTT_Enabled` | `BOOL` | Per-valve gate. FALSE means all MQTT setpoints are silently ignored. Set from `GVL_HMI.HMI_ValveN_MQTT_Enable`. |
| `eHomingSelection` | `MC_HomingMode` | Which MC_Home strategy to use. The project uses `MC_Direct` which sets position without physical movement. Wired from `GVL_Config.VALVE_HOMING_MODE` (implicit constant). |
| `bHoming` | `BOOL` | Level signal; FB detects the rising edge internally. TRUE = operator pressed the re-home button. |
| `Enable` | `BOOL` | TRUE = energise drive via MC_Power. Usually always TRUE during normal operation. |
| `Reset` | `BOOL` | Rising edge triggers fault-clear + re-home sequence. Wired to `HMI_ValveN_Reset` via MAIN. |
| `Move_Stop` | `BOOL` | TRUE = immediately enter HALT state. Wired to `HMI_ValveN_Stop`. |
| `UPDATE` | `BOOL` | Rising edge = apply the current `HMI_Setpoint`. Wired to `GVL_HMI.HMI_UPDATE`. |
| `ZeroPosition` | `BOOL` | Limit-switch signal at zero/home position. Wired from `GVL_IO.bZeroPos_ValveN`. Used as `bCalibrationCam` in MC_Home. |
| `MoveVelocity` | `LREAL` | Normal travel speed (mm/s). Passed directly to `MC_MoveAbsolute.Velocity`. LREAL matches the MC2 parameter type. |
| `MoveAccel` | `LREAL` | Acceleration ramp (mm/s²). Passed to `MC_MoveAbsolute.Acceleration`. |
| `MoveDecel` | `LREAL` | Deceleration ramp (mm/s²). Passed to both `MC_MoveAbsolute.Deceleration` and `MC_Halt.Deceleration`. |
| `MoveJerk` | `LREAL` | Jerk limit (mm/s³). 0.0 = trapezoidal profile; >0 = S-curve profile. |
| `HomeVelocity` | `LREAL` | Reference value stored here; actual homing speed is configured in the NC Homing tab, not programmatically. |
| `FullStroke_mm` | `REAL` | Physical full-travel distance in mm at 100 % open. Used for % ↔ mm conversion. From `GVL_Config.VALVE_FULL_STROKE_MM`. |
| `PosTolerance` | `REAL` | Dead-band in % — position differences smaller than this are considered "in position". From `GVL_Config.VALVE_POSITION_TOLERANCE`. |

---

### 17.3 VAR_OUTPUT — Outputs to MAIN

```iecst
VAR_OUTPUT
    Actual_Position     : REAL;
    InPosition          : BOOL;
    rActual_mm          : LREAL;
    rTarget_mm          : LREAL := 0.0;

    State               : E_ValveState;
    Source              : E_ValveSource;

    IsHomed             : BOOL;
    IsMoving            : BOOL;
    IsFault             : BOOL;
    FaultCode           : UDINT;
END_VAR
```

| Variable | Type | Purpose |
|----------|------|---------|
| `Actual_Position` | `REAL` | Current valve opening as 0.0–100.0 %. Computed from `rActual_mm / FullStroke_mm * 100`. Mirrored to `GVL_System.Valve[N].Position`. |
| `InPosition` | `BOOL` | TRUE when `|Actual_Position - rActiveSetpoint| <= PosTolerance`. Useful for sequencing logic. |
| `rActual_mm` | `LREAL` | Raw axis position in mm from `MC_ReadActualPosition`. Shown as `Raw_ValveN_Position` on the HMI debug panel. |
| `rTarget_mm` | `LREAL` | Active target in mm — the value passed to `MC_MoveAbsolute.Position`. Shown as `Raw_ValveN_Setpoint` on the HMI. |
| `State` | `E_ValveState` | Current state machine state. Mirrored to `GVL_HMI.ACT_ValveN_State` for HMI colour-coding. |
| `Source` | `E_ValveSource` | Who issued the last move command: `HMI`, `MQTT`, or `NONE`. Displayed on the HMI source panel. |
| `IsHomed` | `BOOL` | TRUE after the first successful MC_Home. Cleared on fault or re-home request. Required for `SystemReady`. |
| `IsMoving` | `BOOL` | TRUE while `MC_MoveAbsolute.Active` is set (axis physically in motion). |
| `IsFault` | `BOOL` | TRUE while in FAULT state. Written in both the FAULT case body and in Section 6. |
| `FaultCode` | `UDINT` | TC2_MC2 error ID from whichever FB triggered the fault. Look up in Beckhoff InfoSys → Error Codes. |

---

### 17.4 VAR — Internal Variables

```iecst
VAR
    fbPower             : MC_Power;
    fbHome              : MC_Home;
    fbMoveAbs           : MC_MoveAbsolute;
    fbReadPos           : MC_ReadActualPosition;
    fbHalt              : MC_Halt;
    fbReset_MC          : MC_Reset;

    eState              : E_ValveState := E_ValveState.INIT;

    rActiveSetpoint     : REAL  := 0.0;
    rPrev_HMI_SP        : REAL  := -999.0;
    rPrev_MQTT_SP       : REAL  := -999.0;

    bExecHome           : BOOL;
    bExecMove           : BOOL;
    bExecReset          : BOOL;
    bExecHalt           : BOOL;

    rtReset             : R_TRIG;
    rtUpdate            : R_TRIG;
    rtZeroPosition      : R_TRIG;
    rtHoming            : R_TRIG;

    bAxisReady          : BOOL;
    MoveDone            : BOOL;
    tempSetpoint        : REAL;
END_VAR
```

**MC2 Function Block Instances**

| Instance | Type | Purpose |
|----------|------|---------|
| `fbPower` | `MC_Power` | Energises/de-energises the drive. Must be called every cycle while drive is active. |
| `fbHome` | `MC_Home` | Executes the homing sequence to establish zero reference. |
| `fbMoveAbs` | `MC_MoveAbsolute` | Moves axis to an absolute position in mm. |
| `fbReadPos` | `MC_ReadActualPosition` | Reads the current encoder/stepper position continuously. |
| `fbHalt` | `MC_Halt` | Decelerates and stops the axis smoothly on operator request. |
| `fbReset_MC` | `MC_Reset` | Clears a latched drive error so the drive can be re-powered. |

All MC2 FBs are declared at function-block level (not inside the body) so they
retain their internal state between PLC cycles. Declaring them locally inside
the body would reset them every cycle, breaking the Execute/Done handshake.

**State Machine Variable**

| Variable | Initial Value | Purpose |
|----------|--------------|---------|
| `eState` | `E_ValveState.INIT` | Current state. Starts at INIT so the drive is powered and homed on first scan. |

**Setpoint Arbitration Variables**

| Variable | Initial Value | Purpose |
|----------|--------------|---------|
| `rActiveSetpoint` | `0.0` | The winning setpoint (%) after arbitration. Converted to mm for MC_MoveAbsolute. |
| `rPrev_HMI_SP` | `-999.0` | Last HMI setpoint that was accepted. Initialised to -999 so any real value (0–100) is always treated as "new" on first run. |
| `rPrev_MQTT_SP` | `-999.0` | Same sentinel trick for MQTT setpoint. |

**PLCopen Execute Flags**

| Variable | Purpose |
|----------|---------|
| `bExecHome` | Set TRUE on HOMING entry to give MC_Home its rising edge; cleared on Done/Error. |
| `bExecMove` | Set TRUE on MOVING entry; cleared on Done/Aborted/Error. |
| `bExecReset` | Set TRUE on RESET entry; cleared on Done. |
| `bExecHalt` | Set TRUE when STOP button triggers; cleared on Done. |

The PLCopen pattern: set `Execute := TRUE` → FB starts → wait for `Done` or
`Error` → set `Execute := FALSE` → FB resets. If you leave `Execute` TRUE after
`Done`, the FB will not re-trigger on the same rising edge.

**Edge Detectors and Working Variables**

| Variable | Purpose |
|----------|---------|
| `rtReset` | Converts `Reset` level signal to single-cycle pulse. |
| `rtUpdate` | Converts `UPDATE` button to single-cycle pulse. |
| `rtZeroPosition` | Detects leading edge of limit switch (diagnostic, not currently used in state machine). |
| `rtHoming` | Converts `bHoming` button to single-cycle pulse. |
| `bAxisReady` | Shorthand: `fbPower.Status AND NOT fbPower.Error`. |
| `MoveDone` | Receives `MC_MoveAbsolute.Done` output via `=>` assignment syntax. |
| `tempSetpoint` | Scratch variable (unused in released code, reserved for future clamping logic). |

---

### 17.5 Section 1 — Edge Detection

```iecst
// SECTION 1 — EDGE DETECTION
rtReset(CLK := Reset);
rtUpdate(CLK := UPDATE);
rtZeroPosition(CLK := ZeroPosition);
rtHoming(CLK := bHoming);

// ReadStatus must be called every cycle to keep Axis state current
Axis.ReadStatus();
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `rtReset(CLK := Reset)` | Clock the R_TRIG with the `Reset` input. `rtReset.Q` will be TRUE for exactly one cycle on the rising edge. This prevents the Reset logic from firing every cycle while the button is held. |
| 2 | `rtUpdate(CLK := UPDATE)` | Same pattern for the HMI Apply/Update button. One cycle pulse only. |
| 3 | `rtZeroPosition(CLK := ZeroPosition)` | Detects the moment the limit switch first activates. Used for diagnostics. |
| 4 | `rtHoming(CLK := bHoming)` | Converts the re-home button to a single-cycle pulse. |
| 6 | `Axis.ReadStatus()` | TC2_MC2 AXIS_REF has a built-in `ReadStatus` method that must be called every PLC cycle to keep the NC axis state (position, velocity, error bits) synchronised with the PLC struct. Without this call, axis status data would be stale. |

**Why edge detect instead of using the level directly?**
If you used `IF Reset THEN eState := RESET`, the state machine would re-enter
RESET on every cycle for as long as the operator holds the button — executing
MC_Reset dozens of times. The R_TRIG ensures the action fires exactly once per
button press regardless of how long the button is held.

---

### 17.6 Section 2 — Setpoint Arbitration

```iecst
// SECTION 2 — SETPOINT ARBITRATION & SOURCE TRACKING
// MQTT setpoint — only when explicitly enabled and value changed
IF MQTT_Enabled AND (MQTT_Setpoint <> rPrev_MQTT_SP) THEN
    rActiveSetpoint := LIMIT(0.0, MQTT_Setpoint, 100.0);
    rPrev_MQTT_SP   := MQTT_Setpoint;
    Source          := E_ValveSource.MQTT;
END_IF

// HMI Update button overrides MQTT if pressed in the same cycle
IF rtUpdate.Q THEN
    rActiveSetpoint := LIMIT(0.0, HMI_Setpoint, 100.0);
    rPrev_HMI_SP    := HMI_Setpoint;
    Source          := E_ValveSource.HMI;
END_IF

// Convert percentage setpoint to axis units (mm)
rTarget_mm := REAL_TO_LREAL(rActiveSetpoint / 100.0 * FullStroke_mm);
```

| Line | Code | Purpose |
|------|------|---------|
| 3 | `IF MQTT_Enabled AND (MQTT_Setpoint <> rPrev_MQTT_SP)` | Two conditions must both be true: (1) the operator has enabled MQTT control for this valve, (2) the MQTT setpoint has actually changed from the last accepted value. This prevents MQTT from continuously re-triggering motion when nothing has changed. |
| 4 | `LIMIT(0.0, MQTT_Setpoint, 100.0)` | Clamp incoming value to valid 0–100 % range. Protects against malformed MQTT payloads. |
| 5 | `rPrev_MQTT_SP := MQTT_Setpoint` | Record the accepted value so identical future messages are ignored. |
| 6 | `Source := E_ValveSource.MQTT` | Record who issued this command (shown on HMI). |
| 9 | `IF rtUpdate.Q THEN` | The HMI block executes second (after MQTT). If both triggers fire in the same cycle, HMI overwrites the MQTT setpoint — HMI always wins. |
| 10 | `LIMIT(0.0, HMI_Setpoint, 100.0)` | Same clamping for safety. |
| 11 | `rPrev_HMI_SP := HMI_Setpoint` | Track HMI setpoint (available for diagnostics). |
| 12 | `Source := E_ValveSource.HMI` | Override source tag — HMI wins if both fired this cycle. |
| 16 | `rTarget_mm := REAL_TO_LREAL(rActiveSetpoint / 100.0 * FullStroke_mm)` | Convert % setpoint to absolute mm position. For example at 50 % with FullStroke_mm = 6.096: `0.5 * 6.096 = 3.048 mm`. `REAL_TO_LREAL` converts from 32-bit REAL to 64-bit LREAL because `MC_MoveAbsolute.Position` is declared LREAL. |

**Priority summary:**

```
MQTT setpoint  →  lowest priority  (applied only if enabled + value changed)
HMI setpoint   →  highest priority (applied on any UPDATE rising edge)
```

If neither condition fires in a given cycle, `rActiveSetpoint` keeps its
previous value and no new motion is commanded.

---

### 17.7 Section 3 — MC_Power and Unexpected-Fault Trap

```iecst
// SECTION 3 — MC_Power
fbPower(
    Axis            := Axis,
    Enable          := Enable AND (eState <> E_ValveState.FAULT),
    Enable_Positive := TRUE,
    Enable_Negative := TRUE,
    Override        := 100.0
);
bAxisReady := fbPower.Status AND NOT fbPower.Error;

// Trap unexpected drive fault from any non-fault/non-reset state
IF fbPower.Error AND
   eState <> E_ValveState.FAULT AND
   eState <> E_ValveState.RESET AND
   eState <> E_ValveState.INIT
THEN
    FaultCode := fbPower.ErrorID;
    eState    := E_ValveState.FAULT;
END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2-7 | `fbPower(...)` | MC_Power must be called **every PLC cycle** while the axis is in use. Stopping the call de-energises the drive. |
| 3 | `Enable := Enable AND (eState <> E_ValveState.FAULT)` | Two conditions for energising: (a) the caller (MAIN) says Enable is TRUE, AND (b) the valve is not in FAULT state. When a fault occurs the drive is automatically de-energised, preventing further movement on a damaged axis. |
| 4 | `Enable_Positive := TRUE` | Allow movement in the positive direction. TwinCAT NC software travel limits provide the actual overtravel protection. |
| 5 | `Enable_Negative := TRUE` | Allow movement in the negative direction. |
| 6 | `Override := 100.0` | Velocity override at 100 % — axis runs at the programmed speed. Override < 100 scales velocity proportionally (useful for slow-speed testing). |
| 8 | `bAxisReady := fbPower.Status AND NOT fbPower.Error` | Convenience flag. `fbPower.Status = TRUE` means the drive is energised and ready. `NOT fbPower.Error` ensures no drive-level fault is active. Used in INIT to decide when to start homing. |
| 11-17 | `IF fbPower.Error AND ...` | **Unexpected-fault trap.** A drive can fault for hardware reasons (encoder error, overcurrent, e-stop) even when the state machine is in MOVING or HOLD. This guard catches those cases outside the normal state transitions. |
| 12 | `eState <> E_ValveState.FAULT` | Skip if already in FAULT — no need to re-enter. |
| 13 | `eState <> E_ValveState.RESET` | Skip during RESET — MC_Reset causes a transient error during the clear sequence; treating this as a new fault would create an infinite loop. |
| 14 | `eState <> E_ValveState.INIT` | Skip during INIT — drive is still coming up; transient errors are expected before full initialisation. |
| 15 | `FaultCode := fbPower.ErrorID` | Capture the TC2_MC2 error ID for display on the HMI fault panel. |
| 16 | `eState := E_ValveState.FAULT` | Force state machine to FAULT regardless of where it was. This ensures the fault is always latched and visible. |


---

### 17.8 Section 4 — MC_ReadActualPosition

```iecst
// SECTION 4 — MC_ReadActualPosition
fbReadPos(
    Axis   := Axis,
    Enable := fbPower.Status
);
IF fbReadPos.Valid THEN
    rActual_mm := fbReadPos.Position;
END_IF

// Convert mm to percentage of full stroke
IF FullStroke_mm > 0.0 THEN
    Actual_Position := LREAL_TO_REAL(rActual_mm / REAL_TO_LREAL(FullStroke_mm)) * 100.0;
    Actual_Position := LIMIT(0.0, Actual_Position, 100.0);
ELSE
    Actual_Position := 0.0;
END_IF

// In-position flag: TRUE when within tolerance of active setpoint
InPosition := ABS(Actual_Position - rActiveSetpoint) <= PosTolerance;
```

| Line | Code | Purpose |
|------|------|---------|
| 2-4 | `fbReadPos(Axis, Enable := fbPower.Status)` | MC_ReadActualPosition reads the NC axis encoder/stepper position. `Enable := fbPower.Status` means position reading is only active while the drive is powered — no point reading position from an unpowered drive. |
| 5-7 | `IF fbReadPos.Valid THEN rActual_mm := ...` | `Valid` is the MC_ReadActualPosition equivalent of `Done` — it is TRUE when the returned position value is trustworthy. Guard prevents stale or uninitialised values from propagating. |
| 10 | `IF FullStroke_mm > 0.0` | Division-by-zero guard. If `FullStroke_mm` was never configured (stays at 0), `Actual_Position` defaults to 0.0 % rather than crashing the PLC with a divide-by-zero exception. |
| 11 | `LREAL_TO_REAL(rActual_mm / REAL_TO_LREAL(FullStroke_mm)) * 100.0` | Full conversion chain: `rActual_mm` is LREAL, `FullStroke_mm` is REAL → cast `FullStroke_mm` to LREAL for division precision → divide to get fraction (0.0–1.0) → multiply by 100 to get % → cast back to REAL for output. |
| 12 | `LIMIT(0.0, Actual_Position, 100.0)` | Clamp to valid display range. Prevents negative % or >100 % from appearing on the HMI due to overshoot or calibration drift. |
| 18 | `InPosition := ABS(...) <= PosTolerance` | Dead-band check. `ABS` returns the absolute difference. If within the tolerance window, the valve is considered "in position". This flag can be used by external logic to sequence the next operation. |

---

### 17.9 Section 5 — State Machine

The state machine runs inside `CASE eState OF … END_CASE`. Each state
handles its own MC2 function block calls, monitors outcomes, and sets
`eState` to transition. The eight states are: INIT → HOMING → IDLE ↔ MOVING →
HOLD, HALT, FAULT → RESET → HOMING.

#### State: INIT

```iecst
E_ValveState.INIT:
    bExecHome  := FALSE;
    bExecMove  := FALSE;
    bExecReset := FALSE;
    bExecHalt  := FALSE;

    IF bAxisReady THEN
        eState := E_ValveState.HOMING;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2-5 | Clear all Execute flags | Ensures no MC2 FB receives a spurious rising edge when the state machine first starts. All FBs are in a neutral, idle state. |
| 7 | `IF bAxisReady THEN` | Wait until `MC_Power.Status = TRUE` and no error. The drive may take one or more cycles to energise after `Enable` goes high. Do not start homing until the drive confirms it is ready. |
| 8 | `eState := E_ValveState.HOMING` | Once drive is ready, begin homing immediately. The valve must establish its zero reference before any moves are allowed. |

#### State: HOMING

```iecst
E_ValveState.HOMING:
    bExecHome := TRUE;

    fbHome(
        Axis            := Axis,
        Execute         := bExecHome,
        Position        := 0.0,
        HomingMode      := eHomingSelection,
        bCalibrationCam := ZeroPosition
    );

    IF fbHome.Done THEN
        bExecHome := FALSE;
        fbHome(Axis := Axis, Execute := bExecHome);
        IsHomed   := TRUE;
        eState    := E_ValveState.IDLE;
    ELSIF fbHome.Error THEN
        bExecHome := FALSE;
        fbHome(Axis := Axis, Execute := bExecHome);
        FaultCode := fbHome.ErrorID;
        eState    := E_ValveState.FAULT;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `bExecHome := TRUE` | Set the Execute flag on state entry. This gives MC_Home its rising edge. Setting it every cycle in this state is safe — MC_Home ignores subsequent TRUE levels once it is running. |
| 4-9 | `fbHome(...)` | Call MC_Home with all parameters every cycle. `Position := 0.0` tells the NC that "home" is 0 mm. `HomingMode := eHomingSelection` — typically `MC_Direct` which just sets the position register to 0 without physical movement. `bCalibrationCam := ZeroPosition` connects the limit switch; for `MC_Direct` this is not strictly required but wired for future use with `MC_HomingAtCam`. |
| 11 | `IF fbHome.Done THEN` | Homing completed successfully. |
| 12-13 | `bExecHome := FALSE; fbHome(Axis, Execute := FALSE)` | **Two-step Execute clear.** First set the flag FALSE, then call the FB one more time with the FALSE value. This ensures the FB sees the falling edge in the same cycle — some MC2 FBs require an explicit falling edge call to fully reset to idle. |
| 14 | `IsHomed := TRUE` | Mark valve as homed. Required for `SystemReady` and for IDLE→MOVING transition. |
| 15 | `eState := E_ValveState.IDLE` | Normal path: ready to accept setpoints. |
| 17-21 | `ELSIF fbHome.Error THEN` | Homing failed (e.g. drive fault, limit switch issue). Clear Execute, capture error code, transition to FAULT. |

#### State: IDLE

```iecst
E_ValveState.IDLE:
    bExecMove := FALSE;

    IF rtHoming.Q THEN
        IsHomed := FALSE;
        eState  := E_ValveState.HOMING;
    END_IF

    IF IsHomed AND ABS(rActiveSetpoint - Actual_Position) > PosTolerance THEN
        bExecMove := TRUE;
        eState    := E_ValveState.MOVING;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `bExecMove := FALSE` | Ensure MC_MoveAbsolute is not executing while idle. |
| 4-7 | `IF rtHoming.Q THEN` | Operator pressed the re-home button. Clear `IsHomed` flag and go back to HOMING to re-establish zero reference. |
| 9 | `IF IsHomed AND ABS(...) > PosTolerance` | Two conditions: (1) axis must be homed before any move is attempted, and (2) the setpoint must be meaningfully different from current position (outside dead-band). Prevents micro-moves from setpoint noise. |
| 10-11 | `bExecMove := TRUE; eState := MOVING` | Arm MC_MoveAbsolute and transition to MOVING. |

#### State: MOVING

```iecst
E_ValveState.MOVING:
    fbMoveAbs(
        Axis         := Axis,
        Execute      := bExecMove,
        Position     := rTarget_mm,
        Velocity     := MoveVelocity,
        Acceleration := MoveAccel,
        Deceleration := MoveDecel,
        Jerk         := MoveJerk,
        BufferMode   := MC_BlendingNext,
        Active       => IsMoving,
        Done         => MoveDone
    );

    IF Move_Stop THEN
        bExecHalt := TRUE;
        eState    := E_ValveState.HALT;
    END_IF

    IF fbMoveAbs.Done THEN
        bExecMove := FALSE;
        fbMoveAbs(Axis := Axis, Execute := bExecMove);
        eState    := E_ValveState.HOLD;
    ELSIF fbMoveAbs.CommandAborted THEN
        bExecMove := FALSE;
        fbMoveAbs(Axis := Axis, Execute := bExecMove);
        eState    := E_ValveState.IDLE;
    ELSIF fbMoveAbs.Error THEN
        bExecMove := FALSE;
        fbMoveAbs(Axis := Axis, Execute := bExecMove);
        FaultCode := fbMoveAbs.ErrorID;
        eState    := E_ValveState.FAULT;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2-12 | `fbMoveAbs(...)` | MC_MoveAbsolute is the motion executor. Called every cycle while MOVING. |
| 4 | `Execute := bExecMove` | The rising edge was set in IDLE. Stays TRUE throughout the move. |
| 5 | `Position := rTarget_mm` | Target in mm. Computed from `rActiveSetpoint / 100 * FullStroke_mm`. |
| 6-9 | `Velocity / Acceleration / Deceleration / Jerk` | Motion profile parameters. All come from `GVL_Config` via MAIN's call to this FB. |
| 10 | `BufferMode := MC_BlendingNext` | If a new move command arrives before this one completes, blend smoothly into the next position rather than stop-and-restart. This allows the setpoint to be updated mid-move. |
| 11 | `Active => IsMoving` | The `=>` syntax reads an output port directly into a variable in the same call. `IsMoving` is TRUE while the axis is physically moving. |
| 12 | `Done => MoveDone` | Similarly, captures the Done output. |
| 14-17 | `IF Move_Stop THEN` | Operator STOP button. Immediately transitions to HALT and arms `bExecHalt`. The MC_Halt FB will be called in the HALT state. |
| 19-22 | `IF fbMoveAbs.Done THEN` | Move completed successfully. Clear Execute and go to HOLD state. |
| 23-26 | `ELSIF fbMoveAbs.CommandAborted THEN` | Another MC2 command interrupted this move (e.g. MC_Halt from the STOP button path). Go back to IDLE to re-evaluate the current setpoint. |
| 27-31 | `ELSIF fbMoveAbs.Error THEN` | Drive or motion error during the move. Capture error code and go to FAULT. |

#### State: HOLD

```iecst
E_ValveState.HOLD:
    IsMoving  := FALSE;
    bExecMove := FALSE;

    IF ABS(rActiveSetpoint - Actual_Position) > PosTolerance THEN
        bExecMove := TRUE;
        eState    := E_ValveState.MOVING;
    END_IF

    IF rtHoming.Q THEN
        IsHomed := FALSE;
        eState  := E_ValveState.HOMING;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2-3 | Clear `IsMoving` and `bExecMove` | The axis has stopped. Ensure status flags reflect idle state. |
| 5-8 | `IF ABS(...) > PosTolerance` | If the setpoint changed while holding (new MQTT or HMI command), immediately transition back to MOVING. This is how continuous re-positioning works. |
| 10-13 | `IF rtHoming.Q` | Re-home from HOLD state (e.g. after physical disturbance or calibration check). |

#### State: FAULT

```iecst
E_ValveState.FAULT:
    IsFault   := TRUE;
    IsMoving  := FALSE;
    bExecHome := FALSE;
    bExecMove := FALSE;

    IF rtReset.Q THEN
        bExecReset := TRUE;
        eState     := E_ValveState.RESET;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `IsFault := TRUE` | Latch fault flag — visible on HMI. Also used in Section 3 to de-energise the drive via `Enable AND NOT FAULT`. |
| 3 | `IsMoving := FALSE` | Axis has stopped; clear moving indicator. |
| 4-5 | Clear `bExecHome` and `bExecMove` | Prevent stale Execute flags from re-triggering any MC2 FB while in fault. |
| 7-10 | `IF rtReset.Q THEN` | Wait for operator Reset button rising edge. Arms `bExecReset` and transitions to RESET state to clear the drive error. |

#### State: HALT

```iecst
E_ValveState.HALT:
    fbHalt(
        Axis         := Axis,
        Execute      := bExecHalt,
        Deceleration := MoveDecel,
        Jerk         := MoveJerk,
        BufferMode   := MC_Aborting
    );

    IF fbHalt.Done THEN
        bExecHalt       := FALSE;
        fbHalt(Axis := Axis, Execute := bExecHalt);
        rActiveSetpoint := Actual_Position;
    ELSIF fbHalt.Error THEN
        bExecHalt := FALSE;
        fbHalt(Axis := Axis, Execute := bExecHalt);
        FaultCode := fbHalt.ErrorID;
        eState    := E_ValveState.FAULT;
    END_IF

    IF rtReset.Q THEN
        eState := E_ValveState.IDLE;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2-8 | `fbHalt(...)` | MC_Halt decelerates the axis to a controlled stop. Called every cycle while in HALT state. |
| 5-6 | `Deceleration / Jerk` | Use the same motion profile as MoveAbsolute so the stop feels consistent with normal operation. |
| 7 | `BufferMode := MC_Aborting` | Abort any buffered motion commands. This halt takes immediate effect. |
| 10 | `bExecHalt := FALSE; fbHalt(Execute := FALSE)` | Two-step Execute clear after halt completes. |
| 11 | `rActiveSetpoint := Actual_Position` | **Key behaviour:** after a STOP, the valve stays at wherever it stopped, not the original setpoint. By setting `rActiveSetpoint` to the actual position, no new move is commanded when transitioning to IDLE. |
| 13-16 | `ELSIF fbHalt.Error THEN` | Halt itself failed (unusual — e.g. encoder loss). Fault out. |
| 18-20 | `IF rtReset.Q THEN eState := IDLE` | Operator can resume normal operation after a halt by pressing Reset. No need to re-home after HALT (position is still known). |

#### State: RESET

```iecst
E_ValveState.RESET:
    fbReset_MC(
        Axis    := Axis,
        Execute := bExecReset
    );

    IF fbReset_MC.Done THEN
        bExecReset := FALSE;
        IsFault    := FALSE;
        FaultCode  := 0;
        IsHomed    := FALSE;
        eState     := E_ValveState.HOMING;
    ELSIF fbReset_MC.Error THEN
        bExecReset := FALSE;
        FaultCode  := fbReset_MC.ErrorID;
        // Stay in RESET
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2-4 | `fbReset_MC(Axis, Execute := bExecReset)` | MC_Reset sends the drive the clear-error command. The drive acknowledgement may take several cycles. |
| 7 | `IF fbReset_MC.Done THEN` | Drive error cleared. |
| 8 | `bExecReset := FALSE` | Lower Execute for MC_Reset. |
| 9 | `IsFault := FALSE` | Clear the fault latch. |
| 10 | `FaultCode := 0` | Clear the stored error code (it was already shown to the operator). |
| 11 | `IsHomed := FALSE` | **Critical:** after a drive fault, a stepper motor may have lost position (step counts lost during power interruption). Force re-homing to re-establish zero reference before any further moves. |
| 12 | `eState := E_ValveState.HOMING` | Begin homing sequence immediately after reset. |
| 13-15 | `ELSIF fbReset_MC.Error THEN` | Drive rejected the reset (e.g. hardware fault still active). Stay in RESET state — the operator can retry by pressing Reset again. Note: no state transition here, the `bExecReset := FALSE` means MC_Reset will need a new rising edge on the next Reset press. |

#### ELSE — Safety Fallback

```iecst
ELSE
    eState := E_ValveState.INIT;
END_CASE
```

If `eState` ever holds an undefined enum value (possible after a PLC download
without restart, or firmware corruption), return to INIT. This is a defensive
measure — the PLC should never reach this branch in normal operation.

---

### 17.10 Section 6 — Output Assignment

```iecst
// SECTION 6 — OUTPUT ASSIGNMENT
State   := eState;
IsFault := (eState = E_ValveState.FAULT);
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `State := eState` | Copy the internal state enum to the VAR_OUTPUT `State`. MAIN and the HMI read `State` for display and logic. The internal `eState` is private; this makes the current state externally readable. |
| 3 | `IsFault := (eState = E_ValveState.FAULT)` | Recompute `IsFault` from the current state at the end of every cycle. This ensures `IsFault` is always exactly in sync with the state, even if the state changed earlier in this same cycle. Note: `IsFault` is also written inside the FAULT case body — this final line is a safety override to keep the two consistent. |


---

## 18. FB_SensorIO — Line-by-Line

**File:** `XAE/VekSi_PLC/Functions/FB_SensorIO.TcPOU`

FB_SensorIO is the sensor abstraction layer. It reads raw integer counts from
the EL3074 (4-20 mA) and EL3202 (PT100 RTD) terminals via GVL_IO, applies fault
detection, scales to engineering units, and filters noise with a low-pass filter.
MAIN calls it once per cycle before any other FB so all downstream consumers
receive fresh, filtered sensor data.

---

### 18.1 VAR_INPUT

```iecst
VAR_INPUT
    bEnable     : BOOL := TRUE;
    rLpfAlpha   : REAL := 0.1;
END_VAR
```

| Variable | Default | Purpose |
|----------|---------|---------|
| `bEnable` | `TRUE` | Master enable. When FALSE the FB immediately returns with all fault flags set and last sensor values held. Allows the sensor subsystem to be disabled without removing the FB call. |
| `rLpfAlpha` | `0.1` | Low-pass filter coefficient α. Controls the smoothing/responsiveness trade-off (explained in Section 5 below). |

---

### 18.2 VAR_OUTPUT

```iecst
VAR_OUTPUT
    stOut : ST_SensorData;
END_VAR
```

| Variable | Purpose |
|----------|---------|
| `stOut` | Single output struct that bundles all sensor readings, fault flags, and raw counts. MAIN reads `stOut` and copies it to `GVL_System.Sensors`. |

---

### 18.3 VAR — Internal State

```iecst
VAR
    rFilt_WaterLevel    : REAL;
    rFilt_Temp1         : REAL;
    rFilt_Temp2         : REAL;
    rFilt_PosFb         : ARRAY[1..3] OF REAL;

    rRaw_WaterLevel_mm  : REAL;
    rRaw_Temp1_C        : REAL;
    rRaw_Temp2_C        : REAL;
    rRaw_PosFb_mm       : ARRAY[1..3] OF REAL;

    bFirstScan          : BOOL := TRUE;
    i                   : INT;
END_VAR
```

| Variable | Purpose |
|----------|---------|
| `rFilt_WaterLevel` | Previous filtered water-level value (the `y[n-1]` term in the LPF). Retained between cycles. |
| `rFilt_Temp1/2` | Previous filtered temperature values. One per sensor. |
| `rFilt_PosFb[1..3]` | Previous filtered position-feedback values for each valve. |
| `rRaw_WaterLevel_mm` | Water level after scaling but before filtering. Intermediate value. |
| `rRaw_Temp1/2_C` | Temperature after scaling but before filtering. |
| `rRaw_PosFb_mm[1..3]` | Position feedback after scaling but before filtering. |
| `bFirstScan` | `TRUE` only on the very first PLC cycle. Used to seed the filter history with the actual first reading instead of zero, preventing a startup transient. |
| `i` | Loop counter for the position-feedback `FOR` loops. |

---

### 18.4 Section 1 — Enable Guard

```iecst
IF NOT bEnable THEN
    stOut.bAnySensorFault  := TRUE;
    stOut.bWaterLevelFault := TRUE;
    stOut.bTempFault[1]    := TRUE;
    stOut.bTempFault[2]    := TRUE;
    RETURN;
END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `IF NOT bEnable THEN` | Check master enable at the top of every cycle. |
| 2-5 | Set all fault flags TRUE | Signals downstream consumers (MAIN, MQTT, CSV) that sensor data is not valid. Downstream code can check `bAnySensorFault` to skip sensor-dependent decisions. |
| 6 | `RETURN` | Exit the FB immediately. The rest of the body is skipped — sensor values hold their last valid state (ST variables retain values between cycles). |

---

### 18.5 Section 2 — Fault Detection

```iecst
stOut.bWaterLevelFault  := GVL_IO.AI_L1V11 <= GVL_Config.SENSOR_FAULT_THRESHOLD;
stOut.bTempFault[1]     := GVL_IO.AI_Tmp_1 <= GVL_Config.SENSOR_FAULT_THRESHOLD;
stOut.bTempFault[2]     := GVL_IO.AI_Tmp_2 <= GVL_Config.SENSOR_FAULT_THRESHOLD;

FOR i := 1 TO 3 DO
    CASE i OF
        1: stOut.bPosFeedbackFault[i] := GVL_IO.AI_PosFeedback_1 <= GVL_Config.SENSOR_FAULT_THRESHOLD;
        2: stOut.bPosFeedbackFault[i] := GVL_IO.AI_PosFeedback_2 <= GVL_Config.SENSOR_FAULT_THRESHOLD;
        3: stOut.bPosFeedbackFault[i] := GVL_IO.AI_PosFeedback_3 <= GVL_Config.SENSOR_FAULT_THRESHOLD;
    END_CASE
END_FOR

stOut.bAnySensorFault :=
    stOut.bWaterLevelFault OR
    stOut.bTempFault[1]    OR
    stOut.bTempFault[2];
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `GVL_IO.AI_L1V11 <= SENSOR_FAULT_THRESHOLD` | Compare raw INT against -100 (threshold). If the EL3074 input is disconnected, the module outputs a value near -32768 (under-range). GVL_IO stubs initialise to -999. Both are ≤ -100, so `bWaterLevelFault` becomes TRUE. |
| 2-3 | Same pattern for temperature | EL3202 RTD card: disconnected sensor reads around -32768. |
| 5-9 | `FOR i := 1 TO 3 DO CASE i` | Checks each position-feedback channel. A `CASE` inside a `FOR` is used because the three GVL_IO variables are not in an array — they have distinct names (`AI_PosFeedback_1`, `_2`, `_3`). The loop maps them to the `bPosFeedbackFault[1..3]` array. |
| 11-14 | `bAnySensorFault := ... OR ...` | Aggregate fault flag. Note: position-feedback faults are intentionally excluded from `bAnySensorFault` because those sensors are supplementary. Water level and temperature are the safety-relevant signals. |

---

### 18.6 Section 3 — Raw Value Capture

```iecst
stOut.rWaterLevel_raw     := GVL_IO.AI_L1V11;
stOut.rTemperature_raw[1] := GVL_IO.AI_Tmp_1;
stOut.rTemperature_raw[2] := GVL_IO.AI_Tmp_2;
stOut.rPosFeedback_raw[1] := GVL_IO.AI_PosFeedback_1;
stOut.rPosFeedback_raw[2] := GVL_IO.AI_PosFeedback_2;
stOut.rPosFeedback_raw[3] := GVL_IO.AI_PosFeedback_3;
```

These lines copy the raw INT counts into the output struct **even when the sensor is faulted**.
Raw counts are written unconditionally so that technicians can see the actual
ADC value during diagnostics — e.g. to verify wiring or check if the signal is
near the fault threshold. The fault flags are checked by the scaling section
(Section 4) to skip bad values.

---

### 18.7 Section 4 — Scaling to Engineering Units

```iecst
IF NOT stOut.bWaterLevelFault THEN
    rRaw_WaterLevel_mm := ScaleLinear(
        INT_TO_REAL(GVL_IO.AI_L1V11),
        INT_TO_REAL(GVL_Config.WATER_LEVEL_RAW_MIN),
        INT_TO_REAL(GVL_Config.WATER_LEVEL_RAW_MAX),
        GVL_Config.WATER_LEVEL_ENG_MIN_MM,
        GVL_Config.WATER_LEVEL_ENG_MAX_MM);
    rRaw_WaterLevel_mm := LIMIT(...ENG_MIN..., rRaw_WaterLevel_mm, ...ENG_MAX...);
END_IF

IF NOT stOut.bTempFault[1] THEN
    rRaw_Temp1_C := INT_TO_REAL(GVL_IO.AI_Tmp_1) * GVL_Config.TEMP_RAW_SCALE_FACTOR
                    + GVL_Config.TEMP_OFFSET_C;
END_IF
```

**Water level scaling:**

| Line | Code | Purpose |
|------|------|---------|
| 1 | `IF NOT stOut.bWaterLevelFault THEN` | Only scale when sensor is valid. If faulted, `rRaw_WaterLevel_mm` keeps its last valid value — the LPF will then continue filtering the old value, which is better than injecting 0 or a garbage number. |
| 2-7 | `ScaleLinear(...)` | Call the built-in method (see Section 18.10). All INT parameters are cast to REAL with `INT_TO_REAL` before passing (ScaleLinear takes REAL inputs). The result is in mm. |
| 8 | `LIMIT(ENG_MIN, ..., ENG_MAX)` | Clamp to valid physical range. Prevents a slightly out-of-range ADC reading from showing negative mm or >1000 mm. |

**Temperature scaling:**

| Line | Code | Purpose |
|------|------|---------|
| 1 | `IF NOT stOut.bTempFault[1] THEN` | Guard against bad sensor (same pattern). |
| 2 | `INT_TO_REAL(AI_Tmp_1) * TEMP_RAW_SCALE_FACTOR + TEMP_OFFSET_C` | The EL3202 outputs temperature as integer tenths of a degree (e.g. raw 253 = 25.3 °C). `TEMP_RAW_SCALE_FACTOR = 0.1` converts to °C. `TEMP_OFFSET_C = 0.0` adds no offset by default — this constant exists for calibration correction. |

**Position feedback scaling:**

```iecst
FOR i := 1 TO 3 DO
    IF NOT stOut.bPosFeedbackFault[i] THEN
        CASE i OF
            1: rRaw_PosFb_mm[i] := ScaleLinear(AI_PosFeedback_1, RAW_MIN, RAW_MAX, 0, FULL_STROKE_MM);
            ...
        END_CASE
    END_IF
END_FOR
```

Same ScaleLinear call, but the engineering max is `VALVE_FULL_STROKE_MM` (6.096 mm)
instead of water-level range. This maps the analog feedback signal to the same
mm scale used by the NC axis for cross-checking.

---

### 18.8 Section 5 — Low-Pass Filter

```iecst
IF bFirstScan THEN
    rFilt_WaterLevel := rRaw_WaterLevel_mm;
    rFilt_Temp1      := rRaw_Temp1_C;
    rFilt_Temp2      := rRaw_Temp2_C;
    FOR i := 1 TO 3 DO
        rFilt_PosFb[i] := rRaw_PosFb_mm[i];
    END_FOR
    bFirstScan := FALSE;
ELSE
    rFilt_WaterLevel := rLpfAlpha * rRaw_WaterLevel_mm + (1.0 - rLpfAlpha) * rFilt_WaterLevel;
    rFilt_Temp1      := rLpfAlpha * rRaw_Temp1_C      + (1.0 - rLpfAlpha) * rFilt_Temp1;
    rFilt_Temp2      := rLpfAlpha * rRaw_Temp2_C      + (1.0 - rLpfAlpha) * rFilt_Temp2;
    FOR i := 1 TO 3 DO
        rFilt_PosFb[i] := rLpfAlpha * rRaw_PosFb_mm[i] + (1.0 - rLpfAlpha) * rFilt_PosFb[i];
    END_FOR
END_IF
```

**Understanding the low-pass filter formula:**

The first-order IIR (Infinite Impulse Response) low-pass filter:

```
y[n] = alpha * x[n] + (1 - alpha) * y[n-1]
```

Where:
- `x[n]` = new raw reading this cycle
- `y[n-1]` = filtered value from the previous cycle (stored in `rFilt_*`)
- `alpha` = smoothing coefficient (0.0–1.0)

Effect of α:
- `alpha = 1.0` → output equals input exactly (no filtering)
- `alpha = 0.0` → output never changes (frozen)
- `alpha = 0.1` → new reading has 10 % weight; old average has 90 % weight (smooth but slow to respond)
- `alpha = 0.5` → equal weight (moderate filtering)

At 10 ms cycle time with `alpha = 0.1`, the filter time constant is approximately
`T = cycle_time / alpha = 10 ms / 0.1 = 100 ms`. Sensor noise faster than 100 ms
is attenuated.

| Line | Code | Purpose |
|------|------|---------|
| 1-7 | `IF bFirstScan THEN` | On the very first PLC cycle, seed the filter history (`rFilt_*`) with the actual current reading. Without this, `rFilt_*` would start at 0.0 and the output would take many cycles to ramp from 0 to the real value, causing a false transient in the HMI and logs. |
| 8 | `bFirstScan := FALSE` | Latch so this initialisation only runs once. |
| 9 | `ELSE ... apply formula` | Normal operation: apply the IIR formula. The `rFilt_*` variables act as the "memory" of the filter — retaining their value between cycles because they are declared in `VAR` (FB-level persistence). |

---

### 18.9 Section 6 — Write Outputs

```iecst
stOut.rWaterLevel_mm  := rFilt_WaterLevel;

IF GVL_Config.WATER_LEVEL_ENG_MAX_MM > GVL_Config.WATER_LEVEL_ENG_MIN_MM THEN
    stOut.rWaterLevel_pct := LIMIT(0.0,
        (rFilt_WaterLevel - GVL_Config.WATER_LEVEL_ENG_MIN_MM) /
        (GVL_Config.WATER_LEVEL_ENG_MAX_MM - GVL_Config.WATER_LEVEL_ENG_MIN_MM) * 100.0,
        100.0);
ELSE
    stOut.rWaterLevel_pct := 0.0;
END_IF

stOut.rTemperature_C[1] := rFilt_Temp1;
stOut.rTemperature_C[2] := rFilt_Temp2;

FOR i := 1 TO 3 DO
    stOut.rPosFeedback_mm[i] := rFilt_PosFb[i];
END_FOR
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `stOut.rWaterLevel_mm := rFilt_WaterLevel` | Filtered water level in mm → output struct. |
| 3-9 | Water level % calculation | Convert mm to 0–100 % using the engineering range: `(mm - minMM) / (maxMM - minMM) * 100`. Division-by-zero guard at line 3 (same ENG_MIN = ENG_MAX edge case). |
| 4 | `LIMIT(0.0, ..., 100.0)` | Clamp to display range. |
| 11-12 | `stOut.rTemperature_C[1/2]` | Filtered temperatures → output struct. |
| 14-16 | `FOR` loop for position feedback | Copy all three filtered position values to `stOut.rPosFeedback_mm[1..3]`. |

---

### 18.10 ScaleLinear Method

```iecst
METHOD ScaleLinear : REAL
VAR_INPUT
    rRaw    : REAL;
    rRawMin : REAL;
    rRawMax : REAL;
    rEngMin : REAL;
    rEngMax : REAL;
END_VAR

IF rRawMax = rRawMin THEN
    ScaleLinear := rEngMin;
    RETURN;
END_IF

ScaleLinear := rEngMin + (rRaw - rRawMin) / (rRawMax - rRawMin) * (rEngMax - rEngMin);
```

| Line | Code | Purpose |
|------|------|---------|
| `IF rRawMax = rRawMin THEN` | Division-by-zero guard. If min and max ADC counts are equal (mis-configuration), return the engineering minimum instead of crashing. |
| `ScaleLinear := rEngMin + ...` | Standard linear interpolation formula. Breaks down as: `fraction = (rRaw - rRawMin) / (rRawMax - rRawMin)` → value between 0.0 and 1.0 → multiply by the engineering span `(rEngMax - rEngMin)` → add `rEngMin` offset. |

Example: water level at 16384 counts (half-scale), RAW_MIN=0, RAW_MAX=32767, ENG_MIN=0, ENG_MAX=1000 mm:
- Fraction = (16384 - 0) / (32767 - 0) = 0.5001
- Result = 0 + 0.5001 × (1000 - 0) = 500.1 mm


---

## 19. FB_MqttManager — Line-by-Line

**File:** `XAE/VekSi_PLC/Functions/FB_MqttManager.TcPOU`

FB_MqttManager is the network communications layer. It manages the full lifecycle
of an MQTT broker connection, subscribes to the command topic, publishes cyclic
status JSON, and deserialises incoming JSON payloads into valve setpoints. It uses
the TF6701 IoT library (`FB_IotMqttClient`, `FB_IotMqttMessageQueue`).

---

### 19.1 VAR_INPUT

```iecst
VAR_INPUT
    bEnable              : BOOL;
    stConfig             : ST_MqttConfig;
    bApplyConfig         : BOOL;

    bPublish             : BOOL;
    bEnableStatusPublish : BOOL;
    tStatusPublishTime   : TIME;
    sStatusTopic         : STRING(255);

    rValveSetpoint       : ARRAY[1..3] OF REAL;
    rValveActual         : ARRAY[1..3] OF REAL;
    sValveSource         : ARRAY[1..3] OF STRING(8);
    rTemperature_C       : REAL;
    rWaterLevel_pct      : REAL;
    rWaterLevel_mm       : REAL;
    sTimestamp           : STRING(64);
END_VAR
```

| Variable | Purpose |
|----------|---------|
| `bEnable` | Master enable. FALSE → disconnect gracefully and enter DISABLED state. |
| `stConfig` | Broker address, port, credentials, client ID, topics — all in one struct. Bound to `GVL_HMI.HMI_MQTT_Config`. |
| `bApplyConfig` | Rising edge: disconnect and reconnect with the new `stConfig`. Used when operator changes broker settings on the HMI. |
| `bPublish` | Rising edge: immediately publish the current status JSON (manual trigger). |
| `bEnableStatusPublish` | Enables the cyclic (timed) publish. Separate from `bEnable` — you can have MQTT connected but not auto-publishing. |
| `tStatusPublishTime` | How often to auto-publish (e.g. `T#5M` for every 5 minutes). |
| `sStatusTopic` | MQTT topic for status messages (e.g. `irrigation/status`). Separate from `stConfig.sMainTopic` to allow runtime override. |
| `rValveSetpoint[1..3]` | Active setpoints for each valve (%) passed in from MAIN. Written into the JSON payload. |
| `rValveActual[1..3]` | Actual positions (%) from MC_ReadActualPosition. Written into JSON. |
| `sValveSource[1..3]` | Source string ('HMI', 'MQTT', 'NONE') for each valve. Written into JSON. |
| `rTemperature_C` | Temperature probe 1 reading from FB_SensorIO. |
| `rWaterLevel_pct` | Water level as 0–100 %. |
| `rWaterLevel_mm` | Water level in mm. |
| `sTimestamp` | Pre-formatted timestamp string ('YYYY-MM-DD HH:MM:SS') built by MAIN and passed in. |

---

### 19.2 VAR_OUTPUT

```iecst
VAR_OUTPUT
    bConnected           : BOOL;
    bError               : BOOL;
    nErrorCode           : HRESULT;
    sErrorMsg            : STRING(128);

    bNewRemoteCommand    : BOOL;
    rMqttValveSetpoint   : ARRAY[1..3] OF REAL;
    bMqttValveEnable     : ARRAY[1..3] OF BOOL;

    sLastRxTopic         : STRING(255);
    sLastRxPayload       : STRING(2048);
    sJsonStatusPayload   : STRING(2048);
END_VAR
```

| Variable | Purpose |
|----------|---------|
| `bConnected` | TRUE when the TF6701 MQTT client is connected to the broker. Mirrors `fbMqttClient.bConnected`. |
| `bError` | TRUE on any error or during WAIT_RECONNECT back-off. Drives the HMI error indicator. |
| `nErrorCode` | HRESULT from `fbMqttClient.hrErrorCode`. 0 = no error. |
| `sErrorMsg` | Human-readable description of the error state. Written by the state machine. |
| `bNewRemoteCommand` | **One-cycle pulse.** Set TRUE when a valid JSON command is received and parsed. Cleared at the top of the next cycle. MAIN uses this to detect new commands. |
| `rMqttValveSetpoint[1..3]` | Parsed setpoints from the last valid JSON command (%). Passed to FB_ValveControl as `MQTT_Setpoint`. |
| `bMqttValveEnable[1..3]` | Parsed per-valve enable flags from the JSON command. Passed to FB_ValveControl as `MQTT_Enabled`. |
| `sLastRxTopic` | Last received MQTT topic string. Shown on HMI for diagnostics. |
| `sLastRxPayload` | Last received MQTT payload (raw JSON). Shown on HMI for diagnostics. |
| `sJsonStatusPayload` | The most recently built outgoing JSON string. Shown on HMI as a preview. |

---

### 19.3 VAR — Internal State

```iecst
VAR
    fbMqttClient    : FB_IotMqttClient;
    fbMessageQueue  : FB_IotMqttMessageQueue;
    fbMessage       : FB_IotMqttMessage;

    eState : (DISABLED, CONNECTING, CONNECTED, DISCONNECTING, WAIT_RECONNECT);

    rtApplyConfig   : R_TRIG;
    rtPublish       : R_TRIG;

    tonReconnect        : TON;
    tonStatusPublish    : TON;

    bConnectCmd                 : BOOL;
    bReconnectAfterDisconnect   : BOOL;
    bAutoSubscribed             : BOOL;

    fbJson          : FB_JsonDomParser;
    fbJsonDataType  : FB_JsonReadWriteDatatype;
    stCmdRecv       : ST_MQTT_Command;
    bSuccess        : BOOL;

    sTopicRcv       : STRING(255);
    sPayloadRcv     : STRING(2048);
END_VAR
```

| Variable | Purpose |
|----------|---------|
| `fbMqttClient` | TF6701 MQTT client. Manages the TCP socket, MQTT CONNECT/DISCONNECT, PUBLISH, SUBSCRIBE protocol. Must be called via `.Execute()` every cycle. |
| `fbMessageQueue` | TF6701 message queue. Incoming MQTT messages are buffered here; the FB drains the queue with `.Dequeue()` each cycle. |
| `fbMessage` | A single dequeued message. Used to extract topic and payload strings. |
| `eState` | Inline-declared enumeration for the 5-state connection state machine. Inline enums are local to the FB — not accessible from outside. |
| `rtApplyConfig` | Rising-edge detector for `bApplyConfig`. Triggers a disconnect → reconnect cycle. |
| `rtPublish` | Rising-edge detector for `bPublish`. Triggers an immediate manual publish. |
| `tonReconnect` | TON timer for the WAIT_RECONNECT back-off delay. Duration from `stConfig.tReconnectDelay`. |
| `tonStatusPublish` | TON timer for cyclic status publishing. Duration from `tStatusPublishTime`. |
| `bConnectCmd` | The value passed to `fbMqttClient.Execute()`. TRUE = connect/maintain; FALSE = disconnect. |
| `bReconnectAfterDisconnect` | Flag: when TRUE, DISCONNECTING state transitions back to CONNECTING instead of DISABLED. Used for config-change reconnect. |
| `bAutoSubscribed` | One-shot flag per connection: subscribe to the command topic once on the first CONNECTED cycle, then don't repeat. |
| `fbJson` | Beckhoff JSON DOM parser (unused directly — `fbJsonDataType` uses it internally). |
| `fbJsonDataType` | `FB_JsonReadWriteDatatype` — the Beckhoff helper that maps a JSON string to/from a ST struct by symbol name. |
| `stCmdRecv` | Scratch struct populated by JSON deserialisation. Fields are then copied to output arrays. |
| `bSuccess` | Return value of `fbJsonDataType.SetSymbolFromJson()`. TRUE = valid JSON parsed successfully. |
| `sTopicRcv / sPayloadRcv` | Local string buffers for extracting topic and payload from a dequeued message. |

---

### 19.4 Top-Level Logic Before State Machine

```iecst
rtApplyConfig(CLK := bApplyConfig);
rtPublish(CLK := bPublish);

bNewRemoteCommand := FALSE;
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `rtApplyConfig(CLK := bApplyConfig)` | Clock the edge detector. `rtApplyConfig.Q` will fire once when the HMI Apply button is pressed. |
| 2 | `rtPublish(CLK := bPublish)` | Same for the manual publish button. |
| 4 | `bNewRemoteCommand := FALSE` | **Reset the one-cycle flag every cycle.** This is the self-clearing pattern: the flag is FALSE by default; it becomes TRUE only in the cycle when a new command arrives. MAIN reads it immediately in the same cycle before it gets cleared again on the next cycle. |

---

### 19.5 Connection State Machine

#### State: DISABLED

```iecst
DISABLED:
    bConnectCmd               := FALSE;
    bAutoSubscribed           := FALSE;
    sErrorMsg                 := '';
    bReconnectAfterDisconnect := FALSE;

    IF bEnable THEN
        eState := CONNECTING;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `bConnectCmd := FALSE` | Keep `Execute(FALSE)` → client stays disconnected. |
| 3 | `bAutoSubscribed := FALSE` | Reset so subscription will happen on the next connection. |
| 4 | `sErrorMsg := ''` | Clear any old error message when disabled. |
| 5 | `bReconnectAfterDisconnect := FALSE` | No pending reconnect in disabled state. |
| 7 | `IF bEnable THEN eState := CONNECTING` | Operator enabled MQTT on the HMI → begin connection. |

#### State: CONNECTING

```iecst
CONNECTING:
    fbMqttClient.sHostName      := stConfig.sBrokerAddress;
    fbMqttClient.nHostPort      := stConfig.nPort;
    fbMqttClient.sClientId      := stConfig.sClientId;
    fbMqttClient.sUserName      := stConfig.sUsername;
    fbMqttClient.sUserPassword  := stConfig.sPassword;
    fbMqttClient.ipMessageQueue := fbMessageQueue;

    bConnectCmd := TRUE;

    IF fbMqttClient.bConnected THEN
        sErrorMsg       := '';
        bAutoSubscribed := FALSE;
        eState          := CONNECTED;
    ELSIF fbMqttClient.bError THEN
        sErrorMsg := 'MQTT connect failed - check broker IP, port, credentials.';
        eState    := WAIT_RECONNECT;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2-7 | Assign config fields | Write broker connection parameters directly into the client struct fields. This must happen before `Execute(TRUE)` is called. Setting them every cycle in CONNECTING is safe — they are only read by the client when a new connection is initiated. |
| 6 | `fbMqttClient.ipMessageQueue := fbMessageQueue` | Wire the message queue to the client so incoming messages are buffered here. This is an interface pointer assignment. |
| 9 | `bConnectCmd := TRUE` | `Execute(TRUE)` will be called at the bottom of the body. This triggers the TCP connection attempt. |
| 11-13 | `IF fbMqttClient.bConnected` | Client successfully connected. Clear error and transition to CONNECTED. |
| 14-16 | `ELSIF fbMqttClient.bError` | Connection failed (wrong IP, refused, timeout). Go to WAIT_RECONNECT for back-off. |

#### State: CONNECTED

```iecst
CONNECTED:
    bConnectCmd := TRUE;

    IF NOT bAutoSubscribed THEN
        bAutoSubscribed := fbMqttClient.Subscribe(
            sTopic := stConfig.SubscribeTopic,
            eQoS   := TcIotMqttQos.AtLeastOnceDelivery);
    END_IF

    IF NOT bEnable THEN
        bReconnectAfterDisconnect := FALSE;
        eState := DISCONNECTING;
    ELSIF rtApplyConfig.Q THEN
        bReconnectAfterDisconnect := TRUE;
        bAutoSubscribed           := FALSE;
        eState                    := DISCONNECTING;
    ELSIF NOT fbMqttClient.bConnected THEN
        sErrorMsg := 'MQTT connection lost - reconnecting...';
        eState    := WAIT_RECONNECT;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `bConnectCmd := TRUE` | Keep `Execute(TRUE)` to maintain the connection. If this were set FALSE the client would disconnect. |
| 4-7 | Auto-subscribe | On the first cycle after connecting, subscribe to the command topic. `Subscribe()` returns TRUE when the SUBSCRIBE packet is accepted. `bAutoSubscribed` latches to prevent re-subscribing every cycle. QoS `AtLeastOnceDelivery` (QoS 1) means the broker will re-send messages if the acknowledgement is lost. |
| 9-11 | `IF NOT bEnable` | Operator turned MQTT off. Disconnect gracefully (`bReconnectAfterDisconnect = FALSE` → DISCONNECTING → DISABLED). |
| 12-16 | `ELSIF rtApplyConfig.Q` | Operator changed config. Set `bReconnectAfterDisconnect := TRUE` so after DISCONNECTING, the state machine goes back to CONNECTING (not DISABLED). Clear `bAutoSubscribed` so the new connection re-subscribes. |
| 17-19 | `ELSIF NOT fbMqttClient.bConnected` | Unexpected connection loss (network down, broker restarted). Skip DISCONNECTING (already disconnected) and go directly to WAIT_RECONNECT. |

#### State: DISCONNECTING

```iecst
DISCONNECTING:
    bConnectCmd := FALSE;

    IF NOT fbMqttClient.bConnected THEN
        IF bEnable AND bReconnectAfterDisconnect THEN
            bReconnectAfterDisconnect := FALSE;
            eState := CONNECTING;
        ELSE
            eState := DISABLED;
        END_IF
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `bConnectCmd := FALSE` | `Execute(FALSE)` triggers a graceful MQTT DISCONNECT packet followed by TCP close. |
| 4 | `IF NOT fbMqttClient.bConnected` | Wait for the client to confirm disconnection. May take one or more cycles. |
| 5-7 | `IF bEnable AND bReconnectAfterDisconnect` | If we disconnected in order to apply new config, and MQTT is still enabled, go back to CONNECTING. |
| 8-10 | `ELSE eState := DISABLED` | Normal disable path — stay disconnected. |

#### State: WAIT_RECONNECT

```iecst
WAIT_RECONNECT:
    bConnectCmd := FALSE;
    tonReconnect(IN := TRUE, PT := stConfig.tReconnectDelay);

    IF NOT bEnable THEN
        tonReconnect(IN := FALSE);
        eState := DISABLED;
    ELSIF tonReconnect.Q THEN
        tonReconnect(IN := FALSE);
        eState := CONNECTING;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `bConnectCmd := FALSE` | Ensure client is not trying to connect during the back-off period. |
| 3 | `tonReconnect(IN := TRUE, PT := stConfig.tReconnectDelay)` | Start (or continue) the reconnect delay timer. `PT` is typically 30 seconds. `tonReconnect.Q` goes TRUE once the delay expires. |
| 5-7 | `IF NOT bEnable` | If operator disables MQTT during back-off, cancel the timer (`IN := FALSE`) and go to DISABLED. |
| 8-10 | `ELSIF tonReconnect.Q` | Delay expired. Cancel the timer (set `IN := FALSE` to reset it) and try connecting again. |

#### After the CASE: Execute the Client

```iecst
fbMqttClient.Execute(bConnectCmd);
```

This single line runs every cycle regardless of state. `bConnectCmd` was set by
the state machine above. This is the design pattern for TF6701: the state machine
sets the `Execute` flag; the actual FB call happens outside the CASE so it is
never accidentally skipped. Calling it with FALSE gracefully closes the connection;
calling it with TRUE keeps it alive or initiates a new connection.


---

### 19.6 Incoming Message Processing (Dequeue Loop)

```iecst
WHILE fbMessageQueue.nQueuedMessages > 0 DO
    IF fbMessageQueue.Dequeue(fbMessage := fbMessage) THEN
        fbMessage.GetTopic(
            pTopic     := ADR(sTopicRcv),
            nTopicSize := SIZEOF(sTopicRcv));
        fbMessage.GetPayload(
            pPayload            := ADR(sPayloadRcv),
            nPayloadSize        := SIZEOF(sPayloadRcv),
            bSetNullTermination := TRUE);

        sLastRxTopic   := sTopicRcv;
        sLastRxPayload := sPayloadRcv;

        bSuccess := fbJsonDataType.SetSymbolFromJson(
            sPayloadRcv, 'ST_MQTT_COMMAND', SIZEOF(stCmdRecv), ADR(stCmdRecv));

        IF bSuccess THEN
            bNewRemoteCommand := TRUE;

            rMqttValveSetpoint[1] := LIMIT(0.0, DINT_TO_REAL(stCmdRecv.Valve1), 100.0);
            rMqttValveSetpoint[2] := LIMIT(0.0, DINT_TO_REAL(stCmdRecv.Valve2), 100.0);
            rMqttValveSetpoint[3] := LIMIT(0.0, DINT_TO_REAL(stCmdRecv.Valve3), 100.0);

            bMqttValveEnable[1] := stCmdRecv.Valve1_Enable;
            bMqttValveEnable[2] := stCmdRecv.Valve2_Enable;
            bMqttValveEnable[3] := stCmdRecv.Valve3_Enable;
        END_IF
    END_IF
END_WHILE
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `WHILE fbMessageQueue.nQueuedMessages > 0 DO` | Drain **all** queued messages in this PLC cycle. The broker may batch multiple messages; processing only one per cycle would let the queue grow unbounded. WHILE ensures the queue is empty before the cycle ends. |
| 2 | `IF fbMessageQueue.Dequeue(fbMessage := fbMessage)` | Pop the oldest message from the queue into `fbMessage`. Returns TRUE if a message was successfully dequeued. The `fbMessage := fbMessage` syntax passes the FB instance both as caller and receiver — TF6701 design pattern. |
| 3-5 | `fbMessage.GetTopic(...)` | Copy the topic string into `sTopicRcv`. `ADR()` gets the memory address of the string buffer. `SIZEOF()` provides the buffer size to prevent overflow. |
| 6-9 | `fbMessage.GetPayload(...)` | Copy the payload bytes into `sPayloadRcv`. `bSetNullTermination := TRUE` appends a null byte so `sPayloadRcv` is a valid C-style string usable by string functions. |
| 11-12 | `sLastRxTopic / sLastRxPayload` | Store topic and payload in output variables for HMI display. The HMI shows these in a diagnostics panel so operators can see the last received message. |
| 14-15 | `fbJsonDataType.SetSymbolFromJson(...)` | Beckhoff JSON deserialiser. Parameters: (1) source JSON string, (2) symbol type name as a string `'ST_MQTT_COMMAND'` — must match the DUT name exactly, (3) size of the destination struct, (4) address of the destination struct. Returns TRUE on success. |
| 17 | `bNewRemoteCommand := TRUE` | Signal to MAIN that a valid command arrived this cycle. MAIN passes this to FB_ValveControl via the `MQTT_Setpoint` update path. |
| 19-21 | `LIMIT(0.0, DINT_TO_REAL(stCmdRecv.ValveN), 100.0)` | `stCmdRecv.Valve1` is `DINT` (from JSON integer). `DINT_TO_REAL` converts to REAL for the setpoint array. `LIMIT` clamps to valid 0–100 % range, protecting against malicious or erroneous broker messages. |
| 23-25 | `bMqttValveEnable[N] := stCmdRecv.ValveN_Enable` | `ValveN_Enable` is `BOOL` in the struct. No conversion needed. These flags directly control whether each valve's FB_ValveControl instance accepts MQTT commands. |

**Why drain in a loop?**
If two MQTT messages arrive in the same cycle (e.g. a burst publish from a
dashboard), only the last one processed wins (overwrites the setpoints). This is
acceptable because setpoints are not transactional — only the current desired
position matters. If you need to process every message (e.g. for a command
sequence), you'd need a more complex queuing strategy.

---

### 19.7 Manual Publish

```iecst
IF fbMqttClient.bConnected AND rtPublish.Q THEN
    BuildStatusJson();
    fbMqttClient.Publish(
        sTopic       := stConfig.sMainTopic,
        pPayload     := ADR(sJsonStatusPayload),
        nPayloadSize := LEN(sJsonStatusPayload),
        eQoS         := TcIotMqttQos.AtMostOnceDelivery,
        bRetain      := TRUE
    );
END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `fbMqttClient.bConnected AND rtPublish.Q` | Only publish if: (a) actually connected to broker, AND (b) operator pressed the manual publish button (rising edge). Double guard prevents crash-on-publish if connection is lost. |
| 2 | `BuildStatusJson()` | Call the method (below) to assemble the current JSON string into `sJsonStatusPayload`. |
| 3-8 | `fbMqttClient.Publish(...)` | Send the JSON payload. |
| 4 | `sTopic := stConfig.sMainTopic` | Publish to the status topic configured in the MQTT config struct (e.g. `irrigation/status`). |
| 5 | `pPayload := ADR(sJsonStatusPayload)` | Pointer to the string buffer. TF6701 takes a raw memory pointer for payload to support binary payloads too. |
| 6 | `nPayloadSize := LEN(sJsonStatusPayload)` | Length of the JSON string in bytes (excluding null terminator). Do not use SIZEOF — that returns the maximum buffer size (2048), not the actual content length. |
| 7 | `eQoS := AtMostOnceDelivery` | QoS 0 — fire and forget. Status telemetry doesn't need guaranteed delivery; the next auto-publish will correct any lost message. |
| 8 | `bRetain := TRUE` | **Retained message.** The broker stores this as the "last known state". New subscribers receive it immediately on connect — useful for dashboards. Manual publish uses `TRUE`; auto-publish (cyclic) uses `FALSE` to avoid filling broker storage. |

---

### 19.8 Cyclic Status Publish

```iecst
tonStatusPublish(
    IN := bEnableStatusPublish AND fbMqttClient.bConnected,
    PT := tStatusPublishTime
);

IF tonStatusPublish.Q THEN
    tonStatusPublish(IN := FALSE);
    BuildStatusJson();
    fbMqttClient.Publish(
        sTopic       := sStatusTopic,
        pPayload     := ADR(sJsonStatusPayload),
        nPayloadSize := LEN(sJsonStatusPayload),
        eQoS         := TcIotMqttQos.AtMostOnceDelivery,
        bRetain      := FALSE
    );
END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 1-4 | `tonStatusPublish(IN := ..., PT := ...)` | Run the interval timer. `IN` is TRUE only when MQTT is enabled AND connected — the timer only counts while there is a valid connection to publish to. If disconnected mid-period, the timer freezes until reconnected. |
| 5 | `IF tonStatusPublish.Q THEN` | Timer elapsed — time to publish. |
| 6 | `tonStatusPublish(IN := FALSE)` | **Reset the timer** by calling it with `IN := FALSE`. The timer will start again on the next cycle when `IN` becomes TRUE again. This creates a repeating interval. |
| 7 | `BuildStatusJson()` | Rebuild JSON with current values. |
| 8-13 | `fbMqttClient.Publish(...)` | Same publish call as manual, but: topic is `sStatusTopic` (which MAIN sets from `GVL_Config`) and `bRetain := FALSE` — cyclic telemetry is not retained. |

---

### 19.9 Output Status

```iecst
bConnected := fbMqttClient.bConnected;
nErrorCode := fbMqttClient.hrErrorCode;
bError     := fbMqttClient.bError OR (eState = WAIT_RECONNECT);

IF NOT bError THEN
    nErrorCode := 0;
END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `bConnected := fbMqttClient.bConnected` | Mirror client connection flag to output. |
| 2 | `nErrorCode := fbMqttClient.hrErrorCode` | Copy HRESULT error code. `hrErrorCode` is 0 when no error. |
| 3 | `bError := bError OR (eState = WAIT_RECONNECT)` | `bError` is TRUE when the client reports an error **or** during the reconnect back-off wait. The WAIT_RECONNECT state is not strictly an error condition (it's an automatic recovery), but it is surfaced as `bError` so the HMI shows a warning during the delay. |
| 5-7 | `IF NOT bError THEN nErrorCode := 0` | Clear the error code when there is no error. `hrErrorCode` from the client may not self-clear; this ensures the HMI shows 0 when everything is healthy. |

---

### 19.10 BuildStatusJson Method

```iecst
METHOD BuildStatusJson
VAR
    sTemp : STRING(2048);
END_VAR

sTemp := '{';
sTemp := CONCAT(sTemp, '"timestamp":"');
sTemp := CONCAT(sTemp, sTimestamp);
sTemp := CONCAT(sTemp, '"');
sTemp := CONCAT(sTemp, ',"valve_1_setpoint":');
sTemp := CONCAT(sTemp, REAL_TO_STRING(rValveSetpoint[1]));
sTemp := CONCAT(sTemp, ',"valve_1_actual":');
sTemp := CONCAT(sTemp, REAL_TO_STRING(rValveActual[1]));
sTemp := CONCAT(sTemp, ',"valve_1_source":"');
sTemp := CONCAT(sTemp, sValveSource[1]);
sTemp := CONCAT(sTemp, '"');
// ... (identical pattern for valve 2 and 3, temperature, water level)
sTemp := CONCAT(sTemp, '}');
sJsonStatusPayload := sTemp;
```

| Line | Code | Purpose |
|------|------|---------|
| `sTemp : STRING(2048)` | Local scratch buffer. JSON is built here then assigned to the output at the end. Working in a local var is cleaner than directly concatenating to `sJsonStatusPayload`. |
| `sTemp := '{'` | Start the JSON object. |
| `CONCAT(sTemp, '"timestamp":"')` | IEC 61131-3 has no string `+=` operator. `CONCAT(a, b)` returns `a + b`. This must be re-assigned: `sTemp := CONCAT(sTemp, ...)`. |
| `REAL_TO_STRING(rValveSetpoint[1])` | Converts a REAL to its string representation. TwinCAT's `REAL_TO_STRING` returns a decimal representation (e.g. `'50.0'`). Note: it may include trailing zeros or scientific notation for extreme values — acceptable for MQTT telemetry. |
| `'"valve_1_source":"'` | String fields in JSON require double-quote delimiters. The outer single quotes delimit the IEC string literal; the `\"` inside represent literal double-quote characters. |
| `sTemp := CONCAT(sTemp, '}')` | Close the JSON object. |
| `sJsonStatusPayload := sTemp` | Assign complete JSON to the output variable. This is a single atomic assignment — the output is either the previous complete JSON or the new complete JSON; never a partial string. |

**Example output:**
```json
{"timestamp":"2026-04-30 09:15:00",
 "valve_1_setpoint":50.0,"valve_1_actual":49.8,"valve_1_source":"HMI",
 "valve_2_setpoint":25.0,"valve_2_actual":25.1,"valve_2_source":"MQTT",
 "valve_3_setpoint":0.0,"valve_3_actual":0.0,"valve_3_source":"NONE",
 "temperature_c":22.5,"water_level_pct":65.3,"water_level_mm":653.0}
```

### 19.11 GetClientRef Method

```iecst
METHOD GetClientRef : REFERENCE TO FB_IotMqttClient
    GetClientRef REF= fbMqttClient;
```

Returns a reference to the internal `fbMqttClient`. `REF=` is the IEC reference
assignment operator. This method exists for advanced use — e.g. if you need to
call a TF6701 method not exposed through this FB's normal interface (such as
setting TLS certificates). In normal operation it is not called.


---

## 20. FB_CsvLogger — Line-by-Line

**File:** `XAE/VekSi_PLC/Functions/FB_CSVLogger.TcPOU`

FB_CsvLogger writes a new CSV data row at a configurable interval to a monthly
log file on the IPC filesystem. File I/O in TwinCAT is non-blocking — each
operation (open, write, close) uses a state machine FB that takes one or more
PLC cycles to complete. The logger therefore has its own 7-state machine that
sequences through these operations without blocking the PLC cycle.

---

### 20.1 VAR_INPUT

```iecst
VAR_INPUT
    bEnable      : BOOL := TRUE;
    bForceWrite  : BOOL;
    tLogInterval : TIME;
    sBasePath    : STRING(128);
    sPrefix      : T_MaxString;
    stValve      : ARRAY[1..3] OF ST_ValveData;
    stSensors    : ST_SensorData;
END_VAR
```

| Variable | Purpose |
|----------|---------|
| `bEnable` | Master enable. When FALSE logging stops immediately — timers reset and state goes to CSV_IDLE. Default TRUE so logging begins on startup. |
| `bForceWrite` | Level signal; FB detects rising edge. Lets the HMI operator trigger an immediate write outside the normal interval. |
| `tLogInterval` | Periodic write interval. From `GVL_Config.CSV_LOG_INTERVAL_S` (default `T#15M`). |
| `sBasePath` | Folder path for log files including trailing backslash. From `GVL_Config.CSV_FILE_PATH`. |
| `sPrefix` | Filename prefix. From `GVL_Config.CSV_FILENAME_PREFIX` (`'IrrigationLog_'`). `T_MaxString` is TwinCAT's variable-length string type (up to 255 chars). |
| `stValve[1..3]` | Full valve runtime data structs from `GVL_System.Valve[1..3]`. Contains setpoint, actual position, source, state — all written to CSV columns. |
| `stSensors` | Sensor readings struct from `GVL_System.Sensors`. Water level mm/%, temperatures. |

---

### 20.2 VAR_OUTPUT

```iecst
VAR_OUTPUT
    bBusy           : BOOL;
    bError          : BOOL;
    nErrorCode      : UDINT;
    dtLastWrite     : DT;
    sCurrentFilename : STRING(128);
    sCurrentFile    : STRING(128);
    eState          : E_CSVLogState := E_CSVLogState.CSV_IDLE;
END_VAR
```

| Variable | Purpose |
|----------|---------|
| `bBusy` | TRUE while file I/O is in progress (any state except IDLE/ERROR). The HMI can display this as a "writing" indicator. |
| `bError` | TRUE when a file I/O error occurred. MAIN mirrors to `GVL_HMI.ACT_CSV_Error`. |
| `nErrorCode` | Numeric error code from the file FB (`nErrId`). Zero = no error. |
| `dtLastWrite` | `DT` (Date and Time) of the last successfully written row. MAIN mirrors this to `GVL_HMI.ACT_CSV_LastWriteTime` for display. |
| `sCurrentFilename` | Just the filename without path (e.g. `IrrigationLog_2026-04.csv`). |
| `sCurrentFile` | Full path + filename (e.g. `C:\TwinCAT\3.1\Boot\Log\IrrigationLog_2026-04.csv`). MAIN mirrors this to `GVL_HMI.ACT_CSV_CurrentFile`. |
| `eState` | Current state machine state. Exposed as output for HMI diagnostics display. |

---

### 20.3 VAR — Internal State

```iecst
VAR
    fbFileOpen      : FB_FileOpen;
    fbFileWrite     : FB_FileWrite;
    fbFileClose     : FB_FileClose;
    hFilenumber     : UINT;
    cbLen           : UDINT;

    tIntervalTimer  : TON;
    bForceEdge      : R_TRIG;
    bTriggerWrite   : BOOL;

    fbGetTime       : FB_LocalSystemTime;
    sTimestamp      : STRING(24);
    nYear           : UINT;
    nMonth          : UINT;
    sYear           : STRING(8);
    sMonth          : STRING(4);

    fbEnum          : FB_EnumFindFileEntry;
    bEnumStart      : BOOL;
    bFileExists     : BOOL;

    sLine           : STRING(512);
    sHeader         : STRING(512);
    sSource         : STRING(8);
END_VAR
```

| Variable | Purpose |
|----------|---------|
| `fbFileOpen` | TwinCAT `Tc2_Utilities` FB. Non-blocking file open. Returns a file handle. |
| `fbFileWrite` | Non-blocking write FB. Takes a pointer to a string buffer and a length. |
| `fbFileClose` | Non-blocking file close. Must be called after every open, even on error, to release the file handle. |
| `hFilenumber` | File handle (UINT). Assigned when `fbFileOpen.hFile` is ready. Passed to write and close FBs. |
| `cbLen` | Byte count of the string to write. Computed with `LEN()`. Must be UDINT (unsigned). |
| `tIntervalTimer` | TON timer that fires every `tLogInterval`. Its `.Q` output triggers the write. |
| `bForceEdge` | R_TRIG on `bForceWrite`. One-cycle pulse for manual writes. |
| `bTriggerWrite` | Combined trigger: `tIntervalTimer.Q OR bForceEdge.Q`. TRUE in the cycle a write should begin. |
| `fbGetTime` | `FB_LocalSystemTime` — returns the IPC's local system clock as a `SYSTEMTIME` struct (year, month, day, hour, min, sec). |
| `sTimestamp` | Formatted timestamp string for the CSV row. |
| `nYear / nMonth` | Extracted from `fbGetTime.systemTime` for building the filename. |
| `sYear / sMonth` | String versions of year and month, zero-padded for consistent filenames. |
| `fbEnum` | `FB_EnumFindFileEntry` — TwinCAT filesystem enumeration FB. Used here to check if the log file already exists (to decide whether to write a header row). |
| `bEnumStart / bFileExists` | Control flags for the file-existence check. |
| `sLine` | The CSV data row being assembled. STRING(512) to accommodate all columns. |
| `sHeader` | The CSV header row (column names). Only written to new files. |
| `sSource` | Scratch string for per-valve source conversion (`'HMI'`, `'MQTT'`, `'NONE'`). |

---

### 20.4 Top-Level: Time and Enable Guard

```iecst
fbGetTime(bEnable := TRUE, dwCycle := 1);

IF NOT bEnable THEN
    tIntervalTimer(IN := FALSE);
    eState := E_CSVLogState.CSV_IDLE;
    RETURN;
END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `fbGetTime(bEnable := TRUE, dwCycle := 1)` | Call the system time FB every PLC cycle. `dwCycle := 1` means update every cycle (no sub-sampling). The result is available in `fbGetTime.systemTime` immediately. |
| 3-6 | Enable guard | If logging is disabled: stop the interval timer (`IN := FALSE` resets it) so it doesn't fire when re-enabled, force state to CSV_IDLE, and return early. This cleanly aborts any in-progress write. |

---

### 20.5 Trigger Logic

```iecst
bForceEdge(CLK := bForceWrite);
tIntervalTimer(IN := TRUE, PT := tLogInterval);
bTriggerWrite := tIntervalTimer.Q OR bForceEdge.Q;

IF tIntervalTimer.Q THEN
    tIntervalTimer(IN := FALSE);
END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 1 | `bForceEdge(CLK := bForceWrite)` | Detect rising edge of the force-write button. |
| 2 | `tIntervalTimer(IN := TRUE, PT := tLogInterval)` | Run the interval timer continuously. `IN := TRUE` means it counts every cycle. `.Q` fires once when elapsed time >= `PT`. |
| 3 | `bTriggerWrite := tIntervalTimer.Q OR bForceEdge.Q` | Combine both trigger sources. |
| 5-7 | Timer reset | After the timer fires (`.Q = TRUE`), reset it with `IN := FALSE` so it starts again from zero. This creates the repeating interval pattern. |

---

### 20.6 State Machine

#### State: CSV_IDLE

```iecst
E_CSVLogState.CSV_IDLE:
    bBusy := FALSE;

    IF bTriggerWrite THEN
        bFileExists := FALSE;
        bEnumStart  := TRUE;
        eState      := E_CSVLogState.CSV_PREPARE;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `bBusy := FALSE` | No I/O in progress. |
| 4 | `IF bTriggerWrite THEN` | Either timer fired or force-write button pressed. |
| 5 | `bFileExists := FALSE` | Reset existence flag before the check. |
| 6 | `bEnumStart := TRUE` | Signal CSV_PREPARE to initiate the file-existence check. |
| 7 | `eState := CSV_PREPARE` | Move to filename-build and existence-check state. |

#### State: CSV_PREPARE

```iecst
E_CSVLogState.CSV_PREPARE:
    bBusy := TRUE;

    nYear  := fbGetTime.systemTime.wYear;
    nMonth := fbGetTime.systemTime.wMonth;
    sYear  := UINT_TO_STRING(nYear);
    sMonth := UINT_TO_STRING(nMonth);

    IF nMonth < 10 THEN
        sMonth := CONCAT('0', sMonth);
    END_IF

    sCurrentFilename := CONCAT(sPrefix, sYear);
    sCurrentFilename := CONCAT(sCurrentFilename, '-');
    sCurrentFilename := CONCAT(sCurrentFilename, sMonth);
    sCurrentFilename := CONCAT(sCurrentFilename, '.csv');
    sCurrentFile     := CONCAT(sBasePath, sCurrentFilename);

    IF bEnumStart THEN
        fbEnum(sPathName := sCurrentFile, eCmd := eEnumCmd_First,
               bExecute := TRUE, tTimeout := T#5S);
        bEnumStart := FALSE;
    ELSE
        fbEnum(sPathName := sCurrentFile, eCmd := eEnumCmd_Next,
               bExecute := FALSE, tTimeout := T#5S);
    END_IF

    IF NOT fbEnum.bBusy THEN
        fbEnum(bExecute := FALSE);
        IF fbEnum.bError THEN
            bFileExists := FALSE;
        ELSE
            bFileExists := (fbEnum.stFindFile.sFileName <> '');
        END_IF
        eState := E_CSVLogState.CSV_OPEN;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 3-4 | `nYear / nMonth := fbGetTime.systemTime.*` | Read year and month from the system clock. Used to build the monthly filename. |
| 5-6 | `UINT_TO_STRING` | Convert numeric year/month to string. |
| 8-10 | `IF nMonth < 10 THEN sMonth := CONCAT('0', sMonth)` | Zero-pad single-digit months: `4` → `'04'`. Without this, April would produce `IrrigationLog_2026-4.csv` instead of the consistent `IrrigationLog_2026-04.csv`. |
| 11-15 | Build filename | Concatenate: prefix + year + `'-'` + month + `'.csv'` → `IrrigationLog_2026-04.csv`. Then prepend the base path to get the full path. |
| 17-20 | `IF bEnumStart` first call | `FB_EnumFindFileEntry` with `eCmd := eEnumCmd_First` initiates a file search. Clear `bEnumStart` so subsequent cycles call with `eEnumCmd_Next`. |
| 21-25 | `ELSE` subsequent cycles | While `fbEnum.bBusy`, keep calling with `bExecute := FALSE` to let the FB complete its I/O. |
| 27-34 | `IF NOT fbEnum.bBusy` | Check is complete. If error → file does not exist. Otherwise check `sFileName` — non-empty means the file was found. |
| 35 | `eState := CSV_OPEN` | Proceed to open the file regardless of existence (it will be created if new). |

#### State: CSV_OPEN

```iecst
E_CSVLogState.CSV_OPEN:
    fbFileOpen(
        sPathName := sCurrentFile,
        nMode     := FOPEN_MODEAPPEND,
        bExecute  := TRUE,
        hFile     => hFilenumber);

    IF NOT fbFileOpen.bBusy THEN
        fbFileOpen(bExecute := FALSE);
        IF NOT fbFileOpen.bError THEN
            hFilenumber := fbFileOpen.hFile;
            IF NOT bFileExists THEN
                eState := E_CSVLogState.CSV_WRITE_HDR;
            ELSE
                eState := E_CSVLogState.CSV_WRITE_ROW;
            END_IF
        ELSE
            nErrorCode := fbFileOpen.nErrId;
            bError     := TRUE;
            eState     := E_CSVLogState.CSV_ERROR;
        END_IF
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2-6 | `fbFileOpen(...)` | Open the file. Called every cycle while in CSV_OPEN (FB processes internally). |
| 3 | `sPathName := sCurrentFile` | Full path built in CSV_PREPARE. |
| 4 | `nMode := FOPEN_MODEAPPEND` | Open in append mode. If the file exists, the write position is at the end — new rows are added, nothing is overwritten. If the file does not exist, it is created. |
| 5 | `bExecute := TRUE` | Start the open operation (rising edge on first call). |
| 6 | `hFile => hFilenumber` | Capture the file handle output as soon as available. |
| 8-9 | `IF NOT bBusy: fbFileOpen(bExecute := FALSE)` | File open completed. Clear Execute. |
| 10 | `hFilenumber := fbFileOpen.hFile` | Store the file handle for subsequent write and close calls. |
| 11-15 | Route to header or row | New file (`NOT bFileExists`) → write the column header first. Existing file → skip header, go directly to writing a data row. |
| 16-19 | Error path | File open failed (disk full, path missing, permissions). Record error code, set `bError`, go to CSV_ERROR. |

#### State: CSV_WRITE_HDR

```iecst
E_CSVLogState.CSV_WRITE_HDR:
    sHeader := 'Timestamp,V1_Setpoint_%,...,Temperature2_C$R$N';
    cbLen := INT_TO_UDINT(LEN(sHeader));

    fbFileWrite(
        bExecute   := TRUE,
        hFile      := hFilenumber,
        pWriteBuff := ADR(sHeader),
        cbWriteLen := cbLen);

    IF NOT fbFileWrite.bBusy THEN
        fbFileWrite(bExecute := FALSE);
        IF fbFileWrite.bError THEN
            nErrorCode := fbFileWrite.nErrId;
            bError     := TRUE;
            eState     := E_CSVLogState.CSV_CLOSE;
        ELSE
            eState := E_CSVLogState.CSV_WRITE_ROW;
        END_IF
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `sHeader := '...$R$N'` | The column header string. `$R$N` is the IEC 61131-3 escape for `\r\n` (Windows CRLF line ending). This ensures the CSV opens correctly in Excel on Windows. |
| 3 | `cbLen := INT_TO_UDINT(LEN(sHeader))` | `LEN()` returns INT; `FB_FileWrite.cbWriteLen` requires UDINT → explicit cast. The length is the byte count of the string content, not the buffer size. |
| 5-9 | `fbFileWrite(...)` | Write the header bytes to the file. `pWriteBuff := ADR(sHeader)` — pointer to the string. `cbWriteLen := cbLen` — how many bytes to write. |
| 11-18 | Completion check | On error: close the file (go to CSV_CLOSE) to avoid a stuck open handle. On success: proceed to write the data row. |

#### State: CSV_WRITE_ROW

```iecst
E_CSVLogState.CSV_WRITE_ROW:
    sTimestamp := SYSTEMTIME_TO_STRING(fbGetTime.systemTime);
    sLine := CONCAT(sTimestamp, ',');

    CASE stValve[1].Source OF
        E_ValveSource.MQTT: sSource := 'MQTT';
        E_ValveSource.HMI:  sSource := 'HMI';
        ELSE                sSource := 'NONE';
    END_CASE
    sLine := CONCAT(sLine, REAL_TO_STRING(stValve[1].Active_Setpoint)); sLine := CONCAT(sLine, ',');
    sLine := CONCAT(sLine, REAL_TO_STRING(stValve[1].Actual_Position)); sLine := CONCAT(sLine, ',');
    sLine := CONCAT(sLine, sSource);                                     sLine := CONCAT(sLine, ',');
    sLine := CONCAT(sLine, INT_TO_STRING(stValve[1].State));            sLine := CONCAT(sLine, ',');
    // ... identical for valve 2, valve 3 ...
    sLine := CONCAT(sLine, REAL_TO_STRING(stSensors.rTemperature_C[2])); sLine := CONCAT(sLine, '$R$N');

    cbLen := INT_TO_UDINT(LEN(sLine));
    fbFileWrite(bExecute := TRUE, hFile := hFilenumber,
                pWriteBuff := ADR(sLine), cbWriteLen := cbLen);

    IF NOT fbFileWrite.bBusy THEN
        fbFileWrite(bExecute := FALSE);
        IF fbFileWrite.bError THEN
            nErrorCode := fbFileWrite.nErrId;
            bError     := TRUE;
        ELSE
            bError      := FALSE;
            dtLastWrite := SYSTEMTIME_TO_DT(fbGetTime.systemTime);
        END_IF
        eState := E_CSVLogState.CSV_CLOSE;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `SYSTEMTIME_TO_STRING(fbGetTime.systemTime)` | Converts the system time struct to `'YYYY-MM-DD HH:MM:SS'` format. This is the first column. |
| 3 | `sLine := CONCAT(sTimestamp, ',')` | Start the CSV row with the timestamp followed by a comma. |
| 5-8 | `CASE stValve[1].Source` | Translate the `E_ValveSource` enum to a readable string. IEC 61131-3 has no built-in enum-to-string; this CASE is the standard pattern. |
| 9-12 | Four columns per valve | Setpoint %, actual %, source string, state integer — separated by commas. `INT_TO_STRING(stValve[1].State)` converts the enum (which is stored as INT) to its numeric string. |
| Last sensor line | `CONCAT(sLine, '$R$N')` | The last column uses `$R$N` (CRLF) instead of a trailing comma to properly end the CSV row. |
| 25 | `dtLastWrite := SYSTEMTIME_TO_DT(...)` | Record the write timestamp. `DT` (Date-and-Time) is the IEC type that combines date and time in one variable. |
| 27 | `eState := CSV_CLOSE` | Always close the file after writing — whether the write succeeded or failed. |

#### State: CSV_CLOSE

```iecst
E_CSVLogState.CSV_CLOSE:
    fbFileClose(hFile := hFilenumber, bExecute := TRUE);
    IF NOT fbFileClose.bBusy THEN
        fbFileClose(bExecute := FALSE);
        hFilenumber := 0;
        eState      := E_CSVLogState.CSV_IDLE;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `fbFileClose(hFile := hFilenumber, bExecute := TRUE)` | Close the open file handle. This flushes the OS write buffer to disk and releases the file lock. Non-blocking — may take multiple cycles. |
| 4 | `fbFileClose(bExecute := FALSE)` | Clear Execute after completion. |
| 5 | `hFilenumber := 0` | Reset the handle to 0 (invalid) so it cannot be accidentally reused. |
| 6 | `eState := CSV_IDLE` | Return to idle and wait for the next trigger. The interval timer may already be running during this state. |

#### State: CSV_ERROR

```iecst
E_CSVLogState.CSV_ERROR:
    bBusy  := FALSE;
    bError := TRUE;
    IF NOT bTriggerWrite THEN
        eState := E_CSVLogState.CSV_IDLE;
    END_IF
```

| Line | Code | Purpose |
|------|------|---------|
| 2 | `bBusy := FALSE` | Not doing I/O in error state. |
| 3 | `bError := TRUE` | Keep error flag asserted while in this state. |
| 4-6 | `IF NOT bTriggerWrite THEN IDLE` | Wait for `bTriggerWrite` to de-assert (timer resets, button released), then return to IDLE. On the next trigger, the full sequence will retry. This prevents the logger from immediately re-erroring on the same trigger pulse. |

---

## 21. Summary — Complete Code Flow

Here is the complete execution sequence for a single PLC cycle in normal steady-state operation:

```
1. fbSensorIO.Run()               — Read and filter sensors
2. fbValve[1..3]() calls          — Update state machines, call MC_Power, read position
3. fbMqttManager() body           — Drain RX queue, build/publish JSON if due
4. fbCSVLogger() body             — Check timer, append CSV row if due
5. GVL_HMI mirror assignments     — Copy GVL_System → GVL_HMI for HMI display
6. SystemReady / AnyFaultActive   — Compute health flags
```

All of these run in MAIN once per PLC cycle (default 10 ms).
At 10 ms cycles there are 6,000 cycles per minute. The CSV logger
triggers every 15 minutes (90,000 cycles between writes) and the
MQTT publisher every 5 minutes (30,000 cycles). Valve moves take
typically 2–6 seconds (200–600 cycles).

