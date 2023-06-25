class Car {
  name: string;
  urlimg: string;
  constructor(name: string, urlimg: string) {
    this.name= name;
    this.urlimg= urlimg;
  }
}

const arr:Car[]= [
    new Car("mazda","https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc0048.jpg?w=976&h=549"),
    new Car("audi","https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc0048.jpg?w=976&h=549"),
    new Car("ford","https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc0048.jpg?w=976&h=549")]

const hadar:any= document.querySelector(".tom")
const inr= arr.map(Car =>`<div> ${Car.name} </br><p> <img src =${Car.urlimg}</p> </div>`).join(" ");
hadar.innerHTML=inr

