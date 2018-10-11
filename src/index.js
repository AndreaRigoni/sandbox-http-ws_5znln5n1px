"use strict";

let WSServer = require("ws").Server;
let app = require("./express-server");
let server = require("http").createServer();

// Create web socket server on top of a regular http server
let wss = new WSServer({ server });

// Also mount the app here
server.on("request", app);

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log(`received: ${message}`);

    ws.send(
      JSON.stringify({
        answer: 42
      })
    );
  });
});

server.listen(process.env.PORT, function() {
  console.log(`http/ws server listening on ${process.env.PORT}`);
});
