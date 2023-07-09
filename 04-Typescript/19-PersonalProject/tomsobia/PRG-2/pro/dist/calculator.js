function calculateAlcohol() {
    var gender = document.getElementById('gender').value;
    var weight = document.getElementById('weight').value;
    var drinks = document.getElementById('drinks').value;
    var alcohol = document.getElementById('alcohol').value;
    var ratio = (gender === 'male') ? 0.68 : 0.55;
    var totalAlcohol = drinks * alcohol;
    var estimatedBAC = totalAlcohol / (weight * ratio);
    var result = document.getElementById('result');
    result.textContent = 'הכמות המשוערת של אלכוהול בדם שלך היא: ' + estimatedBAC.toFixed(2) + ' %';
}
