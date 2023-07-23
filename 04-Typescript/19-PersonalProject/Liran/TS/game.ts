interface Star {
    name: string,
    imageUrl: string,
    value: number,
    functionDuration: number | null;
}

interface Sword {
    color: string,
    image: string
}

const swords: Sword[] = [
    { color: "blueSword", image: "../TS/dist/blueSword.png" },
    { color: "greenSword", image: "../TS/dist/greenSword.png" },
    { color: "redSword", image: "../TS/dist/redSword.png" },
    { color: "whiteSword", image: "../TS/dist/whiteSword.png" }
]



const stars: Star[] = [
    { name: "blueStar", imageUrl: "../TS/dist/blueStar.jpg", value: 2, functionDuration: null },
    { name: "goldStar", imageUrl: "../TS/dist/goldStar.jpg", value: 25, functionDuration: null },
    { name: "greenStar", imageUrl: "../TS/dist/greenStar.png", value: 2, functionDuration: null },
    { name: "lightStar", imageUrl: "../TS/dist/lightStar.jpg", value: 2, functionDuration: null },
    { name: "rainbowStar", imageUrl: "../TS/dist/rainbowStar.jpg", value: 10, functionDuration: null },
    { name: "superStar", imageUrl: "../TS/dist/superStar.jpg", value: 15, functionDuration: null },
    { name: "yellowStar", imageUrl: "../TS/dist/yellowStar.jpg", value: 2, functionDuration: null }

]
localStorage.setItem("stars", JSON.stringify(stars));


class Player {
    id: string;
    numOfGames: number = 0;
    record: number = 0;
    currentScore: number = 0;
    isActive: boolean;
    inGame: boolean = false;
    constructor(public firstName: string,
        public lastName: string,
        public swordColor: string,
        id?: string | null,
        numOfGames?: number | undefined,
        record?: number | undefined,
        currentScore?: number | undefined,
        isActive?: boolean | undefined
    ) {
        this.id = (id === undefined) ? `id-${new Date().getTime()}-${Math.random()}` : this.id;
        this.record = (record !== undefined) ? record : this.record;
        this.numOfGames = (numOfGames !== undefined) ? numOfGames : this.numOfGames;
        this.currentScore = (currentScore !== undefined) ? currentScore : this.currentScore;
        this.isActive = (isActive !== undefined) ? isActive : this.isActive;
    }

    updateScore(starValue: number) {
        try {
            this.currentScore += starValue;
        } catch (error) {
            console.error(error)
        }
    }

    setIsActive(set: boolean) {  // to stay log in when exiting page
        this.isActive = set;
    }

    setInGame(set: boolean) {
        this.inGame = set;
    }
}

const players: Player[] | undefined = getPlayerFromStorage("players");
const scoreTable: Player[] | undefined = getPlayerFromStorage("table");

if (players !== undefined && players.length > 0) {
    if (players[players?.length - 1].isActive) {
        renderPlayer(players[players.length - 1].swordColor);
        renderGamePanel(document.querySelector(".screen__UI"));
    }
    else
        renderLogPanel(document.querySelector(".screen__UI"));
}
else
    renderLogPanel(document.querySelector(".screen__UI"));

function getPlayerFromStorage(item: string): Player[] | undefined {
    try {
        
        const storageString = localStorage.getItem(`${item}`);
        if (!storageString) throw new Error("No such name in local storage");
        //convert string to array of objects
        const storageArray = JSON.parse(storageString);
        //convert array of objects to array of Card | Player
        const plyers: Player[] = storageArray.map((player: Player) => {

            return new Player(
                player.firstName,
                player.lastName,
                player.swordColor,
                player.id,
                player.numOfGames,
                player.record,
                player.currentScore,
                player.isActive
            );
        });
        return plyers;

    } catch (error) {
        console.error(error)
        return [];
    }

}

function hundelSubmit(ev: any) {
    try {

        ev.preventDefault();
        const firstName = ev.target.firstName.value;
        const lastName = ev.target.lastName.value;
        const selectSword: HTMLSelectElement = document.querySelector("#swordList") || new HTMLSelectElement();
        let swordColor: string;
        if (!selectSword) throw new Error("Can't cath sword List");
        swordColor = selectSword.value;

        const player = new Player(firstName, lastName, swordColor);
        player.setIsActive(true);
        if (!player) throw new Error("Player missing info")
        players?.push(player)
        localStorage.setItem("players", JSON.stringify(players));
        renderPlayer(swordColor);
        renderGamePanel(document.querySelector(".screen__UI"));
        ev.target.reset();

    } catch (error) {
        console.error(error);
    }
}

let timeIntervalID: number;

