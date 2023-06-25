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
    function Employee(name, entries) {
        this.name = name;
        this.entries = entries;
        this.id = uid();
    }
    return Employee;
}());
// --- Controller
function writeEntrance() {
    try {
        var enter = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        var tmp = new Date();
        var x = new EmployeeEntries(selectedUser.name, tmp.toLocaleDateString(), enter, "");
        // console.log(x)
        var index = employees.findIndex(function (p) { return p.name === selectedUser.name; });
        employees[index].entries.push({ date: x.date, enter: enter });
        var findDate = selectedUser.entries.find(function (f) { return f.date === x.date; });
        console.log(findDate);
        // console.log(employees)
    }
    catch (error) {
        console.error(error);
    }
}
function writeExit() {
    var exit = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    // console.log(exit)
    var tmp = new Date();
    console.log(employees.find(function (obj) { return obj == selectedUser; }));
    var index = employees.findIndex(function (p) { return p.name === selectedUser.name; });
    var dateIndex = employees[index].entries.findIndex(function (p) { return p.date === tmp.toLocaleDateString(); });
    employees[index].entries[dateIndex].exit = exit;
    // employees[index].entries.exit = exit;
    // console.log(z)
}
employees = [
    new Employee('Jack', [{ date: '22.6.2023', enter: '16:00', exit: '23:00' }]),
    new Employee('Bob', [{ date: '24.6.2023', enter: '15:30', exit: '23:00' }]),
    new Employee('Steve', [{ date: '24.6.2023', enter: '20:14', exit: '23:00' }]),
    new Employee('Ralph', [
        { date: "22.6.2023", enter: '16:00', exit: "22:00" },
        { date: "23.6.2023", enter: '16:00', exit: "22:00" }
    ])
];
;
var selectedUser = employees[0];
// const worker1 = new Employee('John')
// console.log(worker1)
// employees.push(worker1);
// const test: Employee = new Employee("Martin")
// console.log(test)
// employees.push(test);
// console.dir(employees)
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
var renderHours = document.querySelector('#renderHours');
renderEmployees(employees, workersDiv);
function selected() {
    activeUser = document.getElementById("workSel");
    var selectedId = activeUser.options[activeUser.selectedIndex].id;
    selectedUser = employees.find(function (employee) { return employee.id === selectedId; });
    console.log(selectedUser.id);
    renderEmployeesWorkHours();
    return selectedUser;
}
function renderEmployeesWorkHours() {
    var html = "<table>";
    html += "<tr><th>Name</th><th>Date</th><th>Enter time:</th><th>Exit time:</th></tr>";
    html += selectedUser.entries.map(function (entries) {
        return ("\n       <tr>\n       <td>" + selectedUser.name + "</td>\n       <td>" + entries.date + "</td>\n       <td>" + entries.enter + "</td>\n       <td>" + entries.exit + "</td>\n       </tr>\n       ");
    }).join(''); // add closing parenthesis and join
    html += "</table>";
    console.log(html);
    renderHours.innerHTML = html;
}
