"use strict";
exports.__esModule = true;
exports.updateTaskStatus = exports.deleteTask = exports.getTasks = exports.addTasks = void 0;
var tasksModel_1 = require("./tasksModel");
var tasks = [new tasksModel_1.Task("Walk the dog", "take a walk with the dog", "to-do")];
exports.addTasks = function (req, res) {
    var task = req.body;
    console.log(task);
    tasks.push(new tasksModel_1.Task(task.title, task.description, task.status, task.id)); // --> add to Database
    console.log(tasks);
    res.send({ task: task });
};
exports.getTasks = function (req, res) {
    try {
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error);
    }
};
exports.deleteTask = function (req, res) {
    try {
        var id_1 = req.body.id;
        console.log(id_1);
        tasks = tasks.filter(function (task) { return task.id !== id_1; });
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
exports.updateTaskStatus = function (req, res) {
    try {
        var _a = req.body, status = _a.status, id_2 = _a.id;
        console.log(req.body);
        if (!status || !id_2)
            throw new Error("Please complete all fields");
        var task = tasks.find(function (task) { return task.id === id_2; });
        if (!task)
            throw new Error("Product not found");
        task.status = status;
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
