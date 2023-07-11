var sowrds = [
    { color: "blueSowrd", image: "./blueSowrd" },
    { color: "blueSowrd", image: "./blueSowrd" },
    { color: "blueSowrd", image: "./blueSowrd" },
    { color: "blueSowrd", image: "./blueSowrd" }
];
var stars = [
    { name: "blueStar", imageUrl: "./blueStar", value: 1 },
    { name: "colorStar", imageUrl: "./colorStar", value: 20 },
    { name: "greenStar", imageUrl: "./greenStar", value: 1 },
    { name: "lightStar", imageUrl: "./lightStar", value: 1 },
    { name: "rainbowStar", imageUrl: "./rainbowStar", value: 10 },
    { name: "superStar", imageUrl: "./superStar", value: 15 },
    { name: "yellowStar", imageUrl: "./yellowStar", value: 1 }
];
// localStorage.setItem("stars", JSON.stringify(stars));
var Player = /** @class */ (function () {
    function Player(firstName, lastName, id, numOfGames, record, currentScore) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = "id-" + new Date().getTime() + "-" + Math.random();
    }
    return Player;
}());
var players = getPlayerFromStorage();
function getPlayerFromStorage() {
    try {
        var storageString = localStorage.getItem("players");
        if (!storageString)
            throw new Error("No such name in local storage");
        //convert string to array of objects
        var storageArray = JSON.parse(storageString);
        //convert array of objects to array of Card | Player
        var plyers = storageArray.map(function (player) {
            return new Player(player.firstName, player.lastName, player.id, player.numOfGames, player.record, player.currentScore);
        });
        return plyers;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
var timerRef = document.querySelector("#timerDisplay");
function hundelSubmit(ev) {
    try {
        debugger;
        ev.preventDefault();
        var firstName = ev.target.firstName.value;
        var lastName = ev.target.lastName.value;
        var player = new Player(firstName, lastName);
        if (!player)
            throw new Error("Player missing info");
        players === null || players === void 0 ? void 0 : players.push(player);
        localStorage.setItem("players", JSON.stringify(players));
        renderPlayer();
        renderGamePanel();
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function hundelStart(ev) {
    try {
        debugger;
        ev.preventDefault();
        setInterval(displayTimer, 10);
    }
    catch (error) {
        console.error(error);
    }
}
function renderPlayer() {
    try {
        var player = document.querySelector("#fighter");
        if (!player)
            throw new Error("Can't cath fighter DOM");
        var html = "<div id=\"sowrd\"></div>\n        <img src=\"./dist/fighter.jpg\">";
        player.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderLogPanel() {
    try {
        var panel = document.querySelector(".screen__UI");
        if (!panel)
            throw new Error("Can't cath screen UI");
        var html = "<h1>Hello</h1>\n        <form id=\"newPlayer\" onsubmit=\"hundelSubmit(event)\">\n            <input type=\"text\" name=\"firstName\" placeholder=\"First Name\" required>\n            <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\" required>\n            <input type=\"submit\" name=\"submit\" value=\"Go\">\n        </form>";
        panel.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
var _a = [0, 0, 0, 0], milliseconds = _a[0], seconds = _a[1], minutes = _a[2], hours = _a[3];
function renderGamePanel() {
    var _a;
    try {
        debugger;
        var panel = document.querySelector(".screen__UI");
        if (!panel)
            throw new Error("Can't cath screen UI");
        if (!players)
            throw new Error("No players");
        //  setInterval(displayTimer,10);
        var int = null;
        if (int !== null) {
            clearInterval(int);
        }
        _a = [0, 0, 0, 0], milliseconds = _a[0], seconds = _a[1], minutes = _a[2], hours = _a[3];
        var player = players[(players === null || players === void 0 ? void 0 : players.length) - 1].firstName;
        var html = "<h1>Hello " + player + "</h1>\n        <form id=\"game\" onclick=\"hundelStart(event)\">\n            <input type=\"button\" name=\"start\" value=\"Start\">\n        </form>\n        <div class=\"container\">\n                <div id=\"timerDisplay\">00:000</div>\n            </div>";
        panel.innerHTML = html;
        if (!timerRef)
            throw new Error("No clock");
        timerRef.innerHTML = "00 : 00 : 00 : 000 ";
    }
    catch (error) {
        console.error(error);
    }
}
var fighter = document.querySelector('#fighter');
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
    timerRef = document.querySelector("#timerDisplay");
    try {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds == 30) {
                seconds = 0;
            }
        }
        var s = seconds < 10 ? "0" + seconds : seconds;
        var ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
        if (!timerRef)
            throw new Error("Error");
        timerRef.innerHTML = " " + s + " : " + ms;
    }
    catch (error) {
        console.error(error);
    }
}
renderLogPanel();
