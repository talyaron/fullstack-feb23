import { UserModel } from "./usersModle";

//register
export const registerUser = async (req: any, res: any) => {
    try {
        const { userName, email, password } = req.body //get data from claient
        if (!userName || !email || !password) throw new Error("Please complete all fields");

        const user = new UserModel({ userName, email, password }) //create new user from data
        const userDB = await user.save(); //save to DB
        console.log(userDB)
        res.send({ ok: true})
    } catch (error) {
        console.error(error)
        res.send({ error: error.massage })
    }
}

//login
export async function loginUser(req: any, res: any) {
    try {
        const { userName, email, password } = req.body //get data from claient
        if (!userName || !email || !password) throw new Error("Please complete all fields");
        //check if user exist in DB
        const userDB = await UserModel.findOne({ email, password }) //find the user in DB by email and password
        if (!userDB) throw new Error("user not exist or password is inncorect");
        console.log("userdb:",userDB)
        //create cookie
        res.cookie("user", userDB._id, {maxAge: 1000*1000, httpOnly: true}); //cookie name will be "user" and it contain the userId from DB
        res.send({ ok: true });
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message); 
        res.send({ok:false, message:error.message});
    }
}

//get user by cookie data
export async function getUser(req: any, res: any) {
    try {
        //get user id from cookie
        const userId = req.cookies.user;
        if (!userId) throw new Error("no user in cookies");
        
        //find user in DB
        const userDB = await UserModel.findById(userId);
        if(!userDB) throw new Error("user dosn't exist in DB");
        
        res.send({ok: true, users: userDB });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

//delete
export async function deleteUser(req: any, res: any) {
    try {
        //get user id fron cookie
        const userId = req.cookies.user;
        if (!userId) throw new Error("no user in cookies");

        //find user by id and delete
        await UserModel.findByIdAndDelete(userId);

        // Send ok if succead
        res.send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}