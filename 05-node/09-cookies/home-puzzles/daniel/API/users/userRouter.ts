import express from 'express'
import { registerUser, loginUser,getUser,deleteUser,updateUser } from './userCont'
import { isAdmin } from './userMiddleware';
const router = express.Router();

router.post('/register', registerUser)
.post('/login', loginUser)
.get('/get-user',getUser)
.delete('/delete-user',isAdmin,deleteUser)
.patch('/update-user', isAdmin,updateUser)

export default router;