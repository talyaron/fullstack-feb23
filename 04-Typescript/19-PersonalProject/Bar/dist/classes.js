// 2) 2 eneties ,with joins, CRUD, two pages that share the model.
//class - user, image, userImg.
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
    var bar = new User('Bar', 'https://cdn.pixabay.com/photo/2017/09/01/21/53/sunglasses-2705642_640.jpg', []);
    var netanel = new User('Netanel', 'https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_640.jpg', []);
    var shir = new User('Shir', 'https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_640.jpg', []);
    var ahava = new User('Ahava', 'https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507_640.jpg', []);
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
console.log(usersImgArray);
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
        if (!usersStorage)
            return [];
        var usersArray_1 = JSON.parse(usersStorage);
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
        if (!usersImgStorage)
            return [];
        var usersImgArray_1 = JSON.parse(usersImgStorage);
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
