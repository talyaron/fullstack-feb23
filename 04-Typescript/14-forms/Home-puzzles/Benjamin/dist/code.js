var root = document.querySelector("#root");
var Employees = /** @class */ (function () {
    function Employees(fname, lname, role, img) {
        this.fname = fname;
        this.lname = lname;
        this.role = role;
        this.img = img;
    }
    return Employees;
}());
var employeesArray = [];
var emp = document.querySelector("#emp");
function handleSubmit(ev) {
    ev.preventDefault();
    var fname = ev.target.fname.value;
    var lname = ev.target.lname.value;
    var role = ev.target.role.value;
    var image = ev.target.image.value;
    var newEmployee = new Employees(fname, lname, role, image);
    employeesArray.push(newEmployee);
    console.log(fname, lname, role, image);
    renderEmlpoyees(employeesArray);
}
function renderEmlpoyees(array) {
    var employeesHtml = "<div class=\"wrapper\">";
    employeesHtml += array.map(function (user) {
        return "<div class=\"emp\"><div class=\"fname\">" + user.fname + "</div><div class=\"lname\">" + user.lname + "</div><div class=\"role\">" + user.role + "</div><img class=\"img\" src=\"" + user.img + "\" alt=\"\"></div>";
    }).join(" ");
    if (root) {
        employeesHtml += "</div>";
        console.log(employeesHtml);
        root.innerHTML = employeesHtml;
    }
}
