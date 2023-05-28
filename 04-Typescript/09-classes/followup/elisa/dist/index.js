var Person = /** @class */ (function () {
    function Person(name, yearOfBirth, gender, city, hobby) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.gender = gender;
        this.city = city;
        this.hobby = hobby;
    }
    Person.prototype.ageOfPerson = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    return Person;
}());
var elisa = new Person('ELISA', 1968, 'Female', 'Ashdod', 'Traveling');
console.log(elisa);
console.log(elisa.ageOfPerson());
