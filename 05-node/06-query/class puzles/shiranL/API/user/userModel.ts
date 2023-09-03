export class User {
    id : string;
    constructor(public email:string,public password:string, id?:string) {
        this.email = email;
        this.password = password;
        if (id) this.id = id;
        else this.id = Math.random().toString();
    }
}
export const users: User[] = [];