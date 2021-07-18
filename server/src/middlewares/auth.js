const { Passport } = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const passport = new Passport();

passport.use(new LocalStrategy({ session: true }, (username, password, done) => {
  done(null, {
    username,
    token: 'token'
  });
}));
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user));

function isLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    res.sendStatus(401);
  } else {
    next();
  }
}

const authenticate = passport.authenticate('local');

function useAuthentication(app) {
  app.use(passport.initialize());
  app.use(passport.session());
}

module.exports = { useAuthentication, authenticate, isLoggedIn };