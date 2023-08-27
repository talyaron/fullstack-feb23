// usersRouters.ts  

import { addUser ,getAllUsers ,logIn, getUserLogIn} from "./usersCont";
import express from "express";

const router = express.Router();
export default router

router
.get("/get-all-users", getAllUsers)
.post("/add-user", addUser)
.post("/log-in", logIn)
.get("/get-user-is-log-in",getUserLogIn);



