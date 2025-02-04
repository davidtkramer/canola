# Canola

A Node.js library for interacting with CAN buses via Linux SocketCAN. Built with TypeScript and Rust to provide complete type-safety when working with CAN messages.

## Features

🚀 **High performance**: Native Node.js add-on written in Rust for non-blocking SocketCAN access

🔒 **100% Type Safe**: Generate types from KCD files for compile-time validation of CAN messages

📦 **Message schema support**: Encode and decode CAN messages using KCD schemas

🔄 **Broadcast messages**: Easily send messages at specified intervals with native thread timing precision

🎯 **Message filtering**: Performant kernel-level filtering of messages by ID and mask

# Quick Start

Installation

```bash
npm install @canola/core
```

## Basic Usage

```typescript
import { CanSocket } from '@canola/core';

let socket = new CanSocket('can0');

socket.on('message', (frame) => {
  console.log(frame.id, frame.data);
});

socket.write(123, Buffer.from('deadbeefdeadbeef', 'hex'));
```

## Encode/decode messages

Run this command to generate types from your network schema. Outputs a `types.ts` file in the current directory.

```
npx canola type-gen path/to/schema.kcd
```

Import the generated `Messages` type and pass it to the generic param for `CanSchema.loadFile`.

```typescript
import { CanSchema } from '@canola/core';
import { Messages } from './types.js';

let schema = CanSchema.loadFile<Messages>('path/to/schema.kcd');

let socket = new CanSocket('can0');

socket.on('message', (frame) => {
  let message = schema.decode(frame);

  // TypeScript knows message.name can only be one of the names
  // defined in the KCD file, and narrows message.data accordingly
  switch (message.name) {
    case 'MotorData': {
      // message.data is typed as MotorData_Signals
      console.log(message.data.voltage); // number
      console.log(message.data.current); // number
    }
    case 'ChargeStatus': {
      // message.data is typed as ChargeStatus_Signals
      console.log(message.data.chargeStatus); // 'enabled' | 'faulted' | 'standby'
      console.log(message.data.chargeDoorStatus); // 'closing' | 'opening' | 'idle'
    }
    case 'SwitchStatus': {
      if (message.data.swcLeftDoublePress === 1) {
        // name and data are type checked against the KCD schema
        let ventWindows = schema.encode({
          name: 'VehicleControl',
          data: { windowRequest: 'vent' },
        });
        socket.write(ventWindows);
      }
    }
  }
});
```

# Examples

- [Model Y Seat Folding Manager](https://github.com/davidtkramer/canola/tree/main/examples/tesla-seat-manager)
- [CAN Sniffer](https://github.com/davidtkramer/canola/tree/main/examples/can-sniffer)

# Deployment

Canola has been developed and tested on a Raspberry PI 4, but should work on any Linux machine with SocketCAN hardware or virtual SocketCAN interfaces.

## Materials

- Raspberry Pi
- [CAN HAT](https://www.amazon.com/Waveshare-2-Channel-Expansion-Compatible-Protections/dp/B0D3GD458Z)
- [OBD pigtail cable](https://www.amazon.com/gp/product/B09YQ57GXT)
- OBD CAN bus splitter (vehicle specific)
  - Tesla: [Enhance Auto](https://enhauto.com/product/tesla-gen1-obd-cable) | [EV Offer](https://evoffer.com/product/model-3-y-can-diagnostic-cable)

Connect the CAN bus wires on the OBD pigtail cable to the screw terminals on the CAN HAT. Refer to the pinout diagram for your car's OBD port.

If your CAN HAT can provide power to your pi, connect the 12v power and ground wires from the pigtail cable to the HAT.

Connect your OBD splitter to your vehicle, then plugin the pigtail cable into the splitter.

> ⚠️ Cut off or insulate any unused pigtail wires to prevent shorts and possible damage to your vehicle.

## Hardware Config

First, add the appropriate dtoverlays for your can device to `/boot/config.txt`.

For example, Waveshare 2CH CAN HAT+ config:

```
dtparam=spi=on
dtoverlay=i2c0
dtoverlay=spi1-3cs
dtoverlay=mcp2515,spi1-1,oscillator=16000000,interrupt=22
dtoverlay=mcp2515,spi1-2,oscillator=16000000,interrupt=13
```

Reboot your raspberry pi

```
sudo reboot
```

## SocketCAN Config

Setup socketCAN kernel modules.

```
sudo modprobe can
sudo modprobe can_raw
sudo modprobe vcan
```

Bring up CAN interface. Ensure bitrate argument matches your can device.

```
ip link set can0 type can bitrate 500000
ip link set can0 up
```

Verify CAN device is up.

```
ip link show
# for more details:
ip -details -statistics link show can0
```

To auto start CAN interface on boot, create the file `/etc/network/interfaces.d/can0` and add the following:

```
auto can0
iface can0 inet manual
    pre-up /sbin/ip link set can0 type can bitrate 500000
    up /sbin/ip link set can0 up
    down /sbin/ip link set can0 down
```

## Project Setup

To auto start your canola project on boot, create the file `/etc/systemd/system/<your project name>.service` and add the following. Set the Description, ExecStart, WorkingDirectory, and User options accordingly.

```
[Unit]
Description=<your project name>
DefaultDependencies=false

[Service]
Type=simple
ExecStart=/path/to/node /path/to/your/dir/script.js
WorkingDirectory=/path/to/your/dir
User=<your linux user>

[Install]
WantedBy=local-fs.target
```

> With `DefaultDependencies=false`, systemd will start your service immediately after the kernel loads. On a Raspberry Pi 4, the service can be running within seconds of the board receiving power. However, networking, bluetooth, and other services you may require will not be available yet.

# Contributing

Clone repository

```
git clone https://github.com/davidtkramer/canola.git
cd canola
```

Install rust

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Install nvm + node: https://nodejs.org/en/download

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/<VERSION>/install.sh | bash
nvm install 22
```

Install yarn

```
npm install -g yarn
```

Install @napi-rs/cli

```
npm install -g @napi-rs/cli
```

Build project

```
yarn build:debug
```

Run tests

```
yarn test
```
