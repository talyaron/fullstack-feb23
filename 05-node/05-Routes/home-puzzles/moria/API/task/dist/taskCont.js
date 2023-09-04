"use strict";
exports.__esModule = true;
exports.addTask = exports.getTask = void 0;
var taskModel_1 = require("./taskModel");
function getTask(req, res) {
    try {
        res.send({ tasks: taskModel_1.tasks });
    }
    catch (error) {
        console.error(error);
    }
}
exports.getTask = getTask;
function addTask(req, res) {
    try {
        var _a = req.body, title = _a.title, description = _a.description;
        console.log({ title: title, description: description });
        if (!title || !description)
            throw new Error("Please complete all fields");
        var newTask = new taskModel_1.Task(title, description, TaskStatus.todo);
        taskModel_1.tasks.push(newTask);
    }
    catch (error) {
        console.error(error);
    }
}
exports.addTask = addTask;
