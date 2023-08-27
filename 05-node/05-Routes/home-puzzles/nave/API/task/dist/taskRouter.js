"use strict";
exports.__esModule = true;
var express_1 = require("express");
var taskCont_1 = require("./taskCont");
var router = express_1["default"].Router();
router
    .get('/get-task', taskCont_1.getTask)
    .post('/add-task', taskCont_1.addTask)["delete"]("/delete-task", taskCont_1.deleteTask)
    .patch('/update-task-description', taskCont_1.updateTaskDecription)
    .patch('/update-task-status', taskCont_1.updateTaskStatus);
exports["default"] = router;
