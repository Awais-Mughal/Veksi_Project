# MQTT Protocol

## Topics and connection

The MQTT manager uses two runtime-configurable topics stored in `GVL_HMI.HMI_MQTT_Config`.

| Direction | Default topic | Config field |
| --- | --- | --- |
| Publish status | `irrigation/status` | `sMainTopic` / `sStatusTopic` input |
| Subscribe commands | `irrigation/command` | `SubscribeTopic` |

Current default broker settings:

| Parameter | Default |
| --- | --- |
| Broker | `imsiot.aws.thinger.io` |
| Port | `8883` |
| Client ID | `Beckhoff` |
| Username | `ims_iot` |
| Password | `123456789` |
| Reconnect delay | `T#30S` from `ST_MqttConfig.tReconnectDelay` |

`FB_MqttManager` auto-subscribes to `SubscribeTopic` each time it reaches `CONNECTED`.

## Incoming command payload

Publish command JSON to `irrigation/command`:

```json
{
  "Valve1": 50,
  "Valve2": 25,
  "Valve3": 75
}
```

| Field | Type | Meaning |
| --- | --- | --- |
| `Valve1` | integer / DINT | Valve 1 target, clamped to `0–100 %`. |
| `Valve2` | integer / DINT | Valve 2 target, clamped to `0–100 %`. |
| `Valve3` | integer / DINT | Valve 3 target, clamped to `0–100 %`. |

The current command schema does **not** include per-valve MQTT enable booleans. MQTT authority is selected system-wide from the HMI with `HMI_CommandSource = E_CommandSource.MQTT`, and MQTT must also be enabled and connected.

## Outgoing status payload

`BuildStatusJson` currently publishes valve setpoints, actual positions, source strings, temperature probe 1, and water-level values. The timestamp field is present in comments in code but is currently not emitted by the string builder.

Current shape:

```json
{
  "valve_1_setpoint": 50.0,
  "valve_1_actual": 49.8,
  "valve_1_source": "HMI",
  "valve_2_setpoint": 25.0,
  "valve_2_actual": 25.1,
  "valve_2_source": "MQTT",
  "valve_3_setpoint": 75.0,
  "valve_3_actual": 74.9,
  "valve_3_source": "Manual",
  "temperature_c": 22.5,
  "water_level_pct": 65.3,
  "water_level_mm": 653.0
}
```

> Implementation note: the current string builder starts with `{` and then concatenates fields beginning with `,"valve_1_setpoint"`. Verify the generated preview on the HMI (`ACT_MQTT_JsonPreview`) during testing.

## Publish behavior

| Trigger | Retain flag | Topic |
| --- | --- | --- |
| `HMI_MQTT_mPublish` rising edge | `TRUE` | `stConfig.sMainTopic` |
| Cyclic publish timer | `FALSE` | `sStatusTopic` |

The cyclic timer uses `HMI_MQTT_Config.tStatusPublishInterval`, which is seeded from `MQTT_DEFAULT_PUBLISH_INTERVAL` (`300 s`).

## Test commands

Example with Mosquitto:

```bash
mosquitto_pub -h <broker-host> -p 8883 -t irrigation/command -m '{"Valve1":50,"Valve2":25,"Valve3":75}'
```

Expected PLC/HMI behavior:

1. MQTT state reaches `CONNECTED`.
2. `ACT_MQTT_LastRxTopic` shows the command topic.
3. `ACT_MQTT_NewCommand` pulses.
4. If `HMI_CommandSource` is MQTT and the connection is enabled/connected, `MAIN` copies the parsed setpoints into `Active_Setpoint` and triggers the valve FBs.
