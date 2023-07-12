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
        hobby: string
    )
    {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.gender = gender;
    this.city = city;
    this.hobby = hobby;
    }
    ageOfPerson(): number {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.yearOfBirth;
        return age;
    }
}
const personDoriel = new Person("Doriel", 1994, "Male", "Haifa", "Ride Motorcycles");
console.log(personDoriel.ageOfPerson())