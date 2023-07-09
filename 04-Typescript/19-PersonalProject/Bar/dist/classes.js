var Img = /** @class */ (function () {
    function Img(image, description) {
        this.image = image;
        this.description = description;
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
    return Img;
}());
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
var UserImg = /** @class */ (function () {
    function UserImg(user, image) {
        this.user = user;
        this.image = image;
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
    return UserImg;
}());
