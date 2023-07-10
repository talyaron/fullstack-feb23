document
  .getElementById("bmi-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // מניעת התנהגות המחדש של הדפסה לדף

    const form = document.getElementById("bmi-form") as HTMLFormElement;
    const heightInput = document.getElementById("height") as HTMLInputElement;
    const weightInput = document.getElementById("weight") as HTMLInputElement;

    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    const bmi = calculateBMI(height, weight);
    const category = getBMICategory(bmi);

    alert(`BMI: ${bmi}\nCategory: ${category}`);

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
