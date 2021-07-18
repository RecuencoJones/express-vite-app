const csurf = require('csurf');

function useCSRF(app) {
  app.use(csurf({
    ignoreMethods: [ 'GET', 'HEAD' ],
    value(req) {
      return (req.body && req.body._csrf) ||
      (req.query && req.query._csrf) ||
      (req.headers['csrf-token']) ||
      (req.headers['xsrf-token']) ||
      (req.headers['x-csrf-token']) ||
      (req.headers['x-xsrf-token']) ||
      (req.cookies['csrf-token']);
    }
  }));
}

module.exports = { useCSRF };