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
var pic = document.querySelector("#img");
var imgLink = image
    .map(function (link) {
    return "<img class=\"img\" src=\"" + link + "\" alt=\"" + link + "\" >";
})
    .join(" ");
if (img) {
    img.innerHTML = imgLink;
}
