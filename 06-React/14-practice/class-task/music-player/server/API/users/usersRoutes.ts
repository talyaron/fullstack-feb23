import express from "express"
import { createUser, getAllUsers } from "./usersControl"

const usersRouter = express.Router()

usersRouter
    .get("", getAllUsers) 
    .post("", createUser)




export default usersRouter