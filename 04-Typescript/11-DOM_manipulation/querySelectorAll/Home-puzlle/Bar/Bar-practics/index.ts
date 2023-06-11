// get from the user a number.


// create a function that multiply the number by 10.
function multiplyNumber() {
  
    const getNumber = Number(prompt("Enter a number"));

    const multiply = document.querySelector(`#multiply`);
    const result = getNumber * 10;
    
    // result: toString
    if (getNumber && multiply) {
        multiply.innerHTML = result.toString();
    }
}
multiplyNumber()