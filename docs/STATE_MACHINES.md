# State Machines

## `FB_ValveControl`

`FB_ValveControl` implements the valve motion state machine with TC2_MC2 function blocks, physical limit inputs, and manual jog handling.

```mermaid
stateDiagram-v2
    [*] --> INIT
    INIT --> HOMING: axis ready and not Manual
    INIT --> MANNUAL_JOG: axis ready and Manual
    HOMING --> IDLE: MC_Home Done
    HOMING --> HALT: Move_Stop
    HOMING --> FAULT: MC_Home Error
    IDLE --> MOVING: homed and target outside tolerance
    IDLE --> HOMING: homing edge
    IDLE --> MANNUAL_JOG: Manual selected
    MOVING --> HOLD: MC_MoveAbsolute Done
    MOVING --> IDLE: CommandAborted
    MOVING --> HALT: Move_Stop
    MOVING --> FAULT: MC_MoveAbsolute Error
    HOLD --> MOVING: target outside tolerance
    HOLD --> HOMING: homing edge
    HOLD --> MANNUAL_JOG: Manual selected
    MANNUAL_JOG --> HALT: jog released after motion or Stop
    MANNUAL_JOG --> IDLE: Manual deselected
    MANNUAL_JOG --> FAULT: MC_Jog Error
    HALT --> MANNUAL_JOG: halt done while Manual
    HALT --> IDLE: Reset / non-manual recovery
    HALT --> FAULT: MC_Halt Error
    FAULT --> RESET: Reset edge
    RESET --> HOMING: MC_Reset Done
```

### Valve states

| State | Value | Main behavior |
| --- | ---: | --- |
| `INIT` | 0 | Clears execute flags and waits for drive power/status. |
| `HOMING` | 1 | Runs `MC_Home` using the configured homing mode and zero-position input. |
| `IDLE` | 2 | Waits for a target change or homing request. |
| `MOVING` | 3 | Runs `MC_MoveAbsolute` to `rTarget_mm`. |
| `HALT` | 4 | Runs `MC_Halt`, adopts actual position as held target. |
| `HOLD` | 5 | Holds at target and watches for target changes. |
| `MANNUAL_JOG` | 6 | Manual hardware-panel jog mode. Name is spelled this way in the current enum/code. |
| `FAULT` | 7 | Latched fault; waits for reset. |
| `RESET` | 8 | Runs `MC_Reset`; then re-homes. |

### Manual jog rules

- Manual mode is selected by `currentcommandsrc = E_CommandSource.Manual`.
- Jog up requires Manual mode, jog-up pressed, jog-down not pressed, no top limit, and no fault.
- Jog down requires Manual mode, jog-down pressed, jog-up not pressed, no zero/bottom limit, and no fault.
- LEDs blink while jogging and are solid on at their corresponding limit.

## `FB_MqttManager`

```mermaid
stateDiagram-v2
    [*] --> DISABLED
    DISABLED --> CONNECTING: bEnable
    CONNECTING --> CONNECTED: client connected
    CONNECTING --> WAIT_RECONNECT: client error
    CONNECTING --> DISCONNECTING: bEnable false
    CONNECTED --> DISCONNECTING: bEnable false
    CONNECTED --> DISCONNECTING: Apply config edge
    CONNECTED --> WAIT_RECONNECT: connection lost
    DISCONNECTING --> CONNECTING: reconnect requested
    DISCONNECTING --> DISABLED: otherwise
    WAIT_RECONNECT --> CONNECTING: reconnect timer done
    WAIT_RECONNECT --> DISABLED: bEnable false
```

| State | Behavior |
| --- | --- |
| `DISABLED` | Clears connect command and waits for MQTT enable. |
| `CONNECTING` | Applies host, port, client ID, credentials, TLS fields, and executes the MQTT client. |
| `CONNECTED` | Maintains connection, auto-subscribes once, handles config changes/dropouts. |
| `DISCONNECTING` | Executes client with connect command false until disconnected. |
| `WAIT_RECONNECT` | Waits `tReconnectDelay` before retrying. |

## `FB_CsvLogger`

```mermaid
stateDiagram-v2
    [*] --> CSV_IDLE
    CSV_IDLE --> CSV_PREPARE: timer or force write
    CSV_PREPARE --> CSV_OPEN: filename prepared / file check complete
    CSV_OPEN --> CSV_WRITE_HDR: new file
    CSV_OPEN --> CSV_WRITE_ROW: existing file
    CSV_OPEN --> CSV_ERROR: open failed
    CSV_WRITE_HDR --> CSV_WRITE_ROW: header written
    CSV_WRITE_HDR --> CSV_CLOSE: write failed
    CSV_WRITE_ROW --> CSV_CLOSE: row written or write failed
    CSV_CLOSE --> CSV_IDLE: close complete
    CSV_ERROR --> CSV_IDLE: trigger cleared
```

| State | Behavior |
| --- | --- |
| `CSV_IDLE` | Waits for interval timer or forced-write edge. |
| `CSV_PREPARE` | Builds `IrrigationLog_YYYY-MM.csv` and checks if it exists. |
| `CSV_OPEN` | Opens the file in append mode. |
| `CSV_WRITE_HDR` | Writes the header for new files. |
| `CSV_WRITE_ROW` | Builds and writes one data row. |
| `CSV_CLOSE` | Closes file handle. |
| `CSV_ERROR` | Reports error and waits for next trigger cycle. |
