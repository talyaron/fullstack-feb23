import { PhysicianModel } from "./physicianModel";

export async function isAdmin(req: any, res: any, next) {
    try {
        const userId = req.cookies.physician;
        const user = await PhysicianModel.findById(userId);
        console.log(user);
        console.log(user.isAdmin);
        if (!user.isAdmin) {
            req.user = null;
            res.status(401).json({ error: "User is not admin" });
        } else {
            req.user = user;
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}