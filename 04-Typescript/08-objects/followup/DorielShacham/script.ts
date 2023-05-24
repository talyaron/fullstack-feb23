const personOne = {
    firstName: "Doriel", 
    lastName: "Shacham",
    age: 29,
    isTeacher: false
}

const personTwo = {
    firstName: "Tal",
    lastName: "Yaron",
    age: 25,
    isTeacher: true
}

console.log(personOne.firstName);
console.log("Is " + personTwo.firstName+ " a teacher? \n" + "", personTwo.isTeacher );
console.log("Is " + personOne.firstName + " a teacher? \n" + "", personOne["isTeacher"]);