var age = prompt("what yore age?");
var ageNumber = parseInt(age || "0");
var errorElement = document.querySelector("#error");
if (ageNumber < 20) {
    document.body.innerHTML = "your under  age";
}
else if (isNaN(ageNumber)) {
    errorElement.innerHTML = "put a number";
}
else if (ageNumber > 20) {
    document.body.innerHTML = "what you want to drink";
}
