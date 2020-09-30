import { createProxyMiddleware } from "http-proxy-middleware";

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = createProxyMiddleware({
  target:'http://localhost:3001', 
  ws: true, // proxy websockets
  changeOrigin: true,
  logLevel: 'debug'
});

export default proxy;