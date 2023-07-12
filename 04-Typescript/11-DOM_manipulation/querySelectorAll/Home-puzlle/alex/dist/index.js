// 1) get an image URL from the user, and add the image to the DOM. 
// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM
var UserImg = /** @class */ (function () {
    function UserImg(url) {
        this.url = url;
    }
    UserImg.prototype.render = function () {
        var _a;
        var img = document.createElement('img');
        img.src = this.url;
        (_a = document.getElementById('root')) === null || _a === void 0 ? void 0 : _a.appendChild(img);
    };
    return UserImg;
}());
function UserImage() {
    var urls = [];
    for (var i = 0; i < 5; i++) {
        var userUrl = prompt("enter image url " + (i + 1));
        if (userUrl) {
            var userImg = new UserImg(userUrl);
            urls.push(userImg);
        }
    }
    renderImages(urls);
    function renderImages(imageItems) {
        imageItems.forEach(function (imageItem) {
            imageItem.render();
        });
    }
}
UserImage();
