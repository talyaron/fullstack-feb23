
import {addUser, logIn } from "./userCont";
import express from "express";

const router = express.Router();
export default router

router
.post("/add-user", addUser)
.post("/log-in", logIn);    