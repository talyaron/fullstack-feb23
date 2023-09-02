import express from 'express';
import { addTask, deleteTask, getTasks, updateTaskStatus, getUserTasks } from './tasksCont';
const router = express.Router()


router.get('/get-tasks', getTasks)
    .post('/add-task', addTask)
    .delete('/delete-task', deleteTask)
    .patch('/update-task-status', updateTaskStatus)
    .post('/add-task', addTask)
    .get('/get-users-task', getUserTasks)

export default router;