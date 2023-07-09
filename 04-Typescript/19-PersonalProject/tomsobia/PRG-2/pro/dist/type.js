var Details = /** @class */ (function () {
    function Details(name, pass, email, number, id) {
        this.name = name;
        this.pass = pass;
        this.email = email;
        this.number = number;
        if (id) {
            this.id = id;
        }
        else {
            this.id = "id-" + new Date().getTime() + "-" + Math.random();
        }
    }
    return Details;
}());
function saveDetails(event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var pass = event.target.elements.pass.value;
    var email = event.target.elements.email.value;
    var number = event.target.elements.number.value;
    var id = event.target.elements.id;
    var data = new Details(name, pass, email, number, id);
    if (number < 18) {
        var errorMessageExists = document.getElementById("errorMessage");
        if (!errorMessageExists) {
            var errorMessage_1 = document.createElement("p");
            errorMessage_1.textContent = "You are under age!";
            errorMessage_1.id = "errorMessage";
            errorMessage_1.style.color = "black";
            errorMessage_1.style.backgroundColor = "red";
            errorMessage_1.style.border = "3px solid black";
            errorMessage_1.style.fontSize = "3vw";
            event.target.appendChild(errorMessage_1);
        }
        return;
    }
    localStorage.setItem("user", JSON.stringify(data));
    event.target.reset();
    window.location.href = "TmS.html";
    var errorMessage = document.getElementById("errorMessage");
    if (errorMessage) {
        errorMessage.remove();
    }
}
var root = document.querySelector("#root");
var Detailsstring = localStorage.getItem("user");
var details = JSON.parse(Detailsstring);
root === null || root === void 0 ? void 0 : root.innerHTML = "Hello " + details.name;