import { UserModel } from "./usersModle";

//register
export const registerUser = async (req: any, res: any) => {
    try {
        const { userName, email, password } = req.body //get data from claient
        if (!userName || !email || !password) throw new Error("Please complete all fields");

        const user = new UserModel({ userName, email, password }) //create new user from data
        const userDB = await user.save(); //save to DB
        console.log(userDB)
        res.send({ ok: true, userDB })
    } catch (error) {
        console.error(error)
        res.send({ error: error.massage })
    }
}

//login
export const loginUser = async (req: any, res: any) => {
    try {
        const { userName, email, password } = req.body //get data from claient
        if (!userName || !email || !password) throw new Error("Please complete all fields");
        //check if user exist in DB
        const userDB = await UserModel.findOne({ email, password }) //find the user in DB
        if (!userDB) throw new Error("No user email or password found in DB");
        console.log("userdb:",userDB)
        //create cookie
        res.cookie("user", userDB._id, {maxAge: 1000*1000, httpOnly: true});
        res.send({ ok: true, email: userDB.email });
    } catch (error) {
        console.error(error)
        res.send({ error: error.massage })
    }
}

//get
export async function getUser(req: any, res: any) {
    try {
        //get user id fron cookie
        const userId = req.cookie.user;
        if (!userId) throw new Error("no user in cookies");
        
        //find user in DB
        const userDB = await UserModel.findById(userId);
        if(!userDB) throw new Error("user not in DB");
        
        res.send({ users: userDB });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

//delete
export async function deleteUser(req: any, res: any) {
    try {
        //get user id fron cookie
        const userId = req.cookie.user;
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