import { UserModel } from "./usersModle";

//register
export const registerUser = async (req: any, res: any) =>{
    try {
        const {userName, email, password} = req.body //get data from claient
        if(!userName || !email || !password) throw new Error("Please complete all fields");
        
        const user = new UserModel({userName, email, password}) //create new user from data
        const userDB = await user.save(); //save to DB
        console.log(userDB)
        res.send({ok: true, userDB})
    } catch (error) {
        console.error(error)
        res.send({error:error.massage})
    }
}

//login
export const loginUser = async (req: any, res:any) =>{
    try {
        const {userName, email, password} = req.body //get data from claient
        if(!userName || !email || !password) throw new Error("Please complete all fields");

        const user = new UserModel({userName, email, password}) //create new user from data
        console.log(user)

        const userDB = await UserModel.findOne({user}) //find the user in DB
        if(!userDB) throw new Error("No user found in DB");
        console.log(userDB)
        res.send({ok: true});
    } catch (error) {
        console.error(error)
        res.send({error:error.massage})
    }
}