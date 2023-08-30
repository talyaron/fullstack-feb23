"use strict";
exports.__esModule = true;
exports.updateTaskStatus = exports.deleteTask = exports.addTask = exports.getTasks = void 0;
var taskModel_1 = require("./taskModel");
function getTasks(req, res) {
    try {
        res.send({ tasks: taskModel_1.tasks });
    }
    catch (error) {
        console.error(error);
    }
}
exports.getTasks = getTasks;
function addTask(req, res) {
    try {
        var _a = req.body, title = _a.title, description = _a.description;
        var newTask = new taskModel_1.Task(title, description, taskModel_1.TaskStatus.todo);
        taskModel_1.tasks.push(newTask);
        res.send({ tasks: taskModel_1.tasks });
    }
    catch (error) {
        console.error(error);
    }
}
exports.addTask = addTask;
function deleteTask(req, res) {
    try {
        var id_1 = req.body.id;
        var index = taskModel_1.tasks.findIndex(function (task) { return task.id === id_1; });
        if (index === -1) {
            throw new Error("task not found");
        }
        taskModel_1.tasks.splice(index, 1);
        res.send({ tasks: taskModel_1.tasks });
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
        var index = taskModel_1.tasks.findIndex(function (task) { return task.id === id_2; });
        if (index === -1) {
            throw new Error("task not found");
        }
        if (status !== taskModel_1.TaskStatus.done && status !== taskModel_1.TaskStatus.todo) {
            throw new Error("status not valid");
        }
        taskModel_1.tasks[index].changeStatus(status);
        res.send({ tasks: taskModel_1.tasks });
    }
    catch (error) {
    }
}
exports.updateTaskStatus = updateTaskStatus;
