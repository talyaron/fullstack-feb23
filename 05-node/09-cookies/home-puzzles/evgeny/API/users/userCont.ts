import {UserModel} from "./userModel"

export const registerUser=async (req, res)=>{
    try {
        const {email,password}=req.body;
        if(!email|| !password)throw new Error ("Please fill all fields")

        const user = new UserModel({email,password})
        const userDB=await user.save()
        res.send({userDB})



    } catch (error) {
        console.error(error)
    }
}

export  const login= async (req, res)=>{
    try {
        const { email, password } = req.body;
        if(!email|| !password)throw new Error ("Please fill all fields")
        const user= await UserModel.findOne({ email });


        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }
        if (password === user.password) {
            // Passwords match; user is authenticated
            res.cookie("user", user._id, { maxAge: 1000*1000, httpOnly: true }); //httpOnly - cant access the cookie from the client side, only from the server side
        } else {
            // Passwords do not match
            return res.status(401).json({ error: "Invalid credentials" });
        }

        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Server error" });
    }
}

export async function getUser(req:any, res:any){
    try {
        const userId= req.cookie.user;
        if(!userId) throw new Error("no user") 

        const userDB=await UserModel.findById(userId)
        if(!userDB) throw new Error('user not in DataBase')
        res.send({ok:true, user:userDB})
    } catch (error) {
        console.error(error)
    }
}