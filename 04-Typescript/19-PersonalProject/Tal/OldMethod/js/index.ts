class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log('Bark Bark');
    }
}

const dogs:Dog[] = getDogsFromLocalStorage();
console.log(dogs);

function handleAddDog(ev) {
    ev.preventDefault();
    const name = ev.target.name.value;
    const age = ev.target.age.value;
    const dog = new Dog(name, age);
    dogs.push(dog);
    saveDogToLocalStorage(dogs)
    dog.bark();
    console.log(dogs);
    window.location.href = './second.html';
}

function saveDogToLocalStorage(dogs:Dog[]){
    localStorage.setItem('dogs', JSON.stringify(dogs));
}

function getDogsFromLocalStorage():Dog[]{
    try {
        const dogsStorage = localStorage.getItem('dogs');
        if(!dogsStorage) return [];
        const dogsArray = JSON.parse(dogsStorage);
        const dogs = dogsArray.map(dog => new Dog(dog.name, dog.age));
        return dogs;
    } catch (error) {
        console.error(error);
        return [];
    }
   
}
