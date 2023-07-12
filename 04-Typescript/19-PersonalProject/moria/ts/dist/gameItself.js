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
        // renderPlayer(rootPlayer);
        window.location.href = "view/levels.html";
    }
    catch (error) {
        console.error(error);
    }
}
// const level = document.querySelector(`.level`) as HTMLElement;
// const notAvailable = document.querySelectorAll
//     (`.levelNotAvailable`);
function renderPlayer(htmlElement) {
    try {
        // if (!htmlElement) throw new Error("No element");
        var playerString = localStorage.getItem("players");
        if (!playerString)
            return [];
        var playerArray = JSON.parse(playerString);
        console.table(playerArray);
        var players = playerArray.map(function (player) {
            return new Player(player.playerImg);
        });
        // renderPlayerCard(playerString)
        // const html = players.map(player => renderPlayerCard(player)).join(' ')
    }
    catch (error) {
        console.error(error);
    }
}
// function renderPlayerCard(player: Player) {
//     try {
//         `<div class="card">
//                     <img src="${player.playerImg}"> </div>
// `
//         rootPlayer.innerHTML = html;
//     }}
// // } catch (error) {
// //     console.error(error);
// //     return ''
// // }
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
            var html = "<div class=\" \">\n                </div>\n                ";
            rootPlayer.innerHTML = html;
            break;
    }
});
