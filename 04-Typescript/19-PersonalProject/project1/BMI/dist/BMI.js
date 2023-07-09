document.getElementById("bmi-form").addEventListener("submit", function (event) {
    event.preventDefault(); // מניעת התנהגות המחדש של הדפסה לדף
    var form = document.getElementById("bmi-form");
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var height = Number(heightInput.value);
    var weight = Number(weightInput.value);
    var bmi = calculateBMI(height, weight);
    var category = getBMICategory(bmi);
    alert("BMI: " + bmi + "\nCategory: " + category);
    form.reset();
});
function calculateBMI(height, weight) {
    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);
    return Number(bmi.toFixed(2));
}
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    }
    else if (bmi < 25) {
        return 'Normal weight';
    }
    else if (bmi < 30) {
        return 'Overweight';
    }
    else {
        return 'Obese';
    }
}
