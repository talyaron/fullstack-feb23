// create a class about you (call it Person):
// properties: name,yearOfBirth, gender, city, hobby
// method: ageOfPerson
var person = /** @class */ (function () {
    function person(name, yearOfBirth, gender, cityOfLiving, hobby) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.gender = gender;
        this.cityOfLiving = cityOfLiving;
        this.hobby = hobby;
    }
    person.prototype.ageOfPerson = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    return person;
}());
var alex = new person("Alex", 1981, "male", "Rishon", "TypeScript");
console.log(alex.ageOfPerson);
