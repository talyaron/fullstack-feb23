var root = document.querySelector("#root");
var Detailsstring = localStorage.getItem("user");
var details = JSON.parse(Detailsstring);
root === null || root === void 0 ? void 0 : root.innerHTML = "Hello " + details.name;
