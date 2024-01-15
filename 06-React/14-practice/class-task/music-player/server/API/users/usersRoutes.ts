import express from "express"
import { getAllUsers, registerUser } from "./usersControl"

const usersRouter = express.Router()

usersRouter
    .get("", getAllUsers) 
    .post("/register-user", registerUser)




export default usersRouter