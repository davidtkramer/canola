# Development

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

# Raspberry Pi Setup

First, add the appropriate dtoverlays for your can device to /boot/config.txt.

Waveshare 2CH CAN HAT+

```
dtparam=spi=on
dtoverlay=i2c0
dtoverlay=spi1-3cs
dtoverlay=mcp2515,spi1-1,oscillator=16000000,interrupt=22
dtoverlay=mcp2515,spi1-2,oscillator=16000000,interrupt=13
```

Copperhill CAN HAT

```
dtparam=spi=on
dtoverlay=mcp2515-can0,oscillator=16000000,interrupt=25
dtoverlay=mcp2515-can1,oscillator=16000000,interrupt=24
dtoverlay=spi-bcm2835-overlay
```

Setup socketcan kernel modules.

```
sudo modprobe can
sudo modprobe can_raw
sudo modprobe vcan
```

Bring up can interface. Ensure bitrate argument matches your can device.

```
ip link set can0 type can bitrate 500000
ip link set can0 up
```

Verify can device is up.

```
ip link show
# for more details:
ip -details -statistics link show can0
```

To auto-start can interface on boot, create the file `/etc/network/interfaces.d/can0` and add the following:

```
auto can0
iface can0 inet manual
    pre-up /sbin/ip link set can0 type can bitrate 500000
    up /sbin/ip link set can0 up
    down /sbin/ip link set can0 down
```

To auto start your canola project on boot:

```
sudo nano /etc/systemd/system/<your project name>.service
```

And add the following. Configure ExecStart and WorkingDirectory with the paths to the node binary, your JS script, and the directory your script resides in.

```
[Unit]
Description=<your project name>
DefaultDependencies=false

[Service]
Type=simple
ExecStart=/path/to/node /path/to/your/dir/script.js
WorkingDirectory=/path/to/your/dir
User=david

[Install]
WantedBy=local-fs.target
```

> With `DefaultDependencies=false`, systemd will start your service immediately after the kernel loads. On a Raspberry Pi 4, the service can be running within seconds of the board receiving power. However, networking, bluetooth, and other services you may require will not be available yet.
