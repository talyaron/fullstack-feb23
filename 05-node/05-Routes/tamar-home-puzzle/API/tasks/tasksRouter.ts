import express from "express";
import { addTask, deleteTask, getTasks, updateTaskStatus } from "./tasksCont";
const router = express.Router();

router
    .post('/add-task', addTask)
    .get('/get-tasks', getTasks)
    .patch('/update-task-status', updateTaskStatus)
    .delete('/delet-task', deleteTask)

export default router;