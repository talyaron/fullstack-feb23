// 1) 1 entity, CRUD, make it betfull with CSS.
// 2) 2 eneties ,with joins, CRUD, two pages that share the model.
//Instegram Profile page.
//MVC - Model View Controller
//class - user, image.
// import { Img } from './dist/invoice.js';
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
//creat view to show the user profile.
function showUserImg(HTMLElement, userImg) {
    try {
        if (!HTMLElement)
            throw new Error('Root element is not found');
        var html = userImg.map(function (userImg) {
            return " <div class=\"userPost\">\n            <div class=\"userPost__name\">\n            <img src=\"" + userImg.user.imageProfile + "\">\n            <h3>" + userImg.user.name + "</h3>\n            </div>\n              <div class=\"userPost__img\">\n                <img src=\"" + userImg.user.imageProfile + "\">\n              </div>\n            </div>";
        }).join('');
        HTMLElement.innerHTML = html;
        localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
    }
    catch (error) {
        console.error(error);
    }
}
showUserImg(document.querySelector('#profile'), userImgArray);
//creat a butten to add new image.
function addNewImage(HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error('Root element is not found');
        var html = " <form onclick=\"handleAdd(event)\">\n        <button class=\"addNewImage\">+</button>\n        </form>";
        HTMLElement.innerHTML += html;
        localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
    }
    catch (error) {
        console.error(error);
    }
}
addNewImage(document.querySelector('#profile'));
function handleAdd(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        location.href = "addPost.html";
    }
    catch (error) {
        console.error(error);
    }
}
;
//view - show the user profile.
//create a new user profile.
//create a new post(image).
//controller - add new user to the array.
//add new post to the user profile.
//show the user profile.
