"use strict";
exports.__esModule = true;
var express_1 = require("express");
var taskCont_1 = require("./taskCont");
var router = express_1["default"].Router();
router
    .get("/get-all-done-tasks", taskCont_1.getAllDoneTasks)
    .get("/get-all-tasks", taskCont_1.getAllTask)
    .post("/add-task", taskCont_1.addTask)["delete"]("/delete-task", taskCont_1.removeTask)
    .patch("/patch-task", taskCont_1.updateTask);
exports["default"] = router;
