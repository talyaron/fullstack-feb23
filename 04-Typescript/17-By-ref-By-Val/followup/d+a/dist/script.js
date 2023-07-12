var family = [
    { firstName: "Doriel", lastName: "Shacham" },
    { firstName: "Savta", lastName: "Babasali" },
    { firstName: "Saba", lastName: "Bisli" }
];
var fam = family[1];
var test = fam.lastName = "Bamba";
// console.log(test)
// console.log(family[1])
//--- test 2
var a = family[0].lastName;
var b = a;
// console.log("this is a " + a)
// console.log("this is b " + b)
a = "laki";
// console.log("this is primitive? " + b)
//-- test 3 copy obj
var Person = {
    name: "Doriel",
    date: new Date("2023-07-05"),
    friends: ["Max", "Ran"]
};
console.log(Person);
var clonePerson = structuredClone(Person);
console.log(clonePerson);
clonePerson.name = "suzuki";
console.log(clonePerson.name);
