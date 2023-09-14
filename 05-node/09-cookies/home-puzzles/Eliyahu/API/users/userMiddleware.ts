import { UserModel } from "./userModels";

export async function isAdmin(req: any, res: any, next: Function) {
    try {
        const userId = req.cookies.user
        if (!userId) throw new Error("no user in cookies");
        const userDB = await UserModel.findById(userId);
        if (!userDB) throw new Error("user dosnt exist in DB");
        if (userDB.isAdmin) {
            next();
        }else{
            res.status(401).send('not authorized')
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}