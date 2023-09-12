import { UserModel } from "./usersModel";

export const registerUser = async (req: any, res: any) => {
  try {
    const { userName, email, password } = req.body;
    console.log({ userName, email, password });

    if (!userName || !email || !password)
      throw new Error("Please complete all fields");
    //check if user already exist
    const userExist = await UserModel.find({ userName });
    console.log(userExist);
    if (userExist.length === 0) {
      const user = new UserModel({ userName, email, password });
      await user.save();
      res.send({ message: "User added successfully" });
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
    const userNameFromDB = await UserModel.findOne({ userName });
    if (!userNameFromDB.userIncome) {
      res.send({ message: "0" });
    } else {
      res.send({ message: `${userNameFromDB.userIncome}` });
    }
    console.log(res);
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
      res.send({ userName: userExist[0].userName });
    } else {
      throw new Error("Incorrect password, please try again or register");
    }
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
export const checkUser = async (req: any, res: any) => {
  try {
    const { userName } = req.body;
    console.log(userName);

    if (!userName) throw new Error(`userName is missing`);
    const userExists = await UserModel.find({ userName });
    console.log(userExists);

    if (
      !userExists ||
      userExists === undefined ||
      userExists === null ||
      userExists.length === 0
    )
      res.send({ message: "user does not exist" });
    if (userExists) res.send({ message: "user exist" });
    // res.send({ email: email });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