function hundelStart(ev: any) {
    try {
        ev.preventDefault();
        
        const operation = ev.target.name
        switch (operation) {
            case "start":
                const button = document.getElementById("startGame") as any;
                if (!button) throw new Error("No start game button");
                button.disabled = true;
                if (players === undefined) throw new Error("No register player");
                players[players.length - 1].setInGame(true);
                const backgroundMusic = document.querySelector(`#backgroundMusic`) as HTMLAudioElement;
                if (!backgroundMusic) throw new Error("Error with background music file");
                timeIntervalID = setInterval(displayTimer, 10);
                renderStars(document.querySelector(`.screen__game`));
                backgroundMusic.play(); break;
            case "leave":
                if (players) {
                    players[players?.length - 1].setIsActive(false);
                    localStorage.setItem("players", JSON.stringify(players));
                    location.href = "../HTML/scoreTable.html";
                }

        }

    } catch (error) {
        console.error(error);
    }
}

function renderEndGameScreen(end: boolean, screen: HTMLElement) {
    try {
        if (!screen) throw new Error("No game screen to render");

        if (players === undefined) throw new Error("No players")
        const player = players[players?.length - 1];
        screen.innerHTML = `<div class="screen__end screen__end--img"></div>
            <h1 class="screen__end screen__end--finalScore" id="finalScoreBord">Final Score: ${player.currentScore}</h1>`;
        console.log(`renderEndofGame player score: ${player.currentScore}`)
        endOfGame(player);

    } catch (error) {
        console.error(error)
    }
}

function renderStars(screen: HTMLDivElement | null) {
    try {
        if (!screen) throw new Error("Can't catch game screen");
        if (players === undefined) throw new Error("Can't catch game screen");
        players[players?.length - 1].currentScore = 0;
        // const element = document.querySelector(".screen__game");
        //if (!element) throw new Error("Can't catch game screen");

        const rect = screen.getBoundingClientRect();

        stars.forEach(star => {
            const starElement = document.createElement('img');
            starElement.src = `${star.imageUrl}`;
            starElement.id = star.name;
            starElement.classList.add('star');
            starElement.style.top = '-100px';
            starElement.style.visibility = "visibile";
            starElement.style.left = `${Math.random() * ((rect.y + rect.width - 60) - (rect.y + 60)) + (rect.y + 60)}px`;

            screen?.appendChild(starElement);

            starElement.addEventListener('animationiteration', () => {
                starElement.style.top = '-100px';
                if (starElement.style.visibility = 'hidden')
                    starElement.style.visibility = '';
                starElement.style.left = `${Math.random() * ((rect.y + rect.width - 60) - (rect.y + 60)) + (rect.y + 60)}px`;
                starElement.style.animationDelay = `${Math.random() * 2000}`
            });
            starElement.style.animationDuration = `${Math.random() * (2.5 - 1.5) + 1.5}s`;
            starElement.style.animationPlayState = 'running';
        });

        checkOverlapInBackground();
    } catch (error) {
        console.error(error);
    }
}

function renderStar(star: Star | undefined) {
    try {

        if (!star) throw new Error('start is required');
        const screen = document.querySelector(`.screen__game`)
        if (!screen) throw new Error("Can't cath game screen");
        const rect = screen.getBoundingClientRect();
        const top = "-100px";
        const left = Math.random() * ((rect.y + (rect.width - 100)) - rect.y) + rect.y;
        return `<img src="${star.imageUrl}" id="${star.name}" class="star"; style="top:${top}; left:${left}px;">`
    } catch (error) {
        console.error(error)
    }
}

function renderPlayer(swordColor: string) {
    try {
        const locationPath = location.href;
        const seperate = locationPath.split(`/`);
        if (!(seperate[seperate.length - 1] !== "game.html")) {
            const player = document.querySelector("#fighter");
            if (!player) throw new Error("Can't cath fighter DOM");
            let imgUrl: string | undefined = "";
            if (swords == undefined) throw new Error("No swords");
            const s = swords.find(sword => sword.color === swordColor);
            if (s === undefined) throw new Error(`sword color ${swordColor} not exist`);
            const html = `<div id="sword" style="background-image: url(${s.image});"></div>
            <img src="../TS/dist/fighter.jpg">`;
            player.innerHTML = html;
            document.addEventListener('keydown', listenTokeyDown);
        }
    } catch (error) {
        console.error(error)
    }

}

