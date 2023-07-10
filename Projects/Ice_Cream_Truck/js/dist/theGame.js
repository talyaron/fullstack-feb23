var Player = /** @class */ (function () {
    function Player(name, points) {
        this.name = name;
        this.points = points;
    }
    return Player;
}());
function getPlayer() {
    try {
        var player = localStorage.getItem("player");
        if (!player)
            throw new Error("can not find player");
        var playerToObject = JSON.parse(player);
        var name = playerToObject.name;
        var currentPlayer = new Player(name, 0);
    }
    catch (error) {
        console.error(error);
    }
}
getPlayer();
