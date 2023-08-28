"use strict";
exports.__esModule = true;
exports.updateTaskStatus = exports.updateTask = exports.deleteTask = exports.addTask = exports.getTasks = void 0;
// import { Task } from "./tasksModels"
var Task = /** @class */ (function () {
    function Task(user, title, description, status) {
        this.user = user;
        this.title = title;
        this.description = description;
        this.status = status;
        this.id = Math.random().toString();
    }
    return Task;
}());
var tasks = [
    new Task('eli', 'test', 'it`s work?', 'toDo')
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
        tasks.push(new Task(task.user, task.title, task.description, task.status));
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
exports.updateTask = function (req, res) {
    try {
        var _a = req.body, title = _a.title, description = _a.description, id_2 = _a.id;
        if (!title || !description || !id_2)
            throw new Error("Please complete all details");
        var task = tasks.find(function (task) { return task.id === id_2; });
        if (!task)
            throw new Error("Task not found");
        task.title = title;
        task.description = description;
        res.send({ tasks: tasks });
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
        var task = tasks.find(function (task) { return task.id === id_3; });
        if (!task)
            throw new Error("Task not found");
        task.status = status;
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error.massage);
    }
};
