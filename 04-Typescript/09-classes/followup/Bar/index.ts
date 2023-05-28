// create a class about you (call it Person):
// properties: name,yearOfBirth, gender, city, hobby
// method: ageOfPerson

class Person {
    name: string;
    yearOfBirth: number;
    gender: string;
    city: string;
    hobby: string;

    constructor(
        name: string,
        yearOfBirth: number,
        gender: string,
        city: string,
        hobby: string,
    ) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.gender = gender;
        this.city = city;
        this.hobby = hobby;
    }

    ageOfPerson(){
        return new Date().getFullYear() - this.yearOfBirth
    }
}

const barPerson = new Person("Bar", 2002, "female", "Kedumim", "hoola hoop");

console.log(barPerson.ageOfPerson())