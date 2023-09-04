import { UserModel } from "./usersModle";

//register
export const registerUser = async (req: any, res: any) =>{
    try {
        const {userName, email, password} = req.body //get data from claient
        if(!userName || !email || !password) throw new Error("Please complete all fields");
        
        const user = new UserModel({userName, email, password})
        const userDB = await user.save();
        console.log(userDB)
        res.send({ok: true, userDB})
    } catch (error) {
        console.error(error)
        res.send({error:error.massage})
    }
}

