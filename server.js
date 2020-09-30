const express = require("express");
const app = express();
const ws = require("ws");
let http = require("http").createServer(app);

const wss = new ws.Server({ server: http, path: "/api/socket" });

wss.on("connection", (ws) => {
  ws.send("First message");
  setTimeout(() => {
    ws.send("second message");
  }, 2000);
});

app.get("/api/foo", (req, res) => {
  res.send("bar");
});
const port = 3001;

http.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
