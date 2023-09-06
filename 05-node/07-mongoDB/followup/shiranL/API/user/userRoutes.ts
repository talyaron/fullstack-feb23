
import {addUser, logIn , getLogInUser } from "./userCont";
import express from "express";

const router = express.Router();
export default router

router
.post("/add-user", addUser)
.post("/log-in", logIn)
.get("/get-log-in-user", getLogInUser);
