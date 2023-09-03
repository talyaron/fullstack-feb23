export interface _User {
    name: string;
    imgUrl : string;
    id: string
}

export class User {
    name: string;
    imgUrl : string;
    id:string;
    constructor ({name, imgUrl}:_User){
        this.name = name,
        this.imgUrl = imgUrl
        this.id = Math.random().toString()
    }
}

export const users:User[]= []