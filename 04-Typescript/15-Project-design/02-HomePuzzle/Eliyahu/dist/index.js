var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = uid();
    }
    return Employee;
}());
var tal = new Employee("Tal", "Chay");
var employees = [
    new Employee("Eli", "Bin"), tal
];
var Entrace = /** @class */ (function () {
    function Entrace(employee) {
        this.employee = employee;
        this.date = new Date();
    }
    return Entrace;
}());
var ent1 = new Entrace(tal);
var ent2 = new Entrace(tal);
var ent3 = new Entrace(tal);
ent1.date = new Date('2023-12-17T03:22:00');
ent2.date = new Date('2023-12-10T10:58:00');
ent3.date = new Date('2023-12-11T08:00:00');
var entraces = [
    ent1, ent2, ent3
];
var Exit = /** @class */ (function () {
    function Exit(employee) {
        this.employee = employee;
        this.date = new Date();
    }
    return Exit;
}());
var ext1 = new Entrace(tal);
var ext2 = new Entrace(tal);
var ext3 = new Entrace(tal);
ext1.date = new Date('2023-12-17T22:24:00');
ext2.date = new Date('2023-12-17T18:04:00');
ext3.date = new Date('2023-12-17T12:00:00');
var exits = [
    ext1, ext2, ext3
];
function renderRegisterEmployee(rootElement) {
    try {
        var html = "\n      <h3>If this is your first time here, register: </h3>\n      <form onsubmit=\"handleSignUser(event)\">\n          <input type=\"text\" name=\"firstName\" placeholder=\"first name\" required>\n          <input type=\"text\" name=\"lastName\" placeholder=\"last name\" required>\n          <input type=\"submit\" value=\"Register\">\n      </form>\n      <form onsubmit=\"handleExistUser(event)\">\n      <input type=\"submit\" value=\"I'm already in\">\n  </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function addEmployeeToEmployees(firstName, lastName) {
    var newEmployee = new Employee(firstName, lastName);
    employees.push(newEmployee);
}
function renderAttendanceEmployee(rootElement) {
    try {
        var html = "  <h3>If you've been here before start here:</h3>\n        <form onsubmit=\"handleSetEntrance(event)\">\n          <select name=\"fullName\" id =\"fullName\">\n          " + employees.map(function (employee) {
            return "<option value = \"" + employee.id + "\">" + employee.firstName + " " + employee.lastName + "</option>";
        }) + " </select>\n          <input type=\"submit\" value=\"Entrace\">\n      </form>\n      <form onsubmit=\"handleSetExit(event)\">\n          <select name=\"fullName\" id =\"fullName\">\n          " + employees.map(function (employee) {
            return "<option value = \"" + employee.id + "\">" + employee.firstName + " " + employee.lastName + "</option>";
        }) + " </select>\n          <input type=\"submit\" value=\"Exit\">\n      </form>\n      ";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderShowAttendanceTable(rootElement) {
    try {
        var html = " <h3>To show your work clock time </br> choose your name and press 'Show'.</h3>\n        <form onsubmit=\"handleShowAttendanceTable(event)\">\n          <select name=\"fullName\" id =\"fullName\">\n            " + employees.map(function (employee) {
            return "<option value = \"" + employee.id + "\">" + employee.firstName + " " + employee.lastName + "</option>";
        }) + " </select>\n          <input type=\"submit\" value=\"Show\">\n        </form>\n        <h3>To show work clock time </br> of all employees press 'Show All'.</h3>\n        <form onsubmit=\"handleShowTableOfAll(event)\">\n        <input type=\"submit\" value=\"Show All\">\n        </form>\n        ";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderAttendanceTable(employee, rootElement) {
    try {
        var currentUserEntraces = entraces.filter(function (entrace) { return entrace.employee.id === employee.id; });
        var currentUserExits_1 = exits.filter(function (exit) { return exit.employee.id === employee.id; });
        var html_1 = "<h3>Hello " + employee.firstName + " " + employee.lastName + ". Here your work clock time:</h3>\n        <table>\n         <tr>\n           <th>Entrace</th>\n           <th>Exit</th>\n         </tr>";
        currentUserEntraces.forEach(function (entrace, index) {
            return html_1 += " <tr>\n         <td>" + entrace.date.toLocaleDateString() + " " + entrace.date.toLocaleTimeString() + "</td>\n         <td>" + currentUserExits_1[index].date.toLocaleDateString() + " " + currentUserExits_1[index].date.toLocaleTimeString() + "</td>\n       </tr>";
        });
        html_1 += "</table>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function renderAttendanceTableOfAll(rootElement) {
    try {
        var html_2 = "<table>\n        <tr>\n          <th>Name</th>\n          <th>Entrace</th>\n          <th>Exit</th>\n        </tr>";
        employees.forEach(function (employee) {
            var currentUserEntraces = entraces.filter(function (entrace) { return entrace.employee.id === employee.id; });
            var currentUserExits = exits.filter(function (exit) { return exit.employee.id === employee.id; });
            currentUserEntraces.forEach(function (entrace, index) {
                return html_2 += " <tr>\n         <td> " + employee.firstName + " " + employee.lastName + " </td>\n         <td>" + entrace.date.toLocaleDateString() + " " + entrace.date.toLocaleTimeString() + "</td>\n         <td>" + currentUserExits[index].date.toLocaleDateString() + " " + currentUserExits[index].date.toLocaleTimeString() + "</td>\n       </tr>";
            });
        });
        html_2 += "</table>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html_2;
    }
    catch (error) {
        console.error(error);
    }
}
function renderMonthlyHours(rootElement) {
    try {
        var html = "<h3>To show your monthly attendance hours </br> choose your name and the desired month </br>  and press 'Show'.</h3>\n    <form onsubmit=\"handleCalaulateMonthlyHours(event)\">\n      <select name=\"fullName\" id =\"fullName\">\n        " + employees.map(function (employee) {
            return "<option value = \"" + employee.id + "\">" + employee.firstName + " " + employee.lastName + "</option>";
        }) + " </select>\n    <select name =\"month\" id =\"month\">\n             <option> 1 </option>\n             <option> 2 </option>\n             <option> 3 </option>\n             <option> 4 </option>\n             <option> 5 </option>\n             <option> 6 </option>\n             <option> 7 </option>\n             <option> 8 </option>\n             <option> 9 </option>\n             <option> 10 </option>\n             <option> 11 </option>\n             <option> 12 </option>\n             </select>\n        <input type = \"submit\" value = \"Show\" >\n            </form>";
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleSignUser(ev) {
    try {
        ev.preventDefault();
        var firstname = ev.target.firstName.value;
        var lastname = ev.target.lastName.value;
        addEmployeeToEmployees(firstname, lastname);
        renderAttendanceEmployee(document.querySelector("#attendance"));
        renderShowAttendanceTable(document.querySelector("#tableButtons"));
        renderMonthlyHours(document.querySelector("#monthlyHoursButtons"));
        console.log(employees);
    }
    catch (error) {
        console.error(error);
    }
}
function handleExistUser(ev) {
    try {
        ev.preventDefault();
        renderAttendanceEmployee(document.querySelector("#attendance"));
        renderShowAttendanceTable(document.querySelector("#tableButtons"));
        renderMonthlyHours(document.querySelector("#monthlyHoursButtons"));
        console.log(employees);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetEntrance(ev) {
    try {
        ev.preventDefault();
        var thisEmployee_1 = ev.target.fullName.value;
        var employee = employees.find(function (employee) { return employee.id === thisEmployee_1; });
        if (!employee)
            throw new Error("couldn't find this employee");
        var entrace = new Entrace(employee);
        entraces.push(entrace);
        console.log(entraces);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetExit(ev) {
    try {
        ev.preventDefault();
        var thisEmployee_2 = ev.target.fullName.value;
        var employee = employees.find(function (employee) { return employee.id === thisEmployee_2; });
        if (!employee)
            throw new Error("couldn't find this employee");
        var exit = new Exit(employee);
        exits.push(exit);
        console.log(exits);
    }
    catch (error) {
        console.error(error);
    }
}
function handleShowAttendanceTable(ev) {
    try {
        ev.preventDefault();
        var thisEmployee_3 = ev.target.fullName.value;
        var employee = employees.find(function (employee) { return employee.id === thisEmployee_3; });
        if (!employee)
            throw new Error("couldn't find this employee");
        renderAttendanceTable(employee, document.querySelector("#table"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleShowTableOfAll(ev) {
    try {
        ev.preventDefault();
        renderAttendanceTableOfAll(document.querySelector("#table"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleCalaulateMonthlyHours(ev) {
    try {
        ev.preventDefault();
        var thisEmployee_4 = ev.target.fullName.value;
        var month_1 = ev.target.month.value;
        var employee_1 = employees.find(function (employee) { return employee.id === thisEmployee_4; });
        if (!employee_1)
            throw new Error("couldn't find this employee");
        var currentUserEntraces = entraces.filter(function (entrace) { return entrace.employee.id === employee_1.id; });
        var currentUserMonthlyEntraces = currentUserEntraces.filter(function (entrace) { return (entrace.date.getMonth() + 1) == month_1; });
        var currentUserExits = exits.filter(function (exit) { return exit.employee.id === employee_1.id; });
        var currentUserMonthlyExits_1 = currentUserExits.filter(function (exit) { return (exit.date.getMonth() + 1) == month_1; });
        var sumMonthlyHours_1 = 0;
        var sumMonthlyMinutes_1 = 0;
        currentUserMonthlyEntraces.forEach(function (entrace, index) {
            sumMonthlyHours_1 += currentUserMonthlyExits_1[index].date.getHours() - entrace.date.getHours();
            {
                if (currentUserMonthlyExits_1[index].date.getMinutes() < entrace.date.getMinutes()) {
                    sumMonthlyMinutes_1 += 60 - (entrace.date.getMinutes() - currentUserMonthlyExits_1[index].date.getMinutes());
                    sumMonthlyHours_1--;
                }
                else {
                    sumMonthlyMinutes_1 += currentUserMonthlyExits_1[index].date.getMinutes() - entrace.date.getMinutes();
                }
            }
        });
        var monthlyAttendance = document.querySelector("#monthlyHours");
        if (monthlyAttendance)
            if (sumMonthlyMinutes_1 < 10) {
                monthlyAttendance.innerHTML = "Your working hours in this month are: " + sumMonthlyHours_1 + ":0" + sumMonthlyMinutes_1;
            }
            else {
                monthlyAttendance.innerHTML = "Your working hours in this month are: " + sumMonthlyHours_1 + ":" + sumMonthlyMinutes_1;
            }
        console.log(sumMonthlyHours_1);
        console.log(sumMonthlyMinutes_1);
    }
    catch (error) {
        console.error(error);
    }
}
renderRegisterEmployee(document.querySelector("#register"));
var eeee = new Date();
var currentTime = eeee.toLocaleTimeString();
var currentDate = eeee.toLocaleDateString();
console.log(currentTime);
console.log(currentDate);
console.log(employees);
