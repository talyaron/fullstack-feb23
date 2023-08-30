"use strict";
exports.__esModule = true;
exports.updateTasks = exports.deleteTasks = exports.addTasks = exports.getTasks = void 0;
var tasksModel_1 = require("./tasksModel");
exports.getTasks = function (req, res) {
    try {
        res.send({ tasks: tasksModel_1.tasks });
    }
    catch (error) {
        console.error(error);
    }
};
exports.addTasks = function (req, res) {
    try {
        var _a = req.body, title = _a.title, description = _a.description;
        var newTask = new tasksModel_1.Task(title, description, "todo" /* todo */);
        tasksModel_1.tasks.push(newTask);
        res.send({ tasks: tasksModel_1.tasks });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
};
exports.deleteTasks = function (req, res) {
    try {
        var id_1 = req.body.id;
        var index = tasksModel_1.tasks.findIndex(function (task) { return task.id === id_1; });
        if (index === -1)
            throw new Error("index not found");
        tasksModel_1.tasks.splice(index, 1);
        res.send({ message: "task id-" + id_1 + " deleted successfully", tasks: tasksModel_1.tasks });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
};
exports.updateTasks = function (req, res) {
    try {
        var id_2 = req.body.id;
        var index = tasksModel_1.tasks.findIndex(function (task) { return task.id === id_2; });
        if (index === -1)
            throw new Error("index or id is not exist");
        var task = tasksModel_1.tasks[index];
        tasksModel_1.tasks[index].changeStatus(task.status);
        res.send({ tasks: tasksModel_1.tasks });
    }
    catch (error) {
        console.error(error);
    }
};
