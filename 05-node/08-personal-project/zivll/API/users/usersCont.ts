import { UserModel } from "./usersModel";

export const registerUser = async (req: any, res: any) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password)
      throw new Error("Please complete all fields");
    //check if user already exist
    const userExist = await UserModel.find({ email });
    console.log(userExist);
    if (userExist.length === 0) {
      const user = new UserModel({ userName, email, password });
      await user.save();
      res.send({ ok: true });
    } else {
      res.send({ message: "user is already registered" });
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const addIncome = async (req: any, res: any) => {
  try {
    const { userName, userIncome } = req.body;
    if (!userName || !userIncome)
      throw new Error(`some of the parameters are missing`);
    const updateIncome = await UserModel.findOneAndUpdate({
      userName,
      userIncome,
    });
    // const income = new UserIncomeModel({ userName, userIncome });
    await updateIncome.save();
    res.send({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
export const getIncome = async (req: any, res: any) => {
  try {
    const { userName } = req.body;
    // console.log(userName);

    if (!userName) throw new Error(`Username not provided`);
    const getIncome = await UserModel.findOne({ userName });
    res.send(getIncome.userIncome);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");
    const userExist = await UserModel.find({ email });
    if (userExist.length === 0) {
      res.send({ message: "user does not exist, please register" });
    } else if (
      userExist[0].email === email &&
      userExist[0].password === password
    ) {
      res.send({ ok: true });
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
