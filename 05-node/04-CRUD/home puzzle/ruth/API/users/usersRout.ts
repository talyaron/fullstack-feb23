import { addUser, login } from "./usersCont";
import express from "express";

const router = express.Router();

router
.post("/login", login)
.post("/add-user", addUser);

export default router;
