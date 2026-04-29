# Setup Guide

Step-by-step recreation of the project from scratch on a new
target IPC.

## 1. Hardware

Per the design picture, the panel includes:

| Position | Module          | Quantity | Function                       |
| -------- | --------------- | -------- | ------------------------------ |
| 100      | PS2001-2410     | 1        | 24 V DC PSU                    |
| 200      | CX5140-0195     | 1        | Embedded PC                    |
| 300      | EK1521-0010     | 1        | EtherCAT fibre junction        |
| 400      | EL1859          | 1        | 16x DI/DO                      |
| 500      | EL3202          | 1        | 2x PT100 RTD                   |
| 600      | EL1004          | 1        | 4x DI                          |
| 700      | EL3074          | 1        | 4x AI 4-20 mA                  |
| 800      | EK1322          | 1        | EtherCAT P junction            |
| 900      | EL9011          | 1        | Bus end terminal               |
| 1000-1200| EPP7041-1002    | 3        | Stepper drives (one per valve) |

Wire each gate-valve actuator to its own EPP7041-1002 drive,
connect the 3 limit switches to digital inputs (we map the
bottom switch as the homing-cam input), and route water-level
+ temperature sensors to the EL3074 + EL3202 channels per the
`GVL_IO` declarations.

## 2. Software prerequisites

Install on the engineering PC:

- TwinCAT XAE Shell (3.1.4026.x or later) — Visual Studio
  integrated edition is fine.
- TwinCAT XAR runtime on the CX5140 (matching version).
- Beckhoff Function: **TF6701** (IoT MQTT) — license required.
- Libraries used:
  - **Tc2_MC2** (motion control)
  - **Tc2_Standard, Tc2_System, Tc2_Utilities**
  - **Tc3_IotBase**, **Tc3_JsonXml**, **Tc3_Module**

These are listed under `<PlaceholderReference>` in
`XAE/VekSi_PLC/VekSi_PLC.plcproj`.

## 3. Open the project

```text
git clone <this-repo>
cd Veksi_Project
# Open VeKsi_Project.sln in Visual Studio
```

The solution contains:

- The TwinCAT project (`XAE/`)
- The TcHMI project (`HMI/`)

## 4. Configure NC axes (3 valves)

For each of the 3 valves:

1. Right-click **MOTION** -> Add new Axis -> NC Axis -> Continuous Axis
2. Set **Encoder** -> linked to encoder input from EPP7041 (or
   simulation for first test)
3. Set **Drive** -> linked to EPP7041 drive
4. **Scaling tab**: set scaling factor so that 1 PLC unit = 1 mm.
5. **Homing tab**: select your homing mode (the project uses
   `MC_Direct` by default; switch in `MAIN.TcPOU` if you have
   a real reference cam).
6. **Soft limits tab**: set min = 0.0 mm, max = `VALVE_FULL_STROKE_MM`
   (default 6.096 mm — calibrate to your actuator).

In the PLC project, link each `AXIS_REF` to its NC axis:

- `MAIN.Axis_Valve1` -> Axes->Axis1
- `MAIN.Axis_Valve2` -> Axes->Axis2
- `MAIN.Axis_Valve3` -> Axes->Axis3

## 5. Link analog and digital I/O

Open `GVL_IO.TcGVL` and link each `AT %I*` symbol to its real
EtherCAT terminal channel:

| GVL_IO symbol         | Hardware channel              | Notes                               |
| --------------------- | ----------------------------- | ----------------------------------- |
| `AI_L1V11`            | EL3074 ch 1                   | Primary water level sensor          |
| `AI_L1V20`            | EL3074 ch 2                   | Secondary water level (optional)    |
| `AI_L2V21`            | EL3074 ch 3                   | Tertiary water level (optional)     |
| `AI_Tmp_1`            | EL3202 ch 1                   | Temperature probe 1 (PT100)         |
| `AI_Tmp_2`            | EL3202 ch 2                   | Temperature probe 2 (PT100)         |
| `AI_PosFeedback_1..3` | (optional supplementary AI)   | Not used by NC; logged for diagnostics |
| `bTop_position_1`     | EL1004 / EL1859 DI            | Top limit switch (over-travel)      |
| `bBottom_position_1`  | EL1004 / EL1859 DI            | Bottom limit / homing cam           |

If you run out of DI channels for separate per-valve limit
switches, share one cam (current default in `MAIN.TcPOU`)
or wire 6 inputs and update the FB call sites.

## 6. Calibrate sensor scaling

In `GVL_Config.TcGVL` adjust:

```iecst
WATER_LEVEL_RAW_MIN     := 0;       // ADC count at 0% (4 mA)
WATER_LEVEL_RAW_MAX     := 32767;   // ADC count at 100% (20 mA)
WATER_LEVEL_ENG_MAX_MM  := 1000.0;  // Tank height in mm — calibrate!
TEMP_RAW_SCALE_FACTOR   := 0.1;     // EL3202 outputs 0.1 °C per count
SENSOR_FAULT_THRESHOLD  := -100;    // raw <= this means disconnected
```

The EL3074 raw range depends on its configuration tab — verify
in the I/O Mapping screen.

## 7. Configure MQTT broker

Defaults are set in `GVL_Config`:

```iecst
MQTT_DEFAULT_BROKER_IP   := '192.168.1.100';
MQTT_DEFAULT_PORT        := 1883;
MQTT_DEFAULT_USERNAME    := '';
MQTT_DEFAULT_PASSWORD    := '';
```

After build + activate, open the HMI -> MQTT panel ->
edit broker IP / port / credentials -> click **Apply & Reconnect**.

For local testing run Mosquitto on the engineering PC:

```text
mosquitto -v -p 1883
```

Set broker IP to the engineering PC's IP and click Apply.

## 8. Build and download

1. **Build** -> Build Solution (resolves all libraries)
2. **TwinCAT** -> Activate Configuration
3. **Login** to PLC and **Start**

Verify in the **Solution Explorer**:

- 3 valves transition INIT -> HOMING -> IDLE
- `GVL_System.SystemReady` becomes TRUE
- `GVL_System.Sensors.bAnySensorFault` is FALSE (assuming the
  sensors are wired)

## 9. Deploy the HMI

1. Open `HMI/HMI.hmiproj`
2. **Publish** to the IPC's HMI server (or the engineering PC
   for local testing)
3. Browse to `http://<ipc-ip>:1010/Live` and you should see
   the Desktop view

## 10. Smoke test

| Test                                                             | Expected                                            |
| ---------------------------------------------------------------- | --------------------------------------------------- |
| Enter setpoint 50 % on Valve 1, click **Update**                 | Valve moves to ~3.05 mm, position display updates   |
| Click **Stop** during a move                                     | Valve transitions to HALT state, halts cleanly      |
| Trigger a fault (e.g. unplug encoder), click **Reset**           | Valve recovers, re-homes, returns to IDLE           |
| Tick **Enable MQTT Commands** + per-valve MQTT, send command JSON| Valve moves; Source indicator says "MQTT"           |
| Click **Force Write Log**                                        | A row appended to `IrrigationLog_YYYY-MM.csv`       |

If any step fails, check `GVL_System.MQTT_LastErrorMsg`,
`CSV_FileError`, or the relevant fault code on the HMI.
