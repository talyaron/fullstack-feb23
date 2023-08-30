import express from 'express'
import { addTask, deleteTask, getTasks, updateTaskStatus, } from './taskCont';
const router = express.Router();


router
    .get('/get-tasks', getTasks)
    .post('/add-task', addTask)
    .delete("/delete-task", deleteTask)
    .patch('/update-tasks-status', updateTaskStatus)

export default router;