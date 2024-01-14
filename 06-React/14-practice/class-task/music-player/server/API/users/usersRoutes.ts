import express from "express"
import { createUser, getAllUsers } from "./usersControl"

const usersRouter = express.Router()

usersRouter
    .get("", getAllUsers) 
    .post("/add-user", createUser)




export default usersRouter