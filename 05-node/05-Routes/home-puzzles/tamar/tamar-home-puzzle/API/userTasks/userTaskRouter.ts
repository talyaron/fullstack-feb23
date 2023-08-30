import express from "express";
import { getTasksOfUser } from "./userTaskCont";
const router = express.Router();

router
    .post("/get-tasks-of-user", getTasksOfUser)
export default router;