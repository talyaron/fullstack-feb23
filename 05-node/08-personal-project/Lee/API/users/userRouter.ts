import express from "express";
import { login, registerUser } from "./userCont";
import { getUserRelatives } from "../relatives/relativesCont";
const router = express.Router();

router
.get('/get-user-relatives',getUserRelatives)
.post("/register", registerUser)
.post("/login", login)


export default router;
