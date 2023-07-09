var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var cardsDeck = [
    { name: "hA", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/sa.png", value: 1 },
    { name: "h2", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s2.png", value: 2 },
    { name: "h3", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s3.png", value: 3 },
    { name: "h4", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s4.png", value: 4 },
    { name: "h5", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s5.png", value: 5 },
    { name: "h6", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s6.png", value: 6 },
    { name: "h7", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s7.png", value: 7 },
    { name: "h8", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s8.png", value: 8 },
    { name: "h9", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s9.png", value: 9 },
    { name: "h10", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/s10.png", value: 10 },
    { name: "hJ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/sj.png", value: 10 },
    { name: "hQ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/sq.png", value: 10 },
    { name: "hK", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/sk.png", value: 10 },
    { name: "dA", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/la.png", value: 1 },
    { name: "d2", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l2.png", value: 2 },
    { name: "d3", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l3.png", value: 3 },
    { name: "d4", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l4.png", value: 4 },
    { name: "d5", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l5.png", value: 5 },
    { name: "d6", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l6.png", value: 6 },
    { name: "d7", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l7.png", value: 7 },
    { name: "d8", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l8.png", value: 8 },
    { name: "d9", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l9.png", value: 9 },
    { name: "d10", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/l10.png", value: 10 },
    { name: "dJ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/lj.png", value: 10 },
    { name: "dQ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/lq.png", value: 10 },
    { name: "dK", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/lk.png", value: 10 },
    { name: "cA", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/ka.png", value: 1 },
    { name: "c2", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k2.png", value: 2 },
    { name: "c3", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k3.png", value: 3 },
    { name: "c4", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k4.png", value: 4 },
    { name: "c5", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k5.png", value: 5 },
    { name: "c6", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k6.png", value: 6 },
    { name: "c7", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k7.png", value: 7 },
    { name: "c8", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k8.png", value: 8 },
    { name: "c9", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k9.png", value: 9 },
    { name: "c10", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/k10.png", value: 10 },
    { name: "cJ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/kj.png", value: 10 },
    { name: "cQ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/kq.png", value: 10 },
    { name: "cK", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/kk.png", value: 10 },
    { name: "sA", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/pa.png", value: 1 },
    { name: "s2", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p2.png", value: 2 },
    { name: "s3", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p3.png", value: 3 },
    { name: "s4", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p4.png", value: 4 },
    { name: "s5", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p5.png", value: 5 },
    { name: "s6", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p6.png", value: 6 },
    { name: "s7", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p7.png", value: 7 },
    { name: "s8", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p8.png", value: 8 },
    { name: "s9", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p9.png", value: 9 },
    { name: "s10", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/p10.png", value: 10 },
    { name: "sJ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/pj.png", value: 10 },
    { name: "sQ", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/pq.png", value: 10 },
    { name: "sK", image: "https://www.improvemagic.com/wp-content/uploads/2020/11/pk.png", value: 10 }
];
// create cards deck for game : numOfCardsDeck * single deck 
var numOfCardsDeck = 6;
var Player = /** @class */ (function () {
    function Player(name, cash, id, cards, sit, currentBet) {
        this.name = name;
        this.cash = cash;
        this.cards = [];
        this.handValue = 0;
        this.currentBet = 0;
        if (!id || id === undefined)
            this.id = "id-" + new Date().getTime() + "-" + Math.random();
        else
            this.id = id;
        if (sit)
            this.sit = sit;
        if (cards !== undefined)
            this.cards = __assign({}, cards);
        this.setChip();
    }
    Player.prototype.setChip = function () {
        try {
            this.chip = Math.floor(this.cash / 10);
        }
        catch (error) {
            console.error(error);
        }
    };
    Player.prototype.credit = function (credit) {
        try {
            if (isNaN(credit))
                throw new Error(credit + " is not a number");
            this.cash += credit;
        }
        catch (error) {
            console.error(error);
        }
    };
    Player.prototype.emptyHand = function () {
        var _this = this;
        try {
            this.cards.forEach(function () { return _this.cards.pop(); });
            this.handValue = 0;
            this.currentBet = 0;
        }
        catch (error) {
            console.error(error);
        }
    };
    Player.prototype.computeCurrentHand = function () {
        var _this = this;
        try {
            this.cards.forEach(function (card) { return _this.handValue += card.value; });
        }
        catch (error) {
            console.error(error);
        }
    };
    Player.prototype.setCurrentBet = function (op) {
        try {
            switch (op) {
                case "Double" || "Split":
                    this.currentBet *= 2;
                    break;
                default: throw new Error("Not operation on bet");
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    Player.prototype.addCard = function (card) {
        try {
            if (!card)
                throw new Error("Not a Card");
            this.cards.push(__assign({}, card));
            this.computeCurrentHand();
        }
        catch (error) {
            console.error(error);
        }
    };
    return Player;
}());
var gameDeck = getCardsFromStorage();
var activePlayers = getPlayterFromStorage();
if (activePlayers)
    activePlayers.push(new Player("dealer", 0, "id-0", []));
renderBord(document.querySelector("#bord"));
renderPlayersChairs(document.querySelector("#bord"));
renderPlayersNames();
console.dir(activePlayers);
function getCardsFromStorage() {
    try {
        var storageString = localStorage.getItem("gameDeck");
        if (!storageString)
            throw new Error("No such name in local storage");
        //convert string to array of objects
        var storageArray = JSON.parse(storageString);
        //convert array of objects to array of Card | Player
        var cards = storageArray.map(function (card) {
            return { name: card.name, image: card.image, value: card.value };
        });
        return cards;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function getPlayterFromStorage() {
    try {
        var storageString = localStorage.getItem("players");
        if (!storageString)
            throw new Error("No such name in local storage");
        //convert string to array of objects
        var storageArray = JSON.parse(storageString);
        //convert array of objects to array of Card | Player
        var plyers = storageArray.map(function (player) {
            return new Player(player.name, player.cash, player.id, player.cards, player.sit, player.currentBet);
        });
        return plyers;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function createGameDeck(gameDeck) {
    try {
        for (var i = 0; i < numOfCardsDeck; i++) {
            cardsDeck.forEach(function (card) {
                var singleCard = __assign({}, card);
                gameDeck.push(singleCard);
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
function shuffleGameDeck(gameDeck) {
    try {
        if (!gameDeck)
            throw new Error("Empty game deck");
        var coppiedCards = __assign({}, gameDeck);
        var shuffeldDeck = [];
        for (var i = 0; i < gameDeck.length; i++) {
            var randomIndx = Math.floor(Math.random() * coppiedCards.length);
            var card = __assign({}, coppiedCards[randomIndx]);
            shuffeldDeck.push(card);
            coppiedCards.splice(randomIndx, 1);
        }
        shuffeldDeck.forEach(function (card) {
            gameDeck.splice(gameDeck.length - 1, 1);
            gameDeck.push(__assign({}, card));
        });
        localStorage.setItem("gameDeck", JSON.stringify(gameDeck));
    }
    catch (error) {
        console.error(error);
    }
}
function addPlyer() {
    try {
        var fullCapacity_1 = true;
        activePlayers === null || activePlayers === void 0 ? void 0 : activePlayers.forEach(function (p) {
            if (!p.sit && p.id !== "id-0")
                fullCapacity_1 = false;
        });
        if (fullCapacity_1)
            alert("Table is full");
        else {
            var name_1 = prompt("Please enter your name: ");
            if (name_1 === "" || !name_1)
                throw new Error("No Name");
            console.dir(activePlayers);
            var nameExsit = activePlayers === null || activePlayers === void 0 ? void 0 : activePlayers.findIndex(function (player) { return player.name === name_1; });
            if (nameExsit !== -1)
                alert("Name alreday exsist, try again");
            else {
                var fisrtCash = Number(prompt("How much money you want to put in?: "));
                if (isNaN(fisrtCash) || fisrtCash === undefined || fisrtCash < 10)
                    throw new Error("No Money");
                var newPlayer = new Player(name_1, fisrtCash, null, []);
                var openSit_1 = false;
                var sit_1;
                while (!openSit_1) {
                    sit_1 = Math.floor(Math.random() * 7 + 1);
                    activePlayers === null || activePlayers === void 0 ? void 0 : activePlayers.forEach(function (player) {
                        if (player.sit == sit_1)
                            openSit_1 = true;
                    });
                    if (!openSit_1)
                        openSit_1 = true;
                    else
                        openSit_1 = false;
                }
                newPlayer.sit = sit_1;
                activePlayers === null || activePlayers === void 0 ? void 0 : activePlayers.push(newPlayer);
                renderPlayersNames();
                localStorage.setItem("players", JSON.stringify(activePlayers));
                if ((activePlayers === null || activePlayers === void 0 ? void 0 : activePlayers.length) === 1) {
                    var inputStart = document.querySelector("#start");
                    if (!inputStart)
                        throw new Error("Couldn't cacth start button");
                    // inputStart.style.disable = "true";
                }
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function dealCards() {
    try {
        if (!activePlayers)
            throw new Error("No players, can't deal cards");
        var playerDidntBet = activePlayers.find(function (player) { return player.currentBet === 0; });
        if (playerDidntBet !== undefined)
            alert("Not all players placed their bet");
    }
    catch (error) {
        console.error(error);
    }
}
function hundleSettingEvent(ev) {
    try {
        console.dir(ev);
        var buttonName = ev.target.name;
        if (!buttonName)
            throw new Error("No name for the button");
        switch (buttonName) {
            case "Add":
                addPlyer();
                break;
            case "deal":
                dealCards();
                break;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function hundleLeave(ev, sitToDelete) {
    try {
        console.dir(ev);
        if (!sitToDelete)
            throw new Error("No ID");
        if (activePlayers === undefined)
            throw new Error("No active players");
        var playerTodelete = activePlayers.find(function (p) { return p.sit === sitToDelete; });
        var clearForm = document.querySelector("#sit-" + sitToDelete);
        if (!clearForm)
            throw new Error("Wrong sit");
        clearForm.innerHTML = "";
        var clearName = document.querySelector("#name-" + sitToDelete);
        if (!clearName)
            throw new Error("Wrong sit");
        clearName.innerHTML = "";
        activePlayers.splice(activePlayers.findIndex(function (p) { return p.sit === sitToDelete; }), 1);
        localStorage.setItem("players", JSON.stringify(activePlayers));
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetBet(ev) {
    try {
        debugger;
        var playerSit_1 = ev.target.id;
        if (activePlayers === undefined)
            throw new Error("No players");
        var player = activePlayers === null || activePlayers === void 0 ? void 0 : activePlayers.findIndex(function (p) { return "sit-" + p.sit === playerSit_1; });
        if (player === undefined)
            throw new Error("Player not exist");
        var playerBet = ev.target.chipsToBet.valueAsNumber;
        activePlayers[player].currentBet = playerBet;
        activePlayers[player].chip -= playerBet;
        localStorage.setItem("players", JSON.stringify(activePlayers));
        renderPlayersNames();
    }
    catch (error) {
        console.error(error);
    }
}
function renderBord(htmlElement) {
    try {
        if (!htmlElement)
            throw new Error("No element");
        var html = "<img src=\"./dist/deck_of_cards.png\" alt=\"\">\n        <form onclick=\"hundleSettingEvent(event)\">\n            <input type=\"button\" name=\"Add\" value=\"ADD Player\">\n            <input type=\"button\" name=\"deal\" id=\"start\" value=\"Deal Cards\">\n            <input type=\"button\" name=\"table\" value=\"View Table\">\n            <input type=\"button\" name=\"remove\" value=\"Remove Player\">\n        </form> ";
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderPlayersChairs(htmlElement) {
    try {
        if (!htmlElement)
            throw new Error("No element");
        var html = "  <div class=\"players\">\n        <div class=\"players__player players__player--dealer\">\n            <div class=\"cards\" id=\"cards-dealer\"></div>\n            <div class=\"name\">Dealer</div>\n        </div>    \n        <div class=\"players__player players__player--1\">\n            <div class=\"cards\" id=\"cards-1\"></div>\n            <form onsubmit=\"handleSetBet(event)\" id=\"sit-1\">\n            </form>\n            <div class=\"name\" id=\"name-1\"></div>\n        </div>    \n        <div class=\"players__player players__player--2\">\n            <div class=\"cards\" id=\"cards-2\"></div>\n            <form onsubmit=\"handleSetBet(event)\" id=\"sit-2\">\n        </form>\n            <div class=\"name\" id=\"name-2\"></div>\n        </div>    \n        <div class=\"players__player players__player--3\">\n            <div class=\"cards\" id=\"cards-3\"></div>\n            <form onsubmit=\"handleSetBet(event)\" id=\"sit-3\">\n        </form>\n            <div class=\"name\" id=\"name-3\"></div>\n        </div>    \n        <div class=\"players__player players__player--4\">\n            <div class=\"cards\" id=\"cards-4\"></div>\n            <form onsubmit=\"handleSetBet(event)\" id=\"sit-4\">\n        </form>\n            <div class=\"name\" id=\"name-4\"></div>\n        </div>    \n        <div class=\"players__player players__player--5\">\n            <div class=\"cards\" id=\"cards-5\"></div>\n            <form onsubmit=\"handleSetBet(event)\" id=\"sit-5\">\n        </form>\n            <div class=\"name\" id=\"name-5\"></div>\n        </div>    \n        <div class=\"players__player players__player--6\">\n            <div class=\"cards\" id=\"cards-6\"></div>\n            <form onsubmit=\"handleSetBet(event)\" id=\"sit-6\">\n        </form>\n            <div class=\"name\" id=\"name-6\"></div>\n        </div>    \n        <div class=\"players__player players__player--7\">\n            <div class=\"cards\" id=\"cards-7\"></div>\n            <form onsubmit=\"handleSetBet(event)\" id=\"sit-7\">\n        </form>\n            <div class=\"name\" id=\"name-7\"></div>\n        </div>    \n        </div> ";
        htmlElement.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderPlayersNames() {
    try {
        if (activePlayers === undefined)
            throw new Error("No Players");
        activePlayers.forEach(function (player) {
            if (player.id !== "id-0") {
                var playerName = document.querySelector("#name-" + player.sit);
                if (!playerName)
                    throw new Error("name ID is wrong");
                playerName.innerHTML = "<p>" + player.name + " - chips:" + player.chip * 10 + "$</p>";
                var playerBet = document.querySelector("#sit-" + player.sit);
                if (!playerBet)
                    throw new Error("name Id is wrong");
                playerBet.innerHTML = "<input type=\"number\" name=\"chipsToBet\" min=\"10\" max=\"" + Math.min(player.chip * 10, 400) + "\" step=\"10\"  required>\n                <input type=\"submit\" value=\"Bet\">\n                <input type=\"button\" value=\"Leave\" onClick=\"hundleLeave(event, " + player.sit + ")\">";
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
