class Car {
  company: string;
  img: string;

  constructor(company: string, img: string) {
    this.company = company;
    this.img = img;
  }
}

const arrCars: Car[] = [
  new Car("mazda","https://ynet-pic1.yit.co.il/picserver5/wcm_upload/2019/12/05/r1eALuiUpr/004.jpg"),
  new Car("hyundai","https://cdn.motor1.com/images/mgl/RvGRx/s1/hyundai-ioniq-5-2021.jpg"),
  new Car("audi","https://media.ed.edmunds-media.com/audi/a4/2022/oem/2022_audi_a4_sedan_prestige-s-line_fq_oem_8_600.jpg"),
];

const cars= document.querySelector(`#cars`)
const carsScreen = arrCars.map(car => {return `<div><img src = ${car.img} </br><p> ${car.company}</p> </div>`}).join(" ");
if(cars){
    cars.innerHTML=carsScreen;
}
