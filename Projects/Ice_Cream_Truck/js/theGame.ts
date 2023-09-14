class Player {
    id: string
    constructor(public name: string, public points: number) {
    }
}

class Costumer {
    id: string
    htmlElement: HTMLElement | null
    constructor(public side: string, public img: string) {
        this.id = `cost${Math.floor(Math.random() * 1000)}`
    }
    addCostumerHtmlElement() {
        try {
            this.htmlElement = document.querySelector(`#${this.id}`) as HTMLDivElement
            if (!this.htmlElement) throw new Error("can not find html element")
        } catch (error) {
            console.error(error)

        }
    }
}

const costumers: Costumer[] = [new Costumer('left', '../ילד1.gif'), new Costumer('right', '../ילד2.gif'), new Costumer('right', '../ילד3.gif'), new Costumer('left', '../ילד4.gif'), new Costumer('left', '../ילד5.gif'), new Costumer('left', '../ילד6.gif')];

class IceCream {
    constructor(public name: string, public color: string) {
    }
}

const iceCreams: IceCream[] = [new IceCream("chocolate", "brown"), new IceCream("banana", "yellow"), new IceCream("strawberry", "red")]

let lives: string[] = ["live", "live", "live", "live", "live"];
const livesAsString = JSON.stringify(lives)
        localStorage.setItem("lives", livesAsString)


let selectedBalls: string = ``
let allBalls: string = ``

const wrongSounds: string[] = ["../sounds/angry.mp3", "../sounds/not-thanks.mp3", "../sounds/growly.mp3"]
const successSounds: string[] = ["../sounds/lolipop-lick.mp3", "../sounds/thank-you.mp3", "../sounds/yummy.mp3"]

function KeyboardControl() {
    try {
        let i = 0
        const iceCream = document.querySelector(`#${iceCreams[i].name}`) as HTMLDivElement
        const nextIceCream = document.querySelector(`#${iceCreams[i + 1].name}`) as HTMLDivElement
        iceCream.style.boxShadow = "0px 0px 4px 5px #ffffb9"
        nextIceCream.style.boxShadow = "none"
        const spoon = document.querySelector("#spoon") as HTMLDivElement
        let countBall = 0

        document.addEventListener('keyup', (event: KeyboardEvent) => {

            switch (event.key) {

                case 'ArrowLeft':
                    if (i !== iceCreams.length - 1) {
                        spoon.style.left = `${spoon.offsetLeft - 435}px`
                    }

                    if (i === 0) {
                        nextIceCream.style.boxShadow = "0px 0px 4px 5px #ffffb9"
                        iceCream.style.boxShadow = "none"
                        i++
                    } else {
                        if (i === iceCreams.length - 1) {
                            const iceCream = document.querySelector(`#${iceCreams[i].name}`) as HTMLDivElement
                            iceCream.style.boxShadow = "0px 0px 4px 5px #ffffb9"
                            i = i
                        } else {
                            const nextIceCream = document.querySelector(`#${iceCreams[i + 1].name}`) as HTMLDivElement
                            const iceCream = document.querySelector(`#${iceCreams[i].name}`) as HTMLDivElement
                            nextIceCream.style.boxShadow = "0px 0px 4px 5px #ffffb9"
                            iceCream.style.boxShadow = "none"
                            i++
                        }
                    }

                    break;
                case 'ArrowRight':
                    if (i !== 0) {
                        spoon.style.left = `${spoon.offsetLeft - 225}px`
                    }

                    if (i === iceCreams.length) {
                        const previousIceCream = document.querySelector(`#${iceCreams[i - 1].name}`) as HTMLDivElement
                        previousIceCream.style.boxShadow = "0px 0px 4px 5px #ffffb9"
                    } else {
                        if (i === 0) {
                            iceCream.style.boxShadow = "0px 0px 4px 5px #ffffb9"
                            i = i
                        } else {
                            const previousIceCream = document.querySelector(`#${iceCreams[i - 1].name}`) as HTMLDivElement
                            const iceCream = document.querySelector(`#${iceCreams[i].name}`) as HTMLDivElement
                            previousIceCream.style.boxShadow = "0px 0px 4px 5px #ffffb9"
                            iceCream.style.boxShadow = "none"
                            i--
                        }
                    }
                    break;
                case 'ArrowUp':
                    if (countBall < 3) {
                        countBall++
                        addIceCreamBall(iceCreams[i].color)
                        selectedBalls += `${iceCreams[i].color} `
                    }
                    break;
                case 'Enter':
                    if (`${selectedBalls}` === `${allBalls}`) {
                        console.log(`succes`);
                        success(10, numOfSuccesses())
                        countBall = 0
                    } else {
                        wrong()
                        countBall = 0

                    }
                    selectedBalls = ``
                    removIceCReamBalls()
                    break;
                case 'ArrowDown':
                    removIceCReamBalls()
                    selectedBalls = ''
                    countBall = 0
                    break;
            }
        })

    } catch (error) {
        console.error(error)

    }
}

