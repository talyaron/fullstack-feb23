
// import { Player } from ;

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

function renderPlayers(selectedPlayer: Player) {
    console.log(selectedPlayer);

    try {
        const rootPlayer = document.querySelector('#rootPlayer') as HTMLElement;
        const html = players.map(player =>
            `<img class="bart" src="${player.playerImg}"> `).join(' ');

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
