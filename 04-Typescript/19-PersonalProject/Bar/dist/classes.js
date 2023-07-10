// class Img {
//     id: string;
//     constructor(public image: string) {
//         this.id = Date.now + Math.random().toString(36).substr(2);
//     }
// }
// const image1 = new Img('https://pixlr.com/images/index/remove-bg.webp');
// const image2 = new Img('https://photoscissors.com/images/samples/3-before.jpg');
// const storedImages = localStorage.getItem('images');
// const imageArray: Img[] = storedImages ? JSON.parse(storedImages): [image1, image2];
// console.log(imageArray)
// class User {
//     id: string;
//     constructor(public name: string, public followUp: number, public followers: number, public imageProfile: string, public image: Img[]) {
//         this.id = Date.now + Math.random().toString(36).substr(2);
//     }
// }
// const bar = new User('Bar', 162, 546, 'https://pixlr.com/images/index/remove-bg.webp', Img[0]);
// const netanel = new User('Netanel', 657, 603, 'https://photoscissors.com/images/samples/3-before.jpg', Img[1]);
// const storedUsers = localStorage.getItem('Users');
// const usersArray: User[] = storedUsers ? JSON.parse(storedUsers): [bar, netanel];
// console.log(usersArray);
// class UserImg {
//     id: string;
//     constructor(public user: User, public image: Img[]) {
//         this.id = Date.now + Math.random().toString(36).substr(2);
//     }
// }
// const userImg1 = new UserImg(bar, Img[0]);
// const userImg2 = new UserImg(netanel, Img[1]);
// const storedUserImgs = localStorage.getItem('UserImgs');
// const userImgArray: UserImg[] = storedUserImgs ? JSON.parse(storedUserImgs): [userImg1, userImg2];
// console.log(userImgArray[length].user.name);
// console.log(userImgArray)
var Img = /** @class */ (function () {
    function Img(image) {
        this.image = image;
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
    return Img;
}());
var image1 = new Img('https://pixlr.com/images/index/remove-bg.webp');
var image2 = new Img('https://photoscissors.com/images/samples/3-before.jpg');
var storedImages = localStorage.getItem('images');
var imageArray = storedImages ? JSON.parse(storedImages) : [image1, image2];
console.log(imageArray);
var User = /** @class */ (function () {
    function User(name, imageProfile, img) {
        this.name = name;
        this.imageProfile = imageProfile;
        this.img = img;
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
    return User;
}());
var bar = new User('Bar', 'https://pixlr.com/images/index/remove-bg.webp', [image1]);
var netanel = new User('Netanel', 'https://photoscissors.com/images/samples/3-before.jpg', [image2]);
var storedUsers = localStorage.getItem('Users');
var usersArray = storedUsers ? JSON.parse(storedUsers) : [bar, netanel];
console.log(usersArray);
var UserImg = /** @class */ (function () {
    function UserImg(user, image) {
        this.user = user;
        this.image = image;
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
    return UserImg;
}());
var userImg1 = new UserImg(bar, [image1]);
var userImg2 = new UserImg(netanel, [image2]);
var storedUserImgs = localStorage.getItem('UserImgs');
var userImgArray = storedUserImgs ? JSON.parse(storedUserImgs) : [userImg1, userImg2];
//   console.log(userImgArray[userImgArray.length - 1].user.name);
console.log(userImgArray);
