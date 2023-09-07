import { ExpenseModel } from "./expenseModel";

export const addExpense = async (req: any, res: any) => {
  try {
    const { userName, expenseName, categoryName, expenseAmount } = req.body;
    console.log(userName, expenseName, categoryName, expenseAmount);

    if (!userName || !expenseName || !categoryName || !expenseAmount)
      throw new Error("please complete all fields");
    const expences = new ExpenseModel({
      userName: userName,
      expenseName: expenseName,
      categoryName: categoryName,
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
    const { _id, name, amount } = req.body;
    console.log({ _id, name, amount });

    if (!_id || !name || !amount) {
      throw new Error(`some of the parameters are missing`);
    }
    const filter = { _id: _id };
    const newParameters = { expenseName: name, expenseAmount: amount };
    // const newExpense = { id, name, amount };
    // console.log(newExpense);
    const update = await ExpenseModel.findByIdAndUpdate(filter, newParameters);
    await update.save();
    res.send({ ok: true });
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
