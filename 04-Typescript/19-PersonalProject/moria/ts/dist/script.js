var Player = /** @class */ (function () {
    // id: string
    function Player(playerImg, id) {
        this.playerImg = playerImg;
        // this.id = `id-${new Date().getTime() - Math.random()}`
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
var rootPlayer = document.querySelector("#rootPlayer");
var players = [];
var points = [];
console.log(root);
logIn();
function logIn() {
    try {
        var html = " <div class=\"log\"> <form onsubmit=\"handleAdd(event)\"><label for=\"worker-name\">enter your Name:</label> <br>\n        <input required type=\"text\" name=\"name\" value=\"\"> <br> <br> <button type=\"submit\">ok</button> </form> </div>";
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
        var log = document.querySelector(".log");
        log.classList.add("none");
        var html = " <h2>Hi " + name + ",choose your player</h2>";
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