let html = ``
function addIceCreamBall(color: string) {
    try {
        const holderCone = document.querySelector("#ballsInCone") as HTMLDivElement
        html += `<div id = "ballInCone" style="background-color: ${color};"</div>`
        holderCone.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}

function removIceCReamBalls() {
    try {
        const holderCone = document.querySelector("#ballsInCone") as HTMLDivElement
        html = ``
        holderCone.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}

function getPlayer(): Player | undefined {
    try {
        const player = localStorage.getItem("player")
        if (!player) throw new Error("can not find player")
        const playerToObject = JSON.parse(player)
        const name = playerToObject.name
        const currentPlayer = new Player(name, 0)
        const root = document.querySelector("#mainName")
        if (!root) throw new Error("can not found root element")
        const html = `<h1> ${currentPlayer.name}'s ICE CREAM VAN </h1>`
        root.innerHTML = html
        return currentPlayer
    } catch (error) {
        console.error(error)
    }
}
const costumersEntraces = setInterval(renderCostumers, 6000)

function newGame() {
    try {
        if (!player || !coverScore) throw new Error("can not find elements")
        player.points = 0
        const score = JSON.stringify(player.points)
        localStorage.setItem("score", score)

        const heightOfCover = 170
        const heightOfCoverAsString = JSON.stringify(heightOfCover)
        localStorage.setItem("heightOfCover", heightOfCoverAsString)
        coverScore.style.height = `${heightOfCover}px`

        numberOfSuccesses = 0
        const numOfSuccessesesAsString = JSON.stringify(numberOfSuccesses)
        localStorage.setItem("numOfSuccess", numOfSuccessesesAsString)

        lives = ["live", "live", "live", "live", "live"]
        const livesAsString = JSON.stringify(lives)
        localStorage.setItem("lives", livesAsString)
        renderGamePage(document.querySelector("#truck"))
        if (!main) throw new Error("can not find main elenent")
const html=''
        main.innerHTML = html
        const costumersEntraces = setInterval(renderCostumers, 6000)

    } catch (error) {
        console.error(error)
    }
}

function renderGamePage(rootElement: HTMLElement | null) {
    try {


        if (!player) throw new Error("can not find player")
        const scoreAsString = localStorage.getItem("score")
        player.points = Number(scoreAsString)
        playerPoints.innerHTML = `${player.points}`

        const heightOfCoverAsString = localStorage.getItem("heightOfCover")
        const heightOfCover = Number(heightOfCoverAsString)
        if (!coverScore) throw new Error("can not found cover element")
        coverScore.style.height = `${heightOfCover}px`

        const numOfSuccessesAsString = localStorage.getItem("numOfSuccess")
        numberOfSuccesses = Number(numOfSuccessesAsString)

        const livesAsString = localStorage.getItem("lives")

        if (!livesAsString) throw new Error("can not find lives")
        const currentLives: string[] = JSON.parse(livesAsString)
        lives.forEach((li, i) => {
            lives[i] = currentLives[i]
        })

        const html = `<div class="crop">
            <img src="../ice cream truck.gif" alt="">
            </div>`
        if (!rootElement) throw new Error("can not found root element")
        rootElement.innerHTML = html
        renderLives(document.querySelector("#lives"))
        getPlayer()
        KeyboardControl()






    } catch (error) {
        console.error(error)
    }
}
let i = 0
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
let startTimer = 0
let costumerArrived = 0
let costumerGetIceCream = 0
function costumerIn(costumer: Costumer) {
    try {
        const speed = Math.floor(Math.random() * 50)
        let location = Math.floor(Math.random() * 37 + 25)
        const bubbleElement: HTMLElement | null = document.querySelector(`#bubble${costumer.id}`)
        let startPosition = 0
        const entrace = setInterval(getIn, speed);
        function getIn() {
            try {
                if (!bubbleElement) throw new Error("can not find bubble element")
                if (!costumer.htmlElement) throw new Error("can not find costumer element")
                if (startPosition === location) {
                    clearInterval(entrace);
                    costumerGetIceCream = 0
                    bubbleElement.style.display = 'block'
                    startTimer = new Date().getTime()

                    setTimeout(() => {
                        costumerArrived = 1
                        if (costumerGetIceCream !== 1) {
                            if (!player) throw new Error("can not find player")
                            player.points -= 500
                            const pointsToString = JSON.stringify(player.points)
                            localStorage.setItem("score", pointsToString)

                            if (player.points < 0) {
                                player.points = 0
                            }
                            playerPoints.innerHTML = `${player.points}`

                        }
                    }, 4000)
                    setTimeout(setInterval, 4000, getOut, speed)
                } else {
                    startPosition++;
                    if (costumer.side === 'right') {
                        costumer.htmlElement.style.right = startPosition + '%';
                    } else {
                        costumer.htmlElement.style.left = startPosition + '%';
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }
        function getOut() {
            try {
                if (!bubbleElement) throw new Error("can not find bubble element")
                if (!costumer.htmlElement) throw new Error("can not find costumer element")
                if (location === 100) {
                } else {
                    bubbleElement.style.display = 'none'
                    location++;
                    if (costumer.side === 'right') {
                        costumer.htmlElement.style.right = location + '%';
                    } else {
                        costumer.htmlElement.style.left = location + '%';
                    }
                }

            } catch (error) {
                console.error(error)
            }
        }
    } catch (error) {
        console.error(error)
    }
}

function renderCostumers() {
    try {
        const costumersElement: HTMLElement | null = document.querySelector("#costumers")
        if (!costumersElement) throw new Error("can not find costumers element")
        const ball1 = iceCreams[Math.floor(Math.random() * iceCreams.length)].color
        const ball2 = iceCreams[Math.floor(Math.random() * iceCreams.length)].color
        const ball3 = iceCreams[Math.floor(Math.random() * iceCreams.length)].color
        let html = ``
        costumers.forEach(costumer => {
            if (costumer.side === 'left') {
                html += `<div class="costumer" id="${costumer.id}" style="left: -220px;">`
            } else {
                html += `<div class="costumer" id="${costumer.id}" style="right:-200px;">`

            }
            html += `<img src="${costumer.img}">
            <div class="bubble" id="bubble${costumer.id}">
            <img src="../Speech bubble.gif" alt="">
            <div id="iceCreamBalls">
            <div class="iceCreamBall" style="background-color:${ball1} ;">
            <div class="iceCreamBall" style="background-color:${ball2} ;">
            <div class="iceCreamBall" style="background-color:${ball3} ;"></div>
            </div>
            </div>
            </div>
            </div>
            </div>`
            costumersElement.innerHTML = html

        })
        costumers.forEach((costumer) => {
            costumer.addCostumerHtmlElement()
        })
        allBalls = `${ball1} ${ball2} ${ball3} `

        costumerIn(costumers[i])
        i++
        if (i === costumers.length) {
            i = 0
        }
    } catch (error) {
        console.error(error)
    }

}

function wrong() {
    try {
        costumerGetIceCream = 1
        const wrongSound = new Audio(`${wrongSounds[Math.floor(Math.random() * 3)]}`)
        wrongSound.play()
        const liveToEarase = lives.findIndex(live => live === "live")
        lives[liveToEarase] = ""
        const livesAsString = JSON.stringify(lives)
        localStorage.setItem("lives", livesAsString)
        console.log(lives);
        console.log(livesAsString);


        renderLives(document.querySelector("#lives"))
        if (liveToEarase === 4) {
            gameOver()
        }
    } catch (error) {
        console.error(error)

    }
}

function finishLevel(finish: boolean) {
    try {
        if (!player) throw new Error("can not find player")
        if (finish) {
            const wishes: string[] = ['GOOD JOB', 'WELL DONE', 'EXCELLENT', 'GREAT']
            const html = `<h1> ${wishes[Math.floor(Math.random() * wishes.length)]} </h1>
            <h3> Your score <br>: ${player.points}</h3>`
            const rootElement = document.querySelector("#main")
            if (!rootElement) throw new Error("can not found root element")
            rootElement.innerHTML = html
            clearInterval(costumersEntraces)

            return true
        }
    } catch (error) {
        console.error(error)
    }
}


const player = getPlayer()
const playerPoints = document.querySelector("#points") as HTMLDivElement;
const coverScore: HTMLElement | null = document.querySelector("#cover")

function success(scoreOfSuccess: number, numOfSuccesses: number | undefined) {
    try {
        costumerGetIceCream = 1
        const successSound = new Audio(`${successSounds[Math.floor(Math.random() * 3)]}`)
        successSound.play()
        const endTimer = new Date().getTime()
        const timeOfSuccess = (endTimer - startTimer) / 1000
        if (!player) throw new Error("can not find player")
        player.points += Math.floor(5000 / timeOfSuccess)
        playerPoints.innerHTML = `${player.points}`
        if (!coverScore) throw new Error("can not found cover element")
        if (!numOfSuccesses) throw new Error("can not found number of successes")
        let heightOfCover = 170 - scoreOfSuccess * numOfSuccesses
        coverScore.style.height = `${heightOfCover}px`
        if (heightOfCover <= 25) {
            finishLevel(true)
        }
        const pointsToString = JSON.stringify(player.points)
        localStorage.setItem("score", pointsToString)

        const heightOfCoverToString = JSON.stringify(heightOfCover)
        localStorage.setItem("heightOfCover", heightOfCoverToString)

        const numOfSuccessesAsString = JSON.stringify(numOfSuccesses)
        localStorage.setItem("numOfSuccess", numOfSuccessesAsString)
    } catch (error) {
        console.error(error)
    }
}

const main = document.querySelector("#main")
function gameOver() {
    try {
        if (!player) throw new Error("can not find player")
        const html = `<h2> GAME OVER</h2>
        <h3> Your score: <br> ${player.points}</h3>
    <button onclick="newGame()">REPLAY</button>
        `
        if (!main) throw new Error("can not found root element")
        main.innerHTML = html
        clearInterval(costumersEntraces)
        return true

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
