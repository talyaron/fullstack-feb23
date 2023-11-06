import express from "express"
import { register } from "./usersCtrl";


const router = express.Router();

router
.post("", register)

export default router;