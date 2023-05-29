class Person {
    name: string;
    yearOfBirth: number;
    gender: string;
    city: string;
    hobby: string;
    ageOfPerson() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
    constructor(
        name: string,
        yearOfBirth: number,
        gender: string,
        city: string,
        hobby: string,
    ) {
        this.city = city;
        this.gender = gender;
        this.hobby = hobby;
        this.name = name;
        this.yearOfBirth = yearOfBirth
    }
}
const eliyahu = new Person('Eliyahu', 1993, 'male','Mitzpe-Yericho', 'travel' )
console.log (eliyahu)
console.log (eliyahu.ageOfPerson())