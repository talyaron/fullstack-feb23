import express from "express";
import { login, registerUser } from "./userCont";
const router = express.Router();

router.post("/register", registerUser).post("/login", login);


export default router;