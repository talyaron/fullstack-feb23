var ImageItem = /** @class */ (function () {
    function ImageItem(url) {
        this.url = url;
    }
    ImageItem.prototype.render = function () {
        var container = document.querySelector("#imageContainer");
        var imgElement = document.createElement("img");
        imgElement.src = this.url;
        if (container) {
            container.appendChild(imgElement);
        }
    };
    return ImageItem;
}());
// Task 2: Get five image URLs from the user and print five images on the DOM
var imageUrls = [];
for (var i = 0; i < 5; i++) {
    var url = prompt("Enter image URL " + (i + 1) + ":");
    imageUrls.push(url);
}
var imageItems = imageUrls.map(function (url) { return new ImageItem(url); });
imageItems.forEach(function (item) { return item.render(); });
