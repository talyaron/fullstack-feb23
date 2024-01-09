import express from "express"
import { registerUser } from "./userCtrl"

const router = express.Router()


// /api/v1/books
router
//get(/get-user-by-cookie, getUserByCookie)
    .post("/register", registerUser) 



export default router