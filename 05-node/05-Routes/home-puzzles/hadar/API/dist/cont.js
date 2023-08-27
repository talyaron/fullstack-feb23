"use strict";
exports.__esModule = true;
exports.updateTaskDescription = exports.deleteTask = exports.addTask = exports.getTasks = void 0;
var model_1 = require("./model");
var tasks = [new model_1.Task("ksjdvnksjvb", "ksjdvnks")];
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
        tasks.push(new model_1.Task(task.text, task.id));
        res.send({ tasks: tasks });
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
exports.updateTaskDescription = function (req, res) {
    try {
        var _a = req.body, description = _a.description, id_2 = _a.id;
        if (!description || !id_2)
            throw new Error("Please complete all details");
        var task = tasks.find(function (task) { return task.id === id_2; });
        if (!task)
            throw new Error("Task not found");
        task.text = description;
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error.massage);
    }
};
