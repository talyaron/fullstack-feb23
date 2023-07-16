// 1) 1 entity, CRUD, make it betfull with CSS.
// 2) 2 eneties ,with joins, CRUD, two pages that share the model.
// # Points
// 10 good BEM model - v
// 10 beutifull and accurate design - v
// 10 reponsive - v
// 10 clear code - v
// 10 clear structure. -
// 20 using MVC - v
// 10 trycatch with good exceptions -
// 10 error free - v
//
//class - user, image.
var Img = /** @class */ (function () {
    function Img(image) {
        this.image = image;
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
    return Img;
}());
var imagesArray = getImgsFromLocalStorage();
var User = /** @class */ (function () {
    function User(name, imageProfile, imagse) {
        this.name = name;
        this.imageProfile = imageProfile;
        this.imagse = imagse;
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
    return User;
}());
var usersArray = getUsersFromLocalStorage();
if (usersArray.length === 0) {
    var bar = new User('Bar', 'https://pixlr.com/images/index/remove-bg.webp', []);
    var netanel = new User('Netanel', 'https://burst.shopify.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page/download', []);
    var shir = new User('Shir', 'https://photoscissors.com/images/samples/3-before.jpg', []);
    var ahava = new User('Ahava', 'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg', []);
    usersArray.push(bar, netanel, shir, ahava);
}
//creat class how join the user to his imagse.
var UsersImg = /** @class */ (function () {
    function UsersImg(user) {
        this.user = user;
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
    return UsersImg;
}());
var usersImgArray = getUsersImgFromLocalStorage();
if (usersImgArray.length === 0) {
    var barImg = new UsersImg([usersArray[0]]);
    var netanelImg = new UsersImg([usersArray[1]]);
    var shirImg = new UsersImg([usersArray[2]]);
    var ahavaImg = new UsersImg([usersArray[3]]);
    usersImgArray.push(barImg, netanelImg, shirImg, ahavaImg);
}
;
//Image local storage
function saveImgToLocalStorage(image) {
    localStorage.setItem('imagesArray', JSON.stringify(image));
}
function getImgsFromLocalStorage() {
    try {
        var imgsStorage = localStorage.getItem('imagesArray');
        if (!imgsStorage)
            return [];
        var imagesArray_1 = JSON.parse(imgsStorage);
        var imgs = imagesArray_1.map(function (img) { return new Img(img.image); });
        return imgs;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
//User local storage
function saveUserToLocalStorage(user) {
    localStorage.setItem('usersArray', JSON.stringify(user));
}
function getUsersFromLocalStorage() {
    try {
        var usersStorage = localStorage.getItem('usersArray');
        console.log(usersStorage);
        if (!usersStorage)
            return [];
        var usersArray_1 = JSON.parse(usersStorage);
        console.log(usersArray_1);
        if (!usersArray_1)
            throw new Error('Users not found');
        if (!Array.isArray(usersArray_1))
            throw new Error('usersArray is not array');
        var users = usersArray_1.map(function (user) { return new User(user.name, user.imageProfile, user.imagse); });
        return users;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
//usersImg local storage
function saveUsersImgToLocalStorage(usersImg) {
    localStorage.setItem('usersImgArray', JSON.stringify(usersImg));
}
function getUsersImgFromLocalStorage() {
    try {
        var usersImgStorage = localStorage.getItem('usersImgArray');
        console.log(usersImgStorage);
        if (!usersImgStorage)
            return [];
        var usersImgArray_1 = JSON.parse(usersImgStorage);
        console.log(usersImgArray_1);
        if (!usersImgArray_1)
            throw new Error('Users not found');
        if (!Array.isArray(usersImgArray_1))
            throw new Error('usersImgArray is not array');
        var usersImg = usersImgArray_1.map(function (usersImg) { return new UsersImg(usersImg.user); });
        return usersImg;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
