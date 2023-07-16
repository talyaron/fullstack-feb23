class Details {
  id: string;
  constructor(
    public name: string,
    public pass: string,
    public email: string,
    id?: string | null
  ) {
    if (id) {
      this.id = id;
    } else {
      this.id = `id-${new Date().getTime()}-${Math.random()}`;
    }
  }
}

const Detailsarray = [];
const Detailsstring = localStorage.getItem(`user`);
console.log(Detailsarray);

function login(event) {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const pass = event.target.elements.pass.value;
  const email = event.target.elements.email.value;
  const id = event.target.elements.id;
  const data: Details = new Details(name, pass, email, id);
  Detailsarray.push(data);
  localStorage.setItem(`user`, JSON.stringify(Detailsarray));
  event.target.reset();
  window.location.href = "../web/web.html";
}

const root: Element | null= document.querySelector("#root");
const storedData = JSON.parse(localStorage.getItem("user"));
const lastDetails = storedData[storedData.length - 1];
root.innerHTML = `Hello ${lastDetails.name}`;
