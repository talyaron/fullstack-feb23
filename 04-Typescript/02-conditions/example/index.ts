if (2 > 3) {
  console.log("2 is bigger than 3");
} else {
  console.log("2 is not bigger than 3");
}

const x: boolean = false;

if (x) {
  console.log("this is true");
} else {
  console.log("====================================");
  console.log("this is not true");
  console.log("====================================");
}

const a = 10;
const b = 12;
if (a > b) {
  console.log("a > b");
} else {
  console.log("a =< b");
}

let c: number = 12;
let d: string = "12";

if (c === d) {
  console.log("c == d");
} else {
  console.log("c != d");
}

const userType: string = "admin";

if (userType === "admin") {
  console.log("show all data");
}

const age = prompt("what is your age?");
const ageAsNumber = parseInt(age || "0");

if (ageAsNumber >= 18) {
  document.write("תרצה וודקה תפוזים?");
} else {
  document.write("לך מכאן ילד אהבל");
}
