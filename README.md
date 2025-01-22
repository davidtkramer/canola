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

To auto-start can interface on boot, create the file `/etc/network/interfaces.d/can0` and add the following:

```
auto can0
iface can0 inet manual
    pre-up /sbin/ip link set can0 type can bitrate 500000
    up /sbin/ip link set can0 up
    down /sbin/ip link set can0 down

```
