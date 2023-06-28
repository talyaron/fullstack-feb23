var Img = /** @class */ (function () {
    function Img(imgUrl, width) {
        this.imgUrl = imgUrl;
        this.width = width;
    }
    return Img;
}());
var imgs = [];
function UrlWidth(event) {
    try {
        event.preventDefault();
        var imgUrl = event.target.elements.imgUrl.value;
        var width = event.target.elements.width.value;
        var data = new Img(imgUrl, width);
        imgs.push(data);
        console.log(imgs);
        event.target.reset();
        var root = document.querySelector("#root");
        hadar(imgs, root);
    }
    catch (error) {
        console.error(error);
    }
}
function hadar(imgArray, root) {
    try {
        var html = imgArray.map(function (img) {
            return "<div>\n            <img src=\"" + img.imgUrl + "\" style=\"width: " + img.width + "px;\">\n            </div>";
        }).join("");
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
