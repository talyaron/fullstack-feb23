var Img = /** @class */ (function () {
    function Img(image, description) {
        this.image = image;
        this.description = description;
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
    return Img;
}());
var image1 = new Img('https://pixlr.com/images/index/remove-bg.webp', 'My image');
var image2 = new Img('https://photoscissors.com/images/samples/3-before.jpg', 'My new image');
var storedImages = localStorage.getItem('images');
var imageArray = storedImages ? JSON.parse(storedImages) : [image1, image2];
console.log(imageArray[0].description);
var User = /** @class */ (function () {
    function User(name, followUp, followers, imageProfile, image) {
        this.name = name;
        this.followUp = followUp;
        this.followers = followers;
        this.imageProfile = imageProfile;
        this.image = image;
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
    return User;
}());
var bar = new User('Bar', 162, 546, 'https://pixlr.com/images/index/remove-bg.webp', Img[0]);
var netanel = new User('Netanel', 657, 603, 'https://photoscissors.com/images/samples/3-before.jpg', Img[1]);
var storedUsers = localStorage.getItem('Users');
var usersArray = storedUsers ? JSON.parse(storedUsers) : [bar, netanel];
console.log(usersArray[1].name);
var UserImg = /** @class */ (function () {
    function UserImg(user, image) {
        this.user = user;
        this.image = image;
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
    return UserImg;
}());
var userImg1 = new UserImg(bar, Img[0]);
var userImg2 = new UserImg(netanel, Img[1]);
var storedUserImgs = localStorage.getItem('UserImgs');
var userImgArray = storedUserImgs ? JSON.parse(storedUserImgs) : [userImg1, userImg2];
console.log(userImgArray[0].user.name);
