import { _User,User,users } from './usersModel'

export function registerUser (req:any,res:any){
    try {
        const { email, password} = req.body;
        if (!email || !password) throw new Error("Please complete all fields");
        const user = new User({ email, password })

        // Check if the user exsists
        const userExist = users.find((user)=> user.email === email);
        if (userExist) throw new Error("User already exist or not");
        users.push(user);
        res.send({ ok:true })
    } catch (error) {
        console.error(error);
        res.send({ error:error.meassage })
    }
}

export function login(req:any, res:any){
    try {
        const { email, password } = req.body;
        if(!email || !password) throw new Error("Please complete all fileds");
        // to check if the user exist and the password in correct
        const user = users.find((user) => user.email === email && user.password === password);
        if(!user) throw new Error("Some details are incorrect");
        res.send({ok:true, email:user.email})
        
        
    } catch (error) {
        console.error(error);
        res.send({error:error.meassage})
    }
}