import { log } from "console";
import UserModel from "./usersModel";

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw new Error("some of the parameters not valid");
    const userDB = await UserModel.findOne({ email, password });
    if (!userDB) throw new Error("Incorrect email or password");
    res.cookie("user", userDB._id, { maxAge: 1000 * 60 * 100, httpOnly: true });
    res.send({ ok: true, user: userDB });
    log(email + " ! ! ! -- LOGIN SUCCESSFUL ! ! !");
  } catch (error) {
    console.error(error.message);
  }
}

export async function register(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("invalid email or password");
    if (await UserModel.findOne({ email: email }))
      throw new Error("this email already used");
    const newUser = await new UserModel({ email, password });
    const userDB = await newUser.save();
    res.send({ success: true });
    log(newUser.email + " ! ! ! -- REGISTER SUCCESSFUL -- ! ! !");
  } catch (error) {
    console.log(await UserModel.find({}));
    console.error(error.message);
  }
}

export async function getUserFromCookie(req, res) {
  try {
    const userId = req.cookies.user;
    if (!userId) {
      res.send({ ok: false, user: null, userEmail: null });
      throw new Error("no user in cookie");
    }
    //find user on db
    const userDB = await UserModel.findById(userId);
    if (!userDB) throw new Error("user not found on DB");
    res.send({ ok: true, user: userDB, userEmail: userDB.email });
  } catch (error) {
    console.error(error.massage);
  }
}
