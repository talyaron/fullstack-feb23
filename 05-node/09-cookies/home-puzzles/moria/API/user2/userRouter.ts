import express from 'express'
import { registerUser, login, getUser } from './userCont';
const router = express.Router();


router

    .post('/register', registerUser)
    .post('/login', login)
    .get("/get-user", getUser)

export default router;

