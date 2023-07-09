function calculateAlcohol() {
    let gender = document.getElementById('gender').value;
    let weight = document.getElementById('weight').value;
    let drinks = document.getElementById('drinks').value;
    let alcohol = document.getElementById('alcohol').value;

    let ratio = (gender === 'male') ? 0.68 : 0.55;
    let totalAlcohol = drinks * alcohol;
    let estimatedBAC = totalAlcohol / (weight * ratio);

    let result = document.getElementById('result');
    result.textContent = 'הכמות המשוערת של אלכוהול בדם שלך היא: ' + estimatedBAC.toFixed(2) + ' %';
}
