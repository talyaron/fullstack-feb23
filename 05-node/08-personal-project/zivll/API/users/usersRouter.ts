import express from "express";
import { registerUser } from "./usersCont";
const userRoutes = express.Router();
userRoutes.post("/register", registerUser);
