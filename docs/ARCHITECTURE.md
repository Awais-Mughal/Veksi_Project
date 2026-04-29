# Architecture

## Module overview

The PLC project consists of **5 function blocks** orchestrated by `MAIN`,
plus 4 GVLs and 6 user-defined types.

| Module             | Type | File                                     | Responsibility                                                  |
| ------------------ | ---- | ---------------------------------------- | --------------------------------------------------------------- |
| `MAIN`             | PRG  | `Functions/MAIN.TcPOU`                   | Orchestrate FBs, copy data between GVLs                         |
| `FB_ValveControl`  | FB   | `Functions/FB_ValveControl.TcPOU`        | Per-valve TC2_MC2 state machine (instantiated 3x)               |
| `FB_SensorIO`      | FB   | `Functions/FB_SensorIO.TcPOU`            | Read raw analog inputs, scale, filter, fault-detect             |
| `FB_MqttManager`   | FB   | `Functions/FB_MqttManager.TcPOU`         | TF6701 MQTT client; publish + subscribe + JSON                  |
| `FB_CsvLogger`     | FB   | `Functions/FB_CSVLogger.TcPOU`           | Monthly CSV log file; cyclic and forced row writes              |

## Data-flow diagram

```mermaid
flowchart TB
    subgraph IO["Hardware I/O"]
        AI[GVL_IO<br/>Analog/digital INs]
    end

    subgraph FBs["Function Blocks"]
        SIO[FB_SensorIO]
        VC1[FB_ValveControl<br/>Valve 1]
        VC2[FB_ValveControl<br/>Valve 2]
        VC3[FB_ValveControl<br/>Valve 3]
        MQT[FB_MqttManager]
        CSV[FB_CsvLogger]
    end

    subgraph GVLs["Global Variable Lists"]
        SYS[GVL_System<br/>runtime state]
        HMI[GVL_HMI<br/>HMI bindings]
    end

    subgraph EXT["External"]
        BRK[MQTT Broker]
        FS[CSV file<br/>C:\TwinCAT\3.1\Boot\Log]
        WEB[TcHMI client<br/>web browser]
    end

    AI --> SIO
    SIO --> SYS
    HMI -- setpoints/commands --> SYS
    SYS --> VC1
    SYS --> VC2
    SYS --> VC3
    VC1 --> SYS
    VC2 --> SYS
    VC3 --> SYS
    MQT -- parsed cmds --> SYS
    SYS --> MQT
    SYS --> CSV
    SYS -- mirrors --> HMI
    HMI <--> WEB
    MQT <--> BRK
    CSV --> FS
```

## GVL responsibilities

| GVL          | Owner / writer        | Reader                         | Purpose                                  |
| ------------ | --------------------- | ------------------------------ | ---------------------------------------- |
| `GVL_Config` | (constant)            | All FBs                        | Compile-time tunables                    |
| `GVL_IO`    | EtherCAT I/O mapping  | `FB_SensorIO`, `FB_ValveControl` | Raw analog/digital inputs              |
| `GVL_System` | All FBs               | `MAIN`                         | Runtime shared state                     |
| `GVL_HMI`    | `MAIN` (ACT_*) / TcHMI (HMI_*) | All FBs               | HMI <-> PLC interface                    |

## Cycle order in `MAIN`

```mermaid
sequenceDiagram
    participant MAIN
    participant SensorIO as FB_SensorIO
    participant Valve as FB_ValveControl x3
    participant MQTT as FB_MqttManager
    participant CSV as FB_CsvLogger

    Note over MAIN: First scan only
    MAIN->>MAIN: Load MQTT defaults into GVL_HMI
    Note over MAIN: Every cycle
    MAIN->>MAIN: Copy HMI inputs -> GVL_System
    MAIN->>SensorIO: Run sensor reading
    SensorIO-->>MAIN: GVL_System.Sensors populated
    MAIN->>Valve: Pass setpoints + sensor + MQTT data
    Valve-->>MAIN: Valve state, position, source
    MAIN->>MAIN: Auto-clear reset commands
    MAIN->>MAIN: Build timestamp string
    MAIN->>MQTT: Run MQTT manager
    MQTT-->>MAIN: bMqttValveSetpoint, status
    MAIN->>CSV: Run CSV logger
    MAIN->>MAIN: Mirror runtime data -> GVL_HMI
    MAIN->>MAIN: Compute SystemReady, AnyFault flags
```

## Setpoint arbitration (per valve)

`FB_ValveControl` decides which setpoint to follow:

```mermaid
flowchart LR
    A[Cycle start] --> B{MQTT_Enabled<br/>AND<br/>MQTT changed?}
    B -- yes --> C[ActiveSetpoint = MQTT<br/>Source = MQTT]
    B -- no --> D{HMI Update<br/>button pressed?}
    C --> D
    D -- yes --> E[ActiveSetpoint = HMI<br/>Source = HMI]
    D -- no --> F[Keep last setpoint]
    E --> G[Convert pct to mm,<br/>feed into MOVING state]
    F --> G
```

HMI always wins if both arrive in the same PLC cycle.

## Source-of-truth conventions

- **Operator inputs** flow `GVL_HMI.HMI_*` -> `GVL_System.Valve[n]`
- **PLC outputs** flow `GVL_System.Valve[n]` -> `GVL_HMI.ACT_*`
- **MQTT data** uses `GVL_System.MQTT_*` as the runtime mirror
- **Sensor data** uses `GVL_System.Sensors` (struct) for all consumers
