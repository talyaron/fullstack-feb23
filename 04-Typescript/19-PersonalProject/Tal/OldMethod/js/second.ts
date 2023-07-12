const dogs = getDogsFromLocalStorage();
console.log(dogs);
renderDogs(dogs);

function renderDogs(dogs: Dog[]) {
    try {
        const dogsList = document.querySelector('#dogs-list');
        if (!dogsList) throw new Error('No dogs list');


        const html = dogs.map(dog => `<p>${dog.name} is ${dog.age} years old</p>`).join(' ');
        dogsList.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}