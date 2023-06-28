// class
var root = document.querySelector("#root");
var Uzer = /** @class */ (function () {
    function Uzer(imgUrl, width) {
        this.imgUrl = imgUrl;
        this.width = width;
    }
    return Uzer;
}());
var Imgarr = new Array();
function UrlWidth(event) {
    try {
        event.preventDefault();
        var imgUrl = event.target.imgUrl.value;
        var width = event.target.width.value;
        var data = new Uzer(imgUrl, width);
        console.log(data);
        Imgarr.push(data);
        console.log(Imgarr);
        event.target.reset();
    }
    catch (error) {
        console.log(error);
    }
}
