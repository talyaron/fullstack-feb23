// const workLogForm = document.getElementById("work-log-form") as HTMLFormElement;
// const workHoursTable = document.getElementById("work-hours-table") as HTMLDivElement;
// const workLogs = {};
// workLogForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const workerNameInput = document.getElementById("worker-name") as HTMLInputElement;
//   const hoursInput = document.getElementById("hours") as HTMLInputElement;
//   const workerName = workerNameInput.value;
//   const hours = parseInt(hoursInput.value);
//   if (workerName && hours) {
//     addWorkLog(workerName, hours);
//     workerNameInput.value = "";
//     hoursInput.value = "";
//     updateWorkHoursTable();
//   }
// });
// function addWorkLog(workerName, hours) {
//   if (workLogs[workerName]) {
//     workLogs[workerName] += hours;
//   } else {
//     workLogs[workerName] = hours;
//   }
// }
// function updateWorkHoursTable() {
//   const table = document.createElement("table");
//   const tableHeader = document.createElement("thead");
//   const tableBody = document.createElement("tbody");
//   const tableHeaderRow = document.createElement("tr");
//   const headerCellWorker = document.createElement("th");
//   headerCellWorker.textContent = "Worker";
//   const headerCellDay = document.createElement("th");
//   headerCellDay.textContent = "Day";
//   const headerCellMonth = document.createElement("th");
//   headerCellMonth.textContent = "Month";
//   tableHeaderRow.appendChild(headerCellWorker);
//   tableHeaderRow.appendChild(headerCellDay);
//   tableHeaderRow.appendChild(headerCellMonth);
//   tableHeader.appendChild(tableHeaderRow);
//   let totalHoursDay = 0;
//   let totalHoursMonth = 0;
//   for (const workerName in workLogs) {
//     const workerHours = workLogs[workerName];
//     totalHoursDay += workerHours;
//     totalHoursMonth += workerHours;
//     const tableRow = document.createElement("tr");
//     const cellWorker = document.createElement("td");
//     cellWorker.textContent = workerName;
//     const cellDay = document.createElement("td");
//     cellDay.textContent = workerHours;
//     const cellMonth = document.createElement("td");
//     cellMonth.textContent = workerHours;
//     tableRow.appendChild(cellWorker);
//     tableRow.appendChild(cellDay);
//     tableRow.appendChild(cellMonth);
//     tableBody.appendChild(tableRow);
//   }
//   const tableFooterRow = document.createElement("tr");
//   const footerCellWorker = document.createElement("td");
//   footerCellWorker.textContent = "Total";
//   const footerCellDay = document.createElement("td");
//   footerCellDay.textContent = totalHoursDay;
//   const footerCellMonth = document.createElement("td");
//   footerCellMonth.textContent = totalHoursMonth;
//   tableFooterRow.appendChild(footerCellWorker);
//   tableFooterRow.appendChild(footerCellDay);
//   tableFooterRow.appendChild(footerCellMonth);
//   tableBody.appendChild(tableFooterRow);
//   table.appendChild(tableHeader);
//   table.appendChild(tableBody);
//   table.classList.add("work-hours-table");
//   const existingTable =
//     (document
//       .getElementById("work-hours-table")
//       .querySelector("table") as HTMLTableElement) || null;
//   if (existingTable) {
//     existingTable.remove();
//   }
//   workHoursTable.appendChild(table);
// }
//-----------------------------------------------------------------------------------------------
var WorkLog = /** @class */ (function () {
    function WorkLog(workerName, hours) {
        this.workerName = workerName;
        this.hours = hours;
    }
    return WorkLog;
}());
var workers = [];
// const workersHours: WorkLog[] = [
//     new WorkLog("Doriel", 8),
//     new WorkLog("Max",  12)
// ];
function renderWorkersHours(rootElement) {
    try {
        var html = "\n        <form onsubmit=\"handleRegisterWorker(event)\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" name=\"firstName\" id='firstName' placeholder=\"first name\" required>\n            <label for=\"hours\">Last name</label>\n            <input type=\"number\" name=\"hours\" id=\"'hours\" placeholder=\"hours\" required>\n            <input type=\"submit\" value=\"Register\">\n        </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
renderWorkersHours(document.querySelector("#WorkersHours"));
function renderLoggedWorker(worker, rootElement) {
    try {
        var htmlAdd = "";
        var myTab = document.querySelector("#tab");
        var html = "\n      <form onsubmit=\"handleRegisterWorker(event)\">\n          <label for=\"firstName\">First name</label>\n          <input type=\"text\" name=\"firstName\" id='firstName' placeholder=\"first name\" required>\n          <label for=\"hours\">Last name</label>\n          <input type=\"number\" name=\"hours\" id=\"'hours\" placeholder=\"hours\" required>\n          <input type=\"submit\" value=\"Register\">\n      </form>";
        // const htmlAddRow = `
        //         <tr>
        //           <th>
        //           worker name
        //           ${workers.workerName}
        //           </th>
        //         </tr>
        //         <tr>
        //           <td> hours
        //           ${workers.hours}
        //           </td>
        //         </tr>
        //     `;
        // if (!myTab) {
        //   htmlAdd = `
        //     <table id="tab">
        //        ${htmlAddRow}
        //     </table>`;
        // } else {
        //   myTab.innerHTML += htmlAddRow;
        //   htmlAdd = myTab.outerHTML;
        // }
        var workerRows = workers.reduce(function (acc, w) {
            return acc + ("<tr><td>\n              worker name\n              " + w.workerName + "\n              </td>\n              <td>hours\n              " + w.hours + "\n              </td></tr>");
        }, "");
        htmlAdd = html + "\n    <table id=\"tab\"> \n                " + workerRows + "\n            </table>";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = htmlAdd;
    }
    catch (error) {
        console.error(error);
    }
}
// view->model controlers
function handleRegisterWorker(ev) {
    try {
        ev.preventDefault();
        var firstName = ev.target.firstName.value;
        var hours = parseInt(ev.target.hours.value);
        var newWorker_1 = new WorkLog(firstName, hours);
        var foundWorker = workers.find(function (w) { return w.workerName === newWorker_1.workerName; });
        if (!!foundWorker) {
            foundWorker.hours += hours;
        }
        else {
            //add to model
            workers.push(newWorker_1);
        }
        //control->view
        renderLoggedWorker(newWorker_1, document.querySelector("#WorkersHours"));
        console.log(firstName, hours);
    }
    catch (error) {
        console.error(error);
    }
}
