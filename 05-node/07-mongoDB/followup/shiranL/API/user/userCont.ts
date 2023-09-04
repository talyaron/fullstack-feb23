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

   // make all users log out
    users.forEach(u => u.isLogIn = false);
    //log in
    existUser.isLogIn = true; 
    res.send({ok:true, user:existUser});
    
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message); 
    res.send({ok:false, message:error.message});
  }
}

export function getLogInUser(req, res) {
  try {
    const logInUser = users.find((u) => u.isLogIn);
    if (!logInUser) throw new Error("no user is log in");
    res.send({ok:true,logInUser});
    
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message); 
  }
}