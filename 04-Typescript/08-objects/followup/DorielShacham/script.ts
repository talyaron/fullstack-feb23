interface Human {
    firstName: string,
    lastName: string,
    age?: number, 
    isTeacher: boolean
}

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
//__ __ __ -> This is the function to grab the interface and connect to function

const personThree: Human = {
    firstName: "Daniel",
    lastName: "Tovbin",
    isTeacher: false
}

function callPerson(person: Human | undefined){
    try {
        if(person?.firstName){
            return `Welcome ${person.firstName} and age is ${person.age}`
        }
        if(!person?.age) throw new Error("age is missing");
        
    } catch (error) {
        console.error(error)
        return undefined
    }
}
console.log(callPerson(personThree))