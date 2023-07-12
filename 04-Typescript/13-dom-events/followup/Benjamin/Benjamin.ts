const age=prompt("what is your age?");
const ageasnumber = parseInt(age || "0");
if (ageasnumber >= 18){
    document.write("תרצה וודקה?");
}
else{
    document.write("תרצה חלב?");
}
document.write("תרצה חלב?");