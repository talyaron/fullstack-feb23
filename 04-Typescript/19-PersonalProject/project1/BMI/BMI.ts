<<<<<<< HEAD
const bmiForm:any= document.querySelector("#bmi-form");
bmiForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const form = document.querySelector("#bmi-form") as HTMLFormElement;
=======
const bmiForm:any= document.querySelector("#BMI");
bmiForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const form = document.querySelector("#BMI") as HTMLFormElement;
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
  const heightInput = document.querySelector("#height") as HTMLInputElement;
  const weightInput = document.querySelector("#weight") as HTMLInputElement;

  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  const bmiResult = calculateBMI(height, weight);
  const category = getBMICategory(bmiResult);

  alert(`BMI: ${bmiResult}\nCategory: ${category}`);

  form.reset();
});

function calculateBMI(height: number, weight: number): number {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return Number(bmi.toFixed(2));
}

function getBMICategory(bmi: number): string {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
