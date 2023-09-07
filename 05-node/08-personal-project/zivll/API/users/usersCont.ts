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
    const { userName, password } = req.body;
    if (!userName || !password) throw new Error("Please complete all fields");
    const userExist = await UserModel.find({ userName });
    if (userExist.length === 0) {
      res.send({ message: "user does not exist, please register" });
    } else if (
      userExist[0].userName === userName &&
      userExist[0].password === password
    ) {
      console.log(userExist);

      res.send(userExist);
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
export const checkUser = (req: any, res: any) => {
  try {
    const { userName } = req.body;
    console.log(userName);

    if (!userName) throw new Error(`email is missing`);
    const userExists = UserModel.find({ userName });
    console.log(userExists);

    if (userExists) res.send({ message: "user exist" });
    if (!userExists || userExists === undefined || userExists === null)
      res.send({ message: "user does not exist" });
    // res.send({ email: email });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
