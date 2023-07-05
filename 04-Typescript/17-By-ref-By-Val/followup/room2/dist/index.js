var lastame = "Avraham";
var str = lastame;
console.log("lastame after copy: " + lastame);
str = "Harel";
console.log("lastame after str changed: " + lastame);
console.log("str after str changed: " + str);
var persons = [
    { firstName: "Yevgeny", lastName: "2023" },
    { firstName: "Shalom", lastName: "2022" },
    { firstName: "Gili", lastName: "2021" }
];
console.log(persons);
var liran = persons.find(function (person) { return person.lastName === "2022"; });
console.log(liran);
if (liran)
    liran.firstName = "liran";
console.log(liran);
console.log(persons[1]);
persons[1].firstName = "Shalom";
console.log(liran);
