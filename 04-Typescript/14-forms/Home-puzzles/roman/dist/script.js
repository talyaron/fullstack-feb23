// complete on your own the class puzzle
// 1) Create a form with the following inputs:
// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.
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
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        var imgUrl = ev.target.imgUrl.value;
        var imgSize = ev.target.imgSize.value;
        var result = { imgUrl: imgUrl, imgSize: imgSize };
        usersRender === null || usersRender === void 0 ? void 0 : usersRender.innerHTML = "You have" + (users.length + 1) + " image(s)"; // Display number of images. 	// Display user names. 	// Display user cards.
        users.push(result);
    }
    catch (error) {
        console.error(error);
    }
}
var User = /** @class */ (function () {
    function User(imgUrl, imgSize) {
        this.imgUrl = imgUrl;
        this.imgSize = imgSize;
    }
    return User;
}());
function test() {
    if (users) {
        var usersHtml_1 = "";
        users.forEach(function (user) {
            usersHtml_1 += "<div class='user'><img src='" + user.imgUrl + "' style=\"width:" + user.imgSize + "vw\"></div>";
            console.log(usersHtml_1);
            usersRender.innerHTML = usersHtml_1;
        });
    }
}
