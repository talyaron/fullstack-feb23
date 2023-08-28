import express from "express";
import { login, deleteUser, getUsers, registerUser, updateUser } from "./usersCont";
const router = express.Router();

router
    .post('/register', registerUser)
    .post('/login', login)
    .get('/get-users', getUsers)
    .patch('/update-user', updateUser)
    .delete('/delet-user', deleteUser)

export default router;