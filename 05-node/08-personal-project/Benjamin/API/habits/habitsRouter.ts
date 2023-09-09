import express from "express";
import { addNewHabit , getUserHabits } from "./habitsCont" ;
const habitsRouter = express.Router();

habitsRouter.post("/add-new-habit", addNewHabit).get("/get-user-habits", getUserHabits);




export default habitsRouter;