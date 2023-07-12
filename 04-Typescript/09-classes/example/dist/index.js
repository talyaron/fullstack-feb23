//clases are objects factory
var Dog = /** @class */ (function () {
    function Dog(type, name, yearOfBirth) {
        this.name = name;
        this.type = type;
        this.yearOfBirth = yearOfBirth;
    }
    Dog.prototype.getAge = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    return Dog;
}());
var Car = /** @class */ (function () {
    function Car(company, model, color, year, id) {
        this.color = color;
        this.company = company;
        this.model = model;
        this.year = year;
        if (id) {
            this.id = id;
        }
        else {
            this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
            ;
        }
    }
    Car.prototype.ageOfCar = function () {
        return new Date().getFullYear() - this.year;
    };
    return Car;
}());
//instance
var talsCar = new Car("Opel", "Coursa", "Blue", 2018);
var shiransCar = new Car("Pegout", "3008", "Mouse-Gray", 2018);
var tomsCar = new Car("Mazada", "CX5", "Red", 2014);
console.log(talsCar, shiransCar, tomsCar);
console.log(tomsCar.ageOfCar());
