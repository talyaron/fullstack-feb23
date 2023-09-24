import { User, users, UserModel } from "./userModel";


//register user 
export const registerUser = async (req: any, res: any) => {
  try {
    const { email, password , userName} = req.body;
    if(!email || !password) throw new Error("Please complete all fields");
    const user = new UserModel({ email, password ,userName});
     // Check if the email already exists in the database
    const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ error: "Email already exists" });
     }
    const userDB = await user.save();
    console.log(userDB);

    res.send({ ok:true , userDB});
    console.log(user)

  } catch (error) {
    console.error(error);
    res.send({ error:error.message });
  }
}

export const login = async (req: any, res: any) => {
    try {
      const { email, password } = req.body;  
      
      if(!email||!password) throw new Error("Complete all fields to proceed")
      const userDB = await UserModel.findOne({ email,password });
  
      // Check if the user exists
      if (!userDB) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.send({ok: true, email: userDB.email});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  export const getUserName = async (req: any, res: any) => {
    try {
      const { email } = req.body;  

      const userDB = await UserModel.findOne({ email });

      
      console.log(userDB);
      

      res.send({ok: true, userName: userDB.userName});
    } catch (error) {
      console.error(error);
    }
  };




