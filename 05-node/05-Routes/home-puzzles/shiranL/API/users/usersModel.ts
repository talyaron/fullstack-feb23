//usersModel.ts
export class User {
    id: string
    constructor(public userName: string, public password: string) {
        this.id = Math.random().toString()
    }
}