import express from "express";
import { addUser, deleteUser, getUsers, updateUserTasks } from "./usersCont";
const router = express.Router();

router
    .post('/add-user', addUser)
    .get('/get-users', getUsers)
    .patch('/update-user-tasks', updateUserTasks)
    .delete('/delet-user', deleteUser)

export default router;