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
        if (!userDB) throw new Error("user not exist or password is inncorect");

        res.cookie("user", userDB._id, { maxAge: 1000 * 60 * 10, httpOnly: true })
        res.send({ ok: true, email: email })

    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
        res.send({ ok: false, message: error.message });
    }
}

// export const loginAdmin = (req: any, res: any) => {
//     try {
//         const { adminEmail } = req.body
//         const admin = 'Admin'
//         if (!adminEmail) throw new Error("Missing email Aamin");
//         res.send({ ok: true, adminEmail, admin })
//     } catch (error) {
//         console.error(error.message);
//     }
// }

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


export async function getUser(req: any, res: any) {
    try {
        const userDB = await req.user;
        if (!userDB) throw new Error("user dosnt exist in DB");
        res.send({ ok: true, user: userDB });

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function getUsers(req: any, res: any) {
    try {
        const usersDB = await UserModel.find({})
        res.send({ users: usersDB })
    } catch (error) {
        console.error(error.massage)
    }
}

export async function setPremium(req: any, res: any) {
    try {
        const { id, isPremium } = req.body
        const userDB = await UserModel.findById(id)
        if (userDB.isPremium != isPremium) {
            const userDB = await UserModel.findByIdAndUpdate(id, { isPremium: isPremium }, { new: true })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export async function setAdmin(req: any, res: any) {
    try {
        const { id, isAdmin } = req.body
        const userDB = await UserModel.findById(id)
        if (userDB.isAdmin != isAdmin) {
            const userDB = await UserModel.findByIdAndUpdate(id, { isAdmin: isAdmin }, { new: true })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}