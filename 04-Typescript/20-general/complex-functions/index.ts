class Player {
    constructor(
        public userName: string,
        public imgSrc: string = "",
        public chips: number = 100000,
        public isActive: boolean = false,
        public isTurn: boolean = false,
        public pCards: Card[] = get2RandomCards(),
        public allCard: Card[] = pCards,
    ) {
        this.pCards = this.pCards.map((c) => new Card(c.cardNumber, c.cardSign));
    }

    setActive() {
        this.isActive = !this.isActive;
    }

    renderMyPanel() {
        try {
            this.pCards!.forEach((c) =>
                c.renderCard(document.querySelector(".myPanel__cards") as HTMLElement),
            );
            document.querySelector(".myPanel__chips")!.innerHTML =
                this.chips.toString();
        } catch (error) {
            console.error(error);
        }
    }
    addCardToPlayer(card: Card) {
        this.allCard.push(card);
    }

    doingTurn() {
        console.log(`${this.userName} is doing somethig......`);
    }
}

function turnsOrder(players: Player[]) {
    const stageElement = document.querySelector(".stage") as HTMLDivElement;
    let currentPlayerIndex = 0; // מספר השחקן הנוכחי בתור

    currentPlayerIndex = performTurn(stageElement, currentPlayerIndex, players); // הפעלת התור הראשון
    // game over
}


const players = [];
turnsOrder(players)

function performTurn(stage: HTMLDivElement, currentPlayerIndex: number, players: Player[]) {

    const currentPlayer = players[currentPlayerIndex];
    
    setActivePlayer(players, currentPlayer);

    currentPlayerIndex++;

    addCardToStage();

    setTimeout(performTurn, 500); // השהייה של 4 שניות לפני תור השחקן הבא

    return currentPlayerIndex;

    function addCardToStage() {
        if (currentPlayerIndex >= players.length && stage.children.length < 6) {
            currentPlayerIndex = 0;
            if (stage.children.length < 6) {
                addCardToStage();
            }
        }
    }
}

function setActivePlayer(players, currentPlayer) {
    players.map((p) => (p.isActive = false));

    currentPlayer.setActive();
    currentPlayer.doingTurn();
}