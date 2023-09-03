export class User {
    id : string;
    isLogIn:boolean;
    constructor(public email:string,public password:string, id?:string ,isLogIn?:boolean ) {
        this.email = email;
        this.password = password;
        if (id) this.id = id;
        else this.id = Math.random().toString();
        if (isLogIn) this.isLogIn = isLogIn;
        else this.isLogIn = false;
    }
}
export const users: User[] = [];