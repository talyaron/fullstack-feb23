import express from "express";
import { addIncome, getIncome, login, registerUser } from "./usersCont";
const userRoutes = express.Router();
userRoutes
  .post("/register", registerUser)
  .post("/login", login)
  .patch("/add-income", addIncome)
  .post("/get-income", getIncome);
export default userRoutes;
