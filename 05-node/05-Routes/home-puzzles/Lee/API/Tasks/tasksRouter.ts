import express from 'express';
import { addTasks, deleteTask, getTasks, updateTaskStatus } from './tasksCont'
const router = express.router()


router
    .get('/get-tasks', getTasks)
    .post('/add-task', addTasks)
    .delete('/delete-task', deleteTask)
    .patch('/update-task', updateTaskStatus)

export default router;