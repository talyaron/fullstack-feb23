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
function hadar(imgs, root) {
    try {
        var html = imgs.map(function (imgs) {
            return "<div>\n          <img src=\"" + imgs.imgUrl + "\" style=\"width" + imgs.width + "px;\"></div> ";
        }).join("");
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
