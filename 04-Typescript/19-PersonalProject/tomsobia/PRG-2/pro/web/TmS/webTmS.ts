const root: HTMLElement | null = document.querySelector("#root");
const Detailsstring: string | null = localStorage.getItem("user");

let details: { email: string } = { email: "" };

try {
  if (Detailsstring) {
    details = JSON.parse(Detailsstring);
  }
} catch (error) {
  console.error("Error parsing localStorage data:", error);
}

if (root) {
  root.innerHTML = `Hello ${details.email}`;
}
console.log(localStorage);
