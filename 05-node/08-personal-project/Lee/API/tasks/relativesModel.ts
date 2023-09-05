import { User } from "../users/userModel";

export enum Relation {
  choose = "Choose",
  mother = "Mother",
  father = "Father",
  brother = "Brother",
  sister = "Sister",
  sibling = "Sibling",
  granddaughter = "Granddaughter",
  grandson = "Grandson",
  uncle = "Uncle",
  aunt = "Aunt",
  cousin = "Cousin"

}

export class Relative {
  id: string;
  constructor(
    public fullName: string,
    public country: string,
    public relation: Relation
  ) {
    this.id = Math.random().toString(36).substr(2, 9);
  }

  changeRelation(newRelation: Relation) {
    this.relation = newRelation;
  }
}

export const relatives: Relative[] = [];

// export class UserTasks {
//   id: string;
//   constructor(public user: User, public task: Task) {
//     this.id = Math.random().toString(36).substr(2, 9);
//   }
// }

// export const userTasks: UserTasks[] = [];

//join collection (class)

export class UserRelatives{
    id:string
    constructor(public user:User,public task:Task){
        this.id = Math.random().toString(36).substr(2, 9);
    }
}   

export const userRelatives:UserRelatives[] = [];