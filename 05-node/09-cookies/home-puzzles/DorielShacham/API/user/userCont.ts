import { UserModel } from "./userModel";
// const jwt = require('jwt-simple');

const {SECRET} = process.env;
const secret = SECRET;

const bcrypt = require('bcrypt');
const saltRounds = 10;

// console.log(process.env)

export const addUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      // User with the same email already exists, return an error response
      return res.send({ error: "User already exists with this email" });
    }

    //bycrpyt 
    // const hash = bcrypt.hash(password, saltRounds);
  

    const user = new UserModel({ email, password }); // password: hash}
    const userDB = await user.save();
    console.log(userDB);

    res.send({ ok: true, userDB });
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const logIn = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");

    // find if email exsist
    const existingUser = await UserModel.findOne({ email });
    
    // //bycript code
    // const {password:hash} = userDB;
    // if(!hash) throw new Error("some bycrypt error");
    
    if (!existingUser) {
      // User with the same email already exists, return an error response
      return res.send({ error: "User not found" });
    }

    if (password != existingUser.password) {
      // Passwords don't match, return an error response
      return res.status(401).json({ error: "Incorrect password" });
    }

    // Log out all other users by setting their 'isLogOn' property to 'false'

    await UserModel.updateMany(
      { _id: { $ne: existingUser._id } },
      { isLoggedIn: false }
    );

    existingUser.isLoggedIn = true;
    await existingUser.save();

    res.cookie("user", existingUser._id, {
      maxAge: 1000 * 1000,
      httpOnly: true,
    });

    res.send({ ok: true, existingUser });
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const getLoggedInUser = async (req: any, res: any) => {
  try {
    // const logInUser = await UserModel.findOne({ isLoggedIn: true });
    // if (!logInUser) return res.send({ error: "User not found" });
    const logInUser = req.user;
    res.send({ ok: true, logInUser });
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const logOut = async (req: any, res: any) => {
  try {
    await UserModel.updateMany({}, { isLoggedIn: false });

    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const allUsers = async (req: any, res: any) => {
  try {
    // Find all users who are not admins
    const allUsers = await UserModel.find({});

    // Return the list of not admin users as a response
    res.send({ ok: true, allUsers });
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const getUserDetails = async (req: any, res: any) => {
  try {
    const userId = req.query.userId;

    // Check if the provided userId exists
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.send({ error: "User not found" });
    }

    // Return the user details
    res.send({ ok: true, user });
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const updateUser = async (req: any, res: any) => {
  try {
    const { newEmail, newPassword, isAdmin } = req.body;
    const userId = req.query.userId;
    // Check if the provided userId exists
    const existingUser = await UserModel.findById(userId);

    if (!existingUser) {
      return res.send({ error: "User not found" });
    }

    // Update the user's email, password, and isAdmin if provided
    if (newEmail) {
      existingUser.email = newEmail;
    }
    if (newPassword) {
      existingUser.password = newPassword;
    }
    if (isAdmin !== undefined) {
      existingUser.isAdmin = isAdmin;
    }

    // Save the updated user
    await existingUser.save();

    res.send({ ok: true, existingUser });
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const deleteUser = async (req: any, res: any) => {
  try {
   
    const userId = req.query.userId;
    // Check if the provided userId exists
    const existingUser = await UserModel.findByIdAndDelete(userId)

   if (!existingUser )  return res.send({ error: "User not found" });

    res.send({ ok: true, message: "User deleted successfully" });
    

  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};