function renderLogPanel(panel: HTMLElement | null) {
    try {
        const locationPath = location.href;
        const seperate = locationPath.split(`/`);
        if (!(seperate[seperate.length - 1] !== "game.html")) {
            if (!panel) throw new Error("Can't cath screen UI");
            const html = `<h1>Welcome</h1>
            <form id="newPlayer" onsubmit="hundelSubmit(event)">
                <input type="text" name="firstName" placeholder="First Name" required>
                <input type="text" name="lastName" placeholder="Last Name" required>
                <select id="swordList">
                    <option style="color:blue" value="blueSword">Blue sword</option>
                    <option style="color:green" value="greenSword">Green sword</option>
                    <option style="color:red" value="redSword">Red sword</option>
                    <option style="color:white" value="whiteSword">White sword</option>
                </select> 
                <input type="submit" name="submit" value="Go">
            </form>
            <a href="../HTML/instructions.html">Game Instructions</a>
            <a href="../HTML/scoreTable.html">High Scored Table</a>`;

            panel.innerHTML = html;
        }
    } catch (error) {
        console.error(error)
    }

}


function renderGamePanel(panel: HTMLElement | null) {
    try {
        const locationPath = location.href;
        const seperate = locationPath.split(`/`);
        if (!(seperate[seperate.length - 1] !== "game.html")) {
            if (!panel) throw new Error("Can't cath screen UI");
            if (!players) throw new Error("No players");
            const player = players[players?.length - 1].firstName;
            const html = `<h1>Hello ${player}</h1>
            <form id="game" onclick="hundelStart(event)">
            <input type="button" name="start" id="startGame" value="Start">
            <input type="button" name="leave" id="exit" value="Exit">
            </form>
            <div class="container">
                    <div id="timerDisplay">00:000</div>
                </div>
                <div id="score">
                <p>0</p>
                </div>
                <a href="../HTML/scoreTable.html">High Scored Table</a>
                <a href="../HTML/instructions.html">Game Instructions</a>`;

            panel.innerHTML = html;
            const timerRef = document.querySelector(`#timerDisplay`);
            if (!timerRef) throw new Error("No clock");

            timerRef.innerHTML = `00 : 000 `;
        }
    } catch (error) {
        console.error(error)
    }

}


function listenTokeyDown(event: KeyboardEvent | any) {
    try {
        event.preventDefault();
        const fighter = document.querySelector('#fighter') as HTMLDivElement;
        const sword = document.querySelector('#sword') as HTMLDivElement;
        const element = document.querySelector(".screen__game");
        if (!element) throw new Error("Can't cath game screen");
        if (!sword) throw new Error("Can't cath sword DOM");
        const rect = element.getBoundingClientRect();
        const key = event.key;
        
        switch (event.key || event.ctrlKey || event.target.name) {
            case 'ArrowLeft':
                if (event.shiftKey == true) {
                    if ((fighter.offsetLeft - 80) >= (rect.x - 190))
                        fighter.style.left = `${fighter.offsetLeft - 80}px`;
                } else {
                    if ((fighter.offsetLeft - 40) >= (rect.x - 190)) {
                        fighter.style.left = `${fighter.offsetLeft - 40}px`;
                    }
                    fighter.style.transform = `scaleX(1)`;

                }
                break;
            case 'ArrowRight':
                if (event.shiftKey == true) {

                    if ((fighter.offsetLeft + 80) <= rect.right - 300)
                        fighter.style.left = `${fighter.offsetLeft + 80}px`;
                } else {
                    if ((fighter.offsetLeft + 40) <= (rect.right - 300)) {
                        fighter.style.left = `${fighter.offsetLeft + 40}px`;
                    }
                    fighter.style.transform = `scaleX(-1)`;
                }
                break;
            case ` `:
                sword.style.rotate = `-90deg`;
                sword.style.top = `-30px`;
                sword.style.left = `18px`;
                setTimeout(function () {
                    sword.style.rotate = `0deg`;
                    sword.style.top = `-110px`;
                    sword.style.left = `85px`;
                }, 100);
        }
    } catch (error) {
        console.error(error)
    }

}


