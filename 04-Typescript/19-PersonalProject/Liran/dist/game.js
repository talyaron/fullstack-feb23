var swords = [
    { color: "blueSword", image: "./blueSword" },
    { color: "blueSword", image: "./blueSword" },
    { color: "blueSword", image: "./blueSword" },
    { color: "blueSword", image: "./blueSword" }
];
var stars = [
    { name: "blueStar", imageUrl: "./blueStar.jpg", value: 1, functionDuration: null },
    { name: "colorStar", imageUrl: "./colorStar2.png", value: 20, functionDuration: null },
    { name: "greenStar", imageUrl: "./greenStar.png", value: 1, functionDuration: null },
    { name: "lightStar", imageUrl: "./lightStar.jpg", value: 1, functionDuration: null },
    { name: "rainbowStar", imageUrl: "./rainbowStar.jpg", value: 10, functionDuration: null },
    { name: "superStar", imageUrl: "./superStar.jpg", value: 15, functionDuration: null },
    { name: "yellowStar", imageUrl: "./yellowStar.jpg", value: 1, functionDuration: null }
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
        this.id = (id) ? "id-" + new Date().getTime() + "-" + Math.random() : this.id;
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
    return Player;
}());
var players = getPlayerFromStorage();
debugger;
if (players !== undefined && players.length > 0) {
    if (players[(players === null || players === void 0 ? void 0 : players.length) - 1].isActive) {
        renderPlayer(players[players.length - 1].swordColor);
        renderGamePanel();
    }
    else
        renderLogPanel();
}
else
    renderLogPanel();
