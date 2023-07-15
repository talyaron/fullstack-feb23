var root = document.querySelector("#root");
var Detailsstring = localStorage.getItem("user");
var details = { email: "" };
try {
    if (Detailsstring) {
        details = JSON.parse(Detailsstring);
    }
}
catch (error) {
    console.error("Error parsing localStorage data:", error);
}
if (root) {
    root.innerHTML = "Hello " + details.email;
}
console.log(localStorage);
