const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
      timeout: 10000, 
      proxyTimeout: 10000,
      onError: (err, req, res) => {
        res.status(500).send("Proxy error occurred");
      },
    })
  );
};
