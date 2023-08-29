import express from 'express';
import { addTask, getTasks } from './tasksCont';
const router = express.Router()


router.get('/get-tasks', getTasks)
    .post('/add-task', addTask)
    // .delete('/delete-task', deleteTask)
    // .patch('/update-task', updateTaskStatus)

export default router;