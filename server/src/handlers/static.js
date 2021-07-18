const path = require('path');
const express = require('express');

function useStatic(app) {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.all('*', (req, res) => {
      res.cookie('csrf-token', req.csrfToken(), { httpOnly: true });
      res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    });
  } else {
    const proxy = require('express-http-proxy');
    app.use(proxy('http://localhost:8080/', {
      userResDecorator(proxyRes, proxyData, req, res) {
        res.cookie('csrf-token', req.csrfToken(), { httpOnly: true });
        return proxyData;
      }
    }));
  }
}

module.exports = { useStatic };