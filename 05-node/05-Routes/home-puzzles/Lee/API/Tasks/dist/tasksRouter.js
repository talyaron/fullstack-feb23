"use strict";
exports.__esModule = true;
var express_1 = require("express");
var tasksCont_1 = require("./tasksCont");
var router = express_1["default"].router();
router
    .get('/get-tasks', tasksCont_1.getTasks)
    .post('/add-task', tasksCont_1.addTasks)
    .deleteTask('/delete-task', tasksCont_1.deleteTask)
    .patch('/add-task', tasksCont_1.updateTaskStatus);
exports["default"] = router;
