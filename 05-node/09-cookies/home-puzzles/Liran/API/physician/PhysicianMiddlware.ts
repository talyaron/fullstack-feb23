import { PhysicianModel } from "./physicianModel";

export async function isAdmin(req: any, res: any, next: Function) {
    try {

        //get the user from the cookie
        const userId = req.cookies.physician;
        if (!userId) throw new Error("User not found on cookie");

        //get the user from the database
        const physician = await PhysicianModel.findById(userId);
        if (!physician) throw new Error("User not found on database");



        //check if the user is admin (from Database)
        if (physician.isAdmin) {
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
        const physicianId = req.cookies.physician

        const physicianDB = await PhysicianModel.findById(physicianId);
       
        if (!physicianDB){
            req.user = null;
        } else{
            req.user = physicianDB;
        }

        next();

    } catch (error) {
        console.error(error)
        res.status(500).send({ error: error.message });
    }
}