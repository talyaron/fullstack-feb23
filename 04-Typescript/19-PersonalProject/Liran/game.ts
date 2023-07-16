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
    { color: "blueSword", image: "./blueSword" },
    { color: "blueSword", image: "./blueSword" },
    { color: "blueSword", image: "./blueSword" },
    { color: "blueSword", image: "./blueSword" }
]



const stars: Star[] = [
    { name: "blueStar", imageUrl: "./blueStar.jpg", value: 1, functionDuration: null },
    { name: "colorStar", imageUrl: "./colorStar2.png", value: 20, functionDuration: null },
    { name: "greenStar", imageUrl: "./greenStar.png", value: 1, functionDuration: null },
    { name: "lightStar", imageUrl: "./lightStar.jpg", value: 1, functionDuration: null },
    { name: "rainbowStar", imageUrl: "./rainbowStar.jpg", value: 10, functionDuration: null },
    { name: "superStar", imageUrl: "./superStar.jpg", value: 15, functionDuration: null },
    { name: "yellowStar", imageUrl: "./yellowStar.jpg", value: 1, functionDuration: null }

]

localStorage.setItem("stars", JSON.stringify(stars));


class Player {
    id: string;
    numOfGames: number = 0;
    record: number = 0;
    currentScore: number = 0;
    isActive: boolean;
    constructor(public firstName: string,
        public lastName: string,
        public swordColor: string,
        id?: string | null,
        numOfGames?: number | undefined,
        record?: number | undefined,
        currentScore?: number | undefined,
        isActive?: boolean | undefined
    ) {
        this.id = (id) ? `id-${new Date().getTime()}-${Math.random()}` : this.id;
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

    setIsActive(set: boolean) {
        this.isActive = set;
    }
}

const players: Player[] | undefined = getPlayerFromStorage();

if (players !== undefined && players.length > 0) {
    if (players[players?.length - 1].isActive) {
        renderPlayer(players[players.length - 1].swordColor);
        renderGamePanel();
    }
    else
        renderLogPanel();


}
else
    renderLogPanel();

function getPlayerFromStorage(): Player[] | undefined {
    try {

        const storageString = localStorage.getItem("players");
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
        const selectSword = document.querySelector("#swordList") || new HTMLSelectElement();
        let swordColor: string;
        if (!selectSword) throw new Error("Can't cath sword List");
        swordColor = selectSword.value;
        const player = new Player(firstName, lastName, swordColor);
        player.setIsActive(true);
        if (!player) throw new Error("Player missing info")
        players?.push(player)
        localStorage.setItem("players", JSON.stringify(players));
        renderPlayer(swordColor);
        renderGamePanel();
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
                // const pageRef = document.querySelector("#highScorePage") as HTMLElement;
                // if (!pageRef) throw new Error("Missing page ref");
                // pageRef.style.pointerEvents = "none";
                const button = document.getElementById("startGame") as any;
                if (!button) throw new Error("No start game button");
                button.disabled = true;
                timeIntervalID = setInterval(displayTimer, 10);
                renderStars(document.querySelector(`.screen__game`)); break;
            case "leave":
                if (players) {
                    players[players?.length - 1].setIsActive(false);
                    localStorage.setItem("players", JSON.stringify(players));
                    location.href = "./scoreTable.html";
                }

        }

    } catch (error) {
        console.error(error);
    }
}

function renderGameScreen(end: boolean, screen: HTMLElement) {
    try {
        if (!screen) throw new Error("No game screen to render");
        if (end) {
            if (players === undefined) throw new Error("No players")
            const player = players[players?.length - 1];
            screen.innerHTML = `<div class="screen__end screen__end--img"></div>
            <h1 class="screen__end screen__end--finalScore" id="finalScoreBord">Final Score: ${player.currentScore}</h1>`
            endOfGame(player);

        }
    } catch (error) {
        console.error(error)
    }
}

