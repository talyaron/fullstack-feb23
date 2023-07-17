var scorePlayers = getPlayerFromStorage();
function renderTable() {
    try {
        debugger;
        if (scorePlayers == undefined)
            throw new Error("Empty player List");
        scorePlayers.sort(compare);
        var sortedList = scorePlayers;
        var table = document.querySelector('#scoreTable');
        if (!table)
            throw new Error("Can't catch Table Element");
        var html = "<tr>\n            <th>Name</th>\n            <th style=\"text-align: center;\">Score</th>\n            </tr>\n            ";
        for (var i = 0; i < Math.min(10, sortedList.length); i++) {
            html += "<tr>\n            <td>" + sortedList[i].firstName.toUpperCase() + " " + sortedList[i].lastName.toUpperCase() + "</td>\n            <td style=\"text-align: center;letter-spacing: 0rem;\">" + sortedList[i].record + "</td>\n            </tr>";
        }
        table.innerHTML += html;
        if (!scorePlayers[(scorePlayers === null || scorePlayers === void 0 ? void 0 : scorePlayers.length) - 1].isActive)
            leavePage(4);
        else
            leavePage(7);
    }
    catch (error) {
        console.error(error);
    }
}
function compare(a, b) {
    if (a.record > b.record) {
        return -1;
    }
    if (a.record < b.record) {
        return 1;
    }
    return 0;
}
function checkActivePlayer() {
    try {
    }
    catch (error) {
        console.error(error);
    }
}
function leavePage(seconds) {
    setTimeout(function () {
        location.href = "./game.html";
    }, seconds * 1000);
}
renderTable();
checkActivePlayer();
