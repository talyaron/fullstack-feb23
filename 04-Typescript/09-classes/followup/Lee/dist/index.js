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
    Person.prototype.getAge = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    return Person;
}());
//instance
var leeDekel = new Person("Lee Dekel", 1986, "female", "yavne", "video editing");
console.log(leeDekel.getAge());
