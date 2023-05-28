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
var ziv = new Person("Ziv", 1991, "Male", "Petach-Tikva", "Computers");
console.log(ziv);
console.log("your age is: " + ziv.ageOfPerson());
