var battle = /** @class */ (function () {
    function battle(name, pass, email, number, public, id) {
        this.name = name;
        this.pass = pass;
        this.email = email;
        this.number = number;
        id = id || "id-" + new Date().getTime() + "-" + Math.random();
    }
    return battle;
}());
var root = document.querySelector("#root");
var Detailsstring = localStorage.getItem("user");
var details = Detailsstring
    ? JSON.parse(Detailsstring)
    : { name: "" };
if (root) {
    root.innerHTML = "Hello " + details.name;
}
