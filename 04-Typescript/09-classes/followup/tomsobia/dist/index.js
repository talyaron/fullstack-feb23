var person = /** @class */ (function () {
    function person(name, age, yearOfBirth, gender, city, hobby) {
        this.name = name;
        this.age = age;
        this.yearOfBirth = yearOfBirth;
        this.gender = gender;
        this.city = city;
        this.hobby = hobby;
    }
    person.prototype.ageOfperson = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    return person;
}());
var tom = new person("tom", "28", 1994, "male", "jerusalem", "ps5");
console.log(tom.ageOfperson());
