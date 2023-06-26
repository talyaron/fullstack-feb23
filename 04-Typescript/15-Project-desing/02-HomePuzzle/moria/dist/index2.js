var root = document.querySelector("#root");
function handleSubmit(event) {
    event.preventDefault();
    var EmployeeName = event.target.name.value;
    var EmployeeEnter = event.target.EnterTime.value;
    var EmployeeExit = event.target.ExitTime.value;
    // renderImages(EmployeeName, EmployeeEnter, EmployeeExit)
    var worker = new s(EmployeeName, EmployeeEnter, EmployeeExit);
    renderLoggedWorker(worker, root);
}
//-----------
var s = /** @class */ (function () {
    function s(EmployeeName, EmployeeEnter, EmployeeExit) {
        this.EmployeeName = EmployeeName,
            this.EmployeeEnter = EmployeeEnter,
            this.EmployeeExit = EmployeeExit;
    }
    return s;
}());
var sArr = [];
function renderLoggedWorker(workers, rootElement) {
    try {
        var html = "<h2>Hello " + workers.EmployeeName + " you worked from " + workers.EmployeeEnter + " until " + workers.EmployeeExit + "</h2>";
        if (!rootElement)
            throw new Error("no root element");
        root.innerHTML += html;
    }
    catch (error) {
        console.error(error);
    }
}
//----------
// function render(
//     EmployeeName: string,
//     EmployeeEnter: number,
//     EmployeeExit: number
// ) {
//     const root = document.querySelector(`#root`) as HTMLElement;
//     if (root) {
//         const html = `
//         <table>
//         <tr>
//             <td>First name</td>
//             <td>entrance time</td>
//             <td>leaving time </td>
//             </tr>
//             <td>${EmployeeName} </td>
//             <td>${EmployeeEnter}</td>
//             <td>${EmployeeExit} </td>
//             </tr>
//         </table>`;
//         // console.log(EmployeeEnter)
//         // console.log(EmployeeExit)
//         root.innerHTML += html;
//     }
// }
