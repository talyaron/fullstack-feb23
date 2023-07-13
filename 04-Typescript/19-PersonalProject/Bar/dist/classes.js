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
var imagesArray = getImgsFromLocalStorage();
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
var usersArray = getUsersFromLocalStorage();
console.log(usersArray);
//
function saveImgToLocalStorage(image) {
    localStorage.setItem('image', JSON.stringify(image));
}
function getImgsFromLocalStorage() {
    try {
        var imgsStorage = localStorage.getItem('imgs');
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
//
function saveUserToLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
}
function getUsersFromLocalStorage() {
    try {
        var usersStorage = localStorage.getItem('users');
        if (!usersStorage)
            return [];
        var usersArray_1 = JSON.parse(usersStorage);
        var users = usersArray_1.map(function (user) { return new User(user.name, user.imageProfile, user.images); });
        return users;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
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
