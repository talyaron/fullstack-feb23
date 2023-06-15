//get root
// const root:HTMLElement|null = document.querySelector("#root");
//ask user for details and create new player (with class)
var Player = /** @class */ (function () {
    function Player(title, imgUrl) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.id = "id-" + Math.random() * 1000;
    }
    Player.prototype.renderPlyer = function (root) {
        try {
            if (!root)
                throw new Error("missing root element");
            var html = "<div class='card' onclick=\"handleHideCard('" + this.id + "')\" id=\"" + this.id + "\"><img src=\"" + this.imgUrl + "\"><h4>" + this.title + "</h4></div>";
            root.innerHTML += html;
        }
        catch (error) {
            console.error(error);
        }
    };
    Player.prototype.hideCard = function () {
        try {
            console.log("#" + this.id);
            var card = document.querySelector("#" + this.id);
            console.log("Hide card!!!");
        }
        catch (error) {
            console.error(error);
        }
    };
    return Player;
}());
function handleHideCard(cardId) {
    try {
        var player = players.find(function (player) { return player.id === cardId; });
        player === null || player === void 0 ? void 0 : player.hideCard();
    }
    catch (error) {
        console.error(error);
    }
}
//get details from user
function getPlayerDetails() {
    try {
        var title = prompt("What is the name of the player?");
        var imgUrl = prompt("add image url");
        if (!title || !imgUrl)
            throw new Error("Missing details");
        var player = new Player(title, imgUrl);
        return player;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var players = [];
function addPlayer() {
    var root = document.querySelector("#root");
    var player = getPlayerDetails();
    if (player) {
        player === null || player === void 0 ? void 0 : player.renderPlyer(root);
        players.push(player);
    }
}
