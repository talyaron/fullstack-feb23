"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCont_1 = require("./usersCont");
var router = express_1["default"].Router();
router
    .post('/register', usersCont_1.registerUser)
    .post('/login', usersCont_1.login)
    .get('/get-user', usersCont_1.getUser)
    .patch('/update-user', usersCont_1.updateUser)["delete"]('/delet-user', usersCont_1.deleteUser);
exports["default"] = router;
