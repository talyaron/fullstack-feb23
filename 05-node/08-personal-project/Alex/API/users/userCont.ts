import { User, users, UserModel } from "./userModel";


//register user 
export const registerUser = async (req: any, res: any) => {
  try {
    const { email, password , userName} = req.body;
    if(!email || !password) throw new Error("Please complete all fields");
    const user = new UserModel({ email, password ,userName});
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
  
      // Compare the provided password with the hashed password
      const passwordMatch =  UserModel.find((user) => user.email === email && user.password === password);
    //   const passwordMatch = user.(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Authentication failed' });
      }
  
      // Authentication successful
      // You can generate a JWT token here if needed and send it in the response
      // For example: const token = generateToken(user);
  
      res.send({ok: true, email: userDB.email});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// export const login = (req: any, res: any) => {
//     try {
//         const { email, password } = req.body;
//         if(!email || !password) throw new Error("Please complete all fields");
//         //check if user exist and password is correct
//         const user = users.find((user) => user.email === email && user.password === password);
//         if (!user) throw new Error("some of the details are incorrect");
//         res.send({ ok:true, email:user.email });
//     } catch (error) {
//         console.error(error);
//         res.send({ error:error.message });
//     }
// }




