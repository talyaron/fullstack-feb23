var Flower = /** @class */ (function () {
    function Flower(name, family, imgSrc) {
        this.name = name;
        this.family = family;
        this.imgSrc = imgSrc;
    }
    return Flower;
}());
var flowers = [
    new Flower("חוטמית זיפנית", "חלמתיים", "https://upload.wikimedia.org/wikipedia/commons/5/52/Alcea-setosa--Chotmit--Zachi-Evenor.jpg"),
    new Flower("רקפת", "רקפתיים", "https://upload.wikimedia.org/wikipedia/commons/1/19/Cyclamen_purpurascens_280803.jpg"),
    new Flower("מקור חסידה", "גרניים", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Erodium_cicutarium_Bahnstrasse_Bern_6.JPG/800px-Erodium_cicutarium_Bahnstrasse_Bern_6.JPG"),
    new Flower("גזר קיפח", "סוככיים", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/%D7%92%D7%96%D7%A8_%D7%A7%D7%99%D7%A4%D7%97_%D7%9E%D7%91%D7%98_%D7%9E%D7%A2%D7%9C.jpg/330px-%D7%92%D7%96%D7%A8_%D7%A7%D7%99%D7%A4%D7%97_%D7%9E%D7%91%D7%98_%D7%9E%D7%A2%D7%9C.jpg")
];
var flrs = document.querySelector("#flrs");
var flowersHtml = flowers.map(function (flower) { return "<div><img src = " + flower.imgSrc + " </br><p> " + flower.name + " </br> family: " + flower.family + " </p> </div> "; }).join(" ");
console.log(flowersHtml);
if (flrs) {
    flrs.innerHTML = flowersHtml;
}
