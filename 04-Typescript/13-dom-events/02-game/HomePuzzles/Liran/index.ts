function reloadPage()
{
    location.reload();
}
const restart = document.querySelector("#restart");
restart?.addEventListener("click",()=>{
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
        // const boxId = document.querySelector(`#box${Math.floor(Math.random()*64)}`);
        const wrapper = document.querySelector("#wrapper");
        if (!wrapper) throw new Error("Error in wrapper")
        for (let i = 0; i < numOfWP; i++) {
            wrapper.innerHTML += `<div class="img white"></div>`
        }
    } catch (error) {
        console.error(error);
    }
}

function renderBlackPlayer() {
    try {
        console.log(`renderBlackPlayer`)
        // const boxId = document.querySelector(`#box${Math.floor(Math.random()*64)}`);
        const wrapper = document.querySelector("#wrapper");
        if (!wrapper) throw new Error("Error in wrapper")
        for (let i = 0; i < numOfWP; i++) {
            wrapper.innerHTML += `<div class="img black"></div>`
        }
    } catch (error) {
        console.error(error);
    }
}

// function getPositions()

class Pawn{
    x:number;
    y:number;
};

const numOfWP = 12;
const Limit = 640;
renderBord();
renderWhitePlayer();
renderBlackPlayer();

const topIndex = [0,0,0,0,1,1,1,1,2,2,2,2];
const leftIndex = [0,2,4,6,1,3,5,7,0,2,4,6];
const blackPosition:Pawn[] = new Array(numOfWP); 
const whitePosition:Pawn[] = new Array(numOfWP); 

let index = 0;
const blackPlayers: NodeListOf<HTMLDivElement> = document.querySelectorAll(".black");
blackPlayers.forEach(player => {
    player.style.top = `${(topIndex[index] * 80) + 10}px`
    player.style.left = `${(leftIndex[index++] * 80) + 10}px`
})

index =0;
const whitePlayers: NodeListOf<HTMLDivElement> = document.querySelectorAll(".white");
whitePlayers.forEach(player => {
    player.style.top = `${((topIndex[index] + 5)* 80) + 10}px`
    player.style.left = `${((7-leftIndex[index++]) * 80) + 10}px`
})

const whitePawns: NodeListOf<HTMLDivElement> = document.querySelectorAll(".img");
let activePawn: HTMLDivElement | null = null;
whitePawns.forEach(whitePawn => {
    whitePawn.addEventListener("click", () => {
        activePawn = whitePawn;
    })
    document.addEventListener("keydown", (ev: any) => {
        try {
            if (activePawn === whitePawn) {
                console.log(ev.key)
                switch (ev.key) {
                    case 'ArrowUp':
                        if((whitePawn.offsetTop - 80)<0)throw new Error("Out of Bord")
                        whitePawn.style.top = `${whitePawn.offsetTop - 80}px`;
                        break;
                    case 'ArrowDown':
                        if((whitePawn.offsetTop + 80)>Limit)throw new Error("Out of Bord")
                        whitePawn.style.top = `${whitePawn.offsetTop + 80}px`;
                        break;
                    case 'ArrowLeft':
                        if((whitePawn.offsetLeft - 80)<0)throw new Error("Out of Bord")
                        whitePawn.style.left = `${whitePawn.offsetLeft - 80}px`;
                        break;
                    case 'ArrowRight':
                        if((whitePawn.offsetLeft + 80)>Limit)throw new Error("Out of Bord")
                        whitePawn.style.left = `${whitePawn.offsetLeft + 80}px`;
                        break;
                }
            }
        } catch (error) {
            console.error(error)
        }

    });

});




