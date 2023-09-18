import { UserModel, User, users } from "./userModel";

export const registerUser = async (req: any, res: any) => {
    try {
        const { name, email, password, date } = req.body
        if (!email || !password || !name || !date) throw new Error("Please complete all fields");
        const user = new UserModel({ name, email, password, date })
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {

            return res.send({ error: "User already exists with this email" });
        }
        const userDB = await user.save();
        console.log(userDB)
        const userExist = users.find(user => user.email === email)
        if (userExist) {
            throw new Error("This email address already exist");
        }

        res.send({ ok: true, userDB })

    } catch (error) {
        console.error(error.message);
    }
}

export const login = async (req: any, res: any) => {
    try {
        const { email, password } = req.body
        if (!email || !password) throw new Error("missing some details");
        // chack if user exist
        const userDB = await UserModel.findOne({ email, password })
        if (!userDB) throw new Error("user not exist or password is inncorect");


        res.cookie("user", userDB.id, { maxAge: 1000 * 10, httpOnly: true });
        res.send({ ok: true });

    } catch (error) {
        console.error(error.message);
    }
}
export async function getUser(req: any, res: any) {
    try {
        //get user id from cookie
        const userId = req.cookies.user;
        if (!userId) throw new Error("no user in cookies");
        //find user in DB
        const userDB = await UserModel.findById(userId);
        if (!userDB) throw new Error("user dosnt exist in DB");
        res.send({ ok: true, user: userDB });

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}