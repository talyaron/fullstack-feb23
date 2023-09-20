

import express from 'express';
import {getUserLogin,getUsers,getUser, } from "./userCont";
// import { isAdmin } from './userMiddle';

const router = express.Router();

router
.get('/get-user-login', getUserLogin)
.get('/get-users', getUsers)
.get('/register-user', getUser)



export default router;