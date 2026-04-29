# MQTT Protocol

## Topics

The PLC uses **two topics**, both configurable from the HMI:

| Direction | Default topic           | Configured in `GVL_HMI.HMI_MQTT_Config` |
| --------- | ----------------------- | --------------------------------------- |
| Publish   | `irrigation/status`     | `sMainTopic`                            |
| Subscribe | `irrigation/command`    | `SubscribeTopic`                        |

Defaults come from `GVL_Config.MQTT_DEFAULT_*` constants and are
loaded into `GVL_HMI.HMI_MQTT_Config` on the first PLC scan.

## Connection

| Parameter   | Default      | Configurable via                                      |
| ----------- | ------------ | ----------------------------------------------------- |
| Broker      | 192.168.1.100 | `HMI_MQTT_Config.sBrokerAddress`                     |
| Port        | 1883         | `HMI_MQTT_Config.nPort` (use 8883 with TLS)          |
| Client ID   | BeckhoffIrrigationPLC | `HMI_MQTT_Config.sClientId`                 |
| Username    | (empty)      | `HMI_MQTT_Config.sUsername`                          |
| Password    | (empty)      | `HMI_MQTT_Config.sPassword`                          |
| TLS         | FALSE        | `HMI_MQTT_Config.bUseTls`                            |
| Reconnect   | 30 s         | `HMI_MQTT_Config.tReconnectDelay`                    |

After changing any field click **Apply & Reconnect** on the HMI
to make the new settings take effect.

## Publish: status JSON

**Topic:** `<sMainTopic>` (default `irrigation/status`)
**QoS:** 0 (`AtMostOnceDelivery`)
**Retain:** FALSE for cyclic publishes, TRUE for manual publishes
**Interval:** every `tStatusPublishInterval` (default 5 minutes)

Example payload:

```json
{
  "timestamp": "2026-04-28 12:00:00",
  "valve_1_setpoint": 50.0,
  "valve_1_actual": 49.8,
  "valve_1_source": "HMI",
  "valve_2_setpoint": 25.0,
  "valve_2_actual": 25.1,
  "valve_2_source": "MQTT",
  "valve_3_setpoint": 75.0,
  "valve_3_actual": 74.9,
  "valve_3_source": "HMI",
  "temperature_c": 22.5,
  "water_level_pct": 65.3,
  "water_level_mm": 653.0
}
```

The JSON is built by `FB_MqttManager.BuildStatusJson()` from
the runtime data passed in via VAR_INPUT (valve setpoints,
actual positions, sensor data, timestamp).

## Subscribe: command JSON

**Topic:** `<SubscribeTopic>` (default `irrigation/command`)
**QoS:** 1 (`AtLeastOnceDelivery`)

The subscription is **automatic** on connect — no operator
action required.

Expected payload:

```json
{
  "Valve1": 50,
  "Valve2": 25,
  "Valve3": 75,
  "Valve1_Enable": true,
  "Valve2_Enable": true,
  "Valve3_Enable": false
}
```

Field semantics:

- `ValveN`: target position 0–100 % (DINT). Values outside
  this range are clamped to 0–100 by the PLC.
- `ValveN_Enable`: TRUE allows MQTT to override that valve's
  setpoint. The valve's effective MQTT enable also requires:
  - `HMI_MQTT_bEnable` (master switch) = TRUE
  - `HMI_ValveN_MQTT_Enable` (per-valve HMI checkbox) = TRUE
  - `ValveN_Enable` (in this JSON) = TRUE
  All three must be TRUE before MQTT can move the valve.
- Omitting any field leaves the prior value unchanged.

## Testing with Mosquitto

Subscribe to status to verify cyclic publishing:

```text
mosquitto_sub -h <broker> -p 1883 -t 'irrigation/status' -v
```

Send a command:

```text
mosquitto_pub -h <broker> -p 1883 \
  -t 'irrigation/command' \
  -m '{"Valve1":50,"Valve2":25,"Valve3":75,"Valve1_Enable":true,"Valve2_Enable":true,"Valve3_Enable":true}'
```

Watch the HMI:

- Source indicator for each valve switches to "MQTT"
- Valves move to the new positions

## Production hardening recommendations

- Use **TLS** (`bUseTls=TRUE`, port 8883) and trusted CA chain
- Enforce ACLs on the broker so only the controller can publish
  to `irrigation/status` and only authorised clients to
  `irrigation/command`
- Use **MQTT v5** retained messages and last-will if your
  broker supports it
- Authenticate with strong, rotated credentials — store them
  in a secure vault and load via the HMI on startup, not in
  source code
