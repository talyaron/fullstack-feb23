

getPlayerFromLocalStorage()
function getPlayerFromLocalStorage() {
    try {
        const playersStorage = localStorage.getItem('players');
        if (!playersStorage) return [];
        const playersArray = JSON.parse(playersStorage);
        renderPlayers(playersArray[0])
    } catch (error) {
        console.error(error);
        return [];
    }

}

function renderPlayers(player: Player) {
    try {
        const rootPlayer = document.querySelector('#container__player') as HTMLElement;
        const html =
            `<img class="bart" src="${player.playerImg}"> `;

        rootPlayer.innerHTML = html;


    } catch (error) {
        console.error(error);
    }
}



const bart = document.querySelector(`.bart`) as HTMLElement;
const shoot = document.querySelector(`#container__shoot`) as HTMLElement;
document.addEventListener('keydown', (event: KeyboardEvent) => {
    event.stopPropagation();
    switch (event.key) {
        case 'ArrowLeft':
            bart.style.left = `${bart.offsetLeft - 25}px`;
            break;
        case 'ArrowRight':
            bart.style.left = `${bart.offsetLeft + 25}px`;
            break;
        // case " ":
        //     const html = `<div class="shoot">
        //         </div>
        //         `
        //     shoot.innerHTML = html;
        //     break;
    }
});
const containerBall = document.querySelector(`#container__ball`) as HTMLElement;
