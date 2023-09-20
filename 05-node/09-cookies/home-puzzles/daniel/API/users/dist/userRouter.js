"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("./userCont");
var userMiddleware_1 = require("./userMiddleware");
var router = express_1["default"].Router();
router.post('/register', userCont_1.registerUser)
    .post('/login', userCont_1.loginUser)
    .get('/get-user', userCont_1.getUser)["delete"]('/delete-user', userMiddleware_1.isAdmin, userCont_1.deleteUser)
    .patch('/update-user', userMiddleware_1.isAdmin, userCont_1.updateUser);
exports["default"] = router;
