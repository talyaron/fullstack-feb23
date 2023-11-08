import { UserModel } from "./usersModel";

export const registerUser = async (req: any, res: any) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password)
      throw new Error("Please complete all fields");
    //check if user already exist
    const userExist = await UserModel.find({ userName });
    if (userExist.length === 0) {
      const user = new UserModel({ userName, email, password });
      await user.save();

      res.cookie("user", user._id, {
        httpOnly: true,
        secure: true,
        expires: 1000 * 1800,
        sameSite: "lax",
      });
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
    const _id = req.cookie.user;
    const { userIncome } = req.body;
    if (!_id || !userIncome)
      throw new Error(`some of the parameters are missing`);
    const updateIncome = await UserModel.findOneAndUpdate({
      _id,
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
    const _id = req.cookies.user;
    // console.log(_id);
    if (!_id) throw new Error(`user id is missing`);

    const userNameFromDB = await UserModel.findById({ _id });
    // console.log(userNameFromDB.userIncome);

    if (!userNameFromDB.userIncome) {
      res.send({ message: "0" });
    } else {
      res.send({ message: `${userNameFromDB.userIncome}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
export const login = async (req: any, res: any) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) throw new Error("Please complete all fields");
    const userExist = await UserModel.findOne({ userName, password });

    if (!userExist) {
      res.send({ message: "user does not exist, please register" });
    } else if (userExist) {
      res.cookie("user", userExist._id, {
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 1800,
        sameSite: "lax",
      });
      res.send({ userName: userExist.userName });
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
    const _id = req.cookies.user;
    // console.log(_id);
    if (!_id) throw new Error(`user id is missing`);

    const userExists = await UserModel.findById({ _id });
    // console.log(userExists.id);

    if (
      !userExists ||
      userExists === undefined ||
      userExists === null
      // userExists.length === 0
    )
      res.send({ message: "user does not exist" });
    if (userExists) res.send({ message: "user exist" });
    // res.send({ email: email });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
export const getUserId = async (req: any, res: any) => {
  try {
    const _id = req.cookies.user;
    // console.log(_id);

    const user = await UserModel.findById({ _id });
    // console.log(user.id);

    res.send({ id: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
export async function isAdmin(req: any, res: any, next: Function) {
  try {
    const userId = req.cookies.user;
    if (!userId) throw new Error(`User not found`);
    const userDB = await UserModel.findById(userId);
    if (userDB.isAdmin) {
      next();
    } else {
      res.status(401).send(`not authorized`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}
export async function userLogedIn(req: any, res: any, next: Function) {
  try {
    const userId = req.cookies.user;
    console.log(userId);

    if (!userId) throw new Error(`User not found`);
    const userDB = await UserModel.findById(userId);
    if (userDB) {
      req.user = userDB;
      console.log(req.user);
      next();
    } else {
      res.status(404).send(`user not found in database`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}
