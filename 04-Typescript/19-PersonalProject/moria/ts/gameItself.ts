
function addHomer(event) {
    try {
        // const player =
        const selectedPlayer = "../img/הומר.png";
        players.push(selectedPlayer);
        console.log(event)
        localStorage.setItem("players", JSON.stringify(players))
        window.location.href = "view/levels.html";


    } catch (error) {
        console.error(error)
    }
}

function addBart(event) {
    try {
        const selectedPlayer = "../img/בארט.png";
        players.push(selectedPlayer);
        console.log(event)
        localStorage.setItem("players", JSON.stringify(players))
        window.location.href = "view/levels.html";

    } catch (error) {
        console.error(error)
    }
}

function addLisa(event) {
    try {

        const selectedPlayer = new Player("../img/ליסה.png");
        players.push(selectedPlayer);
        localStorage.setItem("players", JSON.stringify(players))
        // window.location.href = "view/levels.html";

    } catch (error) {
        console.error(error)
    }
}
// const level = document.querySelector(`.level`) as HTMLElement;
// const notAvailable = document.querySelectorAll
//     (`.levelNotAvailable`);

function renderPlayer(htmlElement: HTMLElement | null) {
    try {
        // if (!htmlElement) throw new Error("No element");
        const playerString = localStorage.getItem("players");
        // console.log(playerString)
        if (!playerString) return [];

        const playerArray = JSON.parse(playerString);
        console.table(htmlElement)
        // console.log(playerArray)
        const players: Player[] = playerArray.map((player: Player) => {
            return new Player(player.playerImg);
        })
        // renderPlayerCard(playerString)


        // const html = players.map(player => renderPlayerCard(player)).join(' ')


    } catch (error) {
        console.error(error)
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
