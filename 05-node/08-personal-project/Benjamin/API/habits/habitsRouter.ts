import express from "express";
import { addNewHabit , getUserHabits , habitDone , deleteHabit , getDoneHabits } from "./habitsCont" ;
const habitsRouter = express.Router();

habitsRouter.post("/add-new-habit", addNewHabit)
.get("/get-user-habits", getUserHabits)
.post("/habitDone", habitDone)
.post("/deleteHabit", deleteHabit)
.get("/getDoneHabits", getDoneHabits);




export default habitsRouter;