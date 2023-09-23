import express from "express";
import { login, registerUser, getUserAndRelatives  } from "./userCont";
import { isAdmin } from "./middlewareUsers";
const router = express.Router();

router
.post("/register", registerUser)
.post("/login", login)
.get("/userWithRelatives",isAdmin, getUserAndRelatives)



export default router;
