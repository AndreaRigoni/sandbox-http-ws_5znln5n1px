// HTTP
var http = require("http");
var server = http.createServer(function(req, res) {
  res.write("Hello World!"); //write a response to the client
  res.end();
});
server.listen(8080);

// HTTPS
var https = require("https");
var pem = require("https-pem");
var server = https.createServer(pem, function(req, res) {
  res.write("This is servered over HTTPS");
  res.end();
});
server.listen(8080);
