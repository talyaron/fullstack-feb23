//Model (data) View (GUI) Controler(process)

const ageAsString: string | null = prompt("what is your age?");
debugger;
console.log(ageAsString);
//scope
if (ageAsString) {
  const ageAsNumber = parseInt(ageAsString);

  if (!isNaN(ageAsNumber)) {
    console.log(ageAsNumber);
    if (ageAsNumber >= 18) {
      document.write("which alchol beverage woulf you like?");
    } else {
      document.write("You are too young to some drink");
    }
  }
}

const z = !true;

//false value
// values which afre equal to flase
// 0, null, undefined, NaN, ""
console.log(z);
