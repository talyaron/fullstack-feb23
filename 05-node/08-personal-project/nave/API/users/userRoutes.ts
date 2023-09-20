

import express from 'express';
import {getUserLogin,getUsers,getUser,registerUser } from "./userCont";
// import { isAdmin } from './userMiddle';

const router = express.Router();

router
.post('/register-user', registerUser)
.get('/get-user-login', getUserLogin)
.get('/get-users', getUsers)
.get('/register-user', getUser)



export default router;