var Player = /** @class */ (function () {
    function Player(userName, playerId, color) {
        this.userName = userName;
        if (playerId)
            this.playerId = playerId;
        else
            this.playerId = ++Player.counter;
        if (color)
            this.color = color;
        else
            this.color = this.assignColor();
    }
    Player.prototype.assignColor = function () {
        var colors = ['green', 'yellow', 'red', 'blue'];
        return colors[this.playerId % colors.length];
    };
    Player.counter = 0;
    return Player;
}());
