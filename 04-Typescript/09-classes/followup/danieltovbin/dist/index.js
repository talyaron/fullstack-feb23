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
        this.ageOfPerson = ageOfPerson;
    }
    return Person;
}());
var danielsProperties = new Person('Daniel', 2002, 'woman', 'Ramla', 'sport');
// class Car {
//   company: string;
//   model: string;
//   color: string;
//   year: number;
//   id: string;
//   gasConsumption:number
//   constructor(
//     company: string,
//     model: string,
//     color: string,
//     year: number,
//     id?: string
//   ) {
//     this.color = color;
//     this.company = company;
//     this.model = model;
//     this.year = year;
//     if (id) {
//       this.id = id;
//     } else {
//       this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);;
//     }
//   }
//   ageOfCar() {
//     return new Date().getFullYear() - this.year;
//   }
// }
// //instance
// const talsCar = new Car("Opel", "Coursa", "Blue", 2018);
// const shiransCar = new Car("Pegout", "3008", "Mouse-Gray", 2018);
// const tomsCar = new Car("Mazada", "CX5", "Red", 2014);
// console.log(talsCar, shiransCar, tomsCar);
// console.log(tomsCar.ageOfCar());
