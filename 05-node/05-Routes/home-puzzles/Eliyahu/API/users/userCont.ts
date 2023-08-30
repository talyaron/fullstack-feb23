import { User, users } from "./userModels";

export const registerUser = (req: any, res: any) => {
    try {
        const { name, email, password } = req.body
        if (!email || !password || !name) throw new Error("Please complete all fields");
        const user = new User(name, email, password)
        const userExist = users.find(user => user.email === email)
        if (userExist) {
            throw new Error("This email address already exist");
        }
        users.push(user)
        res.send({ ok: true })

    } catch (error) {
        console.error(error.message);
    }
}

export const login = (req: any, res: any) => {
    try {
        const { email, password } = req.body
        if (!email || !password) throw new Error("Please complete all fields");
        const user = users.find(user => user.email === email && user.password === password)
        if (!user) throw new Error("Some of details are incorrect");

        res.send({ ok: true, email: user.email })

    } catch (error) {
        console.error(error.message);
    }
}

export const getUserName = (req: any, res: any) => {
    try {
        const { emailUser } = req.body
        if (!emailUser) throw new Error("Please complete all fields");
        const user = users.find(user => user.email === emailUser)
        if (!user) throw new Error("Some of details are incorrect");

        res.send({ ok: true, userName: user.name })
    } catch (error) {
        console.error(error.massage);

    }
}