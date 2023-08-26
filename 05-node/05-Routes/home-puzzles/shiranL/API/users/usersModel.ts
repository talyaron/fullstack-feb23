//usersModel.ts

export class User {
    id: string
    constructor(public userName: string, public password: string) {
        this.id = Math.random().toString()
    }
}
export const users: User[] = [new User('shiranLevy','123456')]