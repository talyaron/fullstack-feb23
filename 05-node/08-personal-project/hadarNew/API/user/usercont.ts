import { User, users,UserModel } from "./usermodel";

//register user

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");
    //ts
    // const user = new User({ email, password });

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
