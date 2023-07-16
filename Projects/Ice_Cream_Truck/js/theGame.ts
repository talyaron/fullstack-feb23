class Player {
    id: string
    constructor(public name: string, public points: number) {
    }
}

const lives: string[] = ["live", "live", "live", "live", "live"];

function getPlayer() {
    try {
        const player = localStorage.getItem("player")
        if (!player) throw new Error("can not find player")
        const playerToObject = JSON.parse(player)
        const name = playerToObject.name
        const currentPlayer = new Player(name, 0)
        const root = document.querySelector("#mainName")
        if (!root) throw new Error("can not found root element")
        const html = `<h1> ${currentPlayer.name}'s ICE CREAM TRUCK </h1>`
        root.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}
function renderGamePage(rootElement: HTMLElement | null) {
    try {
        const html = `<div class="crop">
            <img src="../ice cream truck.gif" alt="">
            </div>`
        if (!rootElement) throw new Error("can not found root element")
        rootElement.innerHTML = html
        renderLives(document.querySelector("#lives"))
        getPlayer()
    } catch (error) {
        console.error(error)
    }
}
function renderLives(rootElement: HTMLElement | null) {
    try {
        let html = ``
        lives.forEach(live => {
            if (live === "live") {
                html += `<img src="../גלידה חיים.gif" alt="">`
            }
        })
        if (!rootElement) throw new Error("can not found root element")
        rootElement.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}
function wrong() {
    try {
        const liveToEarase = lives.findIndex(live => live === "live")
        lives[liveToEarase] = ""
        renderLives(document.querySelector("#lives"))
        console.log(liveToEarase);
        if (liveToEarase === 4) {
            gameOver()
        }
    } catch (error) {
        console.error(error)

    }
}
function goodJob() {
    try {
        const html = `<h1> GOOD JOB </h1>`
        const rootElement = document.querySelector("#main")
        if (!rootElement) throw new Error("can not found root element")
        rootElement.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}
function gameOver() {
    try {
        const html = `<h1> GAME OVER</h1>`
        const rootElement = document.querySelector("#main")
        if (!rootElement) throw new Error("can not found root element")
        rootElement.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}
function success(scoreOfSuccess: number, numOfSuccesses: number | undefined) {
    try {
        const coverScore: HTMLElement | null = document.querySelector("#cover")
        if (!coverScore) throw new Error("can not found cover element")
        if (!numOfSuccesses) throw new Error("can not found number of successes")
        let height = 170 - scoreOfSuccess * numOfSuccesses
        coverScore.style.height = `${height}px`
        if (height <= 25) {
            goodJob()
        }
    } catch (error) {
        console.error(error)
    }
}

let numberOfSuccesses: number = 0
function numOfSuccesses(): number | undefined {
    try {
        numberOfSuccesses++
        return numberOfSuccesses
    } catch (error) {
        console.error(error)
    }
}




renderGamePage(document.querySelector("#truck"))






