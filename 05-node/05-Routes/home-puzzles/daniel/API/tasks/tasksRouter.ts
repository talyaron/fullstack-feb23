import express from 'express';
import { getTasks, addTask,updateTask, deleteTask } from './tasksCont';
const router = express.Router();


router
    .get('/get-tasks', getTasks)
    .post('/add-task', addTask)
    .patch('/update-task', updateTask)
    .delete('/delete-task', deleteTask)

export default router;