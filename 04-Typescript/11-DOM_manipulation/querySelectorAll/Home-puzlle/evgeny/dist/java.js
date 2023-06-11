// image links
// https://www.w3schools.com/html/pic_trulli.jpg
// https://www.w3schools.com/html/img_girl.jpg
// https://www.w3schools.com/html/img_chania.jpg
var input = document.querySelector(".input");
var pictures = document.querySelector(".pictures");
var arrayOfPic = [];
var count = 1;
var pictureArray = /** @class */ (function () {
    function pictureArray(picUrl, picNum) {
        this.picUrl = picUrl, this.picNum = picNum;
    }
    ;
    pictureArray.prototype.addToDOM = function () {
        return pictures.innerHTML += "<div class=\"picture\">\n        <img src=\"" + this.picUrl + "\" class=\"pictureadded\" alt=\"\"> \n        <p>picture number:" + this.picNum + "</p>\n        </div>";
    };
    return pictureArray;
}());
function addToArray() {
    arrayOfPic.push(new pictureArray(input.value, count));
    count++;
    if (arrayOfPic.length == 3) {
        arrayOfPic.map(function (Event) {
            Event.addToDOM();
        });
    }
}
