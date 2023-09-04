import { ExpenseModel } from "./expenseModel";

export const addExpense = async (req: any, res: any) => {
  try {
    const { name, category, categoryId, amount } = req.body;
    if (!name || !category || !categoryId || !amount)
      throw new Error("please complete all fields");
    const expences = new ExpenseModel({ name, category, categoryId, amount });
    await expences.save();
    res.send({ message: `expense added successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
export const getAllExpenses = async (req: any, res: any) => {
  try {
    const allExpences = await ExpenseModel.find({});
    res.send(allExpences);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
export const updateExpense = async (req: any, res: any) => {
  try {
    const { id, name, amount } = req.body;
    if (!id || !name || !amount)
      throw new Error(`some of the parameters are missing`);
    // const expenseToUpdate = await ExpenseModel.find({ id });
    // console.log(expenseToUpdate);
    const newExpense = { id, name, amount };
    console.log(newExpense);
    await ExpenseModel.findByIdAndUpdate(id, newExpense, { new: true });
    // const taskDB = await TaskModel.findByIdAndUpdate(id, { status: TaskStatus.todo }, { new: true });
    res.send({ message: `expense updated successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
export const deleteExpense = async (req: any, res: any) => {
  try {
    const { id } = req.body;
    await ExpenseModel.findByIdAndDelete(id);
    res.send({ message: `expense deleted successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

// import { ExpenceModel } from "./expenceModel";

// export const addExpense = async (req: any, res: any) => {};
// export const getAllExpenses = async (req: any, res: any) => {};
// export const updateExpense = async (req: any, res: any) => {};
// export const deleteExpense = async (req: any, res: any) => {};
