import { addUser, getTasksByUser, login, updateUser } from "./usersCont";
import express from "express";

const router = express.Router();

router
.get("/get-Tasks-by-user", getTasksByUser)
.post("/update-user", updateUser)
.post("/login", login)
.post("/add-user", addUser);

export default router;
