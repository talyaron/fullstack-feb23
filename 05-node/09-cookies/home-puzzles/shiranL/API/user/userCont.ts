import { UserModel} from "./userModel";
import bcrypt from 'bcrypt'; // For password hashing

export const addUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if(!email || !password) throw new Error("Please complete all fields");
  
    

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      // User with the same email already exists, return an error response
      return res.send({ error: "User already exists with this email" });
    }
    const user = new UserModel({ email, password });
    const userDB = await user.save();
    console.log(userDB)
   
    res.send({ ok:true, userDB});

  } catch (error) {
    console.error(error);
    res.send({ error:error.message });
  }
}

export const logIn= async (req:any,res:any)=>{
  try {
    const { email, password } = req.body;
  if(!email || !password) throw new Error("Please complete all fields");
   
  // find if email exsist
  const existingUser = await UserModel.findOne({ email });
  if (!existingUser) {
    // User with the same email already exists, return an error response
    return res.send({ error: "User not found" });
  }

  if(password != existingUser.password) {
// Passwords don't match, return an error response
      return res.status(401).json({ error: "Incorrect password" });
    }
// save user id with cockie

  
    res.cookie("user", existingUser._id, { maxAge: 1000*1000, httpOnly: true }); 
    // Return a success response
    res.send({ ok:true, existingUser});

 
  } catch (error) {
    console.error(error);
    res.send({ error:error.message });  

  }

}

export const getLoggedInUser= async (req:any,res:any)=>{
  try {
  
     const userId = req.cookies.user;
     if(!userId) throw new Error("no user in cookies"); 
     //find user in DB
    const userDB = await UserModel.findById(userId);
    if(!userDB) throw new Error("user dosnt exist in DB");
    res.send({ ok:true, logInUser:userDB});

 
  } catch (error) {
    console.error(error);
    res.send({ error:error.message });  

  }

}

export const logOut= async (req:any,res:any)=>{
  try {
    
     // Delete the "user" cookie
     res.clearCookie("user");
    
     // Return a success response
     res.send({ ok: true });

  
 
  } catch (error) {
    console.error(error);
    res.send({ error:error.message });  

  }

}


export const allUsers = async (req: any, res: any) => {
  try {
    // Find all users who are not admins
    const allUsers = await UserModel.find({ });

    // Return the list of not admin users as a response
    res.send({ ok: true, allUsers });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};



export const getUserDetails = async (req, res) => {
  try {
    const userId = req.query.userId;

    // Check if the provided userId exists
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.send({ error: "User not found" });
    }

    // Return the user details
    res.send({ ok: true, user });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
};

export const updateUser = async (req: any, res: any) => {
  try {
    const {  newEmail, newPassword, isAdmin } = req.body;
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
  } catch (error) {
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

