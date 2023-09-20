import express from "express"
import { getUserName, login, registerUser, getUser, getUsers, setPremium, setAdmin } from "./userCont"

const router = express.Router()

router
    .get('/get-user-name', getUserName)
    .get('/get-users', getUsers)
    .get('/get-user', getUser)
    .post('/register', registerUser)
    .post('/login', login)
    .patch('/set-premium', setPremium)
    .patch('/set-admin', setAdmin)

export default router