import { User } from "../Users/usersModel";

export class Image {
  constructor(public url: string, public title: string) {}
}

export const images: Image[] = [];

export class UserImg {
  constructor(public user: User, public image: Image) {}
}

export const userImgs: UserImg[] = [];
