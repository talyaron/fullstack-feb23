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
            return res.json({ ok: true, email: user.email });
        } else {
            // Passwords do not match
            return res.status(401).json({ error: "Invalid credentials" });
        }

        
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Server error" });
    }
}