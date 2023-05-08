const form: number  = document.querySelector("form");
const result: string  = document.querySelector("#result");

function checker(){
  const gend = prompt("are you male or female?"); 
  switch (gend)
  {
      case "male" || "MALE" || "Male":
          alert("אתה גבר גבר");
          break;
      case "female" || "FEMALE" || "Female":
          alert("את וואלה אישה");
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

//--> test list creation forLoop
for (var aii = 1; aii <= 6; aii++) {
  const aba = document.querySelector("body > ul.test");
  var lily = document.createElement("li");
  lily.classList.add("lili");
  aba.appendChild(lily);
}

var liliElements = document.querySelectorAll('.lili');
liliElements.forEach(function(element) {
  element.addEventListener('click', function() {
    element.remove();
  });
});