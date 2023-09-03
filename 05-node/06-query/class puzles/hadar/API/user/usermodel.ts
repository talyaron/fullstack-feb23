export class User{
    email: string
    password: string
    id?: string
    constructor({email,password}:{email: string, password: string}){
        this.id= Math.random.toString()
    }
}

export let users: User[] = []

