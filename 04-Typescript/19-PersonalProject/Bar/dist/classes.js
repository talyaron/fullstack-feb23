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
//
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
//
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
console.log(userImgArray);
