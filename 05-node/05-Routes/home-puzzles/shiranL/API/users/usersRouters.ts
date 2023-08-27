// usersRouters.ts  

import { addUser ,getAllUsers } from "./usersCont";
import express from "express";

const router = express.Router();
export default router

router
.get("/get-all-users", getAllUsers)
.post("/add-user", addUser);

