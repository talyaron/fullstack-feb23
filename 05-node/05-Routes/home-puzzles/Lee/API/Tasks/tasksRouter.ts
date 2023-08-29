import express from 'express';
import { addTask, getTasks, updateTaskStatus } from './tasksCont';
const router = express.Router()


router.get('/get-tasks', getTasks)
    .post('/add-task', addTask)
    // .delete('/delete-task', deleteTask)
    .patch('/update-task-status', updateTaskStatus)
export default router;