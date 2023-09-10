import express from "express";
import {
  addIncome,
  getIncome,
  login,
  registerUser,
  checkUser,
} from "./usersCont";
const userRoutes = express.Router();
userRoutes
  .post("/register", registerUser)
  .post("/login", login)
  .patch("/add-income", addIncome)
  .post("/get-income", getIncome)
  .post("/check-user", checkUser);
export default userRoutes;
