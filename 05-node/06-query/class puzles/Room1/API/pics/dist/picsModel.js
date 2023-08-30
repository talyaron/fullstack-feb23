"use strict";
exports.__esModule = true;
exports.images = exports.Img = void 0;
var Img = /** @class */ (function () {
    function Img(title, url) {
        this.title = title;
        this.url = url;
        this.id = "id-" + new Date().getTime() + "-" + Math.random();
    }
    return Img;
}());
exports.Img = Img;
exports.images = [
    new Img("title1", "https://www.google.com/aclk?sa=l&ai=DChcSEwjnyMTl6oSBAxW4kIMHHQYXC_kYABAHGgJlZg&ase=2&gclid=Cj0KCQjw0bunBhD9ARIsAAZl0E1SHtIVRolwnOnVePSz7a2PRagN7k4RqSXp7UNvh_Oky01qNsAgSO8aAju6EALw_wcB&sig=AOD64_29WouTmGvP-tUSWwaHOH6r_rFg1g&ctype=5&nis=5&adurl&ved=2ahUKEwiOy7Xl6oSBAxU5JcUKHYEbBnMQvhd6BAgBEGE"),
];
