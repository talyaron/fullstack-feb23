import express from "express"
import { addTask, getAllDoneTasks, getAllTask, removeTask, updateTask } from "./taskCont"

const router = express.Router()

router
    .get("/get-all-done-tasks", getAllDoneTasks)
    .get("/get-all-tasks", getAllTask)
    .post("/add-task", addTask)
    .delete("/delete-task", removeTask)
    .patch("/patch-task", updateTask)
    

export default router

