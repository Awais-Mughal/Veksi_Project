# HMI Flow

The HMI is a single TcHMI view (`HMI/Desktop.view`) that exposes
all operator controls and runtime status.

## Screen layout

```text
+------------------------------------------------------------+
| VALVES                                                     |
| ----------------------------------------------------------|
| Valve 1: [setpoint input]  [position display]  [Stop] [Homing] [Source: HMI/MQTT]  [MQTT]
| Valve 2: [setpoint input]  [position display]  [Stop] [Homing] [Source: HMI/MQTT]  [MQTT]
| Valve 3: [setpoint input]  [position display]  [Stop] [Homing] [Source: HMI/MQTT]  [MQTT]
|                                                            |
| [Update]   [Reset All]                System Ready: Y/N    |
| ----------------------------------------------------------|
| SENSORS                                                    |
| Water Level (mm): [val]    Water Level (%): [val]          |
| Temperature 1   : [val]    Temperature 2   : [val]         |
| ----------------------------------------------------------|
| MQTT                                                       |
| [x] Enable MQTT Commands     Connected: Y    [error msg]   |
| Broker: [----]   Port: [----]                              |
| Username: [----] Password: [****]                          |
| Pub Topic: [----]   Sub Topic: [----]                      |
| [Apply & Reconnect]   [Publish Now]                        |
| ----------------------------------------------------------|
| LOGGING                                                    |
| [x] CSV Logging Enabled                                    |
| Current file: IrrigationLog_2026-04.csv                    |
| [Force Write Log]                                          |
+------------------------------------------------------------+
```

> **Note:** the Desktop.view file as shipped places the new
> controls programmatically. Open the view in TcHMI Engineering
> after import to fine-tune positioning.

## Operator workflow

```mermaid
flowchart TD
    A[Login to HMI] --> B[See valve positions, sensors]
    B --> C{Need to move<br/>a valve?}
    C -- yes --> D[Enter setpoint % in numeric input]
    D --> E[Click Update]
    E --> F[Valve moves<br/>Source = HMI]
    C -- no --> G{Allow<br/>MQTT control?}
    G -- yes --> H[Tick Enable MQTT Commands<br/>and per-valve MQTT checkbox]
    H --> I[External system publishes setpoint]
    I --> J[Valve moves<br/>Source = MQTT]
    G -- no --> B

    F --> K{Fault<br/>indicator?}
    J --> K
    K -- yes --> L[Click Reset on faulted valve]
    L --> M[Valve auto-homes, returns to IDLE]
    K -- no --> B
```

## MQTT broker setup workflow

```mermaid
flowchart TD
    A[Open MQTT panel] --> B[Edit broker IP/port/credentials]
    B --> C[Click Apply & Reconnect]
    C --> D[Connection state machine:<br/>CONNECTED -> DISCONNECTING -> CONNECTING]
    D --> E{New connection<br/>OK?}
    E -- yes --> F[Connected indicator: green<br/>Auto-subscribe to command topic]
    E -- no --> G[Error message displayed<br/>Retry after tReconnectDelay]
    G --> D
```

## Emergency stop / fault recovery

```mermaid
flowchart LR
    A[Operator notices issue] --> B{Type?}
    B -- physical --> C[Press Stop on valve row]
    B -- drive fault --> D[See red Fault lamp]
    C --> E[Valve transitions to HALT,<br/>holds at current position]
    E --> F[Click Reset to return to IDLE]
    D --> G[Click Reset on that valve]
    G --> H[FB_ValveControl runs MC_Reset]
    H --> I[Auto-rehome via HOMING state]
    I --> J[IDLE - ready for new setpoints]
```

## HMI symbol bindings reference

All controls bind to `GVL_HMI` symbols via the ADS bridge:

`%s%ADS.PLC1.GVL_HMI.<VariableName>%/s%`

| HMI control type        | GVL_HMI variable family             |
| ----------------------- | ----------------------------------- |
| Numeric input (setpoint)| `HMI_ValveN_Setpoint`               |
| Numeric input (port)    | `HMI_MQTT_Config.nPort`             |
| Textbox                 | `HMI_MQTT_Config.s*`                |
| Checkbox                | `HMI_MQTT_bEnable`, `HMI_ValveN_MQTT_Enable`, `HMI_CSV_Enable` |
| Button (momentary)      | `HMI_*_Reset`, `HMI_*_Homing`, `HMI_UPDATE`, `HMI_MQTT_mPublish`, `HMI_MQTT_ApplyConfig`, `WriteTrigger` |
| Read-only display       | `ACT_*` family                      |
