import express from "express";
import { getAllUsers, registerUser, userByCookie } from "./usersControl";

const usersRouter = express.Router();

usersRouter
  .get("", getAllUsers)
  .post("/register-user", registerUser)
  .get("/user-by-cookie", userByCookie);

export default usersRouter;
