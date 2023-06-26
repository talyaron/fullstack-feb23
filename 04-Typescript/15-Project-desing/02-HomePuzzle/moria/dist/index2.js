var root = document.querySelector("#root");
var Table = document.querySelector("#Table");
function handleSubmit(event) {
    event.preventDefault();
    var EmployeeName = event.target.name.value;
    var EmployeeEnter = event.target.EnterTime.value;
    var EmployeeExit = event.target.ExitTime.value;
    render(EmployeeName, EmployeeEnter, EmployeeExit);
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
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
//----------
function render(EmployeeName, EmployeeEnter, EmployeeExit) {
    if (Table) {
        var htmlTable = "\n        <table>\n        <tr>\n            <td>First name</td>\n            <td>entrance time</td>\n            <td>leaving time </td>\n            </tr>\n            <td>" + EmployeeName + " </td>\n            <td>" + EmployeeEnter + "</td>\n            <td>" + EmployeeExit + " </td>\n            </tr>\n        </table>";
        // console.log(EmployeeEnter)
        // console.log(EmployeeExit)
        Table.innerHTML += htmlTable;
    }
}
