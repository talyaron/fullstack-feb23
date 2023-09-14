import express from 'express';
import {registerUser,loginUser} from './usercont'
const router= express.Router();

router
    .post('/register-user',registerUser)
    .post('/login-user',loginUser)

export default router;