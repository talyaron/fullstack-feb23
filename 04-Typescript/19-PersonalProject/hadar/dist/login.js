var Details = /** @class */ (function () {
    function Details(name, pass, email, id) {
        this.name = name;
        this.pass = pass;
        this.email = email;
        if (id) {
            this.id = id;
        }
        else {
            this.id = "id-" + new Date().getTime() + "-" + Math.random();
        }
    }
    return Details;
}());
var Detailsarray = [];
var Detailsstring = localStorage.getItem("user");
console.log(Detailsarray);
function login(event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var pass = event.target.elements.pass.value;
    var email = event.target.elements.email.value;
    var id = event.target.elements.id;
    var data = new Details(name, pass, email, id);
    Detailsarray.push(data);
    localStorage.setItem("user", JSON.stringify(Detailsarray));
    event.target.reset();
    window.location.href = "web.html";
}
var root = document.querySelector("#root");
var storedData = JSON.parse(localStorage.getItem("user"));
var lastDetails = storedData[storedData.length - 1];
root === null || root === void 0 ? void 0 : root.innerHTML = "Hello" + lastDetails.name;
