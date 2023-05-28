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
        hobby: string) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.gender = gender;
        this.city = city;
        this.hobby = hobby;

    }
    ageOfPerson() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
}

const Roman = new Person ("Roman",1985,"male","Arad","Music")
console.log(Roman);

console.log(Roman.ageOfPerson());