let [milliseconds, seconds] = [0, 0];
function displayTimer() {
    const timerRef = document.querySelector(`#timerDisplay`) as HTMLDivElement;
    try {
        milliseconds += 10;
        if (milliseconds == 1000) {  //full second, reset value
            milliseconds = 0;
            seconds++;
            if (seconds == 60) {  // end of game
                milliseconds = 0;
                renderEndGameScreen(true, document.querySelector(`.screen__end`) as HTMLDivElement)
            }
        }
        if (seconds === 50) { // count down, last 10 seconds
            countDownMusic();
            timerRef.style.boxShadow = "0 0 20px rgba(242, 6, 6, 0.921)"; // change timer background color
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
        if (!timerRef) throw new Error("Error");
        timerRef.innerHTML = ` ${s} : ${ms}`;
    } catch (error) {
        console.error(error)
    }
}

function animateStars(star: Star, rect: DOMRect) {  // sets random values for duration and position left, and active animation
    try {
        const s = document.getElementById(star.name);
        if (!s) throw new Error("star missing");
        s.style.left = `${Math.random() * ((rect.y + rect.width) - rect.y) + rect.y}px`;
        s.style.animationDuration = `${Math.random() * (2.5 - 1.5) + 1.5}s`;
        s.style.animationPlayState = "running";
    } catch (error) {
        console.error(error);
    }
}

function checkOverlapInBackground(): void {
    try {

        const starsToCheck = document.querySelectorAll('.star');
        const mainElement = document.getElementById('sword') as HTMLElement;
        const interval = 50;
        setInterval(() => {
            starsToCheck.forEach((starToCheck) => {
                if (checkOverlap(mainElement, starToCheck)) {
                    const starDiv = document.getElementById(`${starToCheck.id}`) as HTMLElement; //cath specific star html element
                    if (players === undefined) throw new Error(`no players`);
                    const currPlayer = players[players?.length - 1];
                    const starHit = stars.find(star => star.name === starToCheck.id);
                    if (!starHit) throw new Error(`star not found by id: ${starToCheck.id}`);
                    const star = document.getElementById(`${starHit.name}`)
                    if (!star) throw new Error(`star not found by id: ${starToCheck.id}`);
                    if ((starDiv.style.visibility === "")) {
                        const boom = document.getElementById('boom') as HTMLElement;
                        if (!boom) throw new Error(`boom img not found`);
                        const boomSound = new Audio("../TS/dist/boomSound.mp3")
                        if (!boomSound) throw new Error(`boom sound not found`);
                        boomSound.play();
                        boom.style.left = `${starDiv?.offsetLeft}px`;
                        boom.style.top = `${starDiv?.offsetTop}px`;
                        boom.style.visibility = "visible";
                        if (currPlayer.inGame)
                            currPlayer.updateScore(starHit.value);
                        starDiv.style.visibility = "hidden"
                        const scorePanel = document.getElementById('score');
                        if (!scorePanel) throw new Error(`scorePanel not found`);
                        scorePanel.innerHTML = `<p>${currPlayer.currentScore}</p>`
                        setTimeout(function () { // to hide explosin gif
                            boom.style.left = `0px`;
                            boom.style.top = `0px`;
                            boom.style.visibility = "hidden";
                        }, 200)
                    }
                }
            });
        }, interval);
    } catch (error) {
        console.error(error);
    }
}

function checkOverlap(sword: HTMLElement, star: any): boolean {

    try {
        const rect1 = sword.getBoundingClientRect();
        const rect2 = star.getBoundingClientRect();
        return (
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top
        );
    } catch (error) {
        console.error(error)
        return false;
    }
}

function endOfGame(player: Player) {   // kill listener events, clock intervals and update player setting
    try {
        console.log(`endofGame player score: ${player.currentScore}`)
        clearInterval(timeIntervalID);
        removeEventListener('keydown', listenTokeyDown);
        updateScoreOnScreen(player, document.getElementById('score'));
        updatePlayer(player);
        addGameResultToTable(player);
        debugger;
        if (scoreTable === undefined) throw new Error("Missing players");
        const highScore = scoreTable?.findIndex(p => p.record > player.currentScore);
        setTimeout(function () {
            if (highScore == -1)
                alert("Great job! You got a new record");
            location.href = "../HTML/scoreTable.html";
        }, 5000)
    } catch (error) {

    }
}

function addGameResultToTable(player:Player) {
    try {
        if (!player) throw new Error("No player");
        const tempPlayer = playerShallowCopy(player);
        if (tempPlayer === undefined) throw new Error("Shallow copy failed");
        scoreTable?.push(tempPlayer)
        localStorage.setItem("table", JSON.stringify(scoreTable))
    } catch (error) {
        console.error(error)
    }
}

function playerShallowCopy(player: Player): Player | undefined{
    try {
        const fName = player.firstName;
        const sName = player.lastName;
        const record = player.currentScore;
        const color = player.swordColor;
        return (new Player(fName, sName, color, null,undefined,record,record,undefined))
    } catch (error) {
        console.error(error)
    }
}

function updatePlayer(player: Player) {
    try {
        player.numOfGames++;
        player.record = (player.record < player.currentScore ? player.currentScore : player.record);
        player.setInGame(false);
        localStorage.setItem("players", JSON.stringify(players));
    } catch (error) {
        console.error(error)
    }
}

function updateScoreOnScreen(player: Player, scorePanel: HTMLElement | null) {
    try {
        if (!scorePanel) throw new Error(`scorePanel not found`);
        scorePanel.innerHTML = `<p>${player.currentScore}</p>`
    } catch (error) {
        console.error(error)
    }
}

function countDownMusic() {
    const backgroundMusic = document.querySelector(`#backgroundMusic`) as HTMLAudioElement;
    if (!backgroundMusic) throw new Error("Error with background music file");
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    const audio = document.querySelector(`#countDown`) as HTMLAudioElement;
    audio.play();
}


