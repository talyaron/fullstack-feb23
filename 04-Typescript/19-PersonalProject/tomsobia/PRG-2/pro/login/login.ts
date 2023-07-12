// import (@sef)

class Details {
  id: string;

  constructor(
    public name: string,
    public pass: string,
    public email: string,
    public number: number,
    id?: string | null
  ) {
    if (id) {
      this.id = id;
    } else {
      this.id = `id-${new Date().getTime()}-${Math.random()}`;
    }
  }
}

function saveDetails(event) {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const pass = event.target.elements.pass.value;
  const email = event.target.elements.email.value;
  const number = event.target.elements.number.value;
  const id = event.target.elements.id;
  const data: Details = new Details(name, pass, email, number, id);

  if (number < 18) {
    const errorMessageExists = document.getElementById("errorMessage");
    if (!errorMessageExists) {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "You are under age!";
      errorMessage.id = "errorMessage";
      errorMessage.style.borderRadius = "20px";
      errorMessage.style.color = "black";
      errorMessage.style.backgroundColor = "red";
      errorMessage.style.border = "3px solid black";
      errorMessage.style.fontSize = "3vw";
      event.target.appendChild(errorMessage);
    }
    return;
  }

  localStorage.setItem(`user`, JSON.stringify(data));
  event.target.reset();
  window.location.href = "../web/TmS/webTmS.html";

  const errorMessage = document.getElementById("errorMessage");
  if (errorMessage) {
    errorMessage.remove();
  }
}

// const root = document.querySelector("#root");
// const Detailsstring = localStorage.getItem("user");
// const details = JSON.parse(Detailsstring);
// root?.innerHTML = `Hello ${details.name}`;
