import { User, UserModel, users } from "./userModel";



//register user 
export const registerUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if(!email || !password) throw new Error("Please complete all fields");
    
    //this was in typescript
    // const user = new User({ email, password });

    const user = new UserModel({ email, password });
    const userDB = await user.save();
  console.log(userDB)
    //check if user already exist
    // const userExist = users.find((user) => user.email === email);
    // if (userExist) throw new Error("User already exist");
    // users.push(user);
    res.send({ ok:true, userDB});

  } catch (error) {
    console.error(error);
    res.send({ error:error.message });
  }
}

export const login = (req: any, res: any) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) throw new Error("Please complete all fields");
        //check if user exist and password is correct
        const user = users.find((user) => user.email === email && user.password === password);
        if (!user) throw new Error("some of the details are incorrect");
        res.send({ ok:true, email:user.email });
    } catch (error) {
        console.error(error);
        res.send({ error:error.message });
    }
}

