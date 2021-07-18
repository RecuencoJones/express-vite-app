FROM node:16 as build

WORKDIR /app

COPY [ "package.json", "package-lock.json", "./" ]
COPY [ "client/package.json", "./client/package.json" ]
RUN npm ci

COPY client ./client

RUN npm run build

FROM node:16

WORKDIR /app
ENV NODE_ENV production

COPY [ "package.json", "package-lock.json", "./" ]
COPY [ "server/package.json", "./server/package.json" ]
RUN npm ci

COPY server ./server
COPY --from=build /app/server/public /app/server/public

CMD [ "node", "./server/src/index.js" ]