import express from "express";
import { addExpense } from "./expenseCont";

const expensesRoutes = express.Router();
expensesRoutes.post("/add-expense", addExpense);
export default expensesRoutes;
