interface Star {
    name: string,
    imageUrl: string,
    value: number
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
    { name: "blueStar", imageUrl: "./blueStar.jpg", value: 1 },
    { name: "colorStar", imageUrl: "./colorStar.jpg", value: 20 },
    { name: "greenStar", imageUrl: "./greenStar.png", value: 1 },
    { name: "lightStar", imageUrl: "./lightStar.jpg", value: 1 },
    { name: "rainbowStar", imageUrl: "./rainbowStar.jpg", value: 10 },
    { name: "superStar", imageUrl: "./superStar.jpg", value: 15 },
    { name: "yellowStar", imageUrl: "./yellowStar.jpg", value: 1 }

]

localStorage.setItem("stars", JSON.stringify(stars));


class Player {
    id: string;
    numOfGames: number;
    record: number;
    currentScore: number;
    constructor(public firstName: string,
        public lastName: string,
        id?: string | null,
        numOfGames?: number | undefined,
        record?: number | undefined,
        currentScore?: number | undefined
    ) {
        this.id = `id-${new Date().getTime()}-${Math.random()}`;
    }
}

const players: Player[] | undefined = getPlayerFromStorage();

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
                player.id,
                player.numOfGames,
                player.record,
                player.currentScore
            );
        });
        return plyers;

    } catch (error) {
        console.error(error)
        return [];
    }

}
let timerRef = document.querySelector(`#timerDisplay`);

function hundelSubmit(ev: any) {
    try {

        ev.preventDefault();
        const firstName = ev.target.firstName.value;
        const lastName = ev.target.lastName.value;
        const selectSword = document.querySelector("#swordList") || new HTMLSelectElement();
        let swordColor;
        if (!selectSword) throw new Error("Can't cath sword List");
        swordColor = selectSword.value;
        const player = new Player(firstName, lastName);
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

function hundelStart(ev: any) {
    try {

        ev.preventDefault();

        setInterval(displayTimer, 10);
        renderStars(document.querySelector(`.screen__game`));

    } catch (error) {
        console.error(error);
    }
}

function renderStars(screen: HTMLDivElement | null) {
    try {

        if (!screen) throw new Error("Can't cath game screen");
        const html = stars.map(star => renderStar(star)).join(' ');
        screen.innerHTML += html;
        animateStars();
    } catch (error) {
        console.error(error);
    }
}

function renderStar(star: Star | undefined) {
    try {
        debugger;
        if (!star) throw new Error('start is required');
        const screen = document.querySelector(`.screen__game`)
        if (!screen) throw new Error("Can't cath game screen");
        const rect = screen.getBoundingClientRect();
        const top = "-15%";
        const left = Math.random() * 100;
        console.log(left);
        return `<img src="./dist/${star.imageUrl}" name="${star.name}" class="star"; style="top:${top}; left:${left}%;">`
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
        const html = `<h1>Hello</h1>
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
        </form>`;
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

        //  setInterval(displayTimer,10);


        [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];


        const player = players[players?.length - 1].firstName;
        const html = `<h1>Hello ${player}</h1>
        <form id="game" onclick="hundelStart(event)">
            <input type="button" name="start" value="Start">
        </form>
        <div class="container">
                <div id="timerDisplay">00:000</div>
            </div>`;
        panel.innerHTML = html;
        if (!timerRef) throw new Error("No clock");

        timerRef.innerHTML = `00 : 00 : 00 : 000 `;
    } catch (error) {
        console.error(error)
    }

}

const fighter = document.querySelector('#fighter') as HTMLDivElement;

document.addEventListener('keyup', (event: KeyboardEvent) => {
    try {
        //if arrow up go up. if arrow down go down...
        event.preventDefault();
        console.log(event);
        const element = document.querySelector(".screen__game");
        if (!element) throw new Error("Can't cath game screen");
        const rect = element.getBoundingClientRect();

        switch (event.key || event.ctrlKey) {
            case 'ArrowLeft':
                if (event.shiftKey == true) {
                    fighter.style.left = `${fighter.offsetLeft - 80}px`;
                } else {
                    if ((fighter.offsetLeft - 40) >= rect.y + 80) {
                        fighter.style.left = `${fighter.offsetLeft - 40}px`;
                    }
                    fighter.style.transform = `scaleX(1)`;

                }
                break;
            case 'ArrowRight':
                if (event.shiftKey == true) {
                    fighter.style.left = `${fighter.offsetLeft + 80}px`;
                } else {
                    if ((fighter.offsetLeft + 40) <= rect.y - 70 + rect.width) {
                        fighter.style.left = `${fighter.offsetLeft + 40}px`;
                    }
                    fighter.style.transform = `scaleX(-1)`;
                }
                break;
            case ` `:
                const sword = document.querySelector('#sword') as HTMLDivElement;
                if (!sword) throw new Error("Can't cath sword DOM");
                sword.style.rotate = `0deg`;
                sword.style.top = `-110px`;
                sword.style.left = `90px`;


        }

    } catch (error) {
        console.error(error)
    }
});


document.addEventListener('keydown', (event: KeyboardEvent|any) => {
    try {
        event.preventDefault();
        const sword = document.querySelector('#sword') as HTMLDivElement;
        const newPlayer = document.querySelector('#newPlayer') as HTMLDivElement;
        if (!sword && !newPlayer) throw new Error("Can't cath sword DOM");
        debugger;
        console.dir(event);
        if(event)
            if (event.target === "input") {
                newPlayer.innerText += event.key;
            }
        console.log(event);
        switch (event.key || event.ctrlKey) {

            case ` `:
                sword.style.rotate = `-65deg`;
                sword.style.top = `${sword.offsetTop + 30}px`;
                sword.style.left = `${sword.offsetLeft - 60}px`;

        }

    } catch (error) {
        console.error(error)
    }
});
function displayTimer() {

    const timerRef = document.querySelector(`#timerDisplay`) as HTMLDivElement;
    try {
        console.dir(timerRef);
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
            }
        }
        if (seconds == 50) timerRef.style.boxShadow = "0 0 20px rgba(242, 6, 6, 0.921)"
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
        if (!timerRef) throw new Error("Error")
        timerRef.innerHTML = ` ${s} : ${ms}`;
    } catch (error) {
        console.error(error)
    }
}

function animateStars() {
    const fallingStar = [
        {visibilty: "visible"},
        { top:"25%" },
        { top: "50%" },
        { top: "75%" },
        { top: "110%" },
        { visbility: "hidden" }];
      
      const fallingStarTiming = {
        duration: 2000,
        iterations: 2,
    };
      
}

renderLogPanel();