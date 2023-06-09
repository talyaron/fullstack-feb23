// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM
var Images = /** @class */ (function () {
    function Images(image) {
        this.image = image;
    }
    return Images;
}());
var image = [];
function imageUrl() {
    for (var i = 0; i < 5; i++) {
        var url = prompt("Send image adress");
        image.push(url);
    }
    return image;
}
imageUrl();
console.dir(image);
var img = document.querySelector("#img");
var imgLink = image
    .map(function (link) {
    return "<img class=\"img\" src=\"" + link + "\" alt=\"" + link + "\" >";
})
    .join(" ");
if (img) {
    img.innerHTML = imgLink;
}
