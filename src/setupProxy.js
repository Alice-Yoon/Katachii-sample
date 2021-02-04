const { createProxyMiddleware } = require('http-proxy-middleware');

const URL = 'http://localhost:5000';
// const URL = 'http://3.34.126.147:5000';
// const URL = 'https://katachii.com';

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: URL,
            changeOrigin: true
        })
    )
}