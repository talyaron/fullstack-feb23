import express from "express"
import { getUserName, login, registerUser } from "./userCont"

const router=express.Router()

router
.post('/get-user-name',getUserName)
.post('/register', registerUser)
.post('/login',login)

export default router