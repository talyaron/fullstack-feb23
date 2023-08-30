import express from "express";
import { login, deleteUser, getUser, registerUser, updateUser } from "./usersCont";
const router = express.Router();

router
    .post('/register', registerUser)
    .post('/login', login)
    .get('/get-user', getUser)
    .patch('/update-user', updateUser)
    .delete('/delet-user', deleteUser)

export default router;