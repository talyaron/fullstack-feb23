var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        console.log('Bark Bark');
    };
    return Dog;
}());
var dogs = getDogsFromLocalStorage();
console.log(dogs);
function handleAddDog(ev) {
    ev.preventDefault();
    var name = ev.target.name.value;
    var age = ev.target.age.value;
    var dog = new Dog(name, age);
    dogs.push(dog);
    saveDogToLocalStorage(dogs);
    dog.bark();
    console.log(dogs);
    window.location.href = './second.html';
}
function saveDogToLocalStorage(dogs) {
    localStorage.setItem('dogs', JSON.stringify(dogs));
}
function getDogsFromLocalStorage() {
    try {
        var dogsStorage = localStorage.getItem('dogs');
        if (!dogsStorage)
            return [];
        var dogsArray = JSON.parse(dogsStorage);
        var dogs_1 = dogsArray.map(function (dog) { return new Dog(dog.name, dog.age); });
        return dogs_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
