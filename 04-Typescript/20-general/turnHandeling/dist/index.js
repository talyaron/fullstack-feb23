var Player = /** @class */ (function () {
    function Player(name, score) {
        if (score === void 0) { score = 0; }
        this.name = name;
        this.score = score;
        this.id = "" + Math.random();
    }
    return Player;
}());
var turns = {
    players: [
        new Player('tamar'),
        new Player('itah'),
        new Player('shir'),
        new Player('shani'),
        new Player('David'),
    ],
    turn: 0,
    changeTurn: function () {
        this.turn++;
        if (this.turn === this.players.length) {
            turns.turn = 0;
            //create evnet of end of round
        }
    },
    randomzePlayers: function () {
        this.players.sort(function () { return Math.random() - 0.5; });
    }
};
function handleChangeTurn() {
    turns.changeTurn();
    // render()
    console.log(turns.turn);
}
