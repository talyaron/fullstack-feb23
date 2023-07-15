interface Card {
    name: string,
    image: string,
    value: number
}

const cardsDeck: Card[] = [
    { name: "hA", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/sa.png", value: 1 },
    { name: "h2", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s2.png", value: 2 },
    { name: "h3", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s3.png", value: 3 },
    { name: "h4", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s4.png", value: 4 },
    { name: "h5", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s5.png", value: 5 },
    { name: "h6", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s6.png", value: 6 },
    { name: "h7", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s7.png", value: 7 },
    { name: "h8", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s8.png", value: 8 },
    { name: "h9", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s9.png", value: 9 },
    { name: "h10", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s10.png", value: 10 },
    { name: "hJ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/sj.png", value: 10 },
    { name: "hQ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/sq.png", value: 10 },
    { name: "hK", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/sk.png", value: 10 },
    { name: "dA", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/la.png", value: 1 },
    { name: "d2", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l2.png", value: 2 },
    { name: "d3", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l3.png", value: 3 },
    { name: "d4", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l4.png", value: 4 },
    { name: "d5", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l5.png", value: 5 },
    { name: "d6", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l6.png", value: 6 },
    { name: "d7", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l7.png", value: 7 },
    { name: "d8", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l8.png", value: 8 },
    { name: "d9", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l9.png", value: 9 },
    { name: "d10", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l10.png", value: 10 },
    { name: "dJ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/lj.png", value: 10 },
    { name: "dQ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/lq.png", value: 10 },
    { name: "dK", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/lk.png", value: 10 },
    { name: "cA", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/ka.png", value: 1 },
    { name: "c2", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k2.png", value: 2 },
    { name: "c3", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k3.png", value: 3 },
    { name: "c4", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k4.png", value: 4 },
    { name: "c5", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k5.png", value: 5 },
    { name: "c6", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k6.png", value: 6 },
    { name: "c7", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k7.png", value: 7 },
    { name: "c8", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k8.png", value: 8 },
    { name: "c9", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k9.png", value: 9 },
    { name: "c10", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k10.png", value: 10 },
    { name: "cJ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/kj.png", value: 10 },
    { name: "cQ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/kq.png", value: 10 },
    { name: "cK", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/kk.png", value: 10 },
    { name: "sA", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/pa.png", value: 1 },
    { name: "s2", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p2.png", value: 2 },
    { name: "s3", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p3.png", value: 3 },
    { name: "s4", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p4.png", value: 4 },
    { name: "s5", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p5.png", value: 5 },
    { name: "s6", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p6.png", value: 6 },
    { name: "s7", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p7.png", value: 7 },
    { name: "s8", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p8.png", value: 8 },
    { name: "s9", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p9.png", value: 9 },
    { name: "s10", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p10.png", value: 10 },
    { name: "sJ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/pj.png", value: 10 },
    { name: "sQ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/pq.png", value: 10 },
    { name: "sK", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/pk.png", value: 10 }
]


// create cards deck for game : numOfCardsDeck * single deck 
const numOfCardsDeck = 6;


class Player {
    id: string;
    cards: Card[] = [];
    handValue: number = 0;
    chip: number;
    sit: number;
    currentBet: number = 0;
    constructor(public name: string,
        public cash: number,
        id?: string | null,
        cards?: Card[] | [],
        sit?: number | null,
        currentBet?: number | null

    ) {
        if (!id || id === undefined)
            this.id = `id-${new Date().getTime()}-${Math.random()}`;
        else
            this.id = id;
        if (sit)
            this.sit = sit;
        if (cards !== undefined)
            this.cards = { ...cards }
        this.setChip();

    }

    setChip() {
        try {
            this.chip = Math.floor(this.cash / 10);
        } catch (error) {
            console.error(error)
        }
    }

    credit(credit: number) {
        try {
            if (isNaN(credit)) throw new Error(`${credit} is not a number`)
            this.cash += credit
        } catch (error) {
            console.error(error);
        }
    }

    emptyHand() {
        try {
            this.cards.forEach(() => this.cards.pop());
            this.handValue = 0;
            this.currentBet = 0;
        } catch (error) {
            console.error(error);
        }
    }

    computeCurrentHand() {
        try {
            this.cards.forEach(card => this.handValue += card.value)
        } catch (error) {
            console.error(error);
        }
    }

    setCurrentBet(op: string) {
        try {
            switch (op) {
                case "Double" || "Split": this.currentBet *= 2; break;
                default: throw new Error("Not operation on bet")
            }
        } catch (error) {
            console.error(error)
        }
    }

    addCard(card: Card) {
        try {
            if (!card) throw new Error("Not a Card");
            this.cards.push({ ...card })
            this.computeCurrentHand();
        } catch (error) {
            console.error(error);
        }
    }
}

const gameDeck: Card[] | undefined = getCardsFromStorage();

const activePlayers: Player[] | undefined = getPlayterFromStorage();
if (activePlayers)
    activePlayers.push(new Player("dealer", 0, "id-0", [],));
renderBord(document.querySelector("#bord"));
renderPlayersChairs(document.querySelector("#bord"));
renderPlayersNames();
console.dir(activePlayers);
function getCardsFromStorage(): Card[] | undefined {
    try {
        const storageString = localStorage.getItem("gameDeck");
        if (!storageString) throw new Error("No such name in local storage");
        //convert string to array of objects
        const storageArray = JSON.parse(storageString);
        //convert array of objects to array of Card | Player
        const cards: Card[] = storageArray.map((card: Card) => {
            return { name: card.name, image: card.image, value: card.value };
        });
        return cards;

    } catch (error) {
        console.error(error)
        return [];
    }
}

function getPlayterFromStorage(): Player[] | undefined {
    try {
        
        const storageString = localStorage.getItem("players");
        if (!storageString) throw new Error("No such name in local storage");
        //convert string to array of objects
        const storageArray = JSON.parse(storageString);
        //convert array of objects to array of Card | Player
        const plyers: Player[] = storageArray.map((player: Player) => {
            return new Player(
                player.name,
                player.cash,
                player.id,
                player.cards,
                player.sit,
                player.currentBet
            );
        });
        return plyers;

    } catch (error) {
        console.error(error)
        return [];
    }

}


function createGameDeck(gameDeck: Card[]) {
    try {
        for (let i = 0; i < numOfCardsDeck; i++) {
            cardsDeck.forEach(card => {
                const singleCard = { ...card }
                gameDeck.push(singleCard);
            })
        }
    } catch (error) {
        console.error(error)
    }
}

function shuffleGameDeck(gameDeck: Card[]) {
    try {
        if (!gameDeck) throw new Error("Empty game deck");
        const coppiedCards = { ...gameDeck };
        const shuffeldDeck: Card[] = [];
        for (let i = 0; i < gameDeck.length; i++) {
            const randomIndx = Math.floor(Math.random() * coppiedCards.length);
            const card = { ...coppiedCards[randomIndx] };
            shuffeldDeck.push(card)
            coppiedCards.splice(randomIndx, 1);
        }
        shuffeldDeck.forEach(card => {
            gameDeck.splice(gameDeck.length - 1, 1)
            gameDeck.push({ ...card })
        })
        localStorage.setItem("gameDeck", JSON.stringify(gameDeck));
    } catch (error) {
        console.error(error)
    }
}

function addPlyer() {
    try {

        let fullCapacity = true;
        
        activePlayers?.forEach(p => {
            if (!p.sit && p.id !== "id-0") fullCapacity = false;
        })
        if (fullCapacity) alert("Table is full");
        else {
            const name = prompt("Please enter your name: ");
            if (name === "" || !name) throw new Error("No Name");
            console.dir(activePlayers);
            const nameExsit = activePlayers?.findIndex(player => player.name === name)
            
            if (nameExsit !== -1) alert("Name alreday exsist, try again");
            else {
                const fisrtCash = Number(prompt("How much money you want to put in?: "));
                if (isNaN(fisrtCash) || fisrtCash === undefined || fisrtCash < 10) throw new Error("No Money")
                const newPlayer = new Player(name, fisrtCash, null, [])
                let openSit = false;
                let sit;
                while (!openSit) {
                    sit = Math.floor(Math.random() * 7 + 1);
                    activePlayers?.forEach(player => {
                        if (player.sit == sit)
                            openSit = true;
                    })
                    if (!openSit) openSit = true;
                    else openSit = false;
                }
                newPlayer.sit = sit;
                activePlayers?.push(newPlayer)
                renderPlayersNames();
                localStorage.setItem("players", JSON.stringify(activePlayers));
                if (activePlayers?.length === 1) {
                    const inputStart: HTMLDivElement | null = document.querySelector("#start")
                    if (!inputStart) throw new Error("Couldn't cacth start button")
                    // inputStart.style.disable = "true";
                }
            }
        }
    } catch (error) {
        console.error(error)
    }

}

function dealCards() {
    try {
        if (!activePlayers) throw new Error("No players, can't deal cards");
        const playerDidntBet = activePlayers.find(player => player.currentBet === 0);
        if (playerDidntBet !== undefined) alert("Not all players placed their bet");
    } catch (error) {
        console.error(error)
    }
}

function hundleSettingEvent(ev: any) {
    try {
        
        console.dir(ev);
        const buttonName = ev.target.name;
        if (!buttonName) throw new Error("No name for the button");
        switch (buttonName) {
            case "Add": addPlyer(); break;
            case "deal": dealCards(); break;
        }
    } catch (error) {
        console.error(error);
    }
}

function hundleLeave(ev: any, sitToDelete:number) {
    try {
        
        console.dir(ev);
        if (!sitToDelete) throw new Error("No ID");
        if (activePlayers === undefined) throw new Error("No active players");
        const playerTodelete = activePlayers.find(p => p.sit === sitToDelete);
        const clearForm = document.querySelector(`#sit-${sitToDelete}`)
        if (!clearForm) throw new Error("Wrong sit");
        clearForm.innerHTML = ``;
        const clearName = document.querySelector(`#name-${sitToDelete}`)
        if (!clearName) throw new Error("Wrong sit");
        clearName.innerHTML = ``;
        activePlayers.splice(activePlayers.findIndex(p => p.sit === sitToDelete), 1);
        localStorage.setItem("players", JSON.stringify(activePlayers));
        
    } catch (error) {
        console.error(error);
    }
}

function handleSetBet(ev: any) {
    try {
        debugger;
        const playerSit = ev.target.id;
        if(activePlayers === undefined)throw new Error("No players")
        const player = activePlayers?.findIndex(p => `sit-${p.sit}` === playerSit);
        if (player === undefined) throw new Error("Player not exist");
        const playerBet = ev.target.chipsToBet.valueAsNumber;
        activePlayers[player].currentBet = playerBet;
        activePlayers[player].chip -= playerBet;
        localStorage.setItem("players", JSON.stringify(activePlayers));
        renderPlayersNames();

    } catch (error) {
        console.error(error)
    }
}

function renderBord(htmlElement: HTMLElement | null) {
    try {

        if (!htmlElement) throw new Error("No element");
        const html = `<img src="./dist/deck_of_cards.png" alt="">
        <form onclick="hundleSettingEvent(event)">
            <input type="button" name="Add" value="ADD Player">
            <input type="button" name="deal" id="start" value="Deal Cards">
            <input type="button" name="table" value="View Table">
            <input type="button" name="remove" value="Remove Player">
        </form> `;

        htmlElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}




function renderPlayersChairs(htmlElement: HTMLElement | null) {
    try {

        if (!htmlElement) throw new Error("No element");
        const html = `  <div class="players">
        <div class="players__player players__player--dealer">
            <div class="cards" id="cards-dealer"></div>
            <div class="name">Dealer</div>
        </div>    
        <div class="players__player players__player--1">
            <div class="cards" id="cards-1"></div>
            <form onsubmit="handleSetBet(event)" id="sit-1">
            </form>
            <div class="name" id="name-1"></div>
        </div>    
        <div class="players__player players__player--2">
            <div class="cards" id="cards-2"></div>
            <form onsubmit="handleSetBet(event)" id="sit-2">
        </form>
            <div class="name" id="name-2"></div>
        </div>    
        <div class="players__player players__player--3">
            <div class="cards" id="cards-3"></div>
            <form onsubmit="handleSetBet(event)" id="sit-3">
        </form>
            <div class="name" id="name-3"></div>
        </div>    
        <div class="players__player players__player--4">
            <div class="cards" id="cards-4"></div>
            <form onsubmit="handleSetBet(event)" id="sit-4">
        </form>
            <div class="name" id="name-4"></div>
        </div>    
        <div class="players__player players__player--5">
            <div class="cards" id="cards-5"></div>
            <form onsubmit="handleSetBet(event)" id="sit-5">
        </form>
            <div class="name" id="name-5"></div>
        </div>    
        <div class="players__player players__player--6">
            <div class="cards" id="cards-6"></div>
            <form onsubmit="handleSetBet(event)" id="sit-6">
        </form>
            <div class="name" id="name-6"></div>
        </div>    
        <div class="players__player players__player--7">
            <div class="cards" id="cards-7"></div>
            <form onsubmit="handleSetBet(event)" id="sit-7">
        </form>
            <div class="name" id="name-7"></div>
        </div>    
        </div> `;

        htmlElement.innerHTML += html;
    } catch (error) {
        console.error(error);
    }
}

function renderPlayersNames() {
    try {
        
        if (activePlayers === undefined) throw new Error("No Players")
        activePlayers.forEach(player => {
            if (player.id !== "id-0") {
                const playerName: HTMLElement | null = document.querySelector(`#name-${player.sit}`)
                if (!playerName) throw new Error("name ID is wrong")
                playerName.innerHTML = `<p>${player.name} - chips:${player.chip * 10}$</p>`
                const playerBet: HTMLElement | null = document.querySelector(`#sit-${player.sit}`)
                if (!playerBet) throw new Error("name Id is wrong");
                playerBet.innerHTML = `<input type="number" name="chipsToBet" min="10" max="${Math.min(player.chip*10,400)}" step="10"  required>
                <input type="submit" value="Bet">
                <input type="button" value="Leave" onClick="hundleLeave(event, ${player.sit})">`
            }
        })
    } catch (error) {
        console.error(error);
    }
}



