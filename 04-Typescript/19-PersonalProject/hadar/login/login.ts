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

const Detailsarray: Details[] = [];

const Detailsstring = localStorage.getItem(`user`);
if (Detailsstring) {
  const storedData: Details[] = JSON.parse(Detailsstring);
  Detailsarray.push(...storedData);
}

function login(event: Event) {
  event.preventDefault();
  try {
    const name = (event.target as HTMLFormElement).elements.name.value;
    const pass = (event.target as HTMLFormElement).elements.pass.value;
    const email = (event.target as HTMLFormElement).elements.email.value;
    const id = (event.target as HTMLFormElement).elements.id.value;
    const data: Details = new Details(name, pass, email, id);
    Detailsarray.push(data);
    localStorage.setItem(`user`, JSON.stringify(Detailsarray));
    (event.target as HTMLFormElement).reset();
    window.location.href = "../web/web.html";
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

const root: Element | null = document.querySelector("#root");
if (Detailsarray.length > 0) {
  const lastDetails = Detailsarray[Detailsarray.length - 1];
  root.innerHTML = `Hello ${lastDetails.name}`;
} else {
  root.innerHTML = "No user details available.";
}
