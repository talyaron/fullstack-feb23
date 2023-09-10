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
console.log(test)
console.log(family[1])

//--- test 2

let a = family[0].lastName
const b = a
console.log("this is a " + a)
console.log("this is b " + b)


a = "kaki"
console.log("this is primitive " + b)