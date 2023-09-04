export class User {
    userName: string;
    email: string;
    password: string;
    id: string;

    constructor({userName, email, password}: {userName: string, email: string, password: string}){
        this.userName = userName;
        this.email = email;
        this.password = password;
        this. id = Math.random().toString();
    }
}

export const users: User[] = [];