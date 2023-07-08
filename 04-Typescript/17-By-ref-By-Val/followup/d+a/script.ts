interface Family{
    firstName: string;
    lastName:string;
}

const family: Family[] = [
    {firstName: "Doriel", lastName:"Shacham"},
    {firstName: "Savta", lastName:"Babasali"},
    {firstName: "Saba", lastName:"Bisli"}
]

const fam = family[1];
const test = fam.lastName = "Bamba"
// console.log(test)
// console.log(family[1])

//--- test 2

let a = family[0].lastName
const b = a
// console.log("this is a " + a)
// console.log("this is b " + b)

a = "laki"
// console.log("this is primitive? " + b)

//-- test 3 copy obj
const Person = {
    name: "Doriel",
    date: new Date("2023-07-05"),
    friends: ["Max", "Ran"]
  }
  console.log(Person)
  const clonePerson = structuredClone(Person)
console.log(clonePerson)
clonePerson.name = "suzuki"
console.log(clonePerson.name)




