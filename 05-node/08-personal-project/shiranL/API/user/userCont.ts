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


// Log out all other users by setting their 'isLogOn' property to 'false'

await UserModel.updateMany({ _id: { $ne: existingUser._id } }, { isLoggedIn: false });


    existingUser.isLoggedIn = true;
    await existingUser.save();

    // Return a success response
  
  
    res.send({ ok:true, existingUser});

 
  } catch (error) {
    console.error(error);
    res.send({ error:error.message });  

  }

}

export const getLoggedInUser= async (req:any,res:any)=>{
  try {
    const logInUser = await UserModel.findOne({ isLoggedIn: true });
    if (!logInUser)  return res.send({ error: "User not found" });

    res.send({ ok:true, logInUser});

 
  } catch (error) {
    console.error(error);
    res.send({ error:error.message });  

  }

}

export const logOut= async (req:any,res:any)=>{
  try {
    await UserModel.updateMany({}, { isLoggedIn: false });

    res.send({ok:true});
 
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
