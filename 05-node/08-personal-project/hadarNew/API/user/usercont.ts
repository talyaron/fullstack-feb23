import { User, users,UserModel } from "./usermodel";

//register user

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");
    //ts
    // const user = new User({ email, password });

     // Check if a user with the same email already exists
     const existingUser = await UserModel.findOne({ email }).exec();
     if (existingUser) {
       return res.status(400).json({ error: "User with this email already exists." });
     }

    //mongo
    const user = new UserModel({ email, password });
    const userDB= await user.save();
    console.log(userDB)

    // const userExist = users.find((user) => user.email === email);
    // if (userExist) throw new Error("User already exists");
    // users.push(user);
    res.send({ ok: true, userDB });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

// login user

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");

    const user = await UserModel.findOne({ email, password }).exec();
    if (!user) throw new Error("some of the details are incorrect");
    res.cookie("user", user._id, { maxAge: 1000 * 100, httpOnly: true })
    res.send({ ok: true, email: user.email });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
