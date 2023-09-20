"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("./userCont");
var router = express_1["default"].Router();
router
    .get('/get-user-name', userCont_1.getUserName)
    .get('/get-users', userCont_1.getUsers)
    .get('/get-user', userCont_1.getUser)
    .post('/register', userCont_1.registerUser)
    .post('/login', userCont_1.login)
    .patch('/set-premium', userCont_1.setPremium)
    .patch('/set-admin', userCont_1.setAdmin);
exports["default"] = router;
