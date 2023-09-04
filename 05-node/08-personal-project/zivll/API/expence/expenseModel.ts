import { Schema, model } from "mongoose";

// this class used to create and define expence entitie
export const ExpenseSchema = new Schema({
  name: String,
  category: String,
  categoryId: String,
  amount: Number,
});

export const ExpenseModel = model("expences", ExpenseSchema);
