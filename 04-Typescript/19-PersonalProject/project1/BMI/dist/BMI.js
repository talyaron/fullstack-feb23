var bmiForm = document.querySelector("#bmi-form");
bmiForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var form = document.querySelector("#bmi-form");
    var heightInput = document.querySelector("#height");
    var weightInput = document.querySelector("#weight");
    var height = Number(heightInput.value);
    var weight = Number(weightInput.value);
    var bmiResult = calculateBMI(height, weight);
    var category = getBMICategory(bmiResult);
    alert("BMI: " + bmiResult + "\nCategory: " + category);
    form.reset();
});
function calculateBMI(height, weight) {
    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);
    return Number(bmi.toFixed(2));
}
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    }
    else if (bmi < 25) {
        return "Normal weight";
    }
    else if (bmi < 30) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}
