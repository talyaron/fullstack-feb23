import express from "express";
import { login, registerUser, getUserAndRelatives  } from "./userCont";
const router = express.Router();

router
.post("/register", registerUser)
.post("/login", login)
.get("/userWithRelatives", getUserAndRelatives)


export default router;
