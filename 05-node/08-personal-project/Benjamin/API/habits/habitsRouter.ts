import express from "express";
import { addNewHabit } from "./habitsCont" ;
const habitsRouter = express.Router();

habitsRouter.post("/add-new-habit", addNewHabit)




export default habitsRouter;