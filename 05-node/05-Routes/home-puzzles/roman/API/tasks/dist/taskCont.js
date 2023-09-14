"use strict";
exports.__esModule = true;
exports.updateTaskStatus = exports.deleteTask = exports.addTask = exports.getTasks = void 0;
var tasksModel_1 = require("./tasksModel");
function getTasks(req, res) {
    try {
        res.send({ tasks: tasksModel_1.tasks });
    }
    catch (error) {
        console.error(error);
    }
}
exports.getTasks = getTasks;
function addTask(req, res) {
    try {
        var _a = req.body, title = _a.title, description = _a.description;
        var newTask = new tasksModel_1.Task(title, description, tasksModel_1.TaskStatus.todo);
        tasksModel_1.tasks.push(newTask);
        res.send({ tasks: tasksModel_1.tasks });
    }
    catch (error) {
        console.error(error);
    }
}
exports.addTask = addTask;
function deleteTask(req, res) {
    try {
        var id_1 = req.body.id;
        var index = tasksModel_1.tasks.findIndex(function (task) { return task.id === id_1; });
        if (index === -1) {
            throw new Error("task not found");
        }
        tasksModel_1.tasks.splice(index, 1);
        res.send({ tasks: tasksModel_1.tasks });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
exports.deleteTask = deleteTask;
function updateTaskStatus(req, res) {
    try {
        var _a = req.body, id_2 = _a.id, status = _a.status;
        var index = tasksModel_1.tasks.findIndex(function (task) { return task.id === id_2; });
        if (index === -1) {
            throw new Error("task not found");
        }
        if (status !== tasksModel_1.TaskStatus.done && status !== tasksModel_1.TaskStatus.todo) {
            throw new Error("status not valid");
        }
        tasksModel_1.tasks[index].changeStatus(status);
        res.send({ tasks: tasksModel_1.tasks });
    }
    catch (error) {
    }
}
exports.updateTaskStatus = updateTaskStatus;
