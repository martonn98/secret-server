# Secret Server

## About

Implementation for <https://gitlab.com/balazs.tar/secret-server-task>, using Nuxt 3. Missing express.js, because Nuxt 3 includes unjs/h3.

## Setup

### Run in Docker

```bash
docker compose up
```

The server runs on <http://localhost:3000>

### Local dev setup

Due to a recent issue with Docker <https://github.com/docker/compose/issues/9737>, you have to change the DB_HOST to localhost in .env, for local dev setup. Default value is for running in Docker.

```bash
# edit .env
DB_HOST=localhost

# run mongodb
docker compose up -d mongodb

# use correct node version
nvm use

# install dependencies
yarn

# run dev server
yarn dev
```
