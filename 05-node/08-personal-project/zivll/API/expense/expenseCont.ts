import { ExpenseModel } from "./expenseModel";

export const addExpense = async (req: any, res: any) => {
  try {
    const { userName, expenseName, expenseCategory, expenseAmount } = req.body;
    console.log(userName, expenseName, expenseCategory, expenseAmount);

    if (!userName || !expenseName || !expenseCategory || !expenseAmount)
      throw new Error("please complete all fields");
    const expences = new ExpenseModel({
      userName: userName,
      expenseName: expenseName,
      expenseCategory: expenseCategory,
      expenseAmount: expenseAmount,
    });
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
    console.log({ id, name, amount });

    if (!id || !name || !amount) {
      throw new Error(`some of the parameters are missing`);
    }
    // const newExpense = { id, name, amount };
    // console.log(newExpense);
    await ExpenseModel.findByIdAndUpdate(
      id,
      { id, name, amount },
      { new: true }
    );
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
