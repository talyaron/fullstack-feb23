var Img = /** @class */ (function () {
    function Img(image) {
        this.image = image;
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
    return Img;
}());
// const image1 = new Img('https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg');
// const image2 = new Img('https://photoscissors.com/images/samples/3-before.jpg');
var storedImages = localStorage.getItem('images');
var imagesArray = storedImages ? JSON.parse(storedImages) : [];
console.log(imagesArray);
//
var User = /** @class */ (function () {
    function User(name, imageProfile, images) {
        this.name = name;
        this.imageProfile = imageProfile;
        this.images = images;
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
    return User;
}());
var bar = new User('Bar', 'https://pixlr.com/images/index/remove-bg.webp', []);
var netanel = new User('Netanel', 'https://photoscissors.com/images/samples/3-before.jpg', []);
var storedUsers = localStorage.getItem('Users');
var usersArray = storedUsers ? JSON.parse(storedUsers) : [bar, netanel];
console.log(usersArray);
//
// class UserImg {
//     id: string;
//     constructor(public user: User, public image: Img[]) {
//         this.id = Date.now().toString() + Math.random().toString(36).substr(2);
//     }
// }
// const userImg1 = new UserImg(bar, []);
// const userImg2 = new UserImg(netanel, []);
// const storedUserImgs = localStorage.getItem('UserImgs');
// const userImgArray: UserImg[] = storedUserImgs ? JSON.parse(storedUserImgs) : [userImg1, userImg2];
// console.log(userImgArray);
