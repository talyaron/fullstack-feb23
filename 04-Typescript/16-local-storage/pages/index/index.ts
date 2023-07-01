const myDog = new Dog("Rex", 5);
class Person {
    
    constructor(public name: string, public yearOfBirth:number) {
       
    }
    getAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
}



const persons: Person[] = []
console.log(persons)

//get persons from localstorage
const personsString = localStorage.getItem('persons');
console.log(personsString);


if (personsString) {
    //convert string to array;
    const personsArray = JSON.parse(personsString);
    console.log(personsArray);
    personsArray.forEach(person => persons.push(new Person(person.name, person.yearOfBirth)));
    console.log(persons);
    renderPersons();
}

function handleAddName(ev) {
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const yearOfBirth = ev.target.yearOfBirth.valueAsNumber;
        const nameRoot = document.querySelector('#rootName');
        if (!nameRoot) throw new Error('couldnt find rootName html element');
        persons.push(new Person(name,yearOfBirth));
        renderPersons();

        ev.target.reset();


        const personsJson = JSON.stringify(persons);

        localStorage.setItem('persons', personsJson);
    } catch (error) {
        console.error(error);
    }
}

function renderPersons() {
    const nameRoot = document.querySelector('#rootName');
    if (!nameRoot) throw new Error('couldnt find rootPersons html element');
    nameRoot.innerHTML = persons.map(p => `<p>${p.name}</p>`).join(' ');
}