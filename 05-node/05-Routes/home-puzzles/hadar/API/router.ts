import express from "express";
import { addTask, deleteTask, getTasks, updateTaskDescription,} from "./cont";

const router = express.Router();

router
.get('/get-tasks', getTasks)
.post('/add-task', addTask)
.delete('/delete-task', deleteTask)
.patch('/update-task-description', updateTaskDescription)

export default router