let lastame = "Avraham";
let str = lastame;
console.log(`lastame after copy: ${lastame}`)
str = "Harel";
console.log(`lastame after str changed: ${lastame}`)
console.log(`str after str changed: ${str}`)

interface Person{
    firstName: string,
    lastName: string;
}

const persons: Person[] = [
    { firstName: "Yevgeny", lastName: "2023" },
    { firstName: "Shalom", lastName: "2022" },
    { firstName: "Gili", lastName: "2021" }
]

console.log(persons)

const liran = persons.find(person => person.lastName === "2022");

console.log(liran)
if(liran)
    liran.firstName = "liran";

    console.log(liran)
    console.log(persons[1])
persons[1].firstName = "Shalom"
    
console.log(liran)
