var Person = /** @class */ (function () {
    function Person(name, yearOfBirth, gender, city, hooby) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.gender = gender;
        this.city = city;
        this.hooby = hooby;
    }
    Person.prototype.ageOfPerson = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    return Person;
}());
var evgeny = new Person("evgeny", 1994, "male", "holon", "meh");
console.log(evgeny.ageOfPerson());
