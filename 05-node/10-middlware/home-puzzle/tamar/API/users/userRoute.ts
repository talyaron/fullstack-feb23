import express from "express";
import { loginUser, registerUser, getUser, deleteUser, isAdmin } from "./usersCont";

const router = express.Router();

router.post("/register", registerUser)
      .post("/login", loginUser)
      .get("/get-user", getUser)
      .delete("/delete-user",isAdmin, deleteUser)

export default router;