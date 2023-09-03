"use strict";
exports.__esModule = true;
exports.getUserTasks = exports.updateTaskStatus = exports.deleteTask = exports.addTask = exports.getTasks = void 0;
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
exports.deleteTask = function (req, res) {
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
        res.send({ error: error });
    }
};
exports.updateTaskStatus = function (req, res) {
    try {
        var _a = req.body, status = _a.status, id_2 = _a.id;
        console.log(req.body);
        if (!status || !id_2)
            throw new Error("Please complete all fields");
        var task = tasksModel_1.tasks.find(function (task) { return task.id === id_2; });
        if (!task)
            throw new Error("Product not found");
        task.status = status;
        res.send({ tasks: tasksModel_1.tasks });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
function getUserTasks(req, res) {
    try {
        var email_1 = req.query.email;
        if (!email_1) {
            throw new Error("email is required");
        }
        var _userTasks = tasksModel_1.userTasks.filter(function (usertask) { return usertask.user.email === email_1; });
        var _tasks = _userTasks.map(function (usertask) { return usertask.task; });
        res.send({ tasks: _tasks });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
exports.getUserTasks = getUserTasks;
