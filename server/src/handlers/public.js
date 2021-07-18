const os = require('os');

function usePublicRoutes(app) {
  app.get('/hello', (req, res) => {
    res.json({
      session: req.session,
      csrfToken: req.csrfToken(),
      hostname: os.hostname()
    });
  });
}

module.exports = { usePublicRoutes };