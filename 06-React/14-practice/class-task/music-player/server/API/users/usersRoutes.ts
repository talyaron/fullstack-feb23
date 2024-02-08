import express from "express";
import {
  getAllUsers,
  loginUser,
  registerUser,
  userByCookie,
} from "./usersControl";

const usersRouter = express.Router();

usersRouter
  .get("", getAllUsers)
  .post("/register-user", registerUser)
  .post("/login-user", loginUser)
  .get("/user-by-cookie", userByCookie);

export default usersRouter;
