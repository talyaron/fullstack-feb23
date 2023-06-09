// const imgUrl: string|null = prompt("Insert url pls");
// const container1 = document.querySelector("#container1");
// const imgHTML = `<img src="${imgUrl}" />`;
// if (imgUrl && container1) container1.innerHTML = imgHTML;
var imgUrl1 = prompt("Insert url pls");
var imgUrl2 = prompt("Insert url pls");
var imgUrl3 = prompt("Insert url pls");
var imgUrl4 = prompt("Insert url pls");
var imgUrl5 = prompt("Insert url pls");
var Imgs = /** @class */ (function () {
    function Imgs(image) {
        this.image = image;
    }
    return Imgs;
}());
var imgs = [
    new Imgs("" + imgUrl1),
    new Imgs("" + imgUrl2),
    new Imgs("" + imgUrl3),
    new Imgs("" + imgUrl4),
    new Imgs("" + imgUrl5)
];
var container1 = document.querySelector("#container1");
var imgsHtml = imgs
    .map(function (img) {
    return "\n    <img src=\"" + img.image + "\" />";
}).join(" ");
if (container1)
    container1.innerHTML = imgsHtml;
