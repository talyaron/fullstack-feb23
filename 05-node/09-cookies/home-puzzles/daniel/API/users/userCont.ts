import { User } from "./userModel";

export const registerUser = async (req:any, res:any)=>{
    try {
        const { email, password } = req.body;

        if(!email || !password) throw new Error("Please fill all fileds");
        const userExist = await User.findOne({email, password})
        console.log(userExist);

        if(!userExist){
            const user = new User({ email, password });
    
            await user.save();
            console.log(user);

            res.send({ ok:true, user });
        } else throw new Error("User is already exists")
        
    } catch (error) {
        console.error(error);
        res.send({ error:error.message });
    }
}

export const loginUser = async(req:any, res:any)=>{
    try {
        const { email, password } = req.body;
        if(!email || !password) throw new Error("Please fill all fileds");
        
        const userDB = await User.findOne({email, password});
        if(!userDB) throw new Error("No user found or password is incorrect")
        // maxAge-we need to use the number of sec before the cookie expires
        // httpOnly- just the server can access to it. If not using it the client will be able to access to it as well.
        res.cookie("user", userDB._id, {maxAge: 10000*1000, httpOnly: true});
        res.send({ ok:true})
    } catch (error) {
        console.error(error);
        res.send({ ok: false ,message:error.message });
    }
}

export async function getUser(req:any,res: any){
    try {
        //get user id from cookie
        const userId = req.cookies.user;
        if(!userId) throw new Error("No user in cookies");
        //find user in DB
        const userDB = await User.findById(userId); 
        if(!userDB) throw new Error("User does not exist in DB");
        res.send({ok:true, user:userDB})
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}