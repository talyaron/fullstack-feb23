"use strict";
exports.__esModule = true;
var express_1 = require("express");
var tasksCont_1 = require("./tasksCont");
var router = express_1["default"].Router();
router.get('/get-tasks', tasksCont_1.getTasks)["delete"]("/delete-task", tasksCont_1.deleteTask)
    .patch('/update-task-status', tasksCont_1.updateTaskStatus)
    .post("/add-task", tasksCont_1.addTask)
    .get("/get-users-task", tasksCont_1.getUserTasks);
exports["default"] = router;
