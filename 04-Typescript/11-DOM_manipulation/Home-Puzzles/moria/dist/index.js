var People = /** @class */ (function () {
    function People(name, imgg) {
        this.name = name;
        this.imgg = imgg;
    }
    return People;
}());
var people = [
    new People("mor", ' <img src="dist/img/images.jpg">'),
    new People("shir", '<img src="dist/img/הורדה (1).jpg">'),
    new People("or", ' <img src="dist/img/הורדה.jpg">'),
    new People("avi", '<img src="dist/img/הורדה (2).jpg">'),
];
var div = document.querySelector("#div");
var imgDiv = "<div class='img'>";
imgDiv += people.map(function (peoplee) {
    return "<div class=\"info\">  " + peoplee.imgg + "\n     " + peoplee.name + "</div>";
})
    .join(" ");
imgDiv += "<div>";
if (div) {
    div.innerHTML = imgDiv;
}
