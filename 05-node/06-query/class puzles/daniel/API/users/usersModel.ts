export interface _User {
    email: string;
    password : string;
}

export class User {
    email: string;
    password : string;
    id:string;
    constructor ({email, password}:_User){
        this.email = email,
        this.password = password
        this.id = Math.random().toString()
    }
}

export const users:User[]= []