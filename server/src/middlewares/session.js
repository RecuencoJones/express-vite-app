const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');

const RedisStore = connectRedis(session);
//Configure redis client
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379
});

function useSession(app) {
  app.use(session({
    name: 'sid',
    secret: process.env.SESSION_SECRET || 'secret',
    store: new RedisStore({ client: redisClient }),
    resave: false,
    saveUninitialized: false
  }));
}

module.exports = { useSession };