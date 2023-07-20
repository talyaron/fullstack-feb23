class Player {
    id: string
    constructor(public name: string, public points: number) {
    }
}

class Costumer {
    id: string
    htmlElement: HTMLElement | null
    constructor(public side: string, public img: string) {
        this.id = `${Math.random()}`
    }
    addCostumerHtmlElement() {
        try {

            this.htmlElement = document.querySelector(`#${this.id}`)
            if (!this.htmlElement) throw new Error("can not find html element")
        } catch (error) {
            console.error(error)

        }
    }
}

const costumers: Costumer[] = [new Costumer('left', '../ילד1.gif'), new Costumer('right', '../ילד2.gif'), new Costumer('right', '../ילד3.gif')]

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
function renderCostumers(costumers: Costumer[]) {
    try {
        const costumersElement: HTMLElement | null = document.querySelector("#costumers")
        const costumersHtmlList:NodeListOf<Costumer>|null = document.querySelectorAll(".costumer")
        if (!costumersElement) throw new Error("can not find costumers element")
        let html = ``
        costumers.map(costumer => {
            html += `<div class="costumer" id="${costumer.id}">
            <img src="${costumer.img}">
            <div id="bubble">
                <img src="../Speech bubble.gif" alt="">
                <div id="iceCreamBalls">
                    <div class="iceCreamBall">
                        <div class="iceCreamBall">
                            <div class="iceCreamBall"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
            costumersElement.innerHTML = html

        })
        costumers.forEach(costumer => {
            costumer.addCostumerHtmlElement()
        })
        costumersHtmlList.forEach(costumer => {
            costumerIn(costumer, Math.floor(Math.random() * 50), Math.floor(Math.random() * 37 + 25))
        })
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
            gameOver(true)
        }
    } catch (error) {
        console.error(error)

    }
}
function finishLevel(finish: boolean) {
    try {
        if (finish) {

            const wishes: string[] = ['GOOD JOB', 'WELL DONE', 'EXCELLENT', 'GREAT']
            const html = `<h1> ${wishes[Math.floor(Math.random() * wishes.length)]} </h1>`
            const rootElement = document.querySelector("#main")
            if (!rootElement) throw new Error("can not found root element")
            rootElement.innerHTML = html
        }
    } catch (error) {
        console.error(error)
    }
}
function gameOver(loose: boolean) {
    try {
        if (loose) {

            const html = `<h1> GAME OVER</h1>`
            const rootElement = document.querySelector("#main")
            if (!rootElement) throw new Error("can not found root element")
            rootElement.innerHTML = html
        }
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
            finishLevel(true)
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


function costumerIn(costumer: Costumer, speed: number, location: number) {
    try {
        const bubbleElement: HTMLElement | null = document.querySelector("#bubble")
        let position = 0
        const entrace = setInterval(getIn, speed);
        function getIn() {
            if (!bubbleElement) throw new Error("can not find bubble element")
            if (!costumer.htmlElement) throw new Error("can not find costumer element")
            if (position === location) {
                clearInterval(entrace);
                bubbleElement.style.display = 'block'
            } else {
                position++;
                if (costumer.side === 'right') {
                    costumer.htmlElement.style.left = position + '%';
                } else {
                    costumer.htmlElement.style.right = position + '%';

                }
            }

        }
    } catch (error) {
        console.error(error)

    }
}

renderGamePage(document.querySelector("#truck"))
costumerIn(costumers[Math.floor(Math.random() * costumers.length)], Math.floor(Math.random() * 50), Math.floor(Math.random() * 37 + 25))
renderCostumers(costumers)
// Math.floor(Math.random() * costumers.length)



