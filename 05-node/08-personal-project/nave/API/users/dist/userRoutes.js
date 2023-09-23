"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("./userCont");
// import { isAdmin } from './userMiddle';
var router = express_1["default"].Router();
router
    .post('/register-user', userCont_1.registerUser)
    .get('/get-user-login', userCont_1.getUserLogin)
    .get('/get-users', userCont_1.getUsers)
    .get('/register-user', userCont_1.getUser);
exports["default"] = router;
