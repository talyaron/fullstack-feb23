var age = prompt("what is your age?");
var ageasnumber = parseInt(age || "0");
if (ageasnumber >= 18) {
    document.write("תרצה וודקה?");
}
else {
    document.write("תרצה חלב?");
}
document.write("תרצה חלב?");
