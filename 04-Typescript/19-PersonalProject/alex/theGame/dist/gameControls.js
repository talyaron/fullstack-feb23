var Player = /** @class */ (function () {
    function Player(playerName) {
        this.playerName = playerName;
    }
    Player.prototype.hendleSubmit = function (ev) {
        try {
            ev.preventDefault();
            var playerName = ev.target.player.value;
            console.log(playerName);
        }
        catch (error) {
            console.error(error);
        }
    };
    Player.prototype.getName = function () {
        return this.playerName;
    };
    Player.prototype["delete"] = function () {
        this.playerName = "";
    };
    return Player;
}());
function handleInput(event) {
    event.preventDefault();
    var playerName = new Player(event.target.player.value);
    console.log(playerName);
    var root = document.querySelector(".root");
    if (root) {
        root.innerHTML = event.target.value;
    }
}
