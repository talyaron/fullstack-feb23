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

const Detailsarray = [];
const Detailsstring = localStorage.getItem(`user`);
console.log(Detailsarray);


function saveDetails(event) {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const pass = event.target.elements.pass.value;
  const email = event.target.elements.email.value;
  const number = event.target.elements.number.value;
  const id = event.target.elements.id;
  const data: Details = new Details(name, pass, email, number, id);
  Detailsarray.push(data);

  if (number < 18) {
<<<<<<< HEAD
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "you are under age!";
    errorMessage.style.color = "black";
    errorMessage.style.backgroundColor = "red";
    errorMessage.style.border = "3px solid black";
    errorMessage.style.fontSize = "3vw";
    event.target.appendChild(errorMessage);
=======
    const errorMessageExists = document.getElementById("errorMessage");
    if (!errorMessageExists) {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "אתה מתחת לגיל החוקי!";
      errorMessage.style.color = "black";
      errorMessage.style.backgroundColor = "red";
      errorMessage.style.border = "3px solid black";
      errorMessage.style.fontSize = "3vw";
      errorMessage.id = "errorMessage";
      event.target.appendChild(errorMessage);
    }
>>>>>>> f87bfff11cb0fe9e23ef6c8db0969b1b4a29ad66
    return;
  }

  localStorage.setItem(`user`, JSON.stringify(Detailsarray));
  event.target.reset();
  window.location.href = "TmS.html";
}
