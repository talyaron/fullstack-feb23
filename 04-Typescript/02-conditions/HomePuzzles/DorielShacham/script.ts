const form: number|null  = document.querySelector("form");
const result: string|number|null = document.querySelector("#result");



form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ageInput:number|null|undefined = document.querySelector("#age");
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


//button click
const op = document.querySelector("body > div.container");
const submit = document.querySelector(".submit");
submit.addEventListener('click', () => {
  result.style.left = '0%';
  op.style.opacity = '0.3';
});
