# Veksi Irrigation Control System

A TwinCAT 3 (Beckhoff PLC) project that controls **3 irrigation gate valves**
with HMI, MQTT, sensor monitoring, and CSV logging.

## Features

- **3 valves**, position 0-100 % via TC2_MC2 motion control
- **Water level** monitoring via analog input
- **Temperature** monitoring via EL3202 RTD card (2 probes)
- **HMI** (TcHMI) with setpoint inputs, status displays, MQTT config panel
- **MQTT** (TF6701) bidirectional:
  - Publishes status JSON every 5 minutes
  - Subscribes to a command topic for remote setpoints
  - Per-valve override enable
- **Source indicator** (HMI / MQTT / NONE) on the HMI for every valve
- **CSV logging** with monthly file rotation, real timestamps and sensor data
- **State machines** for valves, MQTT, and CSV logger - all documented

## Hardware (per design picture)

| Module          | Purpose                                              |
| --------------- | ---------------------------------------------------- |
| CX5140-0195     | Embedded PC (controller)                             |
| EK1521-0010     | EtherCAT junction (single-mode fibre)                |
| EL1859          | 16x digital input/output                             |
| EL3202          | 2x PT100 temperature input                           |
| EL1004          | 4x digital input                                     |
| EL3074          | 4x analog input (4-20 mA)                            |
| EK1322          | EtherCAT P junction                                  |
| EL9011          | EtherCAT bus end                                     |
| EPP7041-1002    | Stepper drive (1 per valve)                          |
| PS2001-2410     | 24 V DC power supply                                 |

## Software prerequisites

- **TwinCAT 3.1** build 4026.x (Engineering + XAR)
- **TC2_MC2** library (motion control)
- **TF6701** IoT MQTT supplement
- **Tc3_IotBase** + **Tc3_JsonXml** libraries
- **Visual Studio 2019/2022** with TwinCAT XAE
- An MQTT broker (Mosquitto recommended for testing)

## Quick start

```text
git clone <this-repo>
# Open VeKsi_Project.sln in Visual Studio + TwinCAT XAE
# Configure 3 NC axes (see docs/SETUP.md)
# Build + Activate Configuration
# Open HMI/HMI.hmiproj and deploy
# Edit MQTT broker settings from the HMI panel and click Apply
```

## Documentation

See [docs/](docs/) for the full documentation set:

| File                                            | Content                           |
| ----------------------------------------------- | --------------------------------- |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)    | Module layout and data flow       |
| [docs/SETUP.md](docs/SETUP.md)                  | Recreate the project from scratch |
| [docs/CONFIGURATION.md](docs/CONFIGURATION.md)  | Tunable constants reference       |
| [docs/STATE_MACHINES.md](docs/STATE_MACHINES.md)| Valve, MQTT, CSV state diagrams   |
| [docs/HMI_FLOW.md](docs/HMI_FLOW.md)            | HMI screens + operator workflow   |
| [docs/MQTT_PROTOCOL.md](docs/MQTT_PROTOCOL.md)  | Topic schema + JSON examples      |
| [docs/CSV_FORMAT.md](docs/CSV_FORMAT.md)        | CSV columns + rotation rules      |

## Repository layout

```text
Veksi_Project/
|-- XAE/VekSi_PLC/           # TwinCAT 3 PLC project
|   |-- Functions/           # POUs (FB_ValveControl, FB_SensorIO, FB_MqttManager, FB_CsvLogger, MAIN)
|   |-- State_Var/           # DUTs (enums + structs)
|   `-- Variables_Lists/     # GVLs (Config, IO, System, HMI)
|-- HMI/                     # TcHMI project (Desktop.view)
|-- docs/                    # Project documentation
`-- VeKsi_Project.sln        # Visual Studio solution
```

## License

Proprietary - internal use only unless otherwise agreed.
