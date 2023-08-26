import express from "express";
import { addTask, deleteTask, getTasks, updateTaskDescription, updateTaskStatus, updateTaskTitle } from "./tasksCont";

const router = express.Router();

router
    .get('/get-tasks', getTasks)
    
    .post('/add-task', addTask)
    
    .delete('/delete-task', deleteTask)

    .patch('/update-task-title', updateTaskTitle)
    .patch('/update-task-description', updateTaskDescription)
    .patch('/update-task-status', updateTaskStatus)

export default router