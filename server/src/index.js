const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cookieParser = require('cookie-parser');
const { useSession } = require('./middlewares/session');
const { useAuthentication } = require('./middlewares/auth');
const { useCSRF } = require('./middlewares/csrf');
const { useStatic } = require('./handlers/static');
const { useAuthRoutes } = require('./handlers/auth');
const { usePublicRoutes } = require('./handlers/public');
const { usePrivateRoutes } = require('./handlers/private');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Priority: session > auth > csrf
useSession(app);
useAuthentication(app);
useCSRF(app);

usePublicRoutes(app);
useAuthRoutes(app);
usePrivateRoutes(app);

useStatic(app);

app.listen(process.env.APP_PORT || 3000, () => {
  console.log('app ready');
});