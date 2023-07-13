const players: Player[] = getPlayerFromLocalStorage()
renderPlayers(players);
function addHomer(event) {
    try {
        // const player =
        const selectedPlayer = new Player("../img/הומר.png");
        players.push(selectedPlayer);
        savePlayerToLocalStorage(players)
        console.log(players)
        // window.location.href = "view/levels.html";


    } catch (error) {
        console.error(error)
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

function savePlayerToLocalStorage(players: Player[]) {
    try {
        localStorage.setItem('players', JSON.stringify(players));

    } catch (error) {
        console.error(error)
    }
}


function getPlayerFromLocalStorage(): Player[] {
    try {
        const playersStorage = localStorage.getItem('players');
        if (!playersStorage) return [];
        const playersArray = JSON.parse(playersStorage);
        const players = playersArray.map(player => new Player(player.playersImg));
        return players;
    } catch (error) {
        console.error(error);
        return [];
    }

}

function renderPlayers(players: Player[]) {
    try {
        const rootPlayer = document.querySelector('#rootPlayer');
        if (!rootPlayer) throw new Error('No Player');


        const html = players.map(player => `<img class="bart" src="${player.playerImg}"> `).join(' ');
        rootPlayer.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}



const bart = document.querySelector(`.bart`) as HTMLElement;
document.addEventListener('keyup', (event: KeyboardEvent) => {
    event.stopPropagation();
    // console.dir(player)
    // console.log(event.key)
    switch (event.key) {

        case 'ArrowLeft':
            bart.style.left = `${bart.offsetLeft - 85}px`;
            break;
        case 'ArrowRight':
            bart.style.left = `${bart.offsetLeft + 85}px`;
            break;
        case " ":
            const html = `<div class="shoot">
                </div>
                `
            rootPlayer.innerHTML = html;
            break;





    }
});
