var players = getPlayerFromLocalStorage();
renderPlayers(players);
function addHomer(event) {
    try {
        // const player =
        var selectedPlayer = new Player("../img/הומר.png");
        players.push(selectedPlayer);
        savePlayerToLocalStorage(players);
        console.log(players);
        // window.location.href = "view/levels.html";
    }
    catch (error) {
        console.error(error);
    }
}
// function addBart(event) {
//     try {
//         const selectedPlayer = "../img/בארט.png";
//         players.push(selectedPlayer);
//         console.log(event)
//         localStorage.setItem("players", JSON.stringify(players))
//         window.location.href = "view/levels.html";
//     } catch (error) {
//         console.error(error)
//     }
// }
// function addLisa(event) {
//     try {
//         const selectedPlayer = new Player("../img/ליסה.png");
//         players.push(selectedPlayer);
//         localStorage.setItem("players", JSON.stringify(players))
//         renderPlayer()
//         window.location.href = "view/levels.html";
//     } catch (error) {
//         console.error(error)
//     }
// }
// const level = document.querySelector(`.level`) as HTMLElement;
// const notAvailable = document.querySelectorAll
//     (`.levelNotAvailable`);
function savePlayerToLocalStorage(players) {
    try {
        localStorage.setItem('players', JSON.stringify(players));
    }
    catch (error) {
        console.error(error);
    }
}
function getPlayerFromLocalStorage() {
    try {
        var playersStorage = localStorage.getItem('players');
        if (!playersStorage)
            return [];
        var playersArray = JSON.parse(playersStorage);
        var players_1 = playersArray.map(function (player) { return new Player(player.playersImg); });
        return players_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function renderPlayers(players) {
    try {
        var rootPlayer = document.querySelector('#rootPlayer');
        if (!rootPlayer)
            throw new Error('No Player');
        var html = players.map(function (player) { return "<img class=\"bart\" src=\"" + player.playerImg + "\"> "; }).join(' ');
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
