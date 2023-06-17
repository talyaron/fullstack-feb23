// 1) get an image URL from the user, and add the image to the DOM. 
// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM
var UserImg = /** @class */ (function () {
    function UserImg(img) {
        this.img = img;
    }
    return UserImg;
}());
function UserImage() {
    var firstImageUrl = prompt("Enter Url of an Image");
    var firstImage = new UserImg(firstImageUrl);
    var div = document.querySelector("#root");
    div === null || div === void 0 ? void 0 : div.innerHTML += "<p>" + firstImage.img;
}
UserImage();
