// const myDog = new Dog("Rex", 5);
var Person = /** @class */ (function () {
    function Person(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    Person.prototype.getAge = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    return Person;
}());
var persons = [];
console.log(persons);
//get persons from localstorage
var personsString = localStorage.getItem('persons');
console.log(personsString);
if (personsString) {
    //convert string to array;
    var personsArray = JSON.parse(personsString);
    console.log(personsArray);
    personsArray.forEach(function (person) { return persons.push(new Person(person.name, person.yearOfBirth)); });
    console.log(persons);
    renderPersons();
}
function handleAddName(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var yearOfBirth = ev.target.yearOfBirth.valueAsNumber;
        var nameRoot = document.querySelector('#rootName');
        if (!nameRoot)
            throw new Error('couldnt find rootName html element');
        persons.push(new Person(name, yearOfBirth));
        renderPersons();
        ev.target.reset();
        var personsJson = JSON.stringify(persons);
        localStorage.setItem('persons', personsJson);
    }
    catch (error) {
        console.error(error);
    }
}
function renderPersons() {
    var nameRoot = document.querySelector('#rootName');
    if (!nameRoot)
        throw new Error('couldnt find rootPersons html element');
    nameRoot.innerHTML = persons.map(function (p) { return "<p>" + p.name + "</p>"; }).join(' ');
}
