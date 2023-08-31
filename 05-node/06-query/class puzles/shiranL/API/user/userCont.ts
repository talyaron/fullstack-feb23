import { User ,users} from "./userModel";

export function addUser(req, res) {
  try {
    const user = new User(req.body.email, req.body.password );
    if(!user.email || !user.password) throw new Error("missing some details");
    // chack if user exist
    const existUser = users.find((u) => u.email === user.email);
    if (existUser) throw new Error("user already exist");
    //add user
    users.push(user);
    res.send(users);
    
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message); 
    
  }
}

export function logIn(req, res) {
  try {
    const user = new User(req.body.email, req.body.password );
    if(!user.email || !user.password) throw new Error("missing some details");
    // chack if user exist
    const existUser = users.find((u) => u.email === user.email);
    if (!existUser) throw new Error("user not exist");
    //chack password
    if (existUser.password !== user.password) throw new Error("password not match");
    //log in
    res.send({ok:true, user:existUser});
    
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message); 
    
  }
}