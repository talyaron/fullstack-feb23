function calculateAlcohol() {
    try {
        var gender = document.querySelector("#gender").value;
        var weight = Number(document.querySelector("#weight").value);
        var drinks = Number(document.querySelector("#drinks").value);
        var alcohol = Number(document.querySelector("#alcohol").value);
        var ratio = gender === "male" ? 0.68 : 0.55;
        var totalAlcohol = drinks * alcohol;
        var estimatedBAC = totalAlcohol / (weight * ratio);
        var result = document.querySelector("#result");
        result.textContent = "\u05D4\u05DB\u05DE\u05D5\u05EA \u05D4\u05DE\u05E9\u05D5\u05E2\u05E8\u05EA \u05E9\u05DC \u05D0\u05DC\u05DB\u05D5\u05D4\u05D5\u05DC \u05D1\u05D3\u05DD \u05E9\u05DC\u05DA \u05D4\u05D9\u05D0: " + estimatedBAC.toFixed(2) + " %";
    }
    catch (error) {
        console.error(error);
    }
}
