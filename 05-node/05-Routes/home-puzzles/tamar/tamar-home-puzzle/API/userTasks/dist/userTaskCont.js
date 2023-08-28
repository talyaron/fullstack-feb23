"use strict";
exports.__esModule = true;
exports.saveNewTaskToUser = exports.getTasksOfUser = void 0;
var tasksModel_1 = require("../tasks/tasksModel");
var userTsksModle_1 = require("./userTsksModle");
//how to comine between the user and the tasks??
exports.getTasksOfUser = function (req, res) {
    try {
        var id_1 = req.body.id;
        var searchUser = userTsksModle_1.userTasks.filter(function (user) { return user.id == id_1; });
        res.send(searchUser);
    }
    catch (error) {
        console.error(error);
    }
};
exports.saveNewTaskToUser = function (req, res) {
    try {
        var _a = req.body, id_2 = _a.id, title = _a.title, description = _a.description, status = _a.status;
        var newTask = new tasksModel_1.Task(title, description, status);
        var findUser = userTsksModle_1.userTasks.find(function (user) { return user.id === id_2; });
        // findUser.task.push(newTask)
    }
    catch (error) {
        console.error(error);
    }
};
