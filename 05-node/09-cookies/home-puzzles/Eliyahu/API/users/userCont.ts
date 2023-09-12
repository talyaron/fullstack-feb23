import { User, UserModel, users } from "./userModels";

export async function registerUser(req: any, res: any) {
    try {
        const { name, email, password } = req.body
        if (!email || !password || !name) throw new Error("Please complete all fields");
        const userExist = await UserModel.findOne({ email: email })
        if (userExist) {
            throw new Error("This email address already exist");
        }
        const _user = new UserModel({ name, email, password })
        const userDB = await _user.save()
        res.send({ user: userDB, ok: true })

    } catch (error) {
        console.error(error.message);
    }
}

export async function login(req: any, res: any) {
    try {
        const { email, password } = req.body
        if (!email || !password) throw new Error("Please complete all fields");

        const userDB = await UserModel.findOne({ email })

        // const user = users.find(user => user.email === email && user.password === password)
        // if (!user) throw new Error("Some of details are incorrect");

        res.send({ ok: true, email: email })

    } catch (error) {
        console.error(error.message);
    }
}

export const loginAdmin = (req: any, res: any) => {
    try {
        const { adminEmail } = req.body
        const admin = 'Admin'
        if (!adminEmail) throw new Error("Missing email Aamin");
        res.send({ ok: true, adminEmail, admin })
    } catch (error) {
        console.error(error.message);
    }
}

export async function getUserName(req: any, res: any) {
    try {
        const { email } = req.query;
        if (!email) throw new Error("Please complete all fields");
        const userDB = await UserModel.findOne({ email })
        const name = userDB.name
        res.send({ ok: true, name })
    } catch (error) {
        console.error(error.massage);

    }
}
