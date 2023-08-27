"use strict";
exports.__esModule = true;
exports.getAllTask = exports.getAllDoneTasks = exports.updateTask = exports.removeTask = exports.addTask = void 0;
var taskModel_1 = require("./taskModel");
var tasks = [];
exports.addTask = function (req, res) {
    var _a = req.body, name = _a.name, time = _a.time;
    var newTask = new taskModel_1.Task(name, time);
    tasks.push(newTask);
    res.send({ newTask: newTask });
};
exports.removeTask = function (req, res) {
    var taskId = req.body.taskId;
    tasks = tasks.filter(function (task) { return task.id != taskId; });
    res.send({ tasks: tasks });
};
exports.updateTask = function (req, res) {
    var _a = req.body, inputChange = _a.inputChange, inputValue = _a.inputValue, taskId = _a.taskId;
    var thisTask = tasks.find(function (task) { return task.id == taskId; });
    if (inputChange == "taskNameInList")
        thisTask.name = inputValue;
    if (inputChange == "isDone")
        thisTask.isDone = !thisTask.isDone;
    else
        thisTask.time = inputValue;
    res.send({ tasks: tasks });
};
exports.getAllDoneTasks = function (req, res) {
    var doneTasks = tasks.filter(function (task) { return task.isDone; });
    console.log(doneTasks);
    res.send({ doneTasks: doneTasks });
};
exports.getAllTask = function (req, res) {
    res.send({ tasks: tasks });
};
