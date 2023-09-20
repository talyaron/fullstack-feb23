import express from 'express'
import { registerUser, login, getUsers  } from './userCont';
import { isAdmin } from './middelware/users';
const router = express.Router();


router
    .post('/login',login)
    .post("/register", registerUser)
    .get("/get-users",isAdmin, getUsers)
   


export default router;