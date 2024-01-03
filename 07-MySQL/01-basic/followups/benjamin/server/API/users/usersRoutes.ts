import express from "express"
const router = express.Router();

import { getAllUsers } from "./usersCont"

router.get("", getAllUsers)




export default router;