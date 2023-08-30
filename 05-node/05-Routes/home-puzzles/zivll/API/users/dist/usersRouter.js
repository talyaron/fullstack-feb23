"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersControllers_1 = require("./usersControllers");
var routes = express_1["default"].Router();
routes.post("/register", usersControllers_1.addUser).post("/login", usersControllers_1.signIn);
exports["default"] = routes;
