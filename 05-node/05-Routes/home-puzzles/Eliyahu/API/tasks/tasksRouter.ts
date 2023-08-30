import express from "express";
import { addTask, deleteTask, getTasks, updateTask, updateTaskStatus } from "./tasksCont";

const router = express.Router();

router
    .get('/get-tasks', getTasks)

    .post('/add-task', addTask)
    
    .delete('/delete-task', deleteTask)

    .patch('/update-task', updateTask)
    .patch('/update-task-status', updateTaskStatus)

export default router