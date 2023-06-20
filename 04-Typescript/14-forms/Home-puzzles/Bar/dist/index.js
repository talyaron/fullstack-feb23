// create a form for user profile (with name, image (url), preferd color, year of birth)
// On submit, add the new profiles in to an array of class User
// Render all instances of user into cards of profiles
//// complete on your own the class puzzle
// 1) Create a form with the following inputs:
// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user
// to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.
// 2) Create a form with the following inputs:
// Image URL: This input allows the user to enter the URL of an image.
// Number of Images: This input allows the user to enter a number.
// When the user submits the form, render multiple instances of the image on the screen,
// multiplied by the number provided by the user.
// Use the "Puzzle Users" class:
var User = /** @class */ (function () {
    function User(userName, birthYear, imgURL, favoriteColor, width, NumberOfImages) {
        this.userName = userName;
        this.birthYear = birthYear;
        this.imgURL = imgURL;
        this.favoriteColor = favoriteColor;
        this.width = width;
        this.NumberOfImages = NumberOfImages;
        this.id = "id-" + Math.random();
    }
    User.prototype.age = function () {
        var age = new Date().getFullYear() - this.birthYear;
        return age;
    };
    return User;
}());
var usersArray = new Array();
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        console.dir(ev);
        var username = ev.target.username.value;
        var birthYear = ev.target.birthYear.valueAsNumber;
        var imgURL = ev.target.imgURL.value;
        var favoriteColor = ev.target.favoriteColor.value;
        var width = ev.target.width.valueAsNumber;
        var NumberOfImages = ev.target.valueAsNumber;
        var user = new User(username, birthYear, imgURL, favoriteColor, width, NumberOfImages);
        usersArray.push(user);
        renderCards(usersArray, document.querySelector("#cards"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderCards(users, element) {
    try {
        if (!element)
            throw new Error("element is not defind");
        var html = users.map(function (user) { return renderCard(user); }).join(" ");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderCard(user) {
    try {
        var html = "<div id=\"" + user.id + "\" class=\"card\" style=\"background-color: " + user.favoriteColor + "\">\n             <div class=\"userName\"> Name: " + user.userName + " </div>\n             <div class=\"age\"> Age: " + user.age() + " </div>\n             <img class=\"img\" src=\"" + user.imgURL + "\" style=\"width: " + user.width + "vw\">\n        </div>";
        return html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderMeniImgs(user) {
    try {
        var numberOfImages = parseInt(user.NumberOfImages);
        if (isNaN(numberOfImages) || numberOfImages <= 0) {
            throw new Error("Invalid number of images");
        }
        return numberOfImages;
    }
    catch (error) {
        console.error(error);
    }
}
// function renderMeniImgs(user: User | any) {
//     try {
//         // if(!user.NumberOfImages || user.imgURL) throw new Error(" ");
//         return user.imgURL * user.NumberOfImages
//     } catch (error) {
//         console.error(error);
//     }
// }
