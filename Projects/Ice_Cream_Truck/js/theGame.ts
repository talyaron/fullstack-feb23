class Player {
    id: string
    constructor(public name: string, public points: number) {
    }
}

function getPlayer() {
    try {
        const player = localStorage.getItem("player")
        if (!player) throw new Error("can not find player")
        const playerToObject = JSON.parse(player)
        const name = playerToObject.name
        const currentPlayer = new Player(name, 0)

    } catch (error) {
        console.error(error)
    }
}

getPlayer()



