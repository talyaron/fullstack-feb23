import express from "express";
import { login, registerUser,getUserName } from "./userCont";
const router = express.Router();

router.post("/register", registerUser).post("/login", login)
      .get("/getUserName", getUserName);


export default router;