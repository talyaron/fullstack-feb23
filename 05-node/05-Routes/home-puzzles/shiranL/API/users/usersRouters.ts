// usersRouters.ts  

import { addUser, getUsers } from "./usersCont";
import express from "express";

const router = express.Router();
export default router

router
.get('./usersCont.ts', getUsers)
.post('/API/tasks/addUser', addUser)
