const root = document.querySelector("#root");
const Detailsstring = localStorage.getItem("user");
const details = JSON.parse(Detailsstring);
root?.innerHTML = `Hello ${details.name}`;
