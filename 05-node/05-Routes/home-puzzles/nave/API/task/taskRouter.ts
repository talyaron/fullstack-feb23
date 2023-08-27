import express from 'express'
import { addTask, deleteTask, getTask, updateTaskDecription, updateTaskStatus } from './taskCont';
const router = express.Router();


router
    .get('/get-task', getTask)
    .post('/add-task', addTask)
    .delete("/delete-task", deleteTask)
    .patch('/update-task-description', updateTaskDecription)
    .patch('/update-task-status', updateTaskStatus)

export default router;