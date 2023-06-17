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


class Pawn {
    constructor(public x: number, public y: number) { }

    setX(num: number) {
        this.x = num;
    }

    sety(num: number) {
        this.y = num;
    }

    getX(): number {
        return this.x;
    }

    gety(): number {
        return this.y;
    }
};

const numOfWP = 12;
const Limit = 640;
renderBord();
renderWhitePlayer();
renderBlackPlayer();

const topIndex = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2];
const leftIndex = [0, 2, 4, 6, 1, 3, 5, 7, 0, 2, 4, 6];
const blackPosition: Pawn[] = new Array();
const whitePosition: Pawn[] = new Array();

let index = 0;
const blackPlayers: NodeListOf<HTMLDivElement> = document.querySelectorAll(".black");
blackPlayers.forEach(player => {
    player.style.top = `${(topIndex[index] * 80) + 10}px`
    player.style.left = `${(leftIndex[index++] * 80) + 10}px`
    setPosition(player, "black")
})

index = 0;
const whitePlayers: NodeListOf<HTMLDivElement> = document.querySelectorAll(".white");
whitePlayers.forEach(player => {
    player.style.top = `${((topIndex[index] + 5) * 80) + 10}px`
    player.style.left = `${((7 - leftIndex[index++]) * 80) + 10}px`
    setPosition(player, "white")

})

function setPosition(player: HTMLDivElement, team: String): Boolean | undefined {
    try {
        if (!player) throw new Error("Missing player");
        if (team == "white") {
            whitePosition.push(new Pawn(player.offsetTop, player.offsetLeft))
        }
        else {
            blackPosition.push(new Pawn(player.offsetTop, player.offsetLeft))
        }
        return true;
    } catch (error) {
        console.log(error);
    }
}

function meetPlyer(playerTop: number, playerLeft: number, secondPlayer: Pawn): boolean {
    try {
        if (!playerTop || !playerLeft || !secondPlayer) throw new Error("Missing Player");
        if (playerTop === secondPlayer.gety() && playerLeft === secondPlayer.getX())
            return true;
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
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

const Players: NodeListOf<HTMLDivElement> = document.querySelectorAll(".img");
let activePawn: HTMLDivElement | null = null;
Players.forEach(player => {
    player.addEventListener("click", () => {
        activePawn = player;
        debugger;
    })
    document.addEventListener("keydown", (ev: any) => {
        try {
            if (activePawn === player) {
                let step = 80;
                let nextLocatiomn;
                let eat = false, meet = false;
                console.log(ev.key)
                switch (ev.key) {
                    case 'ArrowUp':
                        nextLocatiomn = (player.offsetTop - step);
                        if (nextLocatiomn < 0) throw new Error("Out of Bord");
                        // debugger;
                        (player.classList[1] === "white" ? whitePosition : blackPosition).forEach(pawn => {
                            meet = meetPlyer(nextLocatiomn, player.offsetLeft, pawn);
                            eat = canEat(nextLocatiomn+step*2, player.offsetLeft, pawn);
                            if (meet) {
                                if (eat)
                                    nextLocatiomn - step * 2;
                            }
                        })                        
                        player.style.top = `${nextLocatiomn}px`;
                        break;
                    case 'ArrowDown':
                        nextLocatiomn = (player.offsetTop + step);
                        if (nextLocatiomn > Limit) throw new Error("Out of Bord");
                        (player.classList[1] === "white" ? whitePosition : blackPosition).forEach(pawn => {
                            meet = meetPlyer(nextLocatiomn, player.offsetLeft, pawn);
                            eat = canEat(nextLocatiomn + 2*step, player.offsetLeft, pawn);
                            if (meet) {
                                if (eat)
                                    nextLocatiomn + step * 2;
                            }
                        })
                        player.style.top = `${nextLocatiomn}px`;
                        // player.style.top = `${player.offsetTop + step}px`;
                        break;
                    case 'ArrowLeft':
                        nextLocatiomn = (player.offsetLeft - step);
                        if (nextLocatiomn < 0) throw new Error("Out of Bord");
                        // player.style.left = `${player.offsetLeft - step}px`;
                        (player.classList[1] === "white" ? whitePosition : blackPosition).forEach(pawn => {
                            meet = meetPlyer(player.offsetTop, nextLocatiomn, pawn);
                            eat = canEat(player.offsetTop, nextLocatiomn + step * 2, pawn);
                            if (meet) {
                                if (eat)
                                    nextLocatiomn - step * 2;
                            }
                        })
                        player.style.left = `${nextLocatiomn}px`;
                        break;
                    case 'ArrowRight':
                        nextLocatiomn = (player.offsetLeft + step);
                        if (nextLocatiomn > Limit) throw new Error("Out of Bord");
                        (player.classList[1] === "white" ? whitePosition : blackPosition).forEach(pawn => {
                            meet = meetPlyer(player.offsetTop, player.offsetLeft, pawn);
                            eat = canEat(player.offsetTop, nextLocatiomn + step * 2, pawn);
                            debugger;
                            if (meet) {
                                if (eat)
                                    nextLocatiomn + step * 2;
                            }
                        })
                        player.style.left = `${nextLocatiomn}px`;
                        // plyer.style.left = `${plyer.offsetLeft + step}px`;
                        break;
                }
            }
        } catch (error) {
            console.error(error)
        }

    });

});




