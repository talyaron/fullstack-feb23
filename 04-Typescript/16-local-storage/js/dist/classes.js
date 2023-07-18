var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        console.log("Woof Woof");
    };
    return Dog;
}());
