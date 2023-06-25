var workLogForm = document.getElementById("work-log-form");
var workHoursTable = document.getElementById("work-hours-table");
var workLogs = {};
workLogForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var workerNameInput = document.getElementById("worker-name");
    var hoursInput = document.getElementById("hours");
    var workerName = workerNameInput.value;
    var hours = parseInt(hoursInput.value);
    if (workerName && hours) {
        addWorkLog(workerName, hours);
        workerNameInput.value = "";
        hoursInput.value = "";
        updateWorkHoursTable();
    }
});
function addWorkLog(workerName, hours) {
    if (workLogs[workerName]) {
        workLogs[workerName] += hours;
    }
    else {
        workLogs[workerName] = hours;
    }
}
function updateWorkHoursTable() {
    var table = document.createElement("table");
    var tableHeader = document.createElement("thead");
    var tableBody = document.createElement("tbody");
    var tableHeaderRow = document.createElement("tr");
    var headerCellWorker = document.createElement("th");
    headerCellWorker.textContent = "Worker";
    var headerCellDay = document.createElement("th");
    headerCellDay.textContent = "Day";
    var headerCellMonth = document.createElement("th");
    headerCellMonth.textContent = "Month";
    tableHeaderRow.appendChild(headerCellWorker);
    tableHeaderRow.appendChild(headerCellDay);
    tableHeaderRow.appendChild(headerCellMonth);
    tableHeader.appendChild(tableHeaderRow);
    var totalHoursDay = 0;
    var totalHoursMonth = 0;
    for (var workerName in workLogs) {
        var workerHours = workLogs[workerName];
        totalHoursDay += workerHours;
        totalHoursMonth += workerHours;
        var tableRow = document.createElement("tr");
        var cellWorker = document.createElement("td");
        cellWorker.textContent = workerName;
        var cellDay = document.createElement("td");
        cellDay.textContent = workerHours;
        var cellMonth = document.createElement("td");
        cellMonth.textContent = workerHours;
        tableRow.appendChild(cellWorker);
        tableRow.appendChild(cellDay);
        tableRow.appendChild(cellMonth);
        tableBody.appendChild(tableRow);
    }
    var tableFooterRow = document.createElement("tr");
    var footerCellWorker = document.createElement("td");
    footerCellWorker.textContent = "Total";
    var footerCellDay = document.createElement("td");
    footerCellDay.textContent = totalHoursDay;
    var footerCellMonth = document.createElement("td");
    footerCellMonth.textContent = totalHoursMonth;
    tableFooterRow.appendChild(footerCellWorker);
    tableFooterRow.appendChild(footerCellDay);
    tableFooterRow.appendChild(footerCellMonth);
    tableBody.appendChild(tableFooterRow);
    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    table.classList.add("work-hours-table");
    var existingTable = document
        .getElementById("work-hours-table")
        .querySelector("table") || null;
    if (existingTable) {
        existingTable.remove();
    }
    workHoursTable.appendChild(table);
}
//-----------------------------------------------------------------------------------------------
// class WorkLog {
//   workerName: string;
//   hours: number;
//   constructor(workerName: string, hours: number) {
//     this.workerName = workerName;
//     this.hours = hours;
//   }
// }
// const workers: WorkLog[] = [];
// // const workersHours: WorkLog[] = [
// //     new WorkLog("Doriel", 8),
// //     new WorkLog("Max",  12)
// // ];
// function renderWorkersHours(rootElement: HTMLElement | null) {
//     try {
//         const html = `
//         <form onsubmit="handleRegisterWorker(event)">
//             <label for="firstName">First name</label>
//             <input type="text" name="firstName" id='firstName' placeholder="first name" required>
//             <label for="hours">Last name</label>
//             <input type="number" name="hours" id="'hours" placeholder="hours" required>
//             <input type="submit" value="Register">
//         </form>`;
//         if (!rootElement) throw new Error("No root element")
//         rootElement.innerHTML = html;
//     } catch (error) {
//         console.error(error)
//     }
// }
// renderWorkersHours(document.querySelector("#WorkersHours"));
// function renderLoggedWorker(workers: WorkLog, rootElement: HTMLElement | null) {
//     try {
//         const html = `<h2>Hello ${workers.workerName} you worked for ${workers.hours} hours today</h2>`;
//         if (!rootElement) throw new Error("no root element");
//         rootElement.innerHTML = html;
//     } catch (error) {
//         console.error(error)
//     }
// }
// // view->model controlers
// function handleRegisterWorker(ev: any) {
//     try {
//         ev.preventDefault();
//         const firstName = ev.target.firstName.value;
//         const hours = ev.target.hours.value;
//         const newWorker = new WorkLog(firstName, hours);
//         //add to model
//         workers.push(newWorker);
//         //control->view 
//         renderLoggedWorker(newWorker, document.querySelector("#WorkersHours"))
//         console.log(firstName, hours)
//     } catch (error) {
//         console.error(error)
//     }
// }
