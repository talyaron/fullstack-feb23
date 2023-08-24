import { addTask, getTasks } from "./tasksCont";
import express from "express";

const router = express.Router();
export default router

router
.get('./tasksCont.ts', getTasks)
.post('/API/tasks/addTask', addTask)
