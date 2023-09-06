import express from "express";
import { registerUser , loginUser , getUserData , getUserName } from "./usersCont" ;
const usersRouter = express.Router();

usersRouter.post("/register" , registerUser)
.post("/login", loginUser)
.get("/get-user", getUserData)
.get("/get-userName",getUserName);





export default usersRouter;