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
    }
    catch (error) {
        console.error(error);
    }
}
function addHomer(event) {
    try {
        // const player =
        var selectedPlayer = "../img/הומר.png";
        players.push(selectedPlayer);
        console.log(event);
        localStorage.setItem("players", JSON.stringify(players));
        window.location.href = "view/levels.html";
    }
    catch (error) {
        console.error(error);
    }
}
function addBart(event) {
    try {
        var selectedPlayer = "../img/בארט.png";
        players.push(selectedPlayer);
        console.log(event);
        localStorage.setItem("players", JSON.stringify(players));
        window.location.href = "view/levels.html";
    }
    catch (error) {
        console.error(error);
    }
}
function addLisa(event) {
    try {
        var selectedPlayer = new Player("../img/ליסה.png");
        players.push(selectedPlayer);
        console.log(event);
        localStorage.setItem("players", JSON.stringify(players));
        renderPlayer(players, rootPlayer);
        window.location.href = "view/levels.html";
    }
    catch (error) {
        console.error(error);
    }
}
// const level = document.querySelector(`.level`) as HTMLElement;
// const notAvailable = document.querySelectorAll
//     (`.levelNotAvailable`);
function renderPlayer(players, htmlElement) {
    try {
        if (!htmlElement)
            throw new Error("No element");
        var html = players.map(function (player) { return renderPlayerCard(player); }).join(' ');
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderPlayerCard(player) {
    try {
        return "<div class=\"card\">\n                    <img src=\"" + player.playerImg + "\"> </div>   \n";
    }
    finally { }
}
// } catch (error) {
//     console.error(error);
//     return ''
// }
