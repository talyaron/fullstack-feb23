var Person = /** @class */ (function () {
    function Person(name, yearOfBirth, gender, city, hobby) {
        this.city = city;
        this.gender = gender;
        this.hobby = hobby;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    Person.prototype.ageOfPerson = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    return Person;
}());
var eliyahu = new Person('Eliyahu', 1993, 'male', 'Mitzpe-Yericho', 'travel');
console.log(eliyahu);
console.log(eliyahu.ageOfPerson());
