const gender = prompt("What is yor gender?");

if (gender) {
  // run function

  const greeting:string = greetingByGender(gender);

  document.write(greeting);
}



//hoisted
function greetingByGender(gender: string): string {

    gender = gender.toLowerCase();

  if (gender === "male" || gender === "man") {
    return "Hello Sir";
  } else if (gender === "female") {
    return "Hello Miss";
  } else {
    return "Hello";
  }
}
