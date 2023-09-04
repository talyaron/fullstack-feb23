import { ExpenceModel } from "./expenseModel";

export const addExpense = async (req: any, res: any) => {
  try {
    const { name, category, categoryId, amount } = req.body;
    if (!name || !category || !categoryId || !amount)
      throw new Error("please complete all fields");
    const expences = new ExpenceModel({ name, category, categoryId, amount });
    await expences.save();
    res.send({ ok: true });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
export const getAllExpenses = async (req: any, res: any) => {};
export const updateExpense = async (req: any, res: any) => {};
export const deleteExpense = async (req: any, res: any) => {};

// import { ExpenceModel } from "./expenceModel";

// export const addExpense = async (req: any, res: any) => {};
// export const getAllExpenses = async (req: any, res: any) => {};
// export const updateExpense = async (req: any, res: any) => {};
// export const deleteExpense = async (req: any, res: any) => {};
