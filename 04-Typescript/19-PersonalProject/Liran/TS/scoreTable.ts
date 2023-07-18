const scorePlayers: Player[] | undefined = getPlayerFromStorage("table");
debugger;
function renderTable(table: HTMLElement | null) {
    try {
        if (scorePlayers == undefined) throw new Error("Empty player List");
        scorePlayers.sort(compare);
        const sortedList: Player[] = scorePlayers;
        if (!table) throw new Error("Can't catch Table Element");
        let html = `<tr>
            <th>Name</th>
            <th>Score</th>
            </tr>
            `;
        for (let i = 0; i < Math.min(10, sortedList.length); i++) { // presenting only top 10 records
            html += `<tr>
            <td>${sortedList[i].firstName.toUpperCase()} ${sortedList[i].lastName.toUpperCase()}</td>
            <td>${sortedList[i].record}</td>
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

function compare(a: Player, b: Player) {    //comparing for sorting players by "record" value
    if (a.record > b.record) {
        return -1;
    }
    return 1;
}


function leavePage(seconds: number) {   //exiting page
    setTimeout(function () {
        location.href = "../HTML/game.html";
    }, seconds * 1000)
}


renderTable(document.querySelector('#scoreTable'));
