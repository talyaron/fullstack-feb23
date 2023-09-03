"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usercont_1 = require("./usercont");
var router = express_1["default"].Router();
router
    .post('/register-user', usercont_1.registerUser)
    .post('/login-user', usercont_1.loginUser);
exports["default"] = router;
