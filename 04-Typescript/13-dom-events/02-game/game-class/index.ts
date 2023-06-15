//get root

// const root:HTMLElement|null = document.querySelector("#root");

//ask user for details and create new player (with class)

class Player {
    id: string;
    constructor(public title: string, public imgUrl: string) {
        this.id = `id-${Math.random() * 1000}`;
    }
    renderPlyer(root: HTMLElement | null) {
        try {
            if (!root) throw new Error("missing root element")
            const html: string = `<div class='card' onclick="handleHideCard('${this.id}')" id="${this.id}"><img src="${this.imgUrl}"><h4>${this.title}</h4></div>`;
            root.innerHTML += html;
        } catch (error) {
            console.error(error)
        }
    }
    hideCard() {
        try {
            console.log(`#${this.id}`)
            const card = document.querySelector(`#${this.id}`);
            
            console.log("Hide card!!!")
        } catch (error) {
            console.error(error)
        }
    }
}

function handleHideCard(cardId) {
    try {
        const player = players.find(player => player.id === cardId)
        player?.hideCard();
    } catch (error) {
        console.error(error)
    }
}

//get details from user
function getPlayerDetails(): Player | undefined {
    try {
        const title = prompt("What is the name of the player?");
        const imgUrl = prompt("add image url")
        if (!title || !imgUrl) throw new Error("Missing details")

        const player = new Player(title, imgUrl);

        return player
    } catch (error) {
        console.error(error)
        return undefined
    }
}

const players: Player[] = [];
function addPlayer() {
    const root: HTMLElement | null = document.querySelector("#root");

    const player = getPlayerDetails();
    if (player) {
        player?.renderPlyer(root)


        players.push(player)
    }

}