var person = /** @class */ (function () {
    function person(name, yearOfBirth, gender, city, hobby) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.gender = gender;
        this.city = city;
        this.hobby = hobby;
    }
    person.prototype.ageofperson = function () {
        return (2023 - this.yearOfBirth);
    };
    return person;
}());
var hadar = new person("hadar", 2001, "female", "Shoham", "painting");
console.log(hadar.ageofperson());
