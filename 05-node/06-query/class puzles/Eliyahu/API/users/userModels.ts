export class User{
    id:string;
    constructor(public name:string,public email:string,public password:string){
        this.id = Math.random().toString()
    }
}

export const users:User[]=[]