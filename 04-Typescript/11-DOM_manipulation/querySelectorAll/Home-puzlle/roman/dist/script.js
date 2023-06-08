// 1) get an image URL from the user, and add the image to the DOM. 
// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM
var Images = /** @class */ (function () {
    function Images(imgUrl) {
        // this.imgUrl.push(imgUrl);
    }
    return Images;
}());
var imgUrl = [];
function getUrl() {
    for (var i = 0; i < 5; i++) {
        var url = prompt("Enter image link");
        imgUrl.push(url);
    }
    return imgUrl;
}
getUrl();
console.dir(imgUrl);
var item = document.querySelector("#item");
var imgHTML = imgUrl
    .map(function (url) {
    return "<img class=\"img\" src=\"" + url + "\" alt=\"" + url + "\" >";
})
    .join(" ");
if (item) {
    item.innerHTML = imgHTML;
}
