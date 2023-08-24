"use strict";
exports.__esModule = true;
exports.deleteTask = exports.updateTaskStatus = exports.getTasks = exports.addTask = void 0;
var tasksModel_1 = require("./tasksModel");
var tasks = [
    new tasksModel_1.Task({ title: "garbige", description: "throw the garbige" })
];
//the controllers:
//add task to server
exports.addTask = function (req, res) {
    try {
        var task = req.body; //tack data from user
        console.log(task);
        if (!task)
            throw new Error("no req.body task found");
        tasks.push(new tasksModel_1.Task(task)); //server add the task to tasks array
        console.log(tasks);
        res.send({ tasks: tasks }); //server send update array to client
    }
    catch (error) {
        console.error(error);
    }
};
//get all tasks from server
exports.getTasks = function (req, res) {
    try {
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error);
    }
};
//update specific task
exports.updateTaskStatus = function (req, res) {
    try {
        var _a = req.body, status = _a.status, id_1 = _a.id; //get knew status from user and req to update it in the specific task
        console.log(req.body);
        if (!status || !id_1)
            throw new Error("please fill status field");
        var task = tasks.find(function (task) { return task.id === id_1; });
        if (!task)
            throw new Error("no match task found");
        task.status = status; //update the status
        res.send({ tasks: tasks }); //server send the updated array to client
    }
    catch (error) {
        console.error(error);
    }
};
//delete specific task
exports.deleteTask = function (req, res) {
    try {
        var id_2 = req.body.id;
        console.log(id_2);
        tasks = tasks.filter(function (task) { return task.id !== id_2; });
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
