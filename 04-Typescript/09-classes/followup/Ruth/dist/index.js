var Person = /** @class */ (function () {
    function Person(_name, _yearOfBirth, _gender, _city, _hobbies) {
        this.name = _name;
        this.yearOfBirth = _yearOfBirth;
        this.gender = _gender;
        this.city = _city;
        this.hobbies = _hobbies;
    }
    Person.prototype.getAge = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    return Person;
}());
var ruth = new Person("Ruth BenTov", 2001, "female", "jerusalem", "hike, bike, play guitar");
console.log(ruth);
console.log(ruth.name + " is " + ruth.getAge() + " years old");
