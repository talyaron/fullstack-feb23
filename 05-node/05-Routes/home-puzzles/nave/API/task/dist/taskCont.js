"use strict";
exports.__esModule = true;
exports.updateTaskStatus = exports.updateTaskDecription = exports.deleteTask = exports.getTask = exports.addTask = void 0;
var taskModel_1 = require("./taskModel");
var tasks = [
    new taskModel_1.Task({ title: "test", description: "tevst", status: "bla" })
];
//add product controler
exports.addTask = function (req, res) {
    var task = req.body;
    console.log(task);
    //add to products array
    tasks.push(new taskModel_1.Task(task)); // --> add to Database
    console.log(tasks);
    res.send({ task: task });
};
//get products
exports.getTask = function (req, res) {
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
exports.updateTaskDecription = function (req, res) {
    try {
        var _a = req.body, decription = _a.decription, id_2 = _a.id;
        console.log(req.body);
        if (!decription || !id_2)
            throw new Error("Please complete all fields");
        var task = tasks.find(function (task) { return task.id === id_2; });
        if (!tasks)
            throw new Error("Product not found");
        task.description = decription;
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
exports.updateTaskStatus = function (req, res) {
    try {
        var _a = req.body, status = _a.status, id_3 = _a.id;
        console.log(req.body);
        if (!status || !id_3)
            throw new Error("Please complete all fields");
        var task = tasks.find(function (task) { return task.id === id_3; });
        if (!tasks)
            throw new Error("task not found");
        task.status = status;
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
