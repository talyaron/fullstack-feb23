import { UserModel } from "./userModel";

export async function getLoggedUser(req: any, res: any, next: Function) {
    try {
        const userId = req.cookies.user;

        const userDB = await UserModel.findById(userId);
       
        if (!userDB){
            req.user = null;
        } else{
            req.user = userDB;
        }

        next();

    } catch (error) {
        console.error(error)
        res.status(500).send({ error: error.message });
    }
}