var personOne = {
    firstName: "Doriel",
    lastName: "Shacham",
    age: 29,
    isTeacher: false
};
var personTwo = {
    firstName: "Tal",
    lastName: "Yaron",
    age: 25,
    isTeacher: true
};
console.log(personOne.firstName);
console.log("Is " + personTwo.firstName + " a teacher? \n" + "", personTwo.isTeacher);
console.log("Is " + personOne.firstName + " a teacher? \n" + "", personOne["isTeacher"]);
//__ __ __ -> This is the function to grab the interface and connect to function
var personThree = {
    firstName: "Daniel",
    lastName: "Tovbin",
    isTeacher: false
};
function callPerson(person) {
    try {
        if (person === null || person === void 0 ? void 0 : person.firstName) {
            return "Welcome " + person.firstName + " and age is " + person.age;
        }
        if (!(person === null || person === void 0 ? void 0 : person.age))
            throw new Error("age is missing");
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(callPerson(personThree));
