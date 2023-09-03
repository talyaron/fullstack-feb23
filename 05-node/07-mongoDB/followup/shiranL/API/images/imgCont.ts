import { User ,users} from "../user/userModel";
import {userImgs,UserImages,Image_} from "./imgModel";

export function addImg(req, res){
    try {
        
    const {imgtitel,imgUrl}= req.body;
    if(!imgtitel || !imgUrl ) throw new Error("missing some details");  
 
    const imgToAdd= new Image_(imgtitel,imgUrl); 
    //find user that isLogIn = true
    const logInUser_= users.find(user=>user.isLogIn);
    if(!logInUser_) throw new Error("no user is log in");
    const userImg= new UserImages(logInUser_,imgToAdd); 
    userImgs.push(userImg);  
    res.send({ok:true,userImgs});
        
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
        res.send({ok:false});    

        
    }
    


}

