"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cont_1 = require("./cont");
var router = express_1["default"].Router();
router
    .get('/get-tasks', cont_1.getTasks)
    .post('/add-task', cont_1.addTask)["delete"]('/delete-task', cont_1.deleteTask)
    .patch('/update-task-description', cont_1.updateTaskDescription);
exports["default"] = router;
