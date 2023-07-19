var bmiForm = document.querySelector("#BMI");
bmiForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var form = document.querySelector("#BMI");
    var heightInput = document.querySelector("#height");
    var weightInput = document.querySelector("#weight");
    try {
        var height = Number(heightInput.value);
        var weight = Number(weightInput.value);
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            throw new Error("Invalid input. Please enter valid numbers for height and weight.");
        }
        var bmiResult = calculateBMI(height, weight);
        var category = getBMICategory(bmiResult);
        alert("BMI: " + bmiResult + "\nCategory: " + category);
    }
    catch (error) {
        alert("An error occurred: " + error.message);
    }
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
