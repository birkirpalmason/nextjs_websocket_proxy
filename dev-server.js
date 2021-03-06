/* eslint-disable no-console */
const express = require("express");
const next = require("next");

const devProxy = {
  "/api": {
    target: "http://localhost:3001",
    ws: true,
    logLevel: "debug",
  },
};

const port = parseInt(process.env.PORT, 10) || 3002;
const env = process.env.NODE_ENV;
const dev = env !== "production";
const app = next({
  dir: ".", // base directory where everything is, could move to src later
  dev,
});

const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();
    if (dev && devProxy) {
      console.log("elele");
      const { createProxyMiddleware } = require("http-proxy-middleware");
      Object.keys(devProxy).forEach(function (context) {
        server.use(context, createProxyMiddleware(devProxy[context]));
      });
    }
    server.all("*", (req, res) => handle(req, res));
    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${env}]`);
    });
  })
  .catch((err) => {
    console.log("An error occurred, unable to start the server");
    console.log(err);
  });
