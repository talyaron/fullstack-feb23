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
        const user = await User.findOne({email, password});
        if(!user) throw new Error("No user found")
        res.send({ ok:true, email: user.email })
    } catch (error) {
        console.error(error);
        res.send({ error:error.message });
    }
}