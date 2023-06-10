var ImagesByUser = /** @class */ (function () {
    function ImagesByUser(type, url) {
        this.type = type;
        this.url = url;
    }
    return ImagesByUser;
}());
var imagesByUser = [
    new ImagesByUser(prompt("what is the name of your image?"), prompt("What is your images URL?")),
    new ImagesByUser(prompt("what is the name of your image?"), prompt("What is your images URL?")),
    new ImagesByUser(prompt("what is the name of your image?"), prompt("What is your images URL?")),
    new ImagesByUser(prompt("what is the name of your image?"), prompt("What is your images URL?")),
    new ImagesByUser(prompt("what is the name of your image?"), prompt("What is your images URL?")),
];
// debugger;
var userImages = document.querySelector("#user-images");
var imagesToHTML = imagesByUser
    .map(function (img) {
    return "<p>image type: " + img.type + "<br><br><img src=\"" + img.url + "\">";
})
    .join(" ");
if (userImages) {
    userImages.innerHTML = imagesToHTML;
}
