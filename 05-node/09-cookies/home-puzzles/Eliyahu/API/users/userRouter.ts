import express from "express"
import { getUserName, login, registerUser, getUser, getUsers, setPremium, setAdmin } from "./userCont"
import { isAdmin } from "./userMiddleware"

const router = express.Router()

router
    .get('/get-user-name', getUserName)
    .get('/get-users',isAdmin, getUsers)
    .get('/get-user', getUser)
    .post('/register', registerUser)
    .post('/login', login)
    .patch('/set-premium',isAdmin, setPremium)
    .patch('/set-admin',isAdmin, setAdmin)

export default router