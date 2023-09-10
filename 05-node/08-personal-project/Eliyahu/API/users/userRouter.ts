import express from "express"
import { getUserName, login, registerUser, loginAdmin } from "./userCont"

const router=express.Router()

router
.get('/get-user-name',getUserName)
.post('/register', registerUser)
.post('/login',login)
.post('/loginAdmin',loginAdmin)

export default router