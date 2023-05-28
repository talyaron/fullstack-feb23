// create a class about you (call it Person):
// properties: name,yearOfBirth, gender, city, hobby
// method: ageOfPerson
var Person = /** @class */ (function () {
    function Person(name, yearOfBirth, gender, city, hobby) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.gender = gender;
        this.city = city;
        this.hobby = hobby;
    }
    Person.prototype.ageOfPerson = function () {
        var currentYear = new Date().getFullYear();
        var age = currentYear - this.yearOfBirth;
        return age;
    };
    return Person;
}());
var personDoriel = new Person("Doriel", 1994, "Male", "Haifa", "Ride Motorcycles");
console.log(personDoriel.ageOfPerson());
