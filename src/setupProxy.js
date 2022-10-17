const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://104.131.4.58:8000',
      changeOrigin: true,
      pathRewrite: {'^/api' : ''}
    })
  );
};
