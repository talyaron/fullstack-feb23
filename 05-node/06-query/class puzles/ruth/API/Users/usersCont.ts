import { log } from 'console';
import { User, users } from "./usersModel";

export const login = (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw new Error("some of the parameters not valid");
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );
    if (!user) throw new Error("Incorrect email or password");
    res.send({user,  ok: true });
    log(user.email + " ! ! ! -- LOGIN SUCCESSFUL ! ! !")
  } catch (error) {
    console.error(error.message);
  }
};

export const register = (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("invalid email or password");
    if (users.find((user) => user.email === email))
      throw new Error("this email already used");
    const newUser = new User({ email, password });
    users.push(newUser);
    res.send({ success: true });
    log(newUser.email + " ! ! ! -- REGISTER SUCCESSFUL -- ! ! !")

  } catch (error) {
    console.log(users)
    console.error(error.message);
  }
};
