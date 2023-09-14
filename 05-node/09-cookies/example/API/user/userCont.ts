import {UserModel} from "./userModel";

export function addUser(req, res) {
  // try {
  //   const user = new User(req.body.email, req.body.password );
  //   if(!user.email || !user.password) throw new Error("missing some details");
  //   // chack if user exist
  //   const existUser = users.find((u) => u.email === user.email);
  //   if (existUser) throw new Error("user already exist");
  //   //add user
  //   users.push(user);
  //   res.send(users);
    
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).send(error.message); 
    
  // }
}

export async function logIn(req, res) {
  try {

    const {email, password} = req.body;
    if(!email || !password) throw new Error("missing some details");
   
    // chack if user exist
    const userDB = await UserModel.findOne({email, password})
    if (!userDB) throw new Error("user not exist or password is inncorect");
    //chack password

    res.cookie("user", userDB._id, { maxAge: 1000*1000, httpOnly: true }); //httpOnly - cant access the cookie from the client side, only from the server side
 
    res.send({ok:true});
    
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message); 
    res.send({ok:false, message:error.message});
  }
}

export function getLogInUser(req, res) {
  // try {
  //   const logInUser = users.find((u) => u.isLogIn);
  //   if (!logInUser) throw new Error("no user is log in");
  //   res.send({ok:true,logInUser});
    
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).send(error.message); 
  // }
}

export async function getUser(req:any, res:any){
  try {
    //get user id from cookie
    const userId = req.cookies.user;
    if(!userId) throw new Error("no user in cookies"); 
    //find user in DB
    const userDB = await UserModel.findById(userId);
    if(!userDB) throw new Error("user dosnt exist in DB");
    res.send({ok:true, user:userDB});
    
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message); 
  }
}