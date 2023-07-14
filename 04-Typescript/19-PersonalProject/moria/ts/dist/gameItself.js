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
        var rootPlayer = document.querySelector('#rootPlayer');
        var html = "<img class=\"bart\" src=\"" + player.playerImg + "\"> ";
        rootPlayer.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
// const bart = document.querySelector(`.bart`) as HTMLElement;
// document.addEventListener('keyup', (event: KeyboardEvent) => {
//     event.stopPropagation();
//     // console.dir(player)
//     // console.log(event.key)
//     switch (event.key) {
//         case 'ArrowLeft':
//             bart.style.left = `${bart.offsetLeft - 85}px`;
//             break;
//         case 'ArrowRight':
//             bart.style.left = `${bart.offsetLeft + 85}px`;
//             break;
//         case " ":
//             const html = `<div class="shoot">
//                 </div>
//                 `
//             rootPlayer.innerHTML = html;
//             break;
//     }
// });
