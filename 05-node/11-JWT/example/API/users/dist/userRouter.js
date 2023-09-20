"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("./userCont");
var users_1 = require("./middelware/users");
var router = express_1["default"].Router();
router
    .post('/login', userCont_1.login)
    .post("/register", userCont_1.registerUser)
    .get("/get-users", users_1.isAdmin, userCont_1.getUsers);
exports["default"] = router;
