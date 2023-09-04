import express from 'express'
import { getTask, addTask, deleteTask, updateTask } from './taskCont';
const router = express.Router();

router
    .get('/get-task', getTask)
    .post("/add-task", addTask)
    .delete("/delete-task", deleteTask)
    .patch("/update-task", updateTask)
export default router;