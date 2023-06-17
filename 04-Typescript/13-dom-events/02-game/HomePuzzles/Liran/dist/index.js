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
var numOfWP = 12;
var Limit = 640;
renderBord();
renderWhitePlayer();
renderBlackPlayer();
var topIndex = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2];
var leftIndex = [0, 2, 4, 6, 1, 3, 5, 7, 0, 2, 4, 6];
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
function meetPlyer(playerTop, playerLeft, secondPlayer) {
    try {
        if (!playerTop || !playerLeft || !secondPlayer)
            throw new Error("Missing Player");
        // console.log(playerTop, secondPlayer.getX(), playerLeft, secondPlayer.gety())
        if (playerTop === secondPlayer.getX() && playerLeft === secondPlayer.gety()) {
            // console.log("True")
            return true;
        }
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
        // console.log("True")
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
var Players = document.querySelectorAll(".img");
var activePawn = null;
Players.forEach(function (player, index) {
    player.addEventListener("click", function () {
        activePawn = player;
    });
    document.addEventListener("keydown", function (ev) {
        try {
            if (activePawn === player) {
                var step = 80;
                var nextLocation = void 0;
                var eat = false, meet = false;
                console.log(ev.key);
                switch (ev.key) {
                    case 'ArrowUp':
                        nextLocation = (player.offsetTop - step);
                        if (nextLocation < 0)
                            throw new Error("Out of Bord");
                        player.style.top = nextLocation + "px";
                        break;
                    case 'ArrowDown':
                        nextLocation = (player.offsetTop + step);
                        if (nextLocation > Limit)
                            throw new Error("Out of Bord");
                        player.style.top = nextLocation + "px";
                        // player.style.top = `${player.offsetTop + step}px`;
                        break;
                    case 'ArrowLeft':
                        nextLocation = (player.offsetLeft - step);
                        if (nextLocation < 0)
                            throw new Error("Out of Bord");
                        player.style.left = nextLocation + "px";
                        break;
                    case 'ArrowRight':
                        nextLocation = (player.offsetLeft + step);
                        if (nextLocation > Limit)
                            throw new Error("Out of Bord");
                        player.style.left = nextLocation + "px";
                        break;
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
});
