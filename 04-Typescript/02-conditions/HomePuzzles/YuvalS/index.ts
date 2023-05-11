// const Age = Number(prompt("Enter your age"))
// if (Age >= 18) {
//     document.write ("יכול לשתות")
// }

// else {
//     document.write ("לא יכול לשתות")
// }

// const gender = (prompt("what is your gender?"))
// if (gender === 'man') {
//     document.write ("hello man")
// }

// else {
//     document.write ("hello woman")
// }

function BMI (x: number, y: number): number {
    return x / (y*y)
}

const weight = Number(prompt("Enter your weight"))
const height = Number(prompt("Enter your height"))

console.log(BMI(weight, height))