var uid = function () {
    return Math.round(Math.random() * 1000000);
};
var Employee = /** @class */ (function () {
    function Employee(userName) {
        this.userName = userName;
        this.id = uid();
    }
    return Employee;
}());
var employees = [
    new Employee("Lee Dekel"),
    new Employee("May Cohen"),
    new Employee("Adi Yaish"),
    new Employee("Tal Winter")
];
renderEmployees(document.querySelector("#employee"));
renderLogInButton(document.querySelector(".addLog"));
var AddLog = /** @class */ (function () {
    function AddLog(userId, date, signIn, signOut) {
        this.userId = userId;
        this.date = date;
        this.signIn = signIn;
        this.signOut = signOut;
    }
    return AddLog;
}());
var User = /** @class */ (function () {
    function User(userId, date, signIn, signOut) {
        this.userId = userId;
        this.date = date;
        this.signIn = signIn;
        this.signOut = signOut;
    }
    return User;
}());
var logsById = [];
var user = [];
function hundleEmployeeSelected(ev) {
    try {
        var employeeId_1 = ev.target.parentElement.children[2].value;
        logsById.forEach(function (employee) {
            if (employee.userId === employeeId_1)
                new User(employee.userId, employee.date, employee.signIn, employee.signOut);
        });
    }
    catch (error) {
        console.error(error);
    }
    console.dir(user);
    var html = "<table>\n<thead>\n  <tr>\n    <th>Sunday</th>\n    <th>Monday</th>\n    <th>Tuesday</th>\n    <th>Wednesday</th>\n    <th>Thursday</th>\n  </tr>\n</thead>\n<tbody>\n  <tr>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n  </tr>\n  <tr>\n    <td></td>\n    <td></td>\n    <td></td>\n    <td></td>\n  </tr>\n</tbody>\n</table>\n";
    var rootTable = document.querySelector("#employeeTotal");
    if (!rootTable)
        throw new Error("table div is missing");
    rootTable.innerHTML = html;
}
function renderEmployees(rootElement) {
    var html = "<label for=\"username\">Choose Employee</label><br>\n    <select name= \"username\" id=\"username\" onchange=\"switchingUser()\">" + employees.map(function (employee) {
        return "<option value=\"" + employee.id + "\">" + employee.userName + "</option>";
    }) + "\n    </select><br><label for=\"date\">Date</label><br><input type=\"date\" name=\"date\" id=\"date\" onchange=\"switchingUser()\" /><br><button onclick=\"hundleEmployeeSelected(event)\" value=\"\">Set date</button>";
    if (!rootElement)
        throw new Error("missing HTML container");
    rootElement.innerHTML = html;
}
function renderLogInButton(rootElement) {
    var html = "<button class=\"btn-log\" id=\"addLog\" onclick=\"hundleUsersLogin(event)\">Clock in</button>";
    if (!rootElement)
        throw new Error("rootElement is missing");
    rootElement.innerHTML = html;
}
function renderLogoutButton(rootElement) {
    var html = "<button class=\"btn-log\" onclick=\"hundleUsersLogOut(event)\">Clock out</button>";
    if (!rootElement)
        throw new Error("rootElement is missing");
    rootElement.innerHTML = html;
}
function handleUsersLogin(ev) {
    var userId = ev.target.parentElement.parentElement.children[2].children[2].value;
    var date = currentDateToDispaly();
    var signIn = currentTimeToDispaly();
    logsById.push({ userId: userId, date: date, signIn: signIn });
}
function hundleUsersLogOut(ev) {
    var userId = ev.target.parentElement.parentElement.children[2].children[2].value;
    var date = currentDateToDispaly();
    var signOut = currentTimeToDispaly();
    logsById.push({ userId: userId, date: date, signOut: signOut });
    ev.target.classList.add("clicked");
}
function currentTimeToDispaly() {
    try {
        if (new Date().getMinutes() < 10) {
            return new Date().getHours() + ":0" + new Date().getMinutes();
        }
        return new Date().getHours() + ":" + new Date().getMinutes();
    }
    catch (error) {
        console.error(error);
    }
}
function currentDateToDispaly() {
    try {
        return new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();
    }
    catch (error) {
        console.error(error);
    }
}
function switchingUser(ev) {
    renderLogInButton(document.querySelector(".addLog"));
}
