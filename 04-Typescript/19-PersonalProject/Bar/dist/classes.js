// 1) 1 entity, CRUD, make it betfull with CSS.
// 2) 2 eneties ,with joins, CRUD, two pages that share the model.
// # Points
// 10 good BEM model
// 10 beutifull and accurate design
// 10 reponsive
// 10 clear code
// 10 clear structure.
// 20 using MVC
// 10 trycatch with good exceptions
// 10 error free
//
//MVC - Model View Controller
//class - user, image.
// getImgsFromLocalStorage();
// getUsersFromLocalStorage();
var Img = /** @class */ (function () {
    function Img(image) {
        this.image = image;
        this.id = Date.now().toString() + Math.random().toString(36).substr(2);
    }
    return Img;
}());
// const image1 = new Img('https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg');
// const image2 = new Img('https://photoscissors.com/images/samples/3-before.jpg');
var imagesArray = getImgsFromLocalStorage();
// imagesArray.push();
console.log(imagesArray);
//
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
var usersArray = getUsersFromLocalStorage();
if (usersArray.length === 0) {
    var bar = new User('Bar', 'https://pixlr.com/images/index/remove-bg.webp', []);
    var netanel = new User('Netanel', 'https://photoscissors.com/images/samples/3-before.jpg', []);
    usersArray.push(bar, netanel);
}
console.log(usersArray);
//
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
