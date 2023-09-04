import { UserModel} from "./userModel";

export const addUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if(!email || !password) throw new Error("Please complete all fields");
  
    const user = new UserModel({ email, password });

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      // User with the same email already exists, return an error response
      return res.send({ error: "User already exists with this email" });
    }
   
    const userDB = await user.save();
    console.log(userDB)
   
    res.send({ ok:true, userDB});

  } catch (error) {
    console.error(error);
    res.send({ error:error.message });
  }
}

export const logIn= async (req:any,res:any)=>{
  const { email, password } = req.body;
  if(!email || !password) throw new Error("Please complete all fields");
  
  
}






// export function logIn(req, res) {
//   try {
//     const user = new User(req.body.email, req.body.password );
//     if(!user.email || !user.password) throw new Error("missing some details");
//     // chack if user exist
//     const existUser = users.find((u) => u.email === user.email);
//     if (!existUser) throw new Error("user not exist");
//     //chack password
//     if (existUser.password !== user.password) throw new Error("password not match");

//     res.send({ok:true, user:existUser});
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error.message); 
//     res.send({ok:false, message:error.message});
//   }
// }

// export function getLogInUser(req, res) {
//   try {
//     const logInUser = users.find((u) => u.isLogIn);
//     if (!logInUser) throw new Error("no user is log in");
//     res.send({ok:true,logInUser});
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error.message); 
//   }
// }