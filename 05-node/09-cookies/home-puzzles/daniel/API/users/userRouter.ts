import express from 'express'
import { registerUser, loginUser,getUser } from './userCont'
const router = express.Router();

router.post('/register', registerUser)
.post('/login', loginUser)
.get('/get-user',getUser)

export default router;