var employees = [];
var selectedUser;
var employeeEntries = [];
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var date = new Date();
console.log(date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
// ---- MODEL -----
var EmployeeEntries = /** @class */ (function () {
    //name
    //date
    //enter
    //exit
    function EmployeeEntries(name, date, enter, exit) {
        //    this.name = activeUser.name
        this.name = name;
        this.date = date;
        this.enter = enter;
        this.exit = exit;
    }
    return EmployeeEntries;
}());
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
        this.id = uid();
    }
    return Employee;
}());
// --- Controller
function writeEntrance() {
    var enter = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    var tmp = new Date();
    var x = new EmployeeEntries(selectedUser.name, tmp.toLocaleDateString(), enter, "");
    console.log(x);
    employeeEntries.push(x);
}
function writeExit() {
    var exit = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    // console.log(exit)
    var tmp = new Date();
    console.log(employees.find(function (obj) { return obj == selectedUser; }));
    // console.log(z)
}
employees = [
    new Employee('Jack'),
    new Employee('Bob'),
    new Employee('Steve')
];
var activeUser = employees[0];
var worker1 = new Employee('John');
console.log(worker1);
employees.push(worker1);
var test = new Employee("Martin");
console.log(test);
employees.push(test);
console.dir(employees);
// employees.push(new Employee(name,timeIn,timeOut))
// if(!employees) throw new Error('no array')
// View
function renderEmployees(emp, root) {
    try {
        var html = "\n        <label for=\"workers\">Choose a worker: </label>\n        <select id=\"workSel\" name=\"workers\" onchange=\"selected()\">\n        " + emp.map(function (employee) {
            return "<option id=\"" + employee.id + "\"value=\"" + employee.name + "\">" + employee.name + "</option>";
        }) + "\n        \n         </select>   <button onclick=\"writeEntrance()\">Enter</button>\n         <button onclick=\"writeExit()\">Exit</button>\n        ";
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
var workersDiv = document.querySelector('#workers');
renderEmployees(employees, workersDiv);
function selected() {
    activeUser = document.getElementById("workSel");
    var selectedId = activeUser.options[activeUser.selectedIndex].id;
    selectedUser = employees.find(function (employee) { return employee.id === selectedId; });
    console.log(selectedUser.id);
    return selectedUser;
}
