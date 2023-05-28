// // create a class about you (call it Person):
// properties: name,yearOfBirth, gender, city, hobby
// method: ageOfPerson
var Ran = /** @class */ (function () {
    function Ran(name, yearofBirth, gender, city, hobby) {
        this.name = name;
        this.yearofBirth = yearofBirth;
        this.gender = gender;
        this.city = city;
        this.hobby = hobby;
    }
    Ran.prototype.ageofPerson = function () {
        return new Date().getFullYear() - this.yearofBirth;
    };
    return Ran;
}());
var PropertiesofRan = new Ran('Ran yamin', 2000, 'male', 'kiryat malachi', 'sports');
var ageOfPerson = PropertiesofRan.ageofPerson();
console.log(ageOfPerson);
