import { User } from "../user/userModel";

export class Image_ {    
    id : string;
    constructor(public titel:string,public imgUrl:string, id?:string) {
        this.titel = titel;
        this.imgUrl = imgUrl;
        if (id) this.id = id;
        else this.id = Math.random().toString();
    }
    update(imgUrl:string) {
    
        this.imgUrl = imgUrl;
    }   
}

//join collection   
export class UserImages {
    constructor(public user:User,public image:Image_) {
        this.user = user;
        this.image= image;
    }
}   

export const userImgs : UserImages[] = []; 

