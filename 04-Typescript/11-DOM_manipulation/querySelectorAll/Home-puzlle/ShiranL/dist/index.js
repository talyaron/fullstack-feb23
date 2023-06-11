function GetRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
var ImageToShow = /** @class */ (function () {
    function ImageToShow(link) {
        this.link = link;
    }
    ImageToShow.prototype.getLink = function () {
        return this.link;
    };
    return ImageToShow;
}());
var ImageSToShow = /** @class */ (function () {
    function ImageSToShow() {
        this.image = [];
    }
    ImageSToShow.prototype.newLink = function (link) {
        this.image.push(link);
    };
    ImageSToShow.prototype.setBackroundImgNox = function () {
        var _this = this;
        for (var i_1 = 0; i_1 < 5; i_1++) {
            ;
            var promptLink = prompt("enter image link " + (i_1 + 1) + "/5");
            if (promptLink) {
                var image = new ImageToShow(promptLink);
                imageSToShow.newLink(image);
            }
        }
        var boxes = document.querySelectorAll(".box");
        var i = 0;
        boxes.forEach(function (box) {
            box.style.backgroundImage = "url('" + _this.image[i].link + "')";
            box.style.objectFit = "cover";
            box.style.borderRadius = "20px";
            i++;
        });
    };
    return ImageSToShow;
}());
var imageSToShow = new ImageSToShow();
imageSToShow.setBackroundImgNox();
