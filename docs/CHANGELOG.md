# Changelog

## 2026-04-29 — Quality + functionality refactor

### Code structure

- Renamed misspelled folder `Funtions/` -> `Functions/`. Updated
  all `<Compile Include="...">` paths in `VekSi_PLC.plcproj`.
- Added new function block `FB_SensorIO` to encapsulate raw
  ADC -> engineering-unit scaling for water level, temperature,
  and supplementary position-feedback channels. Includes a
  configurable low-pass filter and per-channel fault detection.
- Added new DUT `ST_SensorData` to carry the structured sensor
  output between FB_SensorIO and consumers.

### Bug fixes

- **MQTT command Valve2 / Valve3 index swap** in
  `FB_MqttManager` (was `[3]:=Valve2; [2]:=Valve3;` -> now
  correctly `[2]:=Valve2; [3]:=Valve3`).
- **`fbHOme` typo** in `FB_ValveControl` HOMING state (was
  `fbHOme` with capital O, now `fbHome`).
- **Setpoint arbitration** in `FB_ValveControl`: previously
  `tempSetpoint := LIMIT(0.0, HMI_Setpoint, 100.0)` ran
  unconditionally and `Source` was never written. Now MQTT
  is also considered, with HMI taking priority on the same
  cycle, and `Source` is explicitly set to `HMI`/`MQTT` whenever
  it changes.
- **CSV row source field** in `FB_CsvLogger` was uninitialised
  (commented-out code referenced a non-existent enum). Now a
  per-valve `CASE` correctly maps `E_ValveSource` -> 'HMI' /
  'MQTT' / 'NONE'.
- **CSV sensor data** was hardcoded to `-999`. Now reads real
  values from the new `stSensors` input.
- **MQTT `tempPublishInterval` comment was wrong** (said 5 min
  but value was 120 = 2 min). Corrected to `300` with matching
  comment.
- **`HMI_MQTT_Config.bApplyConfig`** is now auto-cleared in
  MAIN after the rising edge has been consumed, mirroring the
  reset-button pattern.

### Wiring fixes

- `MAIN` previously hardcoded `MQTT_Setpoint := 0.0` and
  `MQTT_Enabled := FALSE` for all 3 valves. Now correctly wired
  to `fbMqttManager.rMqttValveSetpoint[i]` and the AND of
  master / per-valve / per-command MQTT enable flags.
- `MAIN` now wires the full `FB_MqttManager` interface
  (config, all valve+sensor data for outgoing JSON, all
  outputs to `GVL_System.MQTT_*`).
- `FB_MqttManager` now **auto-subscribes** to the command
  topic on each new connection (no HMI button needed).
- `FB_MqttManager` `BuildStatusJson` now includes
  `water_level_mm` in addition to `water_level_pct`.
- `FB_CsvLogger` now logs valve State as integer column.

### Code quality

- Removed dead commented `fbSetPos` block in INIT state of
  `FB_ValveControl`.
- Removed obsolete commented JSON-build references.
- Added comprehensive docstring headers to every FB and POU.
- Standardised state-machine comments and variable naming.
- Switched `ST_MQTT_Command` to use `BOOL Valve_N_Enable`
  fields for per-valve override gating.

### HMI

- Added bindings to homing buttons 8 and 9 (valve 2 and valve
  3 buttons were missing `data-tchmi-state-symbol`).
- Added new controls (off-screen positions; reposition in
  TcHMI Engineering after import):
  - Water level mm / % displays
  - Temperature 1 / 2 displays
  - Per-valve source-text indicators (HMI / MQTT / NONE)
  - Per-valve MQTT enable checkboxes
  - Master MQTT enable checkbox
  - MQTT broker config panel (host, port, user, pass, topics)
  - Apply & Reconnect button + Publish Now button
  - System ready indicator
  - CSV enable checkbox + filename display

### Documentation

- Replaced empty `README.md` with full project overview.
- Added `docs/` directory:
  - `ARCHITECTURE.md` — module layout + data flow diagrams
  - `STATE_MACHINES.md` — Mermaid state diagrams for valves, MQTT, CSV
  - `HMI_FLOW.md` — operator workflow diagrams
  - `MQTT_PROTOCOL.md` — topic schema + JSON examples
  - `CSV_FORMAT.md` — column reference + rotation rules
  - `SETUP.md` — recreate the project from scratch
  - `CONFIGURATION.md` — tunable constants reference
  - `CHANGELOG.md` — this file

### Security

- Sanitised hardcoded MQTT defaults (was `imsiot.aws.thinger.io`
  with a real password in source). Now defaults to
  `192.168.1.100` with empty username/password — operators
  enter real credentials from the HMI.
