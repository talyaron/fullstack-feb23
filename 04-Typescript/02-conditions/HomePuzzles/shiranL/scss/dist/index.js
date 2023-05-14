document.getElementById("fatIMG").hidden = true;
document.getElementById("thinIMG").hidden = true;
document.getElementById("healthyIMG").hidden = true;
function Myfunc() {
    var height = parseInt(document.querySelector("#height").value);
    var weight = parseInt(document.querySelector("#weight").value);
    var lname = document.querySelector("#lname").value;
    var fname = document.querySelector("#fname").value;
    var result = document.querySelector("#result");
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";
    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";
    // If both input is valid, calculate the bmi
    else {
        // Fixing upto 2 decimal places
        var bmi = (weight / ((height * height)
            / 10000)).toFixed(2);
        // Dividing as per the bmi conditions
        if (bmi < 18.6) {
            result.innerHTML =
                "<span>" + lname + "</span> \u05D0\u05EA\u05D4 \u05E8\u05D6\u05D4 \u05DE\u05D9\u05D3\u05D9 \u05D0\u05D9\u05DB\u05E1! BMI : <span>" + bmi + "</span>";
            document.getElementById("healthyIMG").hidden = true;
            document.getElementById("fatIMG").hidden = true;
            document.getElementById("thinIMG").hidden = false;
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML =
                "<span>" + fname + "</span> \u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3 \u05DE\u05E9\u05E7\u05DC \u05EA\u05E7\u05D9\u05DF  , BMI: <span>" + bmi + "</span>";
            document.getElementById("thinIMG").hidden = true;
            document.getElementById("fatIMG").hidden = true;
            document.getElementById("healthyIMG").hidden = false;
        }
        else {
            result.innerHTML =
                "<span>" + fname + "</span> \u05D4\u05D2\u05D6\u05DE\u05EA , \u05D3\u05DC\u05D2 \u05E2\u05DC \u05D0\u05E8\u05D5\u05D7\u05EA \u05E2\u05E8\u05D1 BMI : <span>" + bmi + "</span>";
            document.getElementById("fatIMG").hidden = false;
            document.getElementById("thinIMG").hidden = true;
            document.getElementById("healthyIMG").hidden = true;
        }
    }
}
