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
var numOfWP = 5;
var Limit = 640;
renderBord();
renderWhitePlayer();
renderBlackPlayer();
var whitePlayers = document.querySelectorAll(".img");
whitePlayers.forEach(function (player) {
    player.style.top = (Math.floor(Math.random() * 7 + 1) * 80) + 10 + "px";
    player.style.left = (Math.floor(Math.random() * 7 + 1) * 80) + 10 + "px";
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
