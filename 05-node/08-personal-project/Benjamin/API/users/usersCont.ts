import { UserModelDB } from "./usersModel"


export const registerUser = async (req: any, res: any) => {
    try {
        console.log("i got the request");
        const { name, email, password } = req.body;
        if (!name || !email || !password) throw new Error("please complete all fields");
        const user = await UserModelDB.create({
            name:name,
            email:email,
            password:password,
        })
        console.log(user);

       
        res.send({ ok: true, user });
    } catch (error) {
        console.error(error);
    }
}

export const loginUser = async (req: any, res: any) => {
    try {
        const { email, password } = req.body;
        if(!(UserModelDB.exists({email:email}))) throw new Error("user dont excist");
        const user = await UserModelDB.find({email:email}, {password:password});
        console.log(user);
        if(!user) throw new Error("some fields are incorrect");
        res.send(user);


        
    } catch (error) {
        console.error(error);
    }
}

export const getUserData = async (req: any, res: any) => {
    try {
        const { email } = req.query;
        if(!(UserModelDB.exists({email:email}))) throw new Error("user dont excist");
        const user = await UserModelDB.find({email:email});
        if(!user) throw new Error("some fields are incorrect");
        res.send(user);


        
    } catch (error) {
        console.error(error);
    }
}

export const getUserName = async (req: any, res: any) => {
    try {
        const { email } = req.query;
        console.log(email)
        if(!(UserModelDB.exists({email:email}))) throw new Error("user dont excist");
        UserModelDB.findOne({ email: email }, 'name', (err, user) => {
            if (err) {
              console.error(err);
              return;
            }
            
            if (user) {
              console.log('User name:', user.name);
            } else {
              console.log('User not found');
            }
          });


        
    } catch (error) {
        console.error(error);
    }
}

