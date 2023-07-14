getPlayerFromLocalStorage();
function getPlayerFromLocalStorage() {
    try {
        var playersStorage = localStorage.getItem('players');
        if (!playersStorage)
            return [];
        var playersArray = JSON.parse(playersStorage);
        renderPlayers(playersArray[0]);
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function renderPlayers(player) {
    try {
        var rootPlayer = document.querySelector('#container__player');
        var html = "<img class=\"bart\" src=\"" + player.playerImg + "\"> ";
        rootPlayer.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
var bart = document.querySelector(".bart");
var shoot = document.querySelector("#container__shoot");
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
            shoot.innerHTML = html;
            break;
    }
});
