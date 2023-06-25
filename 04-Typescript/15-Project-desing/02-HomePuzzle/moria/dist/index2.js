function handleSubmit(event) {
    event.preventDefault();
    var EmployeeName = event.target.name.value;
    var EmployeeEnter = event.target.EnterTime.value;
    var EmployeeExit = event.target.ExitTime.value;
    renderImages(EmployeeName, EmployeeEnter, EmployeeExit);
}
var s = /** @class */ (function () {
    function s() {
    }
    return s;
}());
var sArr = [];
function renderImages(EmployeeName, EmployeeEnter, EmployeeExit) {
    var root = document.querySelector("#root");
    if (root) {
        var html = "\n        <table>\n        <tr>\n            <td>First name</td>\n            <td>entrance time</td>\n            <td>leaving time </td>\n            </tr>\n            <td>" + EmployeeName + " </td>\n            <td>" + EmployeeEnter + "</td>\n            <td>" + EmployeeExit + " </td>\n            </tr>\n        </table>";
        // console.log(EmployeeEnter)
        // console.log(EmployeeExit)
        root.innerHTML += html;
    }
}
