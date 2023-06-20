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
        var index = 0;
        for (var i = 0; i < 8; i++) {
            wrapper.innerHTML += "<div class=\"rows\">\n            <div id=box" + index++ + " class=\"box\"></div>\n            <div id=box" + index++ + " class=\"box\"></div>\n            <div id=box" + index++ + " class=\"box\"></div>\n            <div id=box" + index++ + " class=\"box\"></div>\n            <div id=box" + index++ + " class=\"box\"></div>\n            <div id=box" + index++ + " class=\"box\"></div>\n            <div id=box" + index++ + " class=\"box\"></div>\n            <div id=box" + index++ + " class=\"box\"></div>\n        </div>";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderPawns() {
    try {
        console.log("renderPawns");
        var pawnId = 0;
        // const boxId = document.querySelector(`#box${Math.floor(Math.random()*64)}`);
        var wrapper = document.querySelector("#wrapper");
        if (!wrapper)
            throw new Error("Error in wrapper");
        for (var i = 0; i < numOfWP; i++) {
            wrapper.innerHTML += "<div id=\"white" + pawnId + "\" class=\"img white\"></div>";
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
renderPawns();
var topIndex = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2];
var leftIndex = [0, 2, 4, 6, 1, 3, 5, 7, 0, 2, 4, 6];
var wIndex = 0;
var bIndex = 0;
var Players = document.querySelectorAll(".img");
var activePawn = null;
Players.forEach(function (player, index) {
    var top = player.classList[1] == "white" ? ((topIndex[wIndex] + 5) * 80) + 10 : ((topIndex[bIndex] * 80) + 10);
    var left = player.classList[1] == "white" ? ((7 - leftIndex[wIndex++]) * 80) + 10 : ((leftIndex[bIndex++] * 80) + 10);
    player.style.top = top + "px";
    player.style.left = left + "px";
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
