import express from 'express'
import { addUserTask } from './tasksCont';
const router = express.Router();

router
    .post("/add-user-task", addUserTask)


export default router;