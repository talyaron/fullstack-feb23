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
if (Detailsstring) {
    var storedData = JSON.parse(Detailsstring);
    Detailsarray.push.apply(Detailsarray, storedData);
}
function login(event) {
    event.preventDefault();
    try {
        var name = event.target.elements.name.value;
        var pass = event.target.elements.pass.value;
        var email = event.target.elements.email.value;
        var id = event.target.elements.id.value;
        var data = new Details(name, pass, email, id);
        Detailsarray.push(data);
        localStorage.setItem("user", JSON.stringify(Detailsarray));
        event.target.reset();
        window.location.href = "../web/web.html";
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
}
var root = document.querySelector("#root");
if (Detailsarray.length > 0) {
    var lastDetails = Detailsarray[Detailsarray.length - 1];
    root.innerHTML = "Hello " + lastDetails.name;
}
else {
    root.innerHTML = "No user details available.";
}
