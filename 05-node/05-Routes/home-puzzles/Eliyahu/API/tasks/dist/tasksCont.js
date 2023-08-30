"use strict";
exports.__esModule = true;
exports.updateTaskStatus = exports.updateTask = exports.deleteTask = exports.addTask = exports.getTasks = void 0;
var userModels_1 = require("../users/userModels");
var tasksModels_1 = require("./tasksModels");
exports.getTasks = function (req, res) {
    try {
        res.send({ usersTasks: tasksModels_1.usersTasks });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.addTask = function (req, res) {
    try {
        var task = req.body;
        var emailUser_1 = task.emailUser;
        var currentTask = new tasksModels_1.Task(task.title, task.description, task.status);
        tasksModels_1.tasks.push(currentTask);
        var currentUser = userModels_1.users.find(function (user) { return user.email === emailUser_1; });
        tasksModels_1.usersTasks.push(new tasksModels_1.UserTasks(currentUser, currentTask));
        res.send({ usersTasks: tasksModels_1.usersTasks });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.deleteTask = function (req, res) {
    try {
        var id_1 = req.body.id;
        var index = tasksModels_1.usersTasks.findIndex(function (element) { return element.task.id === id_1; });
        if (index === -1) {
            throw new Error("task not found");
        }
        tasksModels_1.usersTasks.splice(index, 1);
        res.send({ usersTasks: tasksModels_1.usersTasks });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.updateTask = function (req, res) {
    try {
        var _a = req.body, title = _a.title, description = _a.description, id_2 = _a.id;
        if (!title || !description || !id_2)
            throw new Error("Please complete all details");
        var taskUser = tasksModels_1.usersTasks.find(function (element) { return element.task.id === id_2; });
        if (!taskUser)
            throw new Error("Task not found");
        taskUser.task.title = title;
        taskUser.task.description = description;
        res.send({ usersTasks: tasksModels_1.usersTasks });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.updateTaskStatus = function (req, res) {
    try {
        var _a = req.body, status = _a.status, id_3 = _a.id;
        if (!status || !id_3)
            throw new Error("Please complete all details");
        var taskUser = tasksModels_1.usersTasks.find(function (element) { return element.task.id === id_3; });
        if (!taskUser)
            throw new Error("Task not found");
        taskUser.task.status = status;
        res.send({ usersTasks: tasksModels_1.usersTasks });
    }
    catch (error) {
        console.error(error.massage);
    }
};
