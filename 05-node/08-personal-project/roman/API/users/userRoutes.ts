import express from "express";
import {addUser, deleteUser, getUserById, getUsers, updateUserInfo } from "./userCont";

const router = express.Router();



// add user
router.post('/add-user',addUser)
// get all users
.get('/get-users', getUsers)
// get user by id
.get('/:userId', getUserById)

// edit user
router.put('/:userId',updateUserInfo);

//delete user
router.delete('/:userId', deleteUser)

export default router;