function renderStars(screen: HTMLDivElement | null) {
    try {
        if (!screen) throw new Error("Can't catch game screen");

        const element = document.querySelector(".screen__game");
        if (!element) throw new Error("Can't catch game screen");

        const rect = element.getBoundingClientRect();

        stars.forEach(star => {
            const starElement = document.createElement('img');
            starElement.src = `./dist/${star.imageUrl}`;
            starElement.id = star.name;
            starElement.classList.add('star');
            starElement.style.top = '-100px';
            starElement.style.visibility = "visibile";
            starElement.style.left = `${Math.random() * ((rect.y + rect.width - 60) - (rect.y+60)) + (rect.y+60)}px`;

            screen?.appendChild(starElement);

            starElement.addEventListener('animationend', () => {
                // starElement.style.left = `${Math.random() * ((rect.y + rect.width) - rect.y) + rect.y}px`;
                // starElement.style.animationDuration = `${Math.random() * (3 - 1.5) + 1.5}s`;
                console.log(`Animation iteration ended for ${star.name}`);
            });

            starElement.style.animationDuration = `${Math.random() * (3 - 1.5) + 1.5}s`;
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
        return `<img src="./dist/${star.imageUrl}" id="${star.name}" class="star"; style="top:${top}; left:${left}px;">`
    } catch (error) {
        console.error(error)
    }
}

function renderPlayer(swordColor: string) {
    try {
        const player = document.querySelector("#fighter");
        if (!player) throw new Error("Can't cath fighter DOM");
        let imgUrl: string = "";
        switch (swordColor) {
            case "blueSword": imgUrl = "./dist/blueSword.png"; break;
            case "greenSword": imgUrl = "./dist/greenSword.png"; break;
            case "redSword": imgUrl = "./dist/redSword.png"; break;
            case "whiteSword": imgUrl = "./dist/whiteSword.png";
        }
        const html = `<div id="sword" style="background-image: url(${imgUrl});"></div>
        <img src="./dist/fighter.jpg">`;
        player.innerHTML = html;
    } catch (error) {
        console.error(error)
    }

}

function renderLogPanel() {
    try {
        const panel = document.querySelector(".screen__UI");
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
        <a href="./instructions.html">Game Instructions</a>`;


        panel.innerHTML = html;
    } catch (error) {
        console.error(error)
    }

}
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

function renderGamePanel() {
    try {
        const panel = document.querySelector(".screen__UI");
        if (!panel) throw new Error("Can't cath screen UI");
        if (!players) throw new Error("No players");


        [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];


        const player = players[players?.length - 1].firstName;
        const html = `<h1>Hello ${player}</h1>
        <form id="game" onclick="hundelStart(event)">
        <input type="button" name="start" id="startGame" value="Start">
        <input type="button" name="leave" id="exit" value="Exit">
        </form>
        <div class="container">
                <div id="timerDisplay">00:000</div>
            </div>
            <div id="score"></div>
            <a href="./scoreTable.html">High Scored Table</a>
            <a href="./instructions.html">Game Instructions</a>`;

        panel.innerHTML = html;
        const timerRef = document.querySelector(`#timerDisplay`);
        if (!timerRef) throw new Error("No clock");

        timerRef.innerHTML = `00 : 000 `;
    } catch (error) {
        console.error(error)
    }

}

const fighter = document.querySelector('#fighter') as HTMLDivElement;


document.addEventListener('keydown', (event: KeyboardEvent | any) => {
    try {

        event.preventDefault();
        const sword = document.querySelector('#sword') as HTMLDivElement;
        const newPlayer = document.querySelector('#newPlayer') as HTMLDivElement;
        const element = document.querySelector(".screen__game");
        if (!element) throw new Error("Can't cath game screen");
        if (!sword && !newPlayer) throw new Error("Can't cath sword DOM");
        const rect = element.getBoundingClientRect();
        console.dir(event);
        const key = event.key;
        const reg = new RegExp(/^[a-zA-Z]+$/)
        if (event && (event.target.name == "firstName" || event.target.name == "lastName" && event.key)) {
            if (event.target.name == "firstName") {
                if (key !== undefined && key.length == 1 && reg.test(key)) {
                    newPlayer[0].value += event.key;
                }
                else if (key == "Backspace") {
                    if (newPlayer[0].value.length > 0) {
                        const str: string = newPlayer[0].value;
                        newPlayer[0].value = str.substring(0, str.length - 1);
                    }
                }
            }
            if (event.target.name == "lastName" && event.key) {
                if (key !== undefined && key.length == 1 && reg.test(key)) {
                    newPlayer[1].value += event.key;
                }
                else if (key == "Backspace") {
                    if (newPlayer[1].value.length > 0) {
                        const str: string = newPlayer[1].value;
                        newPlayer[1].value = str.substring(0, str.length - 1);
                    }
                }
            }
        }
        else {

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

        }


    } catch (error) {
        console.error(error)
    }
});

function displayTimer() {
    const timerRef = document.querySelector(`#timerDisplay`) as HTMLDivElement;
    try {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds == 60) {
                milliseconds = 0;
                renderGameScreen(true, document.querySelector(`.screen__end`) as HTMLDivElement)
            }
        }
        if (seconds == 50) timerRef.style.boxShadow = "0 0 20px rgba(242, 6, 6, 0.921)";
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
        if (!timerRef) throw new Error("Error");
        timerRef.innerHTML = ` ${s} : ${ms}`;
    } catch (error) {
        console.error(error)
    }
}

