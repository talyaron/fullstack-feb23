var Player = /** @class */ (function () {
    function Player(name, points) {
        this.name = name;
        this.points = points;
    }
    return Player;
}());
var Costumer = /** @class */ (function () {
    function Costumer(side, img) {
        this.side = side;
        this.img = img;
        this.id = "cost" + Math.floor(Math.random() * 1000);
    }
    Costumer.prototype.addCostumerHtmlElement = function () {
        try {
            this.htmlElement = document.querySelector("#" + this.id);
            if (!this.htmlElement)
                throw new Error("can not find html element");
        }
        catch (error) {
            console.error(error);
        }
    };
    return Costumer;
}());
var costumers = [new Costumer('left', '../ילד1.gif'), new Costumer('right', '../ילד2.gif'), new Costumer('right', '../ילד3.gif'), new Costumer('left', '../ילד4.gif'), new Costumer('left', '../ילד5.gif'), new Costumer('left', '../ילד6.gif')];
var IceCream = /** @class */ (function () {
    function IceCream(name, color) {
        this.name = name;
        this.color = color;
    }
    return IceCream;
}());
var iceCreams = [new IceCream("chocolate", "brown"), new IceCream("banana", "yellow"), new IceCream("strawberry", "red")];
var lives = ["live", "live", "live", "live", "live"];
var livesAsString = JSON.stringify(lives);
localStorage.setItem("lives", livesAsString);
var selectedBalls = "";
var allBalls = "";
var wrongSounds = ["../sounds/angry.mp3", "../sounds/not-thanks.mp3", "../sounds/growly.mp3"];
var successSounds = ["../sounds/lolipop-lick.mp3", "../sounds/thank-you.mp3", "../sounds/yummy.mp3"];
function KeyboardControl() {
    try {
        var i_1 = 0;
        var iceCream_1 = document.querySelector("#" + iceCreams[i_1].name);
        var nextIceCream_1 = document.querySelector("#" + iceCreams[i_1 + 1].name);
        iceCream_1.style.boxShadow = "0px 0px 4px 5px #ffffb9";
        nextIceCream_1.style.boxShadow = "none";
        var spoon_1 = document.querySelector("#spoon");
        var countBall_1 = 0;
        document.addEventListener('keyup', function (event) {
            switch (event.key) {
                case 'ArrowLeft':
                    if (i_1 !== iceCreams.length - 1) {
                        spoon_1.style.left = spoon_1.offsetLeft - 435 + "px";
                    }
                    if (i_1 === 0) {
                        nextIceCream_1.style.boxShadow = "0px 0px 4px 5px #ffffb9";
                        iceCream_1.style.boxShadow = "none";
                        i_1++;
                    }
                    else {
                        if (i_1 === iceCreams.length - 1) {
                            var iceCream_2 = document.querySelector("#" + iceCreams[i_1].name);
                            iceCream_2.style.boxShadow = "0px 0px 4px 5px #ffffb9";
                            i_1 = i_1;
                        }
                        else {
                            var nextIceCream_2 = document.querySelector("#" + iceCreams[i_1 + 1].name);
                            var iceCream_3 = document.querySelector("#" + iceCreams[i_1].name);
                            nextIceCream_2.style.boxShadow = "0px 0px 4px 5px #ffffb9";
                            iceCream_3.style.boxShadow = "none";
                            i_1++;
                        }
                    }
                    break;
                case 'ArrowRight':
                    if (i_1 !== 0) {
                        spoon_1.style.left = spoon_1.offsetLeft - 225 + "px";
                    }
                    if (i_1 === iceCreams.length) {
                        var previousIceCream = document.querySelector("#" + iceCreams[i_1 - 1].name);
                        previousIceCream.style.boxShadow = "0px 0px 4px 5px #ffffb9";
                    }
                    else {
                        if (i_1 === 0) {
                            iceCream_1.style.boxShadow = "0px 0px 4px 5px #ffffb9";
                            i_1 = i_1;
                        }
                        else {
                            var previousIceCream = document.querySelector("#" + iceCreams[i_1 - 1].name);
                            var iceCream_4 = document.querySelector("#" + iceCreams[i_1].name);
                            previousIceCream.style.boxShadow = "0px 0px 4px 5px #ffffb9";
                            iceCream_4.style.boxShadow = "none";
                            i_1--;
                        }
                    }
                    break;
                case 'ArrowUp':
                    if (countBall_1 < 3) {
                        countBall_1++;
                        addIceCreamBall(iceCreams[i_1].color);
                        selectedBalls += iceCreams[i_1].color + " ";
                    }
                    break;
                case 'Enter':
                    if ("" + selectedBalls === "" + allBalls) {
                        console.log("succes");
                        success(10, numOfSuccesses());
                        countBall_1 = 0;
                    }
                    else {
                        wrong();
                        countBall_1 = 0;
                    }
                    selectedBalls = "";
                    removIceCReamBalls();
                    break;
                case 'ArrowDown':
                    removIceCReamBalls();
                    selectedBalls = '';
                    countBall_1 = 0;
                    break;
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
var html = "";
function addIceCreamBall(color) {
    try {
        var holderCone = document.querySelector("#ballsInCone");
        html += "<div id = \"ballInCone\" style=\"background-color: " + color + ";\"</div>";
        holderCone.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function removIceCReamBalls() {
    try {
        var holderCone = document.querySelector("#ballsInCone");
        html = "";
        holderCone.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function getPlayer() {
    try {
        var player_1 = localStorage.getItem("player");
        if (!player_1)
            throw new Error("can not find player");
        var playerToObject = JSON.parse(player_1);
        var name = playerToObject.name;
        var currentPlayer = new Player(name, 0);
        var root = document.querySelector("#mainName");
        if (!root)
            throw new Error("can not found root element");
        var html_1 = "<h1> " + currentPlayer.name + "'s ICE CREAM VAN </h1>";
        root.innerHTML = html_1;
        return currentPlayer;
    }
    catch (error) {
        console.error(error);
    }
}
var costumersEntraces = setInterval(renderCostumers, 6000);
function newGame() {
    try {
        if (!player || !coverScore)
            throw new Error("can not find elements");
        player.points = 0;
        var score = JSON.stringify(player.points);
        localStorage.setItem("score", score);
        var heightOfCover = 170;
        var heightOfCoverAsString = JSON.stringify(heightOfCover);
        localStorage.setItem("heightOfCover", heightOfCoverAsString);
        coverScore.style.height = heightOfCover + "px";
        numberOfSuccesses = 0;
        var numOfSuccessesesAsString = JSON.stringify(numberOfSuccesses);
        localStorage.setItem("numOfSuccess", numOfSuccessesesAsString);
        lives = ["live", "live", "live", "live", "live"];
        var livesAsString_1 = JSON.stringify(lives);
        localStorage.setItem("lives", livesAsString_1);
        renderGamePage(document.querySelector("#truck"));
        if (!main)
            throw new Error("can not find main elenent");
        var html_2 = '';
        main.innerHTML = html_2;
        var costumersEntraces_1 = setInterval(renderCostumers, 6000);
    }
    catch (error) {
        console.error(error);
    }
}
function renderGamePage(rootElement) {
    try {
        if (!player)
            throw new Error("can not find player");
        var scoreAsString = localStorage.getItem("score");
        player.points = Number(scoreAsString);
        playerPoints.innerHTML = "" + player.points;
        var heightOfCoverAsString = localStorage.getItem("heightOfCover");
        var heightOfCover = Number(heightOfCoverAsString);
        if (!coverScore)
            throw new Error("can not found cover element");
        coverScore.style.height = heightOfCover + "px";
        var numOfSuccessesAsString = localStorage.getItem("numOfSuccess");
        numberOfSuccesses = Number(numOfSuccessesAsString);
        var livesAsString_2 = localStorage.getItem("lives");
        if (!livesAsString_2)
            throw new Error("can not find lives");
        var currentLives_1 = JSON.parse(livesAsString_2);
        lives.forEach(function (li, i) {
            lives[i] = currentLives_1[i];
        });
        var html_3 = "<div class=\"crop\">\n            <img src=\"../ice cream truck.gif\" alt=\"\">\n            </div>";
        if (!rootElement)
            throw new Error("can not found root element");
        rootElement.innerHTML = html_3;
        renderLives(document.querySelector("#lives"));
        getPlayer();
        KeyboardControl();
    }
    catch (error) {
        console.error(error);
    }
}
var i = 0;
function renderLives(rootElement) {
    try {
        var html_4 = "";
        lives.forEach(function (live) {
            if (live === "live") {
                html_4 += "<img src=\"../\u05D2\u05DC\u05D9\u05D3\u05D4 \u05D7\u05D9\u05D9\u05DD.gif\" alt=\"\">";
            }
        });
        if (!rootElement)
            throw new Error("can not found root element");
        rootElement.innerHTML = html_4;
    }
    catch (error) {
        console.error(error);
    }
}
var startTimer = 0;
var costumerArrived = 0;
var costumerGetIceCream = 0;
function costumerIn(costumer) {
    try {
        var speed_1 = Math.floor(Math.random() * 50);
        var location_1 = Math.floor(Math.random() * 37 + 25);
        var bubbleElement_1 = document.querySelector("#bubble" + costumer.id);
        var startPosition_1 = 0;
        var entrace_1 = setInterval(getIn, speed_1);
        function getIn() {
            try {
                if (!bubbleElement_1)
                    throw new Error("can not find bubble element");
                if (!costumer.htmlElement)
                    throw new Error("can not find costumer element");
                if (startPosition_1 === location_1) {
                    clearInterval(entrace_1);
                    costumerGetIceCream = 0;
                    bubbleElement_1.style.display = 'block';
                    startTimer = new Date().getTime();
                    setTimeout(function () {
                        costumerArrived = 1;
                        if (costumerGetIceCream !== 1) {
                            if (!player)
                                throw new Error("can not find player");
                            player.points -= 500;
                            var pointsToString = JSON.stringify(player.points);
                            localStorage.setItem("score", pointsToString);
                            if (player.points < 0) {
                                player.points = 0;
                            }
                            playerPoints.innerHTML = "" + player.points;
                        }
                    }, 4000);
                    setTimeout(setInterval, 4000, getOut, speed_1);
                }
                else {
                    startPosition_1++;
                    if (costumer.side === 'right') {
                        costumer.htmlElement.style.right = startPosition_1 + '%';
                    }
                    else {
                        costumer.htmlElement.style.left = startPosition_1 + '%';
                    }
                }
            }
            catch (error) {
                console.error(error);
            }
        }
        function getOut() {
            try {
                if (!bubbleElement_1)
                    throw new Error("can not find bubble element");
                if (!costumer.htmlElement)
                    throw new Error("can not find costumer element");
                if (location_1 === 100) {
                }
                else {
                    bubbleElement_1.style.display = 'none';
                    location_1++;
                    if (costumer.side === 'right') {
                        costumer.htmlElement.style.right = location_1 + '%';
                    }
                    else {
                        costumer.htmlElement.style.left = location_1 + '%';
                    }
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderCostumers() {
    try {
        var costumersElement_1 = document.querySelector("#costumers");
        if (!costumersElement_1)
            throw new Error("can not find costumers element");
        var ball1_1 = iceCreams[Math.floor(Math.random() * iceCreams.length)].color;
        var ball2_1 = iceCreams[Math.floor(Math.random() * iceCreams.length)].color;
        var ball3_1 = iceCreams[Math.floor(Math.random() * iceCreams.length)].color;
        var html_5 = "";
        costumers.forEach(function (costumer) {
            if (costumer.side === 'left') {
                html_5 += "<div class=\"costumer\" id=\"" + costumer.id + "\" style=\"left: -220px;\">";
            }
            else {
                html_5 += "<div class=\"costumer\" id=\"" + costumer.id + "\" style=\"right:-200px;\">";
            }
            html_5 += "<img src=\"" + costumer.img + "\">\n            <div class=\"bubble\" id=\"bubble" + costumer.id + "\">\n            <img src=\"../Speech bubble.gif\" alt=\"\">\n            <div id=\"iceCreamBalls\">\n            <div class=\"iceCreamBall\" style=\"background-color:" + ball1_1 + " ;\">\n            <div class=\"iceCreamBall\" style=\"background-color:" + ball2_1 + " ;\">\n            <div class=\"iceCreamBall\" style=\"background-color:" + ball3_1 + " ;\"></div>\n            </div>\n            </div>\n            </div>\n            </div>\n            </div>";
            costumersElement_1.innerHTML = html_5;
        });
        costumers.forEach(function (costumer) {
            costumer.addCostumerHtmlElement();
        });
        allBalls = ball1_1 + " " + ball2_1 + " " + ball3_1 + " ";
        costumerIn(costumers[i]);
        i++;
        if (i === costumers.length) {
            i = 0;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function wrong() {
    try {
        costumerGetIceCream = 1;
        var wrongSound = new Audio("" + wrongSounds[Math.floor(Math.random() * 3)]);
        wrongSound.play();
        var liveToEarase = lives.findIndex(function (live) { return live === "live"; });
        lives[liveToEarase] = "";
        var livesAsString_3 = JSON.stringify(lives);
        localStorage.setItem("lives", livesAsString_3);
        console.log(lives);
        console.log(livesAsString_3);
        renderLives(document.querySelector("#lives"));
        if (liveToEarase === 4) {
            gameOver();
        }
    }
    catch (error) {
        console.error(error);
    }
}
function finishLevel(finish) {
    try {
        if (!player)
            throw new Error("can not find player");
        if (finish) {
            var wishes = ['GOOD JOB', 'WELL DONE', 'EXCELLENT', 'GREAT'];
            var html_6 = "<h1> " + wishes[Math.floor(Math.random() * wishes.length)] + " </h1>\n            <h3> Your score <br>: " + player.points + "</h3>";
            var rootElement = document.querySelector("#main");
            if (!rootElement)
                throw new Error("can not found root element");
            rootElement.innerHTML = html_6;
            clearInterval(costumersEntraces);
            return true;
        }
    }
    catch (error) {
        console.error(error);
    }
}
var player = getPlayer();
var playerPoints = document.querySelector("#points");
var coverScore = document.querySelector("#cover");
function success(scoreOfSuccess, numOfSuccesses) {
    try {
        costumerGetIceCream = 1;
        var successSound = new Audio("" + successSounds[Math.floor(Math.random() * 3)]);
        successSound.play();
        var endTimer = new Date().getTime();
        var timeOfSuccess = (endTimer - startTimer) / 1000;
        if (!player)
            throw new Error("can not find player");
        player.points += Math.floor(5000 / timeOfSuccess);
        playerPoints.innerHTML = "" + player.points;
        if (!coverScore)
            throw new Error("can not found cover element");
        if (!numOfSuccesses)
            throw new Error("can not found number of successes");
        var heightOfCover = 170 - scoreOfSuccess * numOfSuccesses;
        coverScore.style.height = heightOfCover + "px";
        if (heightOfCover <= 25) {
            finishLevel(true);
        }
        var pointsToString = JSON.stringify(player.points);
        localStorage.setItem("score", pointsToString);
        var heightOfCoverToString = JSON.stringify(heightOfCover);
        localStorage.setItem("heightOfCover", heightOfCoverToString);
        var numOfSuccessesAsString = JSON.stringify(numOfSuccesses);
        localStorage.setItem("numOfSuccess", numOfSuccessesAsString);
    }
    catch (error) {
        console.error(error);
    }
}
var main = document.querySelector("#main");
function gameOver() {
    try {
        if (!player)
            throw new Error("can not find player");
        var html_7 = "<h2> GAME OVER</h2>\n        <h3> Your score: <br> " + player.points + "</h3>\n    <button onclick=\"newGame()\">REPLAY</button>\n        ";
        if (!main)
            throw new Error("can not found root element");
        main.innerHTML = html_7;
        clearInterval(costumersEntraces);
        return true;
    }
    catch (error) {
        console.error(error);
    }
}
var numberOfSuccesses = 0;
function numOfSuccesses() {
    try {
        numberOfSuccesses++;
        return numberOfSuccesses;
    }
    catch (error) {
        console.error(error);
    }
}
renderGamePage(document.querySelector("#truck"));
