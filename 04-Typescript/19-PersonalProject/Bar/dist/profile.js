//Instegram Profile page.
//MVC - Model View Controller
//class - user, image.
var Img = /** @class */ (function () {
    function Img(image, description) {
        this.image = image;
        this.description = description;
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
    return Img;
}());
var imageArray = [];
var image1 = new Img('https://pixlr.com/images/index/remove-bg.webp', 'My image');
var image2 = new Img('https://pixlr.com/images/index/remove-bg.webp', 'My new image');
imageArray.push(image1, image2);
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
var usersArray = [];
var bar = new User('Bar', 162, 546, 'https://pixlr.com/images/index/remove-bg.webp', Img[0]);
var netanel = new User('Netanel', 657, 603, 'https://pixlr.com/images/index/remove-bg.webp', Img[1]);
//view - show the user profile.
//create a new user profile.
//create a new post(image).
//controller - add new user to the array.
//add new post to the user profile.
//show the user profile.
