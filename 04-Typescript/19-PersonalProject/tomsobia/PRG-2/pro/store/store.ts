class battle {
  id: string;
  constructor(
    public name,
    public pass,
    public email,
    public number,
    public ?id
  ) {
    id = id || `id-${new Date().getTime()}-${Math.random()}`;
  }
}



const root: HTMLElement | null = document.querySelector("#root");
const Detailsstring: string | null = localStorage.getItem("user");
const details: { name: string } = Detailsstring
  ? JSON.parse(Detailsstring)
  : { name: "" };
if (root) {
  root.innerHTML = `Hello ${details.name}`;
}
