"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("./userCont");
var router = express_1["default"].Router();
router
    .get('/get-users', userCont_1.getUsers)
    .post("/add-user", userCont_1.addUser)["delete"]("/delete-user", userCont_1.deleteUser)
    .patch('/update-user', userCont_1.updateUser);
exports["default"] = router;
