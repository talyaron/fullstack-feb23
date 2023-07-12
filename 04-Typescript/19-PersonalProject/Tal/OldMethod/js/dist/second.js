var dogs = getDogsFromLocalStorage();
console.log(dogs);
renderDogs(dogs);
function renderDogs(dogs) {
    try {
        var dogsList = document.querySelector('#dogs-list');
        if (!dogsList)
            throw new Error('No dogs list');
        var html = dogs.map(function (dog) { return "<p>" + dog.name + " is " + dog.age + " years old</p>"; }).join(' ');
        dogsList.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
