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
document.addEventListener('keydown', function (event) {
    event.stopPropagation();
    switch (event.key) {
        case 'ArrowLeft':
            bart.style.left = bart.offsetLeft - 25 + "px";
            break;
        case 'ArrowRight':
            bart.style.left = bart.offsetLeft + 25 + "px";
            break;
        // case " ":
        //     const html = `<div class="shoot">
        //         </div>
        //         `
        //     shoot.innerHTML = html;
        //     break;
    }
});
var containerBall = document.querySelector("#container__ball");
