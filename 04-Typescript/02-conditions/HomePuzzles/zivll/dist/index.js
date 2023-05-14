var y = "My name is:";
var x = "Ziv";
console.log(y, x);
var adult = 18;
var userAge = prompt("מהו הגיל שלך?");
var ageAsNumber = parseInt(userAge || "0");
if (ageAsNumber < adult) {
    document.write("<h2>אתה צעיר מידי בשביל לקנות אלכוהול</h2>");
}
else {
    document.write("<h2>מה תרצה לקנות?</h2>");
}
// var container = document.getElementById("ziv");
// container.innerHTML = '<span style="color:red;"></span>';
