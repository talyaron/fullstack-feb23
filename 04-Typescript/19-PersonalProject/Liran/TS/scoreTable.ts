const scorePlayers: Player[] | undefined = getPlayerFromStorage();

function renderTable() {
    try {
        debugger;
        if (scorePlayers == undefined) throw new Error("Empty player List");
        scorePlayers.sort(compare);
        const sortedList: Player[] = scorePlayers;
        const table = document.querySelector('#scoreTable')
        if (!table) throw new Error("Can't catch Table Element");
        let html = `<tr>
            <th>Name</th>
            <th style="text-align: center;">Score</th>
            </tr>
            `;
        for (let i = 0; i < Math.min(10, sortedList.length); i++) {
            html += `<tr>
            <td>${sortedList[i].firstName.toUpperCase()} ${sortedList[i].lastName.toUpperCase()}</td>
            <td style="text-align: center;letter-spacing: 0rem;">${sortedList[i].record}</td>
            </tr>`;
        }

        table.innerHTML += html;

        if (!scorePlayers[scorePlayers?.length - 1].isActive)
            leavePage(4)
        else
            leavePage(7);
    } catch (error) {
        console.error(error)
    }

}

function compare(a: Player, b: Player) {
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



    } catch (error) {
        console.error(error);
    }

}

function leavePage(seconds: number) {
    setTimeout(function () {
        location.href = "../HTML/game.html";
    }, seconds * 1000)
}
renderTable();
checkActivePlayer();
