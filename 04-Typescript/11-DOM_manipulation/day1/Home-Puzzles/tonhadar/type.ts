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

const cars = document.querySelector("body > div.car") as HTMLDivElement;

class Car {
  name: string;
  urlimg: string;
  constructor(name: string, urlimg: string) {
    this.name= name;
    this.urlimg= urlimg;
  }
}

const arr:Car[]= []

  function handleSubmit(event: Event) {
    event.preventDefault();
    const nameInput = document.getElementById("car-name") as HTMLInputElement;
    const urlInput = document.getElementById("car-url") as HTMLInputElement;
  
    const name = nameInput.value;
    const url = urlInput.value;
  
    const newCar = new Car(name, url);
    arr.push(newCar);
  
    nameInput.value = "";
    urlInput.value = "";
  
    renderCars();
  }
  
  function renderCars() {
    cars.innerHTML = "";
    arr.forEach((car) => {
      const carDiv = document.createElement("div");
      carDiv.textContent = `Car Name: ${car.name}`;
      
      const imgElement = document.createElement("img");
      imgElement.src = car.urlimg;
      
      carDiv.appendChild(imgElement);
      cars.appendChild(carDiv);
    });
  }
  
  const form = document.getElementById("car-form") as HTMLDivElement;
  form.addEventListener("submit", handleSubmit);