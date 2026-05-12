# Changelog

## 2026-05-11 — Documentation refresh for current PLC/HMI state

### Updated documentation scope

- Rewrote the documentation set to match the current PLC implementation instead of the older HMI/MQTT arbitration design.
- Added an explicit note that the current HMI and the attached screenshot are **development/test HMI assets**, not the final production HMI.
- Updated command-source documentation to describe the system-wide `HMI_CommandSource` selector with `HMI`, `MQTT`, and `Manual` modes.
- Updated valve documentation for the current `FB_ValveControl` interface: selected `Active_Setpoint`, `currentcommandsrc`, manual jog inputs, top/bottom limits, jog LEDs, and `lastcommandsrc`.
- Updated the valve state docs to include the current enum ordering and `MANNUAL_JOG` state name as it exists in code.
- Updated MQTT docs to the current command schema: `Valve1`, `Valve2`, and `Valve3` only. Removed stale per-valve MQTT enable payload fields from the docs.
- Updated MQTT defaults to the current `GVL_Config` values: `imsiot.aws.thinger.io`, port `8883`, client ID `Beckhoff`, and `irrigation/status` / `irrigation/command` topics.
- Updated CSV docs for the current source strings (`HMI`, `MQTT`, `Manual`, `NONE`) and current `E_ValveState` values.
- Updated setup and troubleshooting steps for axis linking, I/O linking, manual jog testing, MQTT mode testing, and CSV forced-write testing.

### Files refreshed

- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/CONFIGURATION.md`
- `docs/MQTT_PROTOCOL.md`
- `docs/HMI_FLOW.md`
- `docs/CSV_FORMAT.md`
- `docs/STATE_MACHINES.md`
- `docs/SETUP.md`
- `docs/CODE_WALKTHROUGH.md`
- `docs/CODE_LINE_BY_LINE.md`
- `docs/CHANGELOG.md`

## 2026-04-29 — Prior implementation refactor summary

The earlier refactor introduced or documented these implementation themes:

- `Functions/` folder naming cleanup.
- `FB_SensorIO` for raw-to-engineering-unit sensor handling.
- Structured `ST_SensorData` output.
- MQTT Valve2/Valve3 mapping correction.
- Valve-control source and setpoint handling cleanup.
- CSV source/sensor row fixes.
- MQTT status publication and auto-subscribe behavior.
- Development HMI controls for setpoints, MQTT, CSV, and diagnostics.

Refer to Git history for exact code changes from that implementation phase.
