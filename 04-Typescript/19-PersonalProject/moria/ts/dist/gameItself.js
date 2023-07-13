// import { Player } from ;
function getPlayerFromLocalStorage() {
    try {
        var playersStorage = localStorage.getItem('players');
        if (!playersStorage)
            return [];
        var playersArray = JSON.parse(playersStorage);
        var players = playersArray.map(function (player) { return new Player(player.playersImg); });
        return players;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function renderPlayers(selectedPlayer) {
    console.log(selectedPlayer);
    try {
        var rootPlayer = document.querySelector('#rootPlayer');
        var html = players.map(function (player) {
            return "<img class=\"bart\" src=\"" + player.playerImg + "\"> ";
        }).join(' ');
        rootPlayer.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
var bart = document.querySelector(".bart");
document.addEventListener('keyup', function (event) {
    event.stopPropagation();
    // console.dir(player)
    // console.log(event.key)
    switch (event.key) {
        case 'ArrowLeft':
            bart.style.left = bart.offsetLeft - 85 + "px";
            break;
        case 'ArrowRight':
            bart.style.left = bart.offsetLeft + 85 + "px";
            break;
        case " ":
            var html = "<div class=\"shoot\">\n                </div>\n                ";
            rootPlayer.innerHTML = html;
            break;
    }
});
