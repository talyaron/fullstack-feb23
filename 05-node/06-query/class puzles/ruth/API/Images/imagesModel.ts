import { User } from "../Users/usersModel";

export class Image {
  id:string
  constructor(public url: string, public title: string) {
    this.id = Date.now().toString()
  }
}

export const images: Image[] = [];

export class UserImg {
  constructor(public user: User, public image: Image) {}
}

export let userImgs: UserImg[] = [];
