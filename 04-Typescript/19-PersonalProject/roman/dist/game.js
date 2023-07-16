players = getPlayerFromStorage();
renderGamePage(document.querySelector(".wrapper"));
function renderGamePage(div) {
    try {
        // var wrapper = document.querySelector(".wrapper");
        var html = players.map(function (player) {
            return "\n                <p>Player Name: " + player.name + "</p>\n                <p>Player Score: " + player.score + "</p>\n                ";
        }).join(' ');
        div.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
