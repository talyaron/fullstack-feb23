import express from 'express';
import {login, registerUser } from './usersCont'
const router = express.Router()


router
    .post("/register", registerUser)
    .post("/login", login);

export default router;