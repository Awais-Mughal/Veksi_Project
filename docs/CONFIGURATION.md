# Configuration Reference

All compile-time tunables live in `GVL_Config.TcGVL`.
Runtime-adjustable values are in `GVL_HMI.HMI_MQTT_Config`
(loaded from defaults on first scan).

## Valve motion parameters

| Constant                    | Type  | Default     | Unit  | Tuning notes                                              |
| --------------------------- | ----- | ----------- | ----- | --------------------------------------------------------- |
| `VALVE_FULL_STROKE_MM`      | REAL  | 6.096       | mm    | Measure actuator travel at 100 % open. **Must calibrate.** |
| `VALVE_POSITION_TOLERANCE`  | REAL  | 0.5         | %     | In-position dead band. Larger -> faster IDLE, less precision. |
| `VALVE_MOVE_VELOCITY`       | LREAL | 1.5         | mm/s  | Increase for faster moves. Watch for stepper stall on EPP7041. |
| `VALVE_MOVE_ACCELERATION`   | LREAL | 16.9085     | mm/s² | Acceleration ramp.                                       |
| `VALVE_MOVE_DECELERATION`   | LREAL | 16.9085     | mm/s² | Deceleration ramp.                                       |
| `VALVE_MOVE_JERK`           | LREAL | 53.5391     | mm/s³ | 0 = trapezoidal profile; >0 = S-curve.                  |
| `VALVE_HOMING_VELOCITY`     | LREAL | 1.0         | mm/s  | Reference only — actual speed is set in NC Homing tab.   |

## Sensor scaling

```iecst
// Water level — linear from raw INT to mm
WATER_LEVEL_RAW_MIN      : INT  := 0;       // ADC count at 4 mA  (or 0 V)
WATER_LEVEL_RAW_MAX      : INT  := 32767;   // ADC count at 20 mA (or 10 V)
WATER_LEVEL_ENG_MIN_MM   : REAL := 0.0;
WATER_LEVEL_ENG_MAX_MM   : REAL := 1000.0;  // Tank height — CALIBRATE

// Temperature — EL3202 PT100 scaling (0.1 °C per count typical)
TEMP_RAW_SCALE_FACTOR    : REAL := 0.1;
TEMP_OFFSET_C            : REAL := 0.0;     // Trim offset if needed

// Fault threshold
SENSOR_FAULT_THRESHOLD   : INT  := -100;    // raw <= this means disconnected
```

### Calibration procedure

1. With the sensor disconnected, note the raw value
   (`GVL_System.Sensors.rWaterLevel_raw`). It should be at or
   below `SENSOR_FAULT_THRESHOLD`.
2. Apply known minimum (e.g. empty tank), record raw -> set
   `WATER_LEVEL_RAW_MIN`.
3. Apply known maximum (e.g. full tank), record raw -> set
   `WATER_LEVEL_RAW_MAX`.
4. Set `WATER_LEVEL_ENG_MAX_MM` to the physical full-scale
   height in mm.
5. Verify the displayed `ACT_WaterLevel_mm` matches a manual
   measurement at intermediate fill levels.

## CSV logging

| Constant              | Default                              | Notes                              |
| --------------------- | ------------------------------------ | ---------------------------------- |
| `CSV_LOG_INTERVAL_S`  | `T#15M`                              | Time between automatic log rows    |
| `CSV_FILE_PATH`       | `C:\TwinCAT\3.1\Boot\Log\`           | Trailing backslash required        |
| `CSV_FILENAME_PREFIX` | `IrrigationLog_`                     | Filename starts with this          |

The actual filename also includes `YYYY-MM.csv` (monthly
rotation) -> `IrrigationLog_2026-04.csv`.

## MQTT defaults

These defaults populate `GVL_HMI.HMI_MQTT_Config` on the first
PLC scan. Operators can edit them at runtime from the HMI.

| Constant                          | Default                  |
| --------------------------------- | ------------------------ |
| `MQTT_DEFAULT_BROKER_IP`          | `192.168.1.100`          |
| `MQTT_DEFAULT_PORT`               | `1883`                   |
| `MQTT_DEFAULT_CLIENT_ID`          | `BeckhoffIrrigationPLC`  |
| `MQTT_DEFAULT_USERNAME`           | (empty)                  |
| `MQTT_DEFAULT_PASSWORD`           | (empty)                  |
| `MQTT_DEFAULT_TOPIC_PREFIX`       | `irrigation`             |
| `MQTT_DEFAULT_MAIN_TOPIC`         | `irrigation/status`      |
| `MQTT_DEFAULT_SUB_TOPIC`          | `irrigation/command`     |
| `MQTT_DEFAULT_PUBLISH_INTERVAL`   | `300` (seconds = 5 min)  |

## Task cycle

| Constant         | Default | Notes                                         |
| ---------------- | ------- | --------------------------------------------- |
| `TASK_CYCLE_MS`  | 10      | Must match the TwinCAT task setting.          |

If you change the task cycle in TwinCAT (Real-Time -> Tasks ->
PlcTask -> Cycle ticks), update this constant to match for
documentation accuracy.

## Where each constant is used

| Constant                      | Used in                                   |
| ----------------------------- | ----------------------------------------- |
| `VALVE_FULL_STROKE_MM`        | `MAIN` -> `FB_ValveControl.FullStroke_mm` |
| `VALVE_POSITION_TOLERANCE`    | `MAIN` -> `FB_ValveControl.PosTolerance`  |
| `VALVE_MOVE_*`                | `MAIN` -> `FB_ValveControl` motion inputs |
| `VALVE_HOMING_VELOCITY`       | `MAIN` -> `FB_ValveControl.HomeVelocity`  |
| `WATER_LEVEL_*`, `TEMP_*`     | `FB_SensorIO.ScaleLinear`                 |
| `SENSOR_FAULT_THRESHOLD`      | `FB_SensorIO` fault detection             |
| `CSV_LOG_INTERVAL_S`, `CSV_FILE_PATH`, `CSV_FILENAME_PREFIX` | `MAIN` -> `FB_CsvLogger` |
| `MQTT_DEFAULT_*`              | `MAIN` step 0 (one-time init)             |
