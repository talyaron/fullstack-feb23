"use strict";
exports.__esModule = true;
exports.updateTaskStatus = exports.updateTaskDescription = exports.updateTaskTitle = exports.deleteTask = exports.addTask = exports.getTasks = void 0;
var tasksModels_1 = require("./tasksModels");
var tasks = [
    new tasksModels_1.Task('eli', 'test', 'it`s work?', 'TO-DO')
];
exports.getTasks = function (req, res) {
    try {
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.addTask = function (req, res) {
    try {
        var task = req.body;
        tasks.push(new tasksModels_1.Task(task.user, task.title, task.description, task.status));
        res.send({ task: task });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.deleteTask = function (req, res) {
    try {
        var id_1 = req.body.id;
        tasks = tasks.filter(function (task) { return task.id !== id_1; });
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.updateTaskTitle = function (req, res) {
    try {
        var _a = req.body, title = _a.title, id_2 = _a.id;
        if (!title || !id_2)
            throw new Error("Please complete all details");
        var task = tasks.find(function (task) { return task.id === id_2; });
        if (!task)
            throw new Error("Task not found");
        task.title = title;
        res.send({ task: task });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.updateTaskDescription = function (req, res) {
    try {
        var _a = req.body, description = _a.description, id_3 = _a.id;
        if (!description || !id_3)
            throw new Error("Please complete all details");
        var task = tasks.find(function (task) { return task.id === id_3; });
        if (!task)
            throw new Error("Task not found");
        task.description = description;
        res.send({ task: task });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.updateTaskStatus = function (req, res) {
    try {
        var _a = req.body, status = _a.status, id_4 = _a.id;
        if (!status || !id_4)
            throw new Error("Please complete all details");
        var task = tasks.find(function (task) { return task.id === id_4; });
        if (!task)
            throw new Error("Task not found");
        task.status = status;
        res.send({ task: task });
    }
    catch (error) {
        console.error(error.massage);
    }
};
