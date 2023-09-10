import { User, users } from "./usermodel";

//register user

export const registerUser = (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");
    const user = new User({ email, password });

    const userExist = users.find((user) => user.email === email);
    if (userExist) throw new Error("User already exists");
    users.push(user);
    res.send({ ok: true });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

// login user

export const loginUser = (req, res) => {
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
