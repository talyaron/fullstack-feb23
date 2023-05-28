var Person = /** @class */ (function () {
    function Person(name, ageOfBirth, gender, city, hobby) {
        this.name = name;
        this.ageOfBirth = ageOfBirth;
        this.gender = gender;
        this.city = city;
        this.hobby = hobby;
    }
    Person.prototype.ageOfPerson = function () {
        return new Date().getFullYear() - this.ageOfBirth;
    };
    return Person;
}());
var liran = new Person("Liran", 1989, "Male", "Yoqne'am", "football");
console.log(liran);
console.log(liran.ageOfPerson());