function getPlayerFromStorage() {
    try {
        var storageString = localStorage.getItem("players");
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
        renderGamePanel();
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
                // const pageRef = document.querySelector("#highScorePage") as HTMLElement;
                // if (!pageRef) throw new Error("Missing page ref");
                // pageRef.style.pointerEvents = "none";
                var button = document.getElementById("startGame");
                if (!button)
                    throw new Error("No start game button");
                button.disabled = true;
                timeIntervalID = setInterval(displayTimer, 10);
                renderStars(document.querySelector(".screen__game"));
                break;
            case "leave":
                if (players) {
                    players[(players === null || players === void 0 ? void 0 : players.length) - 1].setIsActive(false);
                    localStorage.setItem("players", JSON.stringify(players));
                    location.href = "./scoreTable.html";
                }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderGameScreen(end, screen) {
    try {
        if (!screen)
            throw new Error("No game screen to render");
        if (end) {
            if (players === undefined)
                throw new Error("No players");
            var player = players[(players === null || players === void 0 ? void 0 : players.length) - 1];
            screen.innerHTML = "<div class=\"screen__end screen__end--img\"></div>\n            <h1 class=\"screen__end screen__end--finalScore\" id=\"finalScoreBord\">Final Score: " + player.currentScore + "</h1>";
            endOfGame(player);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderStars(screen) {
    try {
        if (!screen)
            throw new Error("Can't catch game screen");
        var element = document.querySelector(".screen__game");
        if (!element)
            throw new Error("Can't catch game screen");
        var rect_1 = element.getBoundingClientRect();
        stars.forEach(function (star) {
            var starElement = document.createElement('img');
            starElement.src = "./dist/" + star.imageUrl;
            starElement.id = star.name;
            starElement.classList.add('star');
            starElement.style.top = '-100px';
            starElement.style.visibility = "visibile";
            starElement.style.left = Math.random() * ((rect_1.y + rect_1.width) - rect_1.y) + rect_1.y + "px";
            screen === null || screen === void 0 ? void 0 : screen.appendChild(starElement);
            starElement.addEventListener('animationend', function () {
                // starElement.style.left = `${Math.random() * ((rect.y + rect.width) - rect.y) + rect.y}px`;
                // starElement.style.animationDuration = `${Math.random() * (3 - 1.5) + 1.5}s`;
                console.log("Animation iteration ended for " + star.name);
            });
            starElement.style.animationDuration = Math.random() * (3 - 1.5) + 1.5 + "s";
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
        return "<img src=\"./dist/" + star.imageUrl + "\" id=\"" + star.name + "\" class=\"star\"; style=\"top:" + top + "; left:" + left + "px;\">";
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
        var html = "<h1>Welcome</h1>\n        <form id=\"newPlayer\" onsubmit=\"hundelSubmit(event)\">\n            <input type=\"text\" name=\"firstName\" placeholder=\"First Name\" required>\n            <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\" required>\n            <select id=\"swordList\">\n                <option style=\"color:blue\" value=\"blueSword\">Blue sword</option>\n                <option style=\"color:green\" value=\"greenSword\">Green sword</option>\n                <option style=\"color:red\" value=\"redSword\">Red sword</option>\n                <option style=\"color:white\" value=\"whiteSword\">White sword</option>\n            </select> \n            <input type=\"submit\" name=\"submit\" value=\"Go\">\n        </form>\n        <a href=\"./instructions.html\">Game Instructions</a>";
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
        _a = [0, 0, 0, 0], milliseconds = _a[0], seconds = _a[1], minutes = _a[2], hours = _a[3];
        var player = players[(players === null || players === void 0 ? void 0 : players.length) - 1].firstName;
        var html = "<h1>Hello " + player + "</h1>\n        <form id=\"game\" onclick=\"hundelStart(event)\">\n        <input type=\"button\" name=\"start\" id=\"startGame\" value=\"Start\">\n        <input type=\"button\" name=\"leave\" id=\"exit\" value=\"Exit\">\n        </form>\n        <div class=\"container\">\n                <div id=\"timerDisplay\">00:000</div>\n            </div>\n            <a href=\"./scoreTable.html\">High Scored Table</a>\n            <a href=\"./instructions.html\">Game Instructions</a>";
        panel.innerHTML = html;
        var timerRef = document.querySelector("#timerDisplay");
        if (!timerRef)
            throw new Error("No clock");
        timerRef.innerHTML = "00 : 000 ";
    }
    catch (error) {
        console.error(error);
    }
}
var fighter = document.querySelector('#fighter');
document.addEventListener('keydown', function (event) {
    try {
        event.preventDefault();
        var sword_1 = document.querySelector('#sword');
        var newPlayer = document.querySelector('#newPlayer');
        var element = document.querySelector(".screen__game");
        if (!element)
            throw new Error("Can't cath game screen");
        if (!sword_1 && !newPlayer)
            throw new Error("Can't cath sword DOM");
        var rect = element.getBoundingClientRect();
        console.dir(event);
        var key = event.key;
        var reg = new RegExp(/^[a-zA-Z]+$/);
        if (event && (event.target.name == "firstName" || event.target.name == "lastName" && event.key)) {
            if (event.target.name == "firstName") {
                if (key !== undefined && key.length == 1 && reg.test(key)) {
                    newPlayer[0].value += event.key;
                }
                else if (key == "Backspace") {
                    if (newPlayer[0].value.length > 0) {
                        var str = newPlayer[0].value;
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
                        var str = newPlayer[1].value;
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
    }
    catch (error) {
        console.error(error);
    }
});
function displayTimer() {
    var timerRef = document.querySelector("#timerDisplay");
    try {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds == 60) {
                milliseconds = 0;
                renderGameScreen(true, document.querySelector(".screen__end"));
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
function animateStars(star, rect) {
    try {
        var s = document.getElementById(star.name);
        if (!s)
            throw new Error("star missing");
        s.style.animationDelay = Math.random() * (3 - 1.5) + 1.5 + "s";
        s.style.left = Math.random() * ((rect.y + rect.width) - rect.y) + rect.y + "px";
        s.style.animationDuration = Math.random() * (3 - 1.5) + 1.5 + "s";
        s.style.animationPlayState = "running";
    }
    catch (error) {
        console.error(error);
    }
}
function checkOverlapInBackground() {
    try {
        var element = document.querySelector(".screen__game");
        var elementsToCheck_1 = document.querySelectorAll('.star');
        var mainElement_1 = document.getElementById('fighter');
        var interval = 50;
        setInterval(function () {
            elementsToCheck_1.forEach(function (element) {
                if (checkOverlap(mainElement_1, element)) {
                    var elementDiv_1 = document.getElementById("" + element.id);
                    var boom_1 = document.getElementById('boom');
                    boom_1.style.left = (elementDiv_1 === null || elementDiv_1 === void 0 ? void 0 : elementDiv_1.offsetLeft) + "px";
                    boom_1.style.top = (elementDiv_1 === null || elementDiv_1 === void 0 ? void 0 : elementDiv_1.offsetTop) + "px";
                    boom_1.style.visibility = "visible";
                    elementDiv_1.style.visibility = "hidden";
                    if (players === undefined)
                        throw new Error("no players");
                    var currPlayer = players[(players === null || players === void 0 ? void 0 : players.length) - 1];
                    var starHit = stars.find(function (star) { return star.name === element.id; });
                    if (!starHit)
                        throw new Error("star not found by id: " + element.id);
                    currPlayer.updateScore(starHit.value);
                    console.log("hit " + element.id + ", curren score is:" + currPlayer.currentScore);
                    setTimeout(function () {
                        boom_1.style.left = "0px";
                        boom_1.style.top = "0px";
                        boom_1.style.visibility = "hidden";
                    }, 500);
                    setTimeout(function () {
                        elementDiv_1.style.visibility = "visible";
                    }, 1200);
                    // Add your custom logic here   
                }
            });
        }, interval);
    }
    catch (error) {
        console.error(error);
    }
}
function checkOverlap(element1, element2) {
    var rect1 = element1.getBoundingClientRect();
    var rect2 = element2.getBoundingClientRect();
    return (rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top);
}
function endOfGame(player) {
    try {
        clearInterval(timeIntervalID);
        debugger;
        player.numOfGames++;
        debugger;
        player.record = (player.record < player.currentScore ? player.currentScore : player.record);
        player.currentScore = 0;
        localStorage.setItem("players", JSON.stringify(players));
        setTimeout(function () {
            location.href = "scoreTable.html";
        }, 6000);
    }
    catch (error) {
    }
}
