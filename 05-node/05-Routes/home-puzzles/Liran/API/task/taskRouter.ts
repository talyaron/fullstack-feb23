import express from 'express'
import { addTask, deleteTask, getTasks, updateTask, updateTaskStatus } from './taskCont';
const router = express.Router();


router
    .get('/get-tasks', getTasks)
    .post('/add-task', addTask)
    .delete("/delete-task", deleteTask)
    .patch('/update-task-description', updateTask)
    .patch('/update-task-status', updateTaskStatus)

export default router;