"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTasks = exports.deleteTasks = exports.addTasks = exports.getTasks = void 0;
const tasksModel_1 = require("./tasksModel");
const getTasks = (req, res) => {
    try {
        res.send({ tasks: tasksModel_1.tasks });
    }
    catch (error) {
        console.error(error);
    }
};
exports.getTasks = getTasks;
const addTasks = (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = new tasksModel_1.Task(title, description, "todo" /* taskStatus.todo */);
        tasksModel_1.tasks.push(newTask);
        res.send({ tasks: tasksModel_1.tasks });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
};
exports.addTasks = addTasks;
const deleteTasks = (req, res) => {
    try {
        const { id } = req.body;
        const index = tasksModel_1.tasks.findIndex((task) => task.id === id);
        if (index === -1)
            throw new Error(`index not found`);
        tasksModel_1.tasks.splice(index, 1);
        res.send({ message: `task id-${id} deleted successfully`, tasks: tasksModel_1.tasks });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
};
exports.deleteTasks = deleteTasks;
const updateTasks = (req, res) => {
    try {
        const { id } = req.body;
        const index = tasksModel_1.tasks.findIndex((task) => task.id === id);
        if (index === -1)
            throw new Error(`index or id is not exist`);
        const task = tasksModel_1.tasks[index];
        tasksModel_1.tasks[index].changeStatus(task.status);
        res.send({ tasks: tasksModel_1.tasks });
    }
    catch (error) {
        console.error(error);
    }
};
exports.updateTasks = updateTasks;
//# sourceMappingURL=tasksControllers.js.map