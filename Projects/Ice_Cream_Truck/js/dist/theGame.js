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
        this.id = "" + Math.random();
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
var costumers = [new Costumer('left', '../ילד1.gif'), new Costumer('right', '../ילד2.gif'), new Costumer('right', '../ילד3.gif')];
var lives = ["live", "live", "live", "live", "live"];
function getPlayer() {
    try {
        var player = localStorage.getItem("player");
        if (!player)
            throw new Error("can not find player");
        var playerToObject = JSON.parse(player);
        var name = playerToObject.name;
        var currentPlayer = new Player(name, 0);
        var root = document.querySelector("#mainName");
        if (!root)
            throw new Error("can not found root element");
        var html = "<h1> " + currentPlayer.name + "'s ICE CREAM TRUCK </h1>";
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderGamePage(rootElement) {
    try {
        var html = "<div class=\"crop\">\n            <img src=\"../ice cream truck.gif\" alt=\"\">\n            </div>";
        if (!rootElement)
            throw new Error("can not found root element");
        rootElement.innerHTML = html;
        renderLives(document.querySelector("#lives"));
        getPlayer();
    }
    catch (error) {
        console.error(error);
    }
}
function renderLives(rootElement) {
    try {
        var html_1 = "";
        lives.forEach(function (live) {
            if (live === "live") {
                html_1 += "<img src=\"../\u05D2\u05DC\u05D9\u05D3\u05D4 \u05D7\u05D9\u05D9\u05DD.gif\" alt=\"\">";
            }
        });
        if (!rootElement)
            throw new Error("can not found root element");
        rootElement.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function renderCostumers(costumers) {
    try {
        var costumersElement_1 = document.querySelector("#costumers");
        var costumersHtmlList = document.querySelectorAll(".costumer");
        if (!costumersElement_1)
            throw new Error("can not find costumers element");
        var html_2 = "";
        costumers.map(function (costumer) {
            html_2 += "<div class=\"costumer\" id=\"" + costumer.id + "\">\n            <img src=\"" + costumer.img + "\">\n            <div id=\"bubble\">\n                <img src=\"../Speech bubble.gif\" alt=\"\">\n                <div id=\"iceCreamBalls\">\n                    <div class=\"iceCreamBall\">\n                        <div class=\"iceCreamBall\">\n                            <div class=\"iceCreamBall\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>";
            costumersElement_1.innerHTML = html_2;
        });
        costumers.forEach(function (costumer) {
            costumer.addCostumerHtmlElement();
        });
        costumersHtmlList.forEach(function (costumer) {
            costumerIn(costumer, Math.floor(Math.random() * 50), Math.floor(Math.random() * 37 + 25));
        });
    }
    catch (error) {
        console.error(error);
    }
}
function wrong() {
    try {
        var liveToEarase = lives.findIndex(function (live) { return live === "live"; });
        lives[liveToEarase] = "";
        renderLives(document.querySelector("#lives"));
        console.log(liveToEarase);
        if (liveToEarase === 4) {
            gameOver(true);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function finishLevel(finish) {
    try {
        if (finish) {
            var wishes = ['GOOD JOB', 'WELL DONE', 'EXCELLENT', 'GREAT'];
            var html = "<h1> " + wishes[Math.floor(Math.random() * wishes.length)] + " </h1>";
            var rootElement = document.querySelector("#main");
            if (!rootElement)
                throw new Error("can not found root element");
            rootElement.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function gameOver(loose) {
    try {
        if (loose) {
            var html = "<h1> GAME OVER</h1>";
            var rootElement = document.querySelector("#main");
            if (!rootElement)
                throw new Error("can not found root element");
            rootElement.innerHTML = html;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function success(scoreOfSuccess, numOfSuccesses) {
    try {
        var coverScore = document.querySelector("#cover");
        if (!coverScore)
            throw new Error("can not found cover element");
        if (!numOfSuccesses)
            throw new Error("can not found number of successes");
        var height = 170 - scoreOfSuccess * numOfSuccesses;
        coverScore.style.height = height + "px";
        if (height <= 25) {
            finishLevel(true);
        }
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
function costumerIn(costumer, speed, location) {
    try {
        var bubbleElement_1 = document.querySelector("#bubble");
        var position_1 = 0;
        var entrace_1 = setInterval(getIn, speed);
        function getIn() {
            if (!bubbleElement_1)
                throw new Error("can not find bubble element");
            if (!costumer.htmlElement)
                throw new Error("can not find costumer element");
            if (position_1 === location) {
                clearInterval(entrace_1);
                bubbleElement_1.style.display = 'block';
            }
            else {
                position_1++;
                if (costumer.side === 'right') {
                    costumer.htmlElement.style.left = position_1 + '%';
                }
                else {
                    costumer.htmlElement.style.right = position_1 + '%';
                }
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
renderGamePage(document.querySelector("#truck"));
costumerIn(costumers[Math.floor(Math.random() * costumers.length)], Math.floor(Math.random() * 50), Math.floor(Math.random() * 37 + 25));
renderCostumers(costumers);
// Math.floor(Math.random() * costumers.length)
