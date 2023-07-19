const root: HTMLElement | null = document.querySelector("#root");
const Detailsstring: string | null = localStorage.getItem("user");
const details: { name: string } = Detailsstring
  ? JSON.parse(Detailsstring)
  : { name: "" };
if (root) {
  root.innerHTML = `Hello ${details.name}`;
}
