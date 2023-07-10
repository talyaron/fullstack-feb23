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
console.log(root);
logIn();
function logIn() {
    try {
        var html = " <div class=\"log\"> <form onsubmit=\"handleAdd(event)\"><label for=\"worker-name\">enter your Name:</label> <br>\n        <input type=\"text\" name=\"name\" value=\"\"> <br> <br> <button>ok</button> </form> </div>";
        if (!root)
            throw new Error("no root element");
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleAdd(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var newName = new Point(name, 0);
        points.push(newName);
        localStorage.setItem("points", JSON.stringify(points));
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
