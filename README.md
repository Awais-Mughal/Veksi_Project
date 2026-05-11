# Veksi Irrigation Control System

TwinCAT 3 / Beckhoff PLC project for a **3-valve irrigation gate system** with local HMI operation, MQTT telemetry/commands, sensor scaling, and CSV logging.

> **HMI note:** the current `HMI/Desktop.view` and the screenshot used during development are a **test/development HMI only**. They are useful for exercising bindings, mode selection, MQTT publishing, and CSV logging, but they are not a final production operator screen.

## Current capabilities

- Controls **3 stepper-driven gate valves** through TC2_MC2 motion control.
- Uses a system-wide command source selector: **HMI**, **MQTT**, or **Manual**.
- Converts valve commands from `0–100 %` to axis travel using `VALVE_FULL_STROKE_MM`.
- Supports per-valve stop, reset, homing, raw target/position diagnostics, and state/fault display.
- Supports local/manual jog inputs and jog LEDs through `GVL_IO` when **Manual** source is selected.
- Reads water level, two temperature probes, and position-feedback channels through `FB_SensorIO`.
- Publishes status JSON and receives command JSON through `FB_MqttManager`.
- Logs monthly CSV files through `FB_CsvLogger`, with periodic and forced writes.

## Hardware represented in the project

| Module | Purpose |
| --- | --- |
| CX5140 / TwinCAT runtime | PLC controller |
| EL3074 | 4-channel analog input, used for water-level / feedback raw inputs |
| EL3202 | 2-channel PT100 temperature input |
| EL1859 / EL1004 | Digital I/O for limits, buttons, lamps, and auxiliary inputs |
| EK1322 / EK1521 / EL9011 | EtherCAT / EtherCAT P topology components |
| EPP7041-1002 | Stepper drives, one per valve |

## Important defaults

| Area | Current default |
| --- | --- |
| Full valve stroke | `126 mm` (`GVL_Config.VALVE_FULL_STROKE_MM`) |
| Position tolerance | `0.5 %` |
| CSV path | `C:\TwinCAT\3.1\Boot\Log\` |
| CSV file pattern | `IrrigationLog_YYYY-MM.csv` |
| MQTT broker | `imsiot.aws.thinger.io` |
| MQTT port | `8883` |
| MQTT publish topic | `irrigation/status` |
| MQTT subscribe topic | `irrigation/command` |
| MQTT publish interval | `300 s` / 5 minutes |

Review and calibrate these values before using real hardware.

## Quick start

```text
# Open VeKsi_Project.sln in Visual Studio with TwinCAT XAE
# Link the three MAIN.Axis_ValveN references to NC axes
# Link GVL_IO physical inputs/outputs to the EtherCAT terminals
# Build and Activate Configuration
# Open/deploy HMI/HMI.hmiproj for test operation
# Select HMI, MQTT, or Manual mode from the HMI/test panel
```

## Documentation

| File | Content |
| --- | --- |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Module layout, data flow, and command-source arbitration |
| [docs/SETUP.md](docs/SETUP.md) | Build, link, deploy, and smoke-test checklist |
| [docs/CONFIGURATION.md](docs/CONFIGURATION.md) | Compile-time constants and runtime HMI/MQTT settings |
| [docs/STATE_MACHINES.md](docs/STATE_MACHINES.md) | Valve, MQTT, and CSV state machines |
| [docs/HMI_FLOW.md](docs/HMI_FLOW.md) | Development HMI workflow and symbol bindings |
| [docs/MQTT_PROTOCOL.md](docs/MQTT_PROTOCOL.md) | Topics, payloads, and behavior |
| [docs/CSV_FORMAT.md](docs/CSV_FORMAT.md) | CSV filename, columns, and state values |
| [docs/CODE_WALKTHROUGH.md](docs/CODE_WALKTHROUGH.md) | Practical code walkthrough by module |
| [docs/CODE_LINE_BY_LINE.md](docs/CODE_LINE_BY_LINE.md) | Code-reading reference for key PLC files |
| [docs/CHANGELOG.md](docs/CHANGELOG.md) | Documentation update history |

## Repository layout

```text
Veksi_Project/
|-- XAE/VekSi_PLC/
|   |-- Functions/           # MAIN and function blocks
|   |-- State_Var/           # DUTs: enums and structs
|   `-- Variables_Lists/     # GVL_Config, GVL_IO, GVL_System, GVL_HMI
|-- HMI/                     # TcHMI development/test project
|-- docs/                    # Project documentation
`-- VeKsi_Project.sln        # Visual Studio / TwinCAT solution
```

## License

Proprietary - internal use only unless otherwise agreed.
