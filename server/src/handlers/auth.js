const { authenticate } = require('../middlewares/auth');

function useAuthRoutes(app) {
  app.post('/login', authenticate, (req, res) => {
    res.json(req.user);
  });

  app.post('/logout', authenticate, (req, res) => {
    res.logout();
    res.send();
  });
}

module.exports = { useAuthRoutes };