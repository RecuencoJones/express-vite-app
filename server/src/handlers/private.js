const { isLoggedIn } = require('../middlewares/auth');

function usePrivateRoutes() {
  app.get('/restricted', isLoggedIn, (req, res) => {
    res.json('Hey!');
  });
}

module.exports = { usePrivateRoutes };