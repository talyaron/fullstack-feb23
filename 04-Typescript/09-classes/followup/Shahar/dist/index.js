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
var Shahar = new Person('Shahar', 1996, 'male', 'Jerusalem', 'Gaming');
var Shay = new Person('Shay', 2001, 'female', 'Jerusalem', 'Shopping');
console.log(Shahar, Shay);
console.log('The age is of Shahar', Shahar.ageOfPerson());
console.log('The age is of Shay', Shay.ageOfPerson());
