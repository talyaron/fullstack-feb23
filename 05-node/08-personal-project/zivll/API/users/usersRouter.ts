import express from "express";
import {
  addIncome,
  getIncome,
  login,
  registerUser,
  checkUser,
  getUserId,
} from "./usersCont";
const userRoutes = express.Router();
userRoutes
  .post("/register", registerUser)
  .post("/login", login)
  .patch("/add-income", addIncome)
  .get("/get-income", getIncome)
  .get("/check-user", checkUser)
  .get("/get-user-id", getUserId);
// /get-user-id
export default userRoutes;
