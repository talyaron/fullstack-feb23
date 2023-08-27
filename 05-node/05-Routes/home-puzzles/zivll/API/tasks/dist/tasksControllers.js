"use strict";
exports.__esModule = true;
exports.updateTasks = exports.deleteTasks = exports.addTasks = exports.getTasks = void 0;
var tasks = [];
exports.getTasks = function (req, res) {
    try {
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error);
    }
};
exports.addTasks = function (req, res) {
    var task = req.body;
    console.log(task);
};
exports.deleteTasks = function (req, res) { };
exports.updateTasks = function (req, res) { };
