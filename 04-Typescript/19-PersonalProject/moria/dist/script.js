var Player = /** @class */ (function () {
    function Player(playerImg, rope, id) {
        this.playerImg = playerImg;
        this.rope = rope;
        this.id = "id-" + (new Date().getTime() - Math.random());
    }
    return Player;
}());
var Point = /** @class */ (function () {
    function Point(name, amount, id) {
        this.name = name;
        this.amount = amount;
        this.id = "id-" + (new Date().getTime() - Math.random());
    }
    return Point;
}());
var root = document.querySelector("#root");
var players = [];
var points = [];
