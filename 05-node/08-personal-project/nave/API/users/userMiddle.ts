import { UserModel } from "./userModel";

export async function isAdmin(req: any, res: any, next: Function) {
    try {

        //get the user from the cookie
        const userId = req.cookies.user;
        if (!userId) throw new Error("User not found on cookie");

        //get the user from the database
        const user = await UserModel.findById(userId);
        if (!user) throw new Error("User not found on database");



        //check if the user is admin (from Database)
        if (user.isAdmin) {
            next(); // continue to the next controller
        } else {
            res.status(401).send({ error: "Unauthorized" });
        }

        // if user is not adnin throw error of unauthorized (401)

    } catch (error) {
        console.error(error)
        res.status(500).send({ error: error.message });
    }
}

//create middleware function which gets the user from the cookie

export async function getLoggedUser(req: any, res: any, next: Function) {
    try {
        const userId = req.cookies.user

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