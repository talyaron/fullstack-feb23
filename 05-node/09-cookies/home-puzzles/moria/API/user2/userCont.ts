import { UserModel, User, users } from "./userModel";

export const registerUser = async (req: any, res: any) => {
    try {
        const { name, email, password, date } = req.body
        if (!email || !password || !name || !date) throw new Error("Please complete all fields");
        const user = new UserModel({ name, email, password, date })
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
        if (!(UserModel.exists({ email: email }))) throw new Error("user dont excist");
        const user = await UserModel.findOne({ email, password }).exec();
        if (!user) throw new Error("Some of details are incorrect");

        res.send(user)

    } catch (error) {
        console.error(error.message);
    }
}
