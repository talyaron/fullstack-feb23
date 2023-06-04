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

    getAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
}

//instance
const leeDekel = new Person("Lee Dekel", 1986, "female", "yavne", "video editing");


console.log(leeDekel.getAge());