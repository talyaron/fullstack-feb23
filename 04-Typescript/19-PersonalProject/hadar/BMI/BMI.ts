const bmiForm: any = document.querySelector("#BMI");
bmiForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const form = document.querySelector("#BMI") as HTMLFormElement;
  const heightInput = document.querySelector("#height") as HTMLInputElement;
  const weightInput = document.querySelector("#weight") as HTMLInputElement;

  try {
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      throw new Error("Invalid input. Please enter valid numbers for height and weight.");
    }

    const bmiResult = calculateBMI(height, weight);
    const category = getBMICategory(bmiResult);

    alert(`BMI: ${bmiResult}\nCategory: ${category}`);
  } catch (error) {
    alert(`An error occurred: ${error.message}`);
  }

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
