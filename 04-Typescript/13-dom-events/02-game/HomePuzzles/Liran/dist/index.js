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
        // const boxId = document.querySelector(`#box${Math.floor(Math.random()*64)}`);
        var wrapper = document.querySelector("#wrapper");
        if (!wrapper)
            throw new Error("Error in wrapper");
        for (var i = 0; i < numOfWP; i++) {
            wrapper.innerHTML += "<div class=\"img white\"></div>";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderBlackPlayer() {
    try {
        console.log("renderBlackPlayer");
        // const boxId = document.querySelector(`#box${Math.floor(Math.random()*64)}`);
        var wrapper = document.querySelector("#wrapper");
        if (!wrapper)
            throw new Error("Error in wrapper");
        for (var i = 0; i < numOfWP; i++) {
            wrapper.innerHTML += "<div class=\"img black\"></div>";
        }
    }
    catch (error) {
        console.error(error);
    }
}
// function getPositions()
var Pawn = /** @class */ (function () {
    function Pawn() {
    }
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
var blackPosition = new Array(numOfWP);
var whitePosition = new Array(numOfWP);
var index = 0;
var blackPlayers = document.querySelectorAll(".black");
blackPlayers.forEach(function (player) {
    player.style.top = (topIndex[index] * 80) + 10 + "px";
    player.style.left = (leftIndex[index++] * 80) + 10 + "px";
});
index = 0;
var whitePlayers = document.querySelectorAll(".white");
whitePlayers.forEach(function (player) {
    player.style.top = ((topIndex[index] + 5) * 80) + 10 + "px";
    player.style.left = ((7 - leftIndex[index++]) * 80) + 10 + "px";
});
var whitePawns = document.querySelectorAll(".img");
var activePawn = null;
whitePawns.forEach(function (whitePawn) {
    whitePawn.addEventListener("click", function () {
        activePawn = whitePawn;
    });
    document.addEventListener("keydown", function (ev) {
        try {
            if (activePawn === whitePawn) {
                console.log(ev.key);
                switch (ev.key) {
                    case 'ArrowUp':
                        if ((whitePawn.offsetTop - 80) < 0)
                            throw new Error("Out of Bord");
                        whitePawn.style.top = whitePawn.offsetTop - 80 + "px";
                        break;
                    case 'ArrowDown':
                        if ((whitePawn.offsetTop + 80) > Limit)
                            throw new Error("Out of Bord");
                        whitePawn.style.top = whitePawn.offsetTop + 80 + "px";
                        break;
                    case 'ArrowLeft':
                        if ((whitePawn.offsetLeft - 80) < 0)
                            throw new Error("Out of Bord");
                        whitePawn.style.left = whitePawn.offsetLeft - 80 + "px";
                        break;
                    case 'ArrowRight':
                        if ((whitePawn.offsetLeft + 80) > Limit)
                            throw new Error("Out of Bord");
                        whitePawn.style.left = whitePawn.offsetLeft + 80 + "px";
                        break;
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
});
