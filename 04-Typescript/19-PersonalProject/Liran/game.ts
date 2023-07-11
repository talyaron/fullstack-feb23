interface Star {
    name: string,
    imageUrl: string,
    value: number
}

interface Sowrd {
    color: string,
    image: string
}

const sowrds: Sowrd[] = [
    { color: "blueSowrd", image: "./blueSowrd" },
    { color: "blueSowrd", image: "./blueSowrd" },
    { color: "blueSowrd", image: "./blueSowrd" },
    { color: "blueSowrd", image: "./blueSowrd" }
]



const stars: Star[] = [
    { name: "blueStar", imageUrl: "./blueStar", value: 1 },
    { name: "colorStar", imageUrl: "./colorStar", value: 20 },
    { name: "greenStar", imageUrl: "./greenStar", value: 1 },
    { name: "lightStar", imageUrl: "./lightStar", value: 1 },
    { name: "rainbowStar", imageUrl: "./rainbowStar", value: 10 },
    { name: "superStar", imageUrl: "./superStar", value: 15 },
    { name: "yellowStar", imageUrl: "./yellowStar", value: 1 }

]

// localStorage.setItem("stars", JSON.stringify(stars));


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
        debugger;
        ev.preventDefault();
        const firstName = ev.target.firstName.value;
        const lastName = ev.target.lastName.value;
        const player = new Player(firstName, lastName);
        if (!player) throw new Error("Player missing info")
        players?.push(player)
        localStorage.setItem("players", JSON.stringify(players));
        renderPlayer();
        renderGamePanel();
        ev.target.reset();

    } catch (error) {
        console.error(error);
    }
}

function hundelStart(ev: any) {
    try {
        debugger;
        ev.preventDefault();
        setInterval(displayTimer, 10);

    } catch (error) {
        console.error(error);
    }
}

function renderPlayer() {
    try {
        const player = document.querySelector("#fighter");
        if (!player) throw new Error("Can't cath fighter DOM");
        const html = `<div id="sowrd"></div>
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
        debugger;
        const panel = document.querySelector(".screen__UI");
        if (!panel) throw new Error("Can't cath screen UI");
        if (!players) throw new Error("No players");

        //  setInterval(displayTimer,10);
        let int = null;
        if (int !== null) {
            clearInterval(int);
        }

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

// document.addEventListener('keyup', (event: KeyboardEvent) => {
//     try {
//         //if arrow up go up. if arrow down go down...
//         event.preventDefault();
//         console.log(event);
//         const element = document.querySelector(".screen__game");
//         if (!element) throw new Error("Can't cath game screen");
//         const rect = element.getBoundingClientRect();
//         debugger;
//         switch (event.key || event.ctrlKey) {
//             // case 'ArrowUp':
//             //     if(event.shiftKey == true){
//             //         fighter.style.top = `${fighter.offsetTop - 80}px`;
//             //     }else
//             //     fighter.style.top = `${fighter.offsetTop - 40}px`;
//             //     break;
//             // case 'ArrowDown':
//             //     if(event.shiftKey == true){
//             //         fighter.style.top = `${fighter.offsetTop  + 80}px`;
//             //     }else
//             //     fighter.style.top = `${fighter.offsetTop + 40}px`;

//             //     break;
//             case 'ArrowLeft':
//                 if(event.shiftKey == true){
//                     fighter.style.left = `${fighter.offsetLeft - 80}px`;
//                 } else
//                 {
//                     if ((fighter.offsetLeft - 40) >= rect.y+80) {
//                         fighter.style.left = `${fighter.offsetLeft - 40}px`;
//                     }
//                     fighter.style.transform = `scaleX(1)`;

//                     }
//                 break;
//             case 'ArrowRight':
//                 if(event.shiftKey == true){
//                     fighter.style.left = `${fighter.offsetLeft + 80}px`;
//                 } else {
//                     if ((fighter.offsetLeft + 40) <= rect.y-70+rect.width) {
//                         fighter.style.left = `${fighter.offsetLeft + 40}px`;
//                     }
//                     fighter.style.transform = `scaleX(-1)`;
//                 }
//                 break;
//             case ` `:
//                 const sowrd = document.querySelector('#sowrd') as HTMLDivElement;
//                 if (!sowrd) throw new Error("Can't cath sowrd DOM");
//                 sowrd.style.rotate = `0deg`;
//                 sowrd.style.top = `-110px`;
//                 sowrd.style.left = `90px`;


//         }

//     } catch (error) {
//         console.error(error)
//     }
// });


// document.addEventListener('keydown', (event: KeyboardEvent) => {
//     try {
//         event.preventDefault();
//         const sowrd = document.querySelector('#sowrd') as HTMLDivElement;
//         if (!sowrd) throw new Error("Can't cath sowrd DOM");

//         console.log(event);
//         switch (event.key || event.ctrlKey) {

//             case ` `:
//                 sowrd.style.rotate = `-65deg`;
//                 sowrd.style.top = `${sowrd.offsetTop  + 30}px`;
//                 sowrd.style.left = `${sowrd.offsetLeft - 60}px`;

//         }

//     } catch (error) {
//         console.error(error)
//     }
// });
function displayTimer() {
    debugger;
    timerRef = document.querySelector(`#timerDisplay`);
    try {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds == 30) {
                seconds = 0;
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
        if (!timerRef) throw new Error("Error")
        timerRef.innerHTML = ` ${s} : ${ms}`;
    } catch (error) {
        console.error(error)
    }
}

renderLogPanel();