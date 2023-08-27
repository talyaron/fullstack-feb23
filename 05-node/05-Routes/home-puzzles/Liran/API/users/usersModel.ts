import { Note } from '../note/noteModel';

export class User {
    noteList: Note[] = [];
    id?: string;
    constructor(public userName: string, public password: string, public phoneNumber: string, public email: string) {
        this.id = `id-${new Date().getTime()}-${Math.random()}`;
    }
}