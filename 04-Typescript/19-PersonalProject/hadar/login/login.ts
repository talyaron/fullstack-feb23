// class Details {
//   id: string;

//   constructor(
//     public name: string,
//     public pass: string,
//     public email: string,
//     id?: string | null
//   ) {
//     if (id) {
//       this.id = id;
//     } else {
//       this.id = `id-${new Date().getTime()}-${Math.random()}`;
//     }
//   }
// }

// const Detailsarray: Details[] = [];

// const Detailsstring = localStorage.getItem(`user`);
// if (Detailsstring) {
//   const storedData: Details[] = JSON.parse(Detailsstring);
//   Detailsarray.push(...storedData);
// }

// function login(event) {
//   event.preventDefault();
//   const name = event.target.elements.name.value;
//   const pass = event.target.elements.pass.value;
//   const email = event.target.elements.email.value;
//   const id = event.target.elements.id;
//   const data: Details = new Details(name, pass, email, id);
//   Detailsarray.push(data);
//   localStorage.setItem(`user`, JSON.stringify(Detailsarray));
//   event.target.reset();
//   window.location.href = "../web/web.html";
// }

// const root: Element | null = document.querySelector("#root");
// if (Detailsarray.length > 0) {
//   const lastDetails = Detailsarray[Detailsarray.length - 1];
//   root.innerHTML = `Hello ${lastDetails.name}`;
// } else {
//   root.innerHTML = "No user details available.";
// }

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
  window.location.href = "..\web\web.html";
}