import express from "express"
import { getUserName, login, registerUser, loginAdmin, getUser } from "./userCont"

const router=express.Router()

router
.get('/get-user-name',getUserName)
.get('/get-user', getUser)
.post('/register', registerUser)
.post('/login',login)
.post('/loginAdmin',loginAdmin)

export default router