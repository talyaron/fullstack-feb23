var People = /** @class */ (function () {
    function People(name, image) {
        this.name = name;
        this.image = image;
    }
    return People;
}());
var people = [
    new People("mor", "dist/img/images.jpg"),
    new People("shir", "dist/img/הורדה (1).jpg"),
    new People("or", "dist/img/הורדה.jpg"),
    new People("avi", "dist/img/הורדה (2).jpg"),
];
var div = document.querySelector("#div");
var imgDiv = "<div class='img'>";
imgDiv += people
    .map(function (peoplee) {
    return "<div class=\"info\"><img src=\"" + peoplee.image + "\"><br>\n    " + peoplee.name + "</div>";
})
    .join(" ");
imgDiv += "<div>";
if (div) {
    div.innerHTML = imgDiv;
}
