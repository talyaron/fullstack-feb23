// 2) Create a form with the following inputs:
// Image URL: This input allows the user to enter the URL of an image.
// Number of Images: This input allows the user to enter a number.
// When the user submits the form, render multiple instances of the image on the screen, multiplied by the number provided by the user.
// Use the "Puzzle Users" class:
// 3) Access the "Puzzle class" class, which likely represents a collection of user data or user profiles.
// Edit each card: Update the information contained in each card, such as modifying user details or deleting a card from the collection.
// These instructions outline three different tasks: creating a form to render an image with a specified width, creating a form to render multiple images, and using the "Puzzle Users" class to edit user cards. Each task has specific requirements and actions to be performed.
var users = [];
var usersRender = document.querySelector(".usersRender");
var usersPopup = document.querySelector(".usersPopup");
var User = /** @class */ (function () {
    function User(imgUrl, imgCount) {
        this.imgUrl = imgUrl;
        this.imgCount = imgCount;
    }
    return User;
}());
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var imgUrl = ev.target.imgUrl.value;
        var imgCount = ev.target.imgCount.value;
        var result = { imgUrl: imgUrl, imgCount: imgCount };
        users.push(result);
        test();
    }
    catch (error) {
        console.error(error);
    }
}
function test() {
    if (users) {
        var usersHtml_1 = "";
        users.forEach(function (user) {
            for (var i = 1; i <= user.imgCount; i++) {
                usersHtml_1 += "<div class='userImg'><img src='" + user.imgUrl + "'\"></div>";
                usersRender.innerHTML = usersHtml_1;
            }
        });
    }
}
