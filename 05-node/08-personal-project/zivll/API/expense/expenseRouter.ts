import express from "express";
import {
  addExpense,
  updateExpense,
  deleteExpense,
  getUserExpenses,
} from "./expenseCont";

const expensesRoutes = express.Router();
expensesRoutes
  .post("/add-expense", addExpense)
  .get("/get-user-expenses", getUserExpenses)
  .patch("/update-expense", updateExpense)
  .delete("/delete-expense", deleteExpense);
export default expensesRoutes;
