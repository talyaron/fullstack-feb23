import express from 'express'
import { addUserTask,getUserTasks } from './tasksCont';
const router = express.Router();

router
    .post("/add-user-task", addUserTask)
    .get("/get-user-tasks/:userId", getUserTasks);


export default router;