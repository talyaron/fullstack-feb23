function reloadPage() {
    location.reload();
}
const restart = document.querySelector("#restart");
restart?.addEventListener("click", () => {
    reloadPage();
})


function renderBord() {
    try {
        console.log(`renderBord`)
        const wrapper = document.querySelector("#wrapper");
        if (!wrapper) throw new Error("Error in wrapper")
        let index = 0;
        for (let i = 0; i < 8; i++) {
            wrapper.innerHTML += `<div class="rows">
            <div id=box${index++} class="box"></div>
            <div id=box${index++} class="box"></div>
            <div id=box${index++} class="box"></div>
            <div id=box${index++} class="box"></div>
            <div id=box${index++} class="box"></div>
            <div id=box${index++} class="box"></div>
            <div id=box${index++} class="box"></div>
            <div id=box${index++} class="box"></div>
        </div>`
        }

    } catch (error) {
        console.error(error);
    }

}


function renderWhitePlayer() {
    try {
        console.log(`renderWhitePlayer`)
        let pawnId = 0;

        // const boxId = document.querySelector(`#box${Math.floor(Math.random()*64)}`);
        const wrapper = document.querySelector("#wrapper");
        if (!wrapper) throw new Error("Error in wrapper")
        for (let i = 0; i < numOfWP; i++) {
            wrapper.innerHTML += `<div id="white${pawnId++}" class="img white"></div>`
        }
    } catch (error) {
        console.error(error);
    }
}

function renderBlackPlayer() {
    try {
        console.log(`renderBlackPlayer`)
        let pawnId = 0;
        // const boxId = document.querySelector(`#box${Math.floor(Math.random()*64)}`);
        const wrapper = document.querySelector("#wrapper");
        if (!wrapper) throw new Error("Error in wrapper")
        for (let i = 0; i < numOfWP; i++) {
            wrapper.innerHTML += `<div id="black${pawnId++}" class="img black"></div>`
        }
    } catch (error) {
        console.error(error);
    }
}




const numOfWP = 12;
const Limit = 640;
renderBord();
renderWhitePlayer();
renderBlackPlayer();

const topIndex = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2];
const leftIndex = [0, 2, 4, 6, 1, 3, 5, 7, 0, 2, 4, 6];


let index = 0;
const blackPlayers: NodeListOf<HTMLDivElement> = document.querySelectorAll(".black");
blackPlayers.forEach(player => {
    player.style.top = `${(topIndex[index] * 80) + 10}px`
    player.style.left = `${(leftIndex[index++] * 80) + 10}px`
})

index = 0;
const whitePlayers: NodeListOf<HTMLDivElement> = document.querySelectorAll(".white");
whitePlayers.forEach(player => {
    player.style.top = `${((topIndex[index] + 5) * 80) + 10}px`
    player.style.left = `${((7 - leftIndex[index++]) * 80) + 10}px`

})


function meetPlyer(playerTop: number, playerLeft: number, secondPlayer: Pawn): boolean {
    try {
        if (!playerTop || !playerLeft || !secondPlayer) throw new Error("Missing Player");
        // console.log(playerTop, secondPlayer.getX(), playerLeft, secondPlayer.gety())
        if (playerTop === secondPlayer.getX() && playerLeft === secondPlayer.gety()) {
            // console.log("True")
            return true;
        }
        return false;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function canEat(playerTop: number, playerLeft: number, secondPlayer: Pawn): boolean {
    try {
        if (!playerTop || !playerLeft || !secondPlayer) throw new Error("Missing Player");
        if (playerTop === secondPlayer.gety() && playerLeft === secondPlayer.getX())
            return false;
        // console.log("True")
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

const Players: NodeListOf<HTMLDivElement> = document.querySelectorAll(".img");
let activePawn: HTMLDivElement | null = null;
Players.forEach((player, index) => {
    player.addEventListener("click", () => {
        activePawn = player;
    })
    document.addEventListener("keydown", (ev: any) => {
        try {
            if (activePawn === player) {
                let step = 80;
                let nextLocation;
                let eat = false, meet = false;
                console.log(ev.key)
                switch (ev.key) {
                    case 'ArrowUp':
                        nextLocation = (player.offsetTop - step);
                        if (nextLocation < 0) throw new Error("Out of Bord");
                        player.style.top = `${nextLocation}px`;
                        break;
                    case 'ArrowDown':
                        nextLocation = (player.offsetTop + step);
                        if (nextLocation > Limit) throw new Error("Out of Bord");                    
                        player.style.top = `${nextLocation}px`;
                        // player.style.top = `${player.offsetTop + step}px`;
                        break;
                    case 'ArrowLeft':
                        nextLocation = (player.offsetLeft - step);
                        if (nextLocation < 0) throw new Error("Out of Bord");
                        player.style.left = `${nextLocation}px`;
                        break;
                    case 'ArrowRight':
                        nextLocation = (player.offsetLeft + step);
                        if (nextLocation > Limit) throw new Error("Out of Bord");
                        player.style.left = `${nextLocation}px`;

                        break;
                }
            }
        } catch (error) {
            console.error(error)
        }

    });

});




