const form: number = document.querySelector("form");
const result: string | null = document.querySelector("#result");

function checker(){
  const gend = prompt("are you male or female?"); 
  switch (gend)
  {
      case "male":
          alert("You are male");
          break;
      case "female":
          alert("You you female");
          break;
      default:
          alert("You are undefind, please enter `male` or `female`");
          break;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ageInput:number = document.querySelector("#age");
  const age = parseInt(ageInput.value);
  if (age >= 18) {
    console.log("You are old enough to buy alcohol!")
    result.style.backgroundColor = "lime";
    result.innerHTML = "You are old enough to buy alcohol!";
  } else {
    console.log("You are not old enough to buy alcohol.")
    result.style.backgroundColor = "red";
    result.innerHTML = "You are not old enough to buy alcohol.";
  }
});

const op = document.querySelector("body > div.container");
const submit = document.querySelector(".submit");
submit.addEventListener('click', () => {
  result.style.left = '0%';
  op.style.opacity = '0.3';
});
