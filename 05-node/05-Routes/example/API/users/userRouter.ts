import express from 'express'
import { getUsers, addUser, deleteUser, updateUser  } from './userCont';
const router = express.Router();


router
    .get('/get-users', getUsers)
    .post("/add-user", addUser)
    .delete("/delete-user", deleteUser)
    .patch('/update-user', updateUser)


export default router;