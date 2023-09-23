import { User, UserModel, users } from "./userModel";
const jwt = require('jwt-simple');
export const secret = 'hkjhkjvnbdtyrhjkhwerwbnmbjhju';
//register user 
export const registerUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Email or Password incorrect");

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne({ email }).exec();
    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists." });
    }

    // If no user with the same email exists, create a new user
    const user = new UserModel({ email, password })
    const validationError = user.validateSync();

    if (validationError) {
      console.error("Validation error:", validationError);
      res.status(400).json({ error: validationError.message });
    } else {
      // Data is valid, proceed with saving
      user.save()
        .then((userDB) => {
          console.log("User saved:", userDB);
          res.status(201).json({ ok: true, user: userDB });
        })
        .catch((saveError) => {
          console.error("Error saving user:", saveError);
          res.status(500).json({ error: "Failed to save user." });
        });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");
    //check if user exist and password is correct

    const user = await UserModel.findOne({ email, password }).exec();
    if (!user) throw new Error("some of the details are incorrect");

    // Determine if the user is an admin
    const isAdmin = user.isAdmin;

    const cookie = {
      uid: user._id,
    }

     // encode
     const token = jwt.encode(cookie, secret);
     console.log(token)
    
    res.cookie("user", token, {  httpOnly: true, maxAge: 900000 })
    res.send({ ok: true, email: user.email, isAdmin });


  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export async function getUserAndRelatives(req: any, res: any) {
  try {
    const { email } = req.user; // Get email from the authenticated admin user
    const user = await UserModel.findOne({ email })
      .populate({
        path: "familyMembers",
        model: UserModel,
      })
      .exec();

    if (!user) {
      throw new Error("User not found with the provided email");
    }

    return res.json({ user }); // Return the user and relatives as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}





