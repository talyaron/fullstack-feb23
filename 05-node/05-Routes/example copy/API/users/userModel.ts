export class User {
    name: string;
    phoneNum: string;
    imgUrl: string;
    id: string;
    constructor({ name, phoneNum, imgUrl }: {name:string, phoneNum:string, imgUrl:string}) {
      this.name = name;
      this.phoneNum = phoneNum;
      this.imgUrl = imgUrl;
      this.id = Math.random().toString();
    }
  }