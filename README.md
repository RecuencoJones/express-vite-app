# express-vite-app

## Goals

- Secure (CSRF Protection, Authentication)
- Scalable (Shared session with Redis)
- Efficient layering / docker image: Single image containing server with frontend static assets, only server runtime dependencies
- Docker-composable

## Build the client for production

```shell
npm run build
```

This will run `vite` for building the static assets to `server/public` directory.

## Running the server in production mode

```shell
npm run serve
```

This will start the server using the static assets from `server/public` directory.

## Running with docker

```shell
docker-compose up
```

## Development

```shell
npm run dev
```

This will start `vite` in dev mode and the server proxying static routes from `vite` dev server at `http://localhost:8080`.