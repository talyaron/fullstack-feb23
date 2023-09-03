import { User } from "../users/userModel";

export class Image{
    imgUrl:string;
    title:string;
    constructor ({imgUrl,title}: {imgUrl:string , title:string}){
        this.imgUrl = imgUrl;
        this.title = title;

    }}
    export const images:Image[] = []
    export class UserImage{
        constructor(public user:User , public img:Image){}

    }
    export const UserImages:UserImage[] = []