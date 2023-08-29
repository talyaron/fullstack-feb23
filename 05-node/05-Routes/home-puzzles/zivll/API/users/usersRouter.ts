import express from "express";
import { addUser, signIn } from "./usersControllers";
const routes = express.Router();
routes.post("/register", addUser);
routes.post("/login", signIn);
export default routes;
