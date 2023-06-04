//Model (data) View (GUI) Controler(process)
var ageAsString = prompt("what is your age?");
// debugger;
console.log(ageAsString);
//scope
if (ageAsString) {
    var ageAsNumber = parseInt(ageAsString);
    if (!isNaN(ageAsNumber)) {
        console.log(ageAsNumber);
        if (ageAsNumber >= 18) {
            document.write("which alchol beverage woulf you like?");
        }
        else {
            document.write("You are too young to some drink");
        }
    }
}
var z = !true;
//false value
// values which afre equal to flase
// 0, null, undefined, NaN, ""
console.log(z);
