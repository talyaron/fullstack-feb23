//usersModel.ts
export class User {
    id: string
    constructor(public userName: string, public password: string, public isLogIn: boolean = false) {
        this.id = Math.random().toString()
    }
}