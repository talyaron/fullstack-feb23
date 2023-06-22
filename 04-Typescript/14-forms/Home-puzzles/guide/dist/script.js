// 1) Create a form with the following inputs:
// Image URL: This input allows the user to enter the URL of an image.
// Image Size (in vw): This input allows the user to specify the width of the image in viewport width (vw) units.
// When the user submits the form, display the image on the screen with the specified width.
var inputImg = document.querySelector(".pic");
var sizeImg = document.querySelector(".picSize");
var User = /** @class */ (function () {
    function User(userPics, imgSize) {
        this.userPics = userPics;
        this.imgSize = imgSize;
    }
    return User;
}());
var userArray = new Array();
function handleImg(event) {
    // event.preventDefault()
    var input = event.target.inputImg.value;
    var size = event.target.sizeImg.value;
    console.dir(input, size);
    var newImg = new User(inputImg);
    var newSize = new User(sizeImg);
    console.log(newImg, newSize);
}
handleImg();
var x = prompt("Enter a number!!!?");
if (x !== null) {
    var y = parseInt(x);
    function tom(a) {
        return a * (-1);
    }
    console.log(tom(y));
}
else {
    console.log("Prompt canceled or no input provided.");
}
