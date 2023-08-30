"use strict";
exports.__esModule = true;
exports.deleteTask = exports.updateTask = exports.getTasks = exports.addTask = void 0;
var tasksModel_1 = require("./tasksModel");
// If I want to use the another way for updating:
// import { Task, _Task, update_Task } from "./tasksModel";
var tasks = [];
// Add task controler
// C-create
exports.addTask = function (req, res) {
    var task = req.body;
    console.log(task);
    //Add to tasks array
    tasks.push(new tasksModel_1.Task(task)); //-->add to database
    console.log(tasks);
    res.send({ task: task });
};
// R-read
exports.getTasks = function (req, res) {
    try {
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error);
    }
};
exports.updateTask = function (req, res) {
    try {
        var _a = req.body, id_1 = _a.id, title = _a.title, description = _a.description, status = _a.status;
        console.log(req.body);
        if (!title || !description || !status || !id_1)
            throw new Error("Please complete all fileds");
        var task = tasks.find(function (task) { return task.id === id_1; });
        if (!task)
            throw new Error("Task not found");
        task.title = title;
        task.description = description;
        task.status = status;
        res.send({ tasks: tasks });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
// Another way for updating
// export const updateTask = (req:any, res:any)=> {
//     try {
//         const update_Task  = req.body;
//         console.log(req.body);
//         if(!update_Task) throw new Error("Please complete all fileds");
//         const task = tasks.find(task=>task.id === update_Task.id)
//         if(!task) throw new Error("Task not found");
//         task.title = update_Task.title;
//         task.description = update_Task.description;
//         task.status = update_Task.status;
//         res.send({tasks});
//     } catch (error) {
//         console.error(error)
//         res.send({error})
//     }
// }
// D-delete
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
