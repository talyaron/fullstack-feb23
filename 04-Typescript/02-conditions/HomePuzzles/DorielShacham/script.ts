//--> Gender checker
const form = document.querySelector("#gengen");
const result: HTMLDivElement =
  document.querySelector("#result") || document.createElement("div");


function checker() {
  const gend = prompt("are you male or female?");
  switch (gend) {
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

//--> Age checker
form!.addEventListener("submit", (event) => {
  const ageInput: HTMLInputElement =
    document.querySelector("#age") || document.createElement("input");
  const age = parseInt(ageInput.value);

  if (!ageInput.value) {
    result.style.backgroundColor = "red";
    result.innerHTML = "No input recived!";
  } else {
    if (age >= 18) {
      console.log('%c' + "You are old enough to buy alcohol!"+ '', 'color: lime; background-color: blue; display: block; font-weight: bold; font-size: 20px; padding: 10px; border-radius: 15px;');
      result!.style.backgroundColor = "lime";
      result.innerHTML = "You are old enough to buy alcohol!";
    } else {
      console.log('%c' + "You are not old enough to buy alcohol."+ '', 'color: red; background-color: blue; display: block; font-weight: bold; font-size: 20px; padding: 10px; border-radius: 15px;');
      result.style.backgroundColor = "red";
      result.innerHTML = "You are not old enough to buy alcohol.";
    }
  }
  event.preventDefault();
  document.querySelector<HTMLDivElement>(
    "body > div.container"
  )!.style.opacity = "0.3";
  result.style.left = "0%";
});

//--> BMI calculator
const bmiForm = document.querySelector("#bmii");
const bmiResult: HTMLDivElement = document.querySelector("#bmiResult") || document.createElement("div");

bmiForm!.addEventListener("submit", (event) => {  
  const heightInput: HTMLInputElement = document.querySelector("#height") || document.createElement("input");
  const weightInput: HTMLInputElement = document.querySelector("#weight") || document.createElement("input");
  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);
  const heightMeters = height / 100;
  const bmi = weight / (heightMeters * heightMeters);

  if (!heightInput.value || !weightInput.value) {
    bmiResult.style.backgroundColor = "red";
    bmiResult.innerHTML = "No input received!";
  } else {
    if (bmi < 18.5) {
      console.log("You are underweight");
      bmiResult.style.backgroundColor = "red";
      bmiResult.innerHTML = "You are underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      console.log("You are normal");
      bmiResult.style.backgroundColor = "lime";
      bmiResult.innerHTML = "You are normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      console.log("You are overweight");
      bmiResult.style.backgroundColor = "red";
      bmiResult.innerHTML = "You are overweight";
    } else if (bmi >= 30) {
      console.log("You are obese");
      bmiResult.style.backgroundColor = "red";
      bmiResult.innerHTML = "You are obese";
    }
  }
  event.preventDefault();
  document.querySelector<HTMLDivElement>(
    "body > div.container"
  )!.style.opacity = "0.3";
  bmiResult.style.left = "0%";
});

//--> test list creation forLoop
for (var aii = 1; aii <= 6; aii++) {
  const aba = document.querySelector("body > ul.test");
  const lily = document.createElement("li");
  lily.classList.add("lili");
  aba?.appendChild(lily);
}

var liliElements = document.querySelectorAll(".lili");
liliElements.forEach(function (element) {
  element.addEventListener("click", function () {
    element.remove();
  });
});


