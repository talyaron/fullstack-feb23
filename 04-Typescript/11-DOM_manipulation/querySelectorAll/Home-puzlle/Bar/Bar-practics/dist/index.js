// get from the user a number.
// create a function that multiply the number by 10.
function multiplyNumber() {
    var getNumber = Number(prompt("Enter a number"));
    var multiply = document.querySelector("#multiply");
    var result = getNumber * 10;
    // result: toString
    if (getNumber && multiply) {
        multiply.innerHTML = result.toString();
    }
}
multiplyNumber();
