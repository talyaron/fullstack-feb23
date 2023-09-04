import { USerModel, User, users } from "./userModel";

//register user
export const registerUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");
    // const user = new User({ email, password });
    const user = new USerModel({ email, password });
    await user.save();
    //check if user already exist
    const userExist = users.find((user) => user.email === email);
    if (userExist) throw new Error("User already exist");
    // users.push(user);
    res.send({ ok: true });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");
    //check if user exist and password is correct
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) throw new Error("some of the details are incorrect");
    res.send({ ok: true, email: user.email });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
