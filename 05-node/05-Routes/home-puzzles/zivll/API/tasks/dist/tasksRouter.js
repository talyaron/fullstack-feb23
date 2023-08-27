"use strict";
exports.__esModule = true;
var express_1 = require("express");
var tasksControllers_1 = require("./tasksControllers");
var routes = express_1["default"].Router();
routes
    .get("/get-tasks", tasksControllers_1.getTasks)
    .post("/add-tasks", tasksControllers_1.addTasks)["delete"]("/delete-tasks", tasksControllers_1.deleteTasks)
    .patch("/update-tasks", tasksControllers_1.updateTasks);
exports["default"] = routes;
