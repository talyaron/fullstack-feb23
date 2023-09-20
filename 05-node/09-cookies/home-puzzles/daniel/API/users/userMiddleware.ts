import {User} from "./userModel"

export async function isAdmin (req:any, res:any, next:Function){
    try {
        // Get the user from the cookie
        const userId = req.cookies.user;
        if(!userId) throw new Error("User not found on cookie");

        // Get the user from the dataBase
        const user = await User.findById(userId);
        if(!user) throw new Error("User not found on dataBase");

        // Check if the user is admin(from DB)
        if(user.isAdmin) {
            //Continue to the next controller
            next();
        } else {
            res.status(401).send({error:"Unauthorized"});
        }
    } catch (error) {
        console.error(error)
        res.send(500).send({error:error.message});
    }
}

export async function getLoggedUser(req:any,res:any,next:Function){
    try {
        const userId = req.cookies.User
        
        const userDB = await User.findById(userId);
        console.log(userDB)
        if(!userDB){
            req.user = null;
        }else {
            req.user = userDB;
        }
        next();
    } catch (error) {
        console.error(error)
        res.status(500).send({error: error.message});
    }
}