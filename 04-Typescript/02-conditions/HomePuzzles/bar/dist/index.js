var gender = prompt("whwt is your gender?");
if (gender === 'men') {
    document.write("היי גבר");
}
else {
    document.write("היי");
}
var age = prompt("how old are you?");
var ageAsNumber = parseInt(age || "0");
if (ageAsNumber >= 18) {
    document.write("תרצה לקנות בירה?");
}
else {
    document.write("תרצה מיץ תפוזים?");
}
