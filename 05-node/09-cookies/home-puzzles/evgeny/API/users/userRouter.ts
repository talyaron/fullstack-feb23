import express from "express";
import { login, registerUser,getUser } from "./userCont";
const router = express.Router();

router
.post("/register", registerUser)
.post("/login", login)
.get("/getUser",getUser)


export default router;
