"use strict";

var _http = require("http");

var hostname = '127.0.0.1';
var port = 3000;
var server = (0, _http.createServer)(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<h1>Hello World</h1>');
});
server.listen(port, hostname, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});