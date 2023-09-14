import express from "express";
import {
  addExpense,
  getAllExpenses,
  updateExpense,
  deleteExpense,
} from "./expenseCont";

const expensesRoutes = express.Router();
expensesRoutes
  .post("/add-expense", addExpense)
  .get("/get-all-expenses", getAllExpenses)
  .patch("/update-expense", updateExpense)
  .delete("/delete-expense", deleteExpense);
export default expensesRoutes;
