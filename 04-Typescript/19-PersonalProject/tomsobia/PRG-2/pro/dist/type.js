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
var Detailsarray = [];
var Detailsstring = localStorage.getItem("user");
console.log(Detailsarray);
function saveDetails(event) {
    event.preventDefault();
    var name = event.target.elements.name.value;
    var pass = event.target.elements.pass.value;
    var email = event.target.elements.email.value;
    var number = event.target.elements.number.value;
    var id = event.target.elements.id;
    var data = new Details(name, pass, email, number, id);
    Detailsarray.push(data);
    if (number < 18) {
        var errorMessageExists = document.getElementById("errorMessage");
        if (!errorMessageExists) {
            var errorMessage = document.createElement("p");
            errorMessage.textContent = "אתה מתחת לגיל החוקי!";
            errorMessage.style.color = "black";
            errorMessage.style.backgroundColor = "red";
            errorMessage.style.border = "3px solid black";
            errorMessage.style.fontSize = "3vw";
            errorMessage.id = "errorMessage";
            event.target.appendChild(errorMessage);
        }
        return;
    }
    localStorage.setItem("user", JSON.stringify(Detailsarray));
    event.target.reset();
    window.location.href = "TmS.html";
}
