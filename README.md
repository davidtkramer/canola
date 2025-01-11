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
