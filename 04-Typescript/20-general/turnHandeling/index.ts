class Player {
    id: string = `${Math.random()}`
    constructor(public name: string, public score: number = 0) { }
}

const turns = {
    players: [
        new Player('tamar'),
        new Player('itah'),
        new Player('shir'),
        new Player('shani'),
        new Player('David'),
    ],
    turn: 0,
    changeTurn(): void {

        this.turn++;
        if (this.turn === this.players.length) {
            turns.turn = 0;
            //create evnet of end of round
        }
    },
    randomzePlayers(): void {
        this.players.sort(() => Math.random() - 0.5)
    }
}



function handleChangeTurn() {
    turns.changeTurn()
    // render()
    console.log(turns.turn)
}
