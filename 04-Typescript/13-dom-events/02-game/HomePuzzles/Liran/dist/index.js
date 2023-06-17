function reloadPage() {
    location.reload();
}
var restart = document.querySelector("#restart");
restart === null || restart === void 0 ? void 0 : restart.addEventListener("click", function () {
    reloadPage();
});
function renderBord() {
    try {
        console.log("renderBord");
        var wrapper = document.querySelector("#wrapper");
        if (!wrapper)
            throw new Error("Error in wrapper");
        var index_1 = 0;
        for (var i = 0; i < 8; i++) {
            wrapper.innerHTML += "<div class=\"rows\">\n            <div id=box" + index_1++ + " class=\"box\"></div>\n            <div id=box" + index_1++ + " class=\"box\"></div>\n            <div id=box" + index_1++ + " class=\"box\"></div>\n            <div id=box" + index_1++ + " class=\"box\"></div>\n            <div id=box" + index_1++ + " class=\"box\"></div>\n            <div id=box" + index_1++ + " class=\"box\"></div>\n            <div id=box" + index_1++ + " class=\"box\"></div>\n            <div id=box" + index_1++ + " class=\"box\"></div>\n        </div>";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderWhitePlayer() {
    try {
        console.log("renderWhitePlayer");
        var pawnId = 0;
        // const boxId = document.querySelector(`#box${Math.floor(Math.random()*64)}`);
        var wrapper = document.querySelector("#wrapper");
        if (!wrapper)
            throw new Error("Error in wrapper");
        for (var i = 0; i < numOfWP; i++) {
            wrapper.innerHTML += "<div id=\"white" + pawnId++ + "\" class=\"img white\"></div>";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderBlackPlayer() {
    try {
        console.log("renderBlackPlayer");
        var pawnId = 0;
        // const boxId = document.querySelector(`#box${Math.floor(Math.random()*64)}`);
        var wrapper = document.querySelector("#wrapper");
        if (!wrapper)
            throw new Error("Error in wrapper");
        for (var i = 0; i < numOfWP; i++) {
            wrapper.innerHTML += "<div id=\"black" + pawnId++ + "\" class=\"img black\"></div>";
        }
    }
    catch (error) {
        console.error(error);
    }
}
var Pawn = /** @class */ (function () {
    function Pawn(x, y) {
        this.x = x;
        this.y = y;
    }
    Pawn.prototype.setX = function (num) {
        this.x = num;
    };
    Pawn.prototype.sety = function (num) {
        this.y = num;
    };
    Pawn.prototype.getX = function () {
        return this.x;
    };
    Pawn.prototype.gety = function () {
        return this.y;
    };
    return Pawn;
}());
;
var numOfWP = 12;
var Limit = 640;
renderBord();
renderWhitePlayer();
renderBlackPlayer();
var topIndex = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2];
var leftIndex = [0, 2, 4, 6, 1, 3, 5, 7, 0, 2, 4, 6];
var blackPosition = new Array();
var whitePosition = new Array();
var index = 0;
var blackPlayers = document.querySelectorAll(".black");
blackPlayers.forEach(function (player) {
    player.style.top = (topIndex[index] * 80) + 10 + "px";
    player.style.left = (leftIndex[index++] * 80) + 10 + "px";
    setPosition(player, "black");
});
index = 0;
var whitePlayers = document.querySelectorAll(".white");
whitePlayers.forEach(function (player) {
    player.style.top = ((topIndex[index] + 5) * 80) + 10 + "px";
    player.style.left = ((7 - leftIndex[index++]) * 80) + 10 + "px";
    setPosition(player, "white");
});
function setPosition(player, team) {
    try {
        if (!player)
            throw new Error("Missing player");
        if (team == "white") {
            whitePosition.push(new Pawn(player.offsetTop, player.offsetLeft));
        }
        else {
            blackPosition.push(new Pawn(player.offsetTop, player.offsetLeft));
        }
        return true;
    }
    catch (error) {
        console.log(error);
    }
}
function meetPlyer(playerTop, playerLeft, secondPlayer) {
    try {
        if (!playerTop || !playerLeft || !secondPlayer)
            throw new Error("Missing Player");
        if (playerTop === secondPlayer.gety() && playerLeft === secondPlayer.getX())
            return true;
        return false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
function canEat(playerTop, playerLeft, secondPlayer) {
    try {
        if (!playerTop || !playerLeft || !secondPlayer)
            throw new Error("Missing Player");
        if (playerTop === secondPlayer.gety() && playerLeft === secondPlayer.getX())
            return false;
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
var Players = document.querySelectorAll(".img");
var activePawn = null;
Players.forEach(function (player) {
    player.addEventListener("click", function () {
        activePawn = player;
        debugger;
    });
    document.addEventListener("keydown", function (ev) {
        try {
            if (activePawn === player) {
                var step_1 = 80;
                var nextLocatiomn_1;
                var eat_1 = false, meet_1 = false;
                console.log(ev.key);
                switch (ev.key) {
                    case 'ArrowUp':
                        nextLocatiomn_1 = (player.offsetTop - step_1);
                        if (nextLocatiomn_1 < 0)
                            throw new Error("Out of Bord");
                        // debugger;
                        (player.classList[1] === "white" ? whitePosition : blackPosition).forEach(function (pawn) {
                            meet_1 = meetPlyer(nextLocatiomn_1, player.offsetLeft, pawn);
                            eat_1 = canEat(nextLocatiomn_1 + step_1 * 2, player.offsetLeft, pawn);
                            if (meet_1) {
                                if (eat_1)
                                    nextLocatiomn_1 - step_1 * 2;
                            }
                        });
                        player.style.top = nextLocatiomn_1 + "px";
                        break;
                    case 'ArrowDown':
                        nextLocatiomn_1 = (player.offsetTop + step_1);
                        if (nextLocatiomn_1 > Limit)
                            throw new Error("Out of Bord");
                        (player.classList[1] === "white" ? whitePosition : blackPosition).forEach(function (pawn) {
                            meet_1 = meetPlyer(nextLocatiomn_1, player.offsetLeft, pawn);
                            eat_1 = canEat(nextLocatiomn_1 + 2 * step_1, player.offsetLeft, pawn);
                            if (meet_1) {
                                if (eat_1)
                                    nextLocatiomn_1 + step_1 * 2;
                            }
                        });
                        player.style.top = nextLocatiomn_1 + "px";
                        // player.style.top = `${player.offsetTop + step}px`;
                        break;
                    case 'ArrowLeft':
                        nextLocatiomn_1 = (player.offsetLeft - step_1);
                        if (nextLocatiomn_1 < 0)
                            throw new Error("Out of Bord");
                        // player.style.left = `${player.offsetLeft - step}px`;
                        (player.classList[1] === "white" ? whitePosition : blackPosition).forEach(function (pawn) {
                            meet_1 = meetPlyer(player.offsetTop, nextLocatiomn_1, pawn);
                            eat_1 = canEat(player.offsetTop, nextLocatiomn_1 + step_1 * 2, pawn);
                            if (meet_1) {
                                if (eat_1)
                                    nextLocatiomn_1 - step_1 * 2;
                            }
                        });
                        player.style.left = nextLocatiomn_1 + "px";
                        break;
                    case 'ArrowRight':
                        nextLocatiomn_1 = (player.offsetLeft + step_1);
                        if (nextLocatiomn_1 > Limit)
                            throw new Error("Out of Bord");
                        (player.classList[1] === "white" ? whitePosition : blackPosition).forEach(function (pawn) {
                            meet_1 = meetPlyer(player.offsetTop, player.offsetLeft, pawn);
                            eat_1 = canEat(player.offsetTop, nextLocatiomn_1 + step_1 * 2, pawn);
                            debugger;
                            if (meet_1) {
                                if (eat_1)
                                    nextLocatiomn_1 + step_1 * 2;
                            }
                        });
                        player.style.left = nextLocatiomn_1 + "px";
                        // plyer.style.left = `${plyer.offsetLeft + step}px`;
                        break;
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
});
