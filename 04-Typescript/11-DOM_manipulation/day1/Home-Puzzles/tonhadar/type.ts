class Car {
  name: string;
  urlimg: string;
  constructor(name: string, urlimg: string) {
    this.name= name;
    this.urlimg= urlimg;
  }
}

const arr:Car[]= [
    new Car("mazda","https://www.icar.co.il/_media/images/models/bgremoval/mazda-6-new.jpg"),
    new Car("audi","https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc0048.jpg?w=976&h=549"),
    new Car("ford","https://media.ed.edmunds-media.com/ford/explorer/2021/oem/2021_ford_explorer_4dr-suv_king-ranch_fq_oem_1_815.jpg")]

const hadar:any= document.querySelector(".tom")
const inr= arr.map(Car =>`<div><img src = ${Car.name} </br><p> ${Car.urlimg}</p> </div>`).join(" ");
hadar.innerHTML=inr

