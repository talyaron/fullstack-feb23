"use strict";
exports.__esModule = true;
exports.addTask = exports.getTasks = void 0;
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
// export const getTasks = (req, res) => {
//     try {
//         res.send({tasks});
//     } catch (error) {
//         console.error(error);
//     }
// }
// export const deleteTask = (req: any, res: any) => {
//     try {
//       const { id } = req.body;
//       console.log(id);
//       tasks = tasks.filter((task) => task.id !== id);
//       res.send({ tasks });
//     } catch (error) {
//       console.error(error);
//       res.send({ error });
//     }
//   }
//   export const updateTaskStatus = (req: any, res: any) => {
//     try {
//       const { status, id } = req.body;
//       console.log(req.body);
//       if (!status || !id) throw new Error("Please complete all fields");
//       const task = tasks.find((task) => task.id === id);
//       if (!task) throw new Error("Product not found");
//       task.status = status;
//       res.send({ tasks });
//     } catch (error) {
//       console.error(error);
//       res.send({ error });
//     }
//   }
