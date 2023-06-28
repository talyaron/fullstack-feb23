// class Car {
//   name: string;
//   urlimg: string;
//   constructor(name: string, urlimg: string) {
//     this.name= name;
//     this.urlimg= urlimg;
//   }
// }
// const arr:Car[]= [
//     new Car("mazda","https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc0048.jpg?w=976&h=549"),
//     new Car("audi","https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc0048.jpg?w=976&h=549"),
//     new Car("ford","https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc0048.jpg?w=976&h=549")]
// const hadar:any= document.querySelector(".tom")
// const inr= arr.map(Car =>`<div> ${Car.name} </br><p> <img src =${Car.urlimg}</p> </div>`).join(" ");
// hadar.innerHTML=inr
//--- NEW 
var cars = document.querySelector("body > div.car");
var Car = /** @class */ (function () {
    function Car(name, urlimg) {
        this.name = name;
        this.urlimg = urlimg;
    }
    return Car;
}());
var arr = [];
function handleSubmit(event) {
    event.preventDefault();
    var nameInput = document.getElementById("car-name");
    var urlInput = document.getElementById("car-url");
    var name = nameInput.value;
    var url = urlInput.value;
    var newCar = new Car(name, url);
    arr.push(newCar);
    nameInput.value = "";
    urlInput.value = "";
    renderCars();
}
function renderCars() {
    cars.innerHTML = "";
    arr.forEach(function (car) {
        var carDiv = document.createElement("div");
        carDiv.textContent = "Car Name: " + car.name;
        var imgElement = document.createElement("img");
        imgElement.src = car.urlimg;
        carDiv.appendChild(imgElement);
        cars.appendChild(carDiv);
    });
}
var form = document.getElementById("car-form");
form.addEventListener("submit", handleSubmit);
