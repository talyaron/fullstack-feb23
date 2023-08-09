"use strict";

var express = require('express');

var app = express();
var port = 3002; //static files

app.use(express["static"]('public')); // --> index.html
//basic routes for information
//get, post, put, delete are methods of http protocol
//the client get information from the server

app.get('/', function (req, res) {
  res.header('Content-Type', 'text/html');
  res.send('<h1>Hello World!</h1>');
}); //the client send informatio to the server

app.post('/', function (req, res) {}); //the client update information to the server

app.put('/', function (req, res) {}); //update the entire resource

app.patch('/', function (req, res) {}); //update part of the resource
//the client delete information to the server

app["delete"]('/', function (req, res) {});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});