function animateStars(star: Star, rect: DOMRect) {
    try {
        const s = document.getElementById(star.name);
        if (!s) throw new Error("star missing");

        s.style.animationDelay = `${Math.random() * (3 - 1.5) + 1.5}s`;
        s.style.left = `${Math.random() * ((rect.y + rect.width) - rect.y) + rect.y}px`;
        s.style.animationDuration = `${Math.random() * (3 - 1.5) + 1.5}s`;
        s.style.animationPlayState = "running";
    } catch (error) {
        console.error(error);
    }



}
function checkOverlapInBackground(): void {
    try {
        const element = document.querySelector(".screen__game");
        const elementsToCheck = document.querySelectorAll('.star');
        const mainElement = document.getElementById('sword') as HTMLElement;
        const interval = 50;
        setInterval(() => {
            elementsToCheck.forEach((element) => {
                if (checkOverlap(mainElement, element)) {
                    const elementDiv = document.getElementById(`${element.id}`) as HTMLElement;
                    console.dir(elementDiv);
                    //elementDiv.style.visibility = "hidden";
                    if (players === undefined) throw new Error(`no players`);
                    const currPlayer = players[players?.length - 1];
                    const starHit = stars.find(star => star.name === element.id);
                    if (!starHit) throw new Error(`star not found by id: ${element.id}`);
                    const star = document.getElementById(`${starHit.name}`)
                    if (!star) throw new Error(`star not found by id: ${element.id}`);
                    if ((elementDiv.style.visibility === "")) {
                        const boom = document.getElementById('boom') as HTMLElement;
                        if(!boom)throw new Error(`boom img not found`);
                        boom.style.left = `${elementDiv?.offsetLeft}px`;
                        boom.style.top = `${elementDiv?.offsetTop}px`;
                        boom.style.visibility = "visible";
                        currPlayer.updateScore(starHit.value);
                        elementDiv.style.visibility = "hidden"
                        const scorePanel = document.getElementById('score');
                        if (!scorePanel) throw new Error(`scorePanel not found`);
                        scorePanel.innerHTML = `<p>${currPlayer.currentScore}</p>`
                        console.log(`hit ${element.id}, curren score is:${currPlayer.currentScore}`);
                        setTimeout(function () {
                            boom.style.left = `0px`;
                            boom.style.top = `0px`;
                            boom.style.visibility = "hidden";
                        }, 200)
                        setTimeout(function () {
                            elementDiv.style.visibility = "";
                        }, 1000)
                    }
                    
                }
            });
        }, interval);
    } catch (error) {
        console.error(error);
    }
}

function checkOverlap(element1: HTMLElement, element2: any): boolean {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
    
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

function endOfGame(player: Player) {
    try {
        clearInterval(timeIntervalID);
        
        player.numOfGames++;
        
        player.record = (player.record < player.currentScore ? player.currentScore : player.record);
        player.currentScore = 0;
        if (players === undefined) throw new Error("Missing players")
        localStorage.setItem("players", JSON.stringify(players));
        const highScore = players?.findIndex(p => p.record >= player.record && p.id !== player.id);
        // if (highScore == -1) {
        //     setTimeout(function () {
        //         alert("Great job! You got a new record");
        //         location.href = "scoreTable.html";
        //     }, 4000)
        // }
        // else {

        // }
        setTimeout(function () {
            if (highScore == -1)
                alert("Great job! You got a new record");
            location.href = "scoreTable.html";
        }, 5000)
    } catch (error) {

    }
}


