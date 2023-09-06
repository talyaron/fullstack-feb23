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
  cousin = "Cousin",
  niece = "Niece",
  nephew = "Nephew"
}

export class Relative {
  id: string;
  constructor(
    public fullName: string,
    public birthDate: string,
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

export class UserRelatives{
    id:string
    constructor(public user:User,public task:Task){
        this.id = Math.random().toString(36).substr(2, 9);
    }
}   

export const userRelatives:UserRelatives[] = [];