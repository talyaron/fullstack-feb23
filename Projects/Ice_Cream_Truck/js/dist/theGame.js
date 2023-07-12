var Player = /** @class */ (function () {
    function Player(name, points) {
        this.name = name;
        this.points = points;
    }
    return Player;
}());
var lives = ["live", "live", "live", "live", "live"];
function getPlayer() {
    try {
        var player = localStorage.getItem("player");
        if (!player)
            throw new Error("can not find player");
        var playerToObject = JSON.parse(player);
        var name = playerToObject.name;
        var currentPlayer = new Player(name, 0);
        var root = document.querySelector("#mainName");
        if (!root)
            throw new Error("can not found root element");
        var html = "\n<h1> " + currentPlayer.name + "'s ICE CREAM TRUCK </h1>\n";
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderGamePage(rootElement) {
    try {
        var html = "\n<div class=\"crop\">\n<img src=\"../ice cream truck.gif\" alt=\"\">\n</div>";
        if (!rootElement)
            throw new Error("can not found root element");
        rootElement.innerHTML = html;
        renderLives(document.querySelector("#lives"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderLives(rootElement) {
    try {
        var html_1 = "";
        lives.forEach(function (live) {
            if (live === "live") {
                html_1 += "<img src=\"../\u05D2\u05DC\u05D9\u05D3\u05D4 \u05D7\u05D9\u05D9\u05DD.gif\" alt=\"\">";
            }
        });
        if (!rootElement)
            throw new Error("can not found root element");
        rootElement.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function wrong() {
    try {
        var liveToEarase = lives.findIndex(function (live) { return live === "live"; });
        lives[liveToEarase] = "";
        renderLives(document.querySelector("#lives"));
        console.log(liveToEarase);
        if (liveToEarase === 4) {
            console.log("game over");
        }
    }
    catch (error) {
        console.error(error);
    }
}
getPlayer();
renderGamePage(document.querySelector("#truck"));
