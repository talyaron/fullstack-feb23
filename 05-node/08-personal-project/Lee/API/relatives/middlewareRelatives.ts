import { UserModel } from "../users/userModel";
import { RelativeModel } from "./relativesModel";

export async function isAdmin(req:any, res:any, next:Function){
try {
const userId = req.cookies.user

    if(!userId) throw new Error ("User not found")
    console.log(userId)

    const user = await UserModel.findById(userId)
    if(!user) throw new Error("User not found")
console.log(user.isAdmin)
    if(user.isAdmin){
        next()
    }else {
        res.status(401).send({error: "Unauthorized"})
    }
} catch (error) {
    console.error(error)
    
}
}