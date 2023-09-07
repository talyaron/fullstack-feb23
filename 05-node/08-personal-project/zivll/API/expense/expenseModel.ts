import { Schema, model } from "mongoose";

// this class used to create and define expence entitie
export const ExpenseSchema = new Schema({
  userName: String,
  expenseName: String,
  categoryName: String,
  expenseAmount: Number,
});

export const ExpenseModel = model("expense", ExpenseSchema);
