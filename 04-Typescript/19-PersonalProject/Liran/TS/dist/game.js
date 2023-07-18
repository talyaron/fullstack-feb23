var swords = [
    { color: "blueSword", image: "../TS/dist/blueSword.png" },
    { color: "greenSword", image: "../TS/dist/greenSword.png" },
    { color: "redSword", image: "../TS/dist/redSword.png" },
    { color: "whiteSword", image: "../TS/dist/whiteSword.png" }
];
var stars = [
    { name: "blueStar", imageUrl: "../TS/dist/blueStar.jpg", value: 2, functionDuration: null },
    { name: "goldStar", imageUrl: "../TS/dist/goldStar.jpg", value: 25, functionDuration: null },
    { name: "greenStar", imageUrl: "../TS/dist/greenStar.png", value: 2, functionDuration: null },
    { name: "lightStar", imageUrl: "../TS/dist/lightStar.jpg", value: 2, functionDuration: null },
    { name: "rainbowStar", imageUrl: "../TS/dist/rainbowStar.jpg", value: 10, functionDuration: null },
    { name: "superStar", imageUrl: "../TS/dist/superStar.jpg", value: 15, functionDuration: null },
    { name: "yellowStar", imageUrl: "../TS/dist/yellowStar.jpg", value: 2, functionDuration: null }
];
localStorage.setItem("stars", JSON.stringify(stars));
var Player = /** @class */ (function () {
    function Player(firstName, lastName, swordColor, id, numOfGames, record, currentScore, isActive) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.swordColor = swordColor;
        this.numOfGames = 0;
        this.record = 0;
        this.currentScore = 0;
        this.inGame = false;
        this.id = (id === undefined) ? "id-" + new Date().getTime() + "-" + Math.random() : this.id;
        this.record = (record !== undefined) ? record : this.record;
        this.numOfGames = (numOfGames !== undefined) ? numOfGames : this.numOfGames;
        this.currentScore = (currentScore !== undefined) ? currentScore : this.currentScore;
        this.isActive = (isActive !== undefined) ? isActive : this.isActive;
    }
    Player.prototype.updateScore = function (starValue) {
        try {
            this.currentScore += starValue;
        }
        catch (error) {
            console.error(error);
        }
    };
    Player.prototype.setIsActive = function (set) {
        this.isActive = set;
    };
    Player.prototype.setInGame = function (set) {
        this.inGame = set;
    };
    return Player;
}());
var players = getPlayerFromStorage("players");
var scoreTable = getPlayerFromStorage("table");
if (players !== undefined && players.length > 0) {
    if (players[(players === null || players === void 0 ? void 0 : players.length) - 1].isActive) {
        renderPlayer(players[players.length - 1].swordColor);
        renderGamePanel(document.querySelector(".screen__UI"));
    }
    else
        renderLogPanel(document.querySelector(".screen__UI"));
}
else
    renderLogPanel(document.querySelector(".screen__UI"));
