import express from 'express'
import { addTask, deleteTask, getTasks, updateTaskStatus } from './tasksCont';
const router = express.Router();

router.get('/get-tasks', getTasks)
    .delete("/delete-task", deleteTask)
    .patch('/update-task-status', updateTaskStatus)
    .post("/add-task", addTask)


export default router;