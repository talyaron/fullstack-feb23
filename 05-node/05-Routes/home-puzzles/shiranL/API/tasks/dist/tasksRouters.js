"use strict";
exports.__esModule = true;
var express_1 = require("express");
var tasksCont_1 = require("./tasksCont");
var router = express_1["default"].Router();
router
    .post("/add-user-task", tasksCont_1.addUserTask)
    .get("/get-user-tasks/:userId", tasksCont_1.getUserTasks);
exports["default"] = router;
