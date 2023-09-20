import { User, UserModel, users } from "./userModel";
const jwt = require('jwt-simple');
export const secret = 'kdghdkjghYkdjfghkjdfghjk';


//register user 
export const registerUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");

    //this was in typescript
    // const user = new User({ email, password });

    const user = new UserModel({ email, password });
    const userDB = await user.save();
    console.log(userDB)
    //check if user already exist
    // const userExist = users.find((user) => user.email === email);
    // if (userExist) throw new Error("User already exist");
    // users.push(user);
    res.send({ ok: true, userDB });

  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");
    //check if user exist and password is correct
    const user = await UserModel.findOne({ email, password });
    if (!user) throw new Error("some of the details are incorrect");
    
    const cookie = {
      uid: user._id,
      role: user.role || "user",
    }
    //incript with JWT
    // encode
    const token = jwt.encode(cookie, secret);
    console.log(token)

    res.cookie("user", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
    res.send({ ok: true });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export async function getUsers(req: any, res: any) {
  try {
    const users = await UserModel.find();
    res.send({ ok: true, users });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