function getPlayerFromStorage(item) {
    try {
        debugger;
        var storageString = localStorage.getItem("" + item);
        if (!storageString)
            throw new Error("No such name in local storage");
        //convert string to array of objects
        var storageArray = JSON.parse(storageString);
        //convert array of objects to array of Card | Player
        var plyers = storageArray.map(function (player) {
            return new Player(player.firstName, player.lastName, player.swordColor, player.id, player.numOfGames, player.record, player.currentScore, player.isActive);
        });
        return plyers;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
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
        var player = new Player(firstName, lastName, swordColor);
        player.setIsActive(true);
        if (!player)
            throw new Error("Player missing info");
        players === null || players === void 0 ? void 0 : players.push(player);
        localStorage.setItem("players", JSON.stringify(players));
        renderPlayer(swordColor);
        renderGamePanel(document.querySelector(".screen__UI"));
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
var timeIntervalID;
function hundelStart(ev) {
    try {
        ev.preventDefault();
        debugger;
        var operation = ev.target.name;
        switch (operation) {
            case "start":
                var button = document.getElementById("startGame");
                if (!button)
                    throw new Error("No start game button");
                button.disabled = true;
                if (players === undefined)
                    throw new Error("No register player");
                players[players.length - 1].setInGame(true);
                var backgroundMusic = document.querySelector("#backgroundMusic");
                if (!backgroundMusic)
                    throw new Error("Error with background music file");
                timeIntervalID = setInterval(displayTimer, 10);
                renderStars(document.querySelector(".screen__game"));
                backgroundMusic.play();
                break;
            case "leave":
                if (players) {
                    players[(players === null || players === void 0 ? void 0 : players.length) - 1].setIsActive(false);
                    localStorage.setItem("players", JSON.stringify(players));
                    location.href = "../HTML/scoreTable.html";
                }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderEndGameScreen(end, screen) {
    try {
        if (!screen)
            throw new Error("No game screen to render");
        if (players === undefined)
            throw new Error("No players");
        var player = players[(players === null || players === void 0 ? void 0 : players.length) - 1];
        screen.innerHTML = "<div class=\"screen__end screen__end--img\"></div>\n            <h1 class=\"screen__end screen__end--finalScore\" id=\"finalScoreBord\">Final Score: " + player.currentScore + "</h1>";
        console.log("renderEndofGame player score: " + player.currentScore);
        endOfGame(player);
    }
    catch (error) {
        console.error(error);
    }
}
function renderStars(screen) {
    try {
        if (!screen)
            throw new Error("Can't catch game screen");
        if (players === undefined)
            throw new Error("Can't catch game screen");
        players[(players === null || players === void 0 ? void 0 : players.length) - 1].currentScore = 0;
        // const element = document.querySelector(".screen__game");
        //if (!element) throw new Error("Can't catch game screen");
        var rect_1 = screen.getBoundingClientRect();
        stars.forEach(function (star) {
            var starElement = document.createElement('img');
            starElement.src = "" + star.imageUrl;
            starElement.id = star.name;
            starElement.classList.add('star');
            starElement.style.top = '-100px';
            starElement.style.visibility = "visibile";
            starElement.style.left = Math.random() * ((rect_1.y + rect_1.width - 60) - (rect_1.y + 60)) + (rect_1.y + 60) + "px";
            screen === null || screen === void 0 ? void 0 : screen.appendChild(starElement);
            starElement.addEventListener('animationiteration', function () {
                starElement.style.top = '-100px';
                if (starElement.style.visibility = 'hidden')
                    starElement.style.visibility = '';
                starElement.style.left = Math.random() * ((rect_1.y + rect_1.width - 60) - (rect_1.y + 60)) + (rect_1.y + 60) + "px";
                starElement.style.animationDelay = "" + Math.random() * 2000;
            });
            starElement.style.animationDuration = Math.random() * (2.5 - 1.5) + 1.5 + "s";
            starElement.style.animationPlayState = 'running';
        });
        checkOverlapInBackground();
    }
    catch (error) {
        console.error(error);
    }
}
function renderStar(star) {
    try {
        if (!star)
            throw new Error('start is required');
        var screen = document.querySelector(".screen__game");
        if (!screen)
            throw new Error("Can't cath game screen");
        var rect = screen.getBoundingClientRect();
        var top = "-100px";
        var left = Math.random() * ((rect.y + (rect.width - 100)) - rect.y) + rect.y;
        return "<img src=\"" + star.imageUrl + "\" id=\"" + star.name + "\" class=\"star\"; style=\"top:" + top + "; left:" + left + "px;\">";
    }
    catch (error) {
        console.error(error);
    }
}
function renderPlayer(swordColor) {
    try {
        var locationPath = location.href;
        var seperate = locationPath.split("/");
        if (!(seperate[seperate.length - 1] !== "game.html")) {
            var player = document.querySelector("#fighter");
            if (!player)
                throw new Error("Can't cath fighter DOM");
            var imgUrl = "";
            if (swords == undefined)
                throw new Error("No swords");
            var s = swords.find(function (sword) { return sword.color === swordColor; });
            if (s === undefined)
                throw new Error("sword color " + swordColor + " not exist");
            var html = "<div id=\"sword\" style=\"background-image: url(" + s.image + ");\"></div>\n            <img src=\"../TS/dist/fighter.jpg\">";
            player.innerHTML = html;
            document.addEventListener('keydown', listenTokeyDown);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderLogPanel(panel) {
    try {
        var locationPath = location.href;
        var seperate = locationPath.split("/");
        if (!(seperate[seperate.length - 1] !== "game.html")) {
            if (!panel)
                throw new Error("Can't cath screen UI");
            var html = "<h1>Welcome</h1>\n            <form id=\"newPlayer\" onsubmit=\"hundelSubmit(event)\">\n                <input type=\"text\" name=\"firstName\" placeholder=\"First Name\" required>\n                <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\" required>\n                <select id=\"swordList\">\n                    <option style=\"color:blue\" value=\"blueSword\">Blue sword</option>\n                    <option style=\"color:green\" value=\"greenSword\">Green sword</option>\n                    <option style=\"color:red\" value=\"redSword\">Red sword</option>\n                    <option style=\"color:white\" value=\"whiteSword\">White sword</option>\n                </select> \n                <input type=\"submit\" name=\"submit\" value=\"Go\">\n            </form>\n            <a href=\"../HTML/instructions.html\">Game Instructions</a>\n            <a href=\"../HTML/scoreTable.html\">High Scored Table</a>";
            panel.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderGamePanel(panel) {
    try {
        var locationPath = location.href;
        var seperate = locationPath.split("/");
        if (!(seperate[seperate.length - 1] !== "game.html")) {
            if (!panel)
                throw new Error("Can't cath screen UI");
            if (!players)
                throw new Error("No players");
            var player = players[(players === null || players === void 0 ? void 0 : players.length) - 1].firstName;
            var html = "<h1>Hello " + player + "</h1>\n            <form id=\"game\" onclick=\"hundelStart(event)\">\n            <input type=\"button\" name=\"start\" id=\"startGame\" value=\"Start\">\n            <input type=\"button\" name=\"leave\" id=\"exit\" value=\"Exit\">\n            </form>\n            <div class=\"container\">\n                    <div id=\"timerDisplay\">00:000</div>\n                </div>\n                <div id=\"score\">\n                <p>0</p>\n                </div>\n                <a href=\"../HTML/scoreTable.html\">High Scored Table</a>\n                <a href=\"../HTML/instructions.html\">Game Instructions</a>";
            panel.innerHTML = html;
            var timerRef = document.querySelector("#timerDisplay");
            if (!timerRef)
                throw new Error("No clock");
            timerRef.innerHTML = "00 : 000 ";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function listenTokeyDown(event) {
    try {
        event.preventDefault();
        var fighter = document.querySelector('#fighter');
        var sword_1 = document.querySelector('#sword');
        var element = document.querySelector(".screen__game");
        if (!element)
            throw new Error("Can't cath game screen");
        if (!sword_1)
            throw new Error("Can't cath sword DOM");
        var rect = element.getBoundingClientRect();
        var key = event.key;
        debugger;
        switch (event.key || event.ctrlKey || event.target.name) {
            case 'ArrowLeft':
                if (event.shiftKey == true) {
                    if ((fighter.offsetLeft - 80) >= (rect.x - 190))
                        fighter.style.left = fighter.offsetLeft - 80 + "px";
                }
                else {
                    if ((fighter.offsetLeft - 40) >= (rect.x - 190)) {
                        fighter.style.left = fighter.offsetLeft - 40 + "px";
                    }
                    fighter.style.transform = "scaleX(1)";
                }
                break;
            case 'ArrowRight':
                if (event.shiftKey == true) {
                    if ((fighter.offsetLeft + 80) <= rect.right - 300)
                        fighter.style.left = fighter.offsetLeft + 80 + "px";
                }
                else {
                    if ((fighter.offsetLeft + 40) <= (rect.right - 300)) {
                        fighter.style.left = fighter.offsetLeft + 40 + "px";
                    }
                    fighter.style.transform = "scaleX(-1)";
                }
                break;
            case " ":
                sword_1.style.rotate = "-90deg";
                sword_1.style.top = "-30px";
                sword_1.style.left = "18px";
                setTimeout(function () {
                    sword_1.style.rotate = "0deg";
                    sword_1.style.top = "-110px";
                    sword_1.style.left = "85px";
                }, 100);
        }
    }
    catch (error) {
        console.error(error);
    }
}
var _a = [0, 0], milliseconds = _a[0], seconds = _a[1];
function displayTimer() {
    var timerRef = document.querySelector("#timerDisplay");
    try {
        milliseconds += 10;
        if (milliseconds == 1000) { //full second, reset value
            milliseconds = 0;
            seconds++;
            if (seconds == 60) { // end of game
                milliseconds = 0;
                renderEndGameScreen(true, document.querySelector(".screen__end"));
            }
        }
        if (seconds === 50) { // count down, last 10 seconds
            countDownMusic();
            timerRef.style.boxShadow = "0 0 20px rgba(242, 6, 6, 0.921)"; // change timer background color
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
function animateStars(star, rect) {
    try {
        var s = document.getElementById(star.name);
        if (!s)
            throw new Error("star missing");
        s.style.left = Math.random() * ((rect.y + rect.width) - rect.y) + rect.y + "px";
        s.style.animationDuration = Math.random() * (2.5 - 1.5) + 1.5 + "s";
        s.style.animationPlayState = "running";
    }
    catch (error) {
        console.error(error);
    }
}
function checkOverlapInBackground() {
    try {
        var starsToCheck_1 = document.querySelectorAll('.star');
        var mainElement_1 = document.getElementById('sword');
        var interval = 50;
        setInterval(function () {
            starsToCheck_1.forEach(function (starToCheck) {
                if (checkOverlap(mainElement_1, starToCheck)) {
                    var starDiv = document.getElementById("" + starToCheck.id); //cath specific star html element
                    if (players === undefined)
                        throw new Error("no players");
                    var currPlayer = players[(players === null || players === void 0 ? void 0 : players.length) - 1];
                    var starHit = stars.find(function (star) { return star.name === starToCheck.id; });
                    if (!starHit)
                        throw new Error("star not found by id: " + starToCheck.id);
                    var star = document.getElementById("" + starHit.name);
                    if (!star)
                        throw new Error("star not found by id: " + starToCheck.id);
                    if ((starDiv.style.visibility === "")) {
                        var boom_1 = document.getElementById('boom');
                        if (!boom_1)
                            throw new Error("boom img not found");
                        var boomSound = new Audio("../TS/dist/boomSound.mp3");
                        if (!boomSound)
                            throw new Error("boom sound not found");
                        boomSound.play();
                        boom_1.style.left = (starDiv === null || starDiv === void 0 ? void 0 : starDiv.offsetLeft) + "px";
                        boom_1.style.top = (starDiv === null || starDiv === void 0 ? void 0 : starDiv.offsetTop) + "px";
                        boom_1.style.visibility = "visible";
                        if (currPlayer.inGame)
                            currPlayer.updateScore(starHit.value);
                        starDiv.style.visibility = "hidden";
                        var scorePanel = document.getElementById('score');
                        if (!scorePanel)
                            throw new Error("scorePanel not found");
                        scorePanel.innerHTML = "<p>" + currPlayer.currentScore + "</p>";
                        setTimeout(function () {
                            boom_1.style.left = "0px";
                            boom_1.style.top = "0px";
                            boom_1.style.visibility = "hidden";
                        }, 200);
                    }
                }
            });
        }, interval);
    }
    catch (error) {
        console.error(error);
    }
}
function checkOverlap(sword, star) {
    try {
        var rect1 = sword.getBoundingClientRect();
        var rect2 = star.getBoundingClientRect();
        return (rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top);
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function endOfGame(player) {
    try {
        console.log("endofGame player score: " + player.currentScore);
        clearInterval(timeIntervalID);
        removeEventListener('keydown', listenTokeyDown);
        updateScoreOnScreen(player, document.getElementById('score'));
        updatePlayer(player);
        addGameResultToTable(player);
        if (players === undefined)
            throw new Error("Missing players");
        var highScore_1 = players === null || players === void 0 ? void 0 : players.findIndex(function (p) { return p.record >= player.record; });
        setTimeout(function () {
            if (highScore_1 == -1)
                alert("Great job! You got a new record");
            location.href = "../HTML/scoreTable.html";
        }, 5000);
    }
    catch (error) {
    }
}
function addGameResultToTable(player) {
    try {
        if (!player)
            throw new Error("No player");
        var tempPlayer = playerShallowCopy(player);
        if (tempPlayer === undefined)
            throw new Error("Shallow copy failed");
        scoreTable === null || scoreTable === void 0 ? void 0 : scoreTable.push(tempPlayer);
        localStorage.setItem("table", JSON.stringify(scoreTable));
    }
    catch (error) {
        console.error(error);
    }
}
function playerShallowCopy(player) {
    try {
        var fName = player.firstName;
        var sName = player.lastName;
        var record = player.currentScore;
        var color = player.swordColor;
        return (new Player(fName, sName, color, null, undefined, record, record, undefined));
    }
    catch (error) {
        console.error(error);
    }
}
function updatePlayer(player) {
    try {
        player.numOfGames++;
        player.record = (player.record < player.currentScore ? player.currentScore : player.record);
        player.setInGame(false);
        localStorage.setItem("players", JSON.stringify(players));
    }
    catch (error) {
        console.error(error);
    }
}
function updateScoreOnScreen(player, scorePanel) {
    try {
        if (!scorePanel)
            throw new Error("scorePanel not found");
        scorePanel.innerHTML = "<p>" + player.currentScore + "</p>";
    }
    catch (error) {
        console.error(error);
    }
}
function countDownMusic() {
    var backgroundMusic = document.querySelector("#backgroundMusic");
    if (!backgroundMusic)
        throw new Error("Error with background music file");
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    var audio = document.querySelector("#countDown");
    audio.play();
}
