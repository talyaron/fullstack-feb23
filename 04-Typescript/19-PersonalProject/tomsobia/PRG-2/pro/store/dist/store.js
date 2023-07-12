var root = document.querySelector("#root");
var Detailsstring = localStorage.getItem("user");
var details = Detailsstring
    ? JSON.parse(Detailsstring)
    : { name: "" };
if (root) {
    root.innerHTML = "Hello " + details.name;
}
