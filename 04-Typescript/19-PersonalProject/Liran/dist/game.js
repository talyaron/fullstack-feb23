var swords = [
    { color: "blueSword", image: "./blueSword" },
    { color: "blueSword", image: "./blueSword" },
    { color: "blueSword", image: "./blueSword" },
    { color: "blueSword", image: "./blueSword" }
];
var stars = [
    { name: "blueStar", imageUrl: "./blueStar.jpg", value: 1 },
    { name: "colorStar", imageUrl: "./colorStar.jpg", value: 20 },
    { name: "greenStar", imageUrl: "./greenStar.png", value: 1 },
    { name: "lightStar", imageUrl: "./lightStar.jpg", value: 1 },
    { name: "rainbowStar", imageUrl: "./rainbowStar.jpg", value: 10 },
    { name: "superStar", imageUrl: "./superStar.jpg", value: 15 },
    { name: "yellowStar", imageUrl: "./yellowStar.jpg", value: 1 }
];
localStorage.setItem("stars", JSON.stringify(stars));
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
        ev.preventDefault();
        var firstName = ev.target.firstName.value;
        var lastName = ev.target.lastName.value;
        var selectSword = document.querySelector("#swordList") || new HTMLSelectElement();
        var swordColor = void 0;
        if (!selectSword)
            throw new Error("Can't cath sword List");
        swordColor = selectSword.value;
        var player = new Player(firstName, lastName);
        if (!player)
            throw new Error("Player missing info");
        players === null || players === void 0 ? void 0 : players.push(player);
        localStorage.setItem("players", JSON.stringify(players));
        renderPlayer(swordColor);
        renderGamePanel();
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function hundelStart(ev) {
    try {
        ev.preventDefault();
        setInterval(displayTimer, 10);
        renderStars(document.querySelector(".screen__game"));
    }
    catch (error) {
        console.error(error);
    }
}
function renderStars(screen) {
    try {
        if (!screen)
            throw new Error("Can't cath game screen");
        var html = stars.map(function (star) { return renderStar(star); }).join(' ');
        screen.innerHTML += html;
        animateStars();
    }
    catch (error) {
        console.error(error);
    }
}
function renderStar(star) {
    try {
        debugger;
        if (!star)
            throw new Error('start is required');
        var screen = document.querySelector(".screen__game");
        if (!screen)
            throw new Error("Can't cath game screen");
        var rect = screen.getBoundingClientRect();
        var top = "-15%";
        var left = Math.random() * 100;
        console.log(left);
        return "<img src=\"./dist/" + star.imageUrl + "\" name=\"" + star.name + "\" class=\"star\"; style=\"top:" + top + "; left:" + left + "%;\">";
    }
    catch (error) {
        console.error(error);
    }
}
function renderPlayer(swordColor) {
    try {
        var player = document.querySelector("#fighter");
        if (!player)
            throw new Error("Can't cath fighter DOM");
        var imgUrl = "";
        switch (swordColor) {
            case "blueSword":
                imgUrl = "./dist/blueSword.png";
                break;
            case "greenSword":
                imgUrl = "./dist/greenSword.png";
                break;
            case "redSword":
                imgUrl = "./dist/redSword.png";
                break;
            case "whiteSword": imgUrl = "./dist/whiteSword.png";
        }
        var html = "<div id=\"sword\" style=\"background-image: url(" + imgUrl + ");\"></div>\n        <img src=\"./dist/fighter.jpg\">";
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
        var html = "<h1>Hello</h1>\n        <form id=\"newPlayer\" onsubmit=\"hundelSubmit(event)\">\n            <input type=\"text\" name=\"firstName\" placeholder=\"First Name\" required>\n            <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\" required>\n            <select id=\"swordList\">\n                <option style=\"color:blue\" value=\"blueSword\">Blue sword</option>\n                <option style=\"color:green\" value=\"greenSword\">Green sword</option>\n                <option style=\"color:red\" value=\"redSword\">Red sword</option>\n                <option style=\"color:white\" value=\"whiteSword\">White sword</option>\n            </select> \n            <input type=\"submit\" name=\"submit\" value=\"Go\">\n        </form>";
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
        var panel = document.querySelector(".screen__UI");
        if (!panel)
            throw new Error("Can't cath screen UI");
        if (!players)
            throw new Error("No players");
        //  setInterval(displayTimer,10);
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
document.addEventListener('keyup', function (event) {
    try {
        //if arrow up go up. if arrow down go down...
        event.preventDefault();
        console.log(event);
        var element = document.querySelector(".screen__game");
        if (!element)
            throw new Error("Can't cath game screen");
        var rect = element.getBoundingClientRect();
        switch (event.key || event.ctrlKey) {
            case 'ArrowLeft':
                if (event.shiftKey == true) {
                    fighter.style.left = fighter.offsetLeft - 80 + "px";
                }
                else {
                    if ((fighter.offsetLeft - 40) >= rect.y + 80) {
                        fighter.style.left = fighter.offsetLeft - 40 + "px";
                    }
                    fighter.style.transform = "scaleX(1)";
                }
                break;
            case 'ArrowRight':
                if (event.shiftKey == true) {
                    fighter.style.left = fighter.offsetLeft + 80 + "px";
                }
                else {
                    if ((fighter.offsetLeft + 40) <= rect.y - 70 + rect.width) {
                        fighter.style.left = fighter.offsetLeft + 40 + "px";
                    }
                    fighter.style.transform = "scaleX(-1)";
                }
                break;
            case " ":
                var sword = document.querySelector('#sword');
                if (!sword)
                    throw new Error("Can't cath sword DOM");
                sword.style.rotate = "0deg";
                sword.style.top = "-110px";
                sword.style.left = "90px";
        }
    }
    catch (error) {
        console.error(error);
    }
});
document.addEventListener('keydown', function (event) {
    try {
        event.preventDefault();
        var sword = document.querySelector('#sword');
        var newPlayer = document.querySelector('#newPlayer');
        if (!sword && !newPlayer)
            throw new Error("Can't cath sword DOM");
        debugger;
        console.dir(event);
        if (event)
            if (event.target === "input") {
                newPlayer.innerText += event.key;
            }
        console.log(event);
        switch (event.key || event.ctrlKey) {
            case " ":
                sword.style.rotate = "-65deg";
                sword.style.top = sword.offsetTop + 30 + "px";
                sword.style.left = sword.offsetLeft - 60 + "px";
        }
    }
    catch (error) {
        console.error(error);
    }
});
function displayTimer() {
    var timerRef = document.querySelector("#timerDisplay");
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
        if (seconds == 50)
            timerRef.style.boxShadow = "0 0 20px rgba(242, 6, 6, 0.921)";
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
function animateStars() {
    var fallingStar = [
        { visibilty: "visible" },
        { top: "25%" },
        { top: "50%" },
        { top: "75%" },
        { top: "110%" },
        { visbility: "hidden" }
    ];
    var fallingStarTiming = {
        duration: 2000,
        iterations: 2
    };
}
renderLogPanel();
