const { createProxyMiddleware } = require("http-proxy-middleware");

const { REACT_APP_ORIGIN, REACT_APP_API } = process.env;

module.exports = function (app) {
  app.use(
    createProxyMiddleware(REACT_APP_API,{
      target: REACT_APP_ORIGIN,
      changeOrigin: true,
      pathRewrite: {
        [`^${REACT_APP_API}`]: "",
      }
    })
  );
};
