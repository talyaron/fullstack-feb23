//קלאס
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
//

const DetailsArray: Details[] = [];

function saveDetails(event) {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const pass = event.target.elements.pass.value;
  const email = event.target.elements.email.value;
  const number = event.target.elements.number.value;
  const id = event.target.elements.id;
  const data: Details = new Details(name, pass, email, number, id);
  DetailsArray.push(data);
  console.log(DetailsArray);
  try {
    if (number < 18) {
      const errorMessageExists = document.querySelector("#errorMessage");
      if (!errorMessageExists) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "You are under age!";
        errorMessage.id = "errorMessage";
        errorMessage.style.marginTop = "7px";
        errorMessage.style.padding = "7px";
        errorMessage.style.borderRadius = "20px";
        errorMessage.style.color = "#D5F929";
        errorMessage.style.backgroundColor = "red";
        errorMessage.style.border = "3px solid #D5F929";
        errorMessage.style.fontSize = "3vw";
        event.target.appendChild(errorMessage);
      }
      return;
    }
  } catch (error) {
    console.error(error);
  }

  //שומר את הפרטים ומעביר דף
  localStorage.setItem(`user`, JSON.stringify(data));
  console.log(localStorage);
  event.target.reset();
  window.location.href = "../web/TmS/webTmS.html";
  //
  //

  //זורק הערה אם אתה מתחת לגיל
  const errorMessage = document.querySelector("#errorMessage");
  if (errorMessage) {
    errorMessage.remove();
  }
}
//