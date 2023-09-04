import express from "express";
import { login, registerUser } from "./usersCont";
const userRoutes = express.Router();
userRoutes.post("/register", registerUser).post("/login", login);
export default userRoutes;
