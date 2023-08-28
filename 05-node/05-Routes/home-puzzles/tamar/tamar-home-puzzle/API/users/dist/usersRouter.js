"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCont_1 = require("./usersCont");
var router = express_1["default"].Router();
router
    .post('/add-user', usersCont_1.addUser)
    .get('/get-users', usersCont_1.getUsers)
    .patch('/update-user-tasks', usersCont_1.updateUserTasks)["delete"]('/delet-user', usersCont_1.deleteUser);
exports["default"] = router;
