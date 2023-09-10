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

        const userDB = await UserModel.findOne({email, password}) //find the user in DB
        if(!userDB) throw new Error("No user email or password found in DB");
        console.log(userDB)
        res.send({ok: true, email: userDB.email});
    } catch (error) {
        console.error(error)
        res.send({error:error.massage})
    }
}

//get
export async function getUser(req:any, res:any) {
    try {
        //get email from query
        const { email } = req.query; //speshel identefayer
        if (!email) {
            throw new Error("email is required");
        }

        const userDB = await UserModel.find({ email });
        res.send({ users: userDB });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

//delete
export async function deleteUser(req:any, res:any) {
    try {
        const {id} = req.body 
        const userDB = await UserModel.findByIdAndDelete(id)
        res.send({userDB})
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}