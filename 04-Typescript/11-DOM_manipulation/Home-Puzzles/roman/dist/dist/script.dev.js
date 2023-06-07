"use strict";

// create car class (or any other class you like, flowers, houses, movise...);
// the class should have name, imgSrc (link to an image).
// create an array of this class.
// 1) Render the names on the screen (DOM).
// 2) Render images and texts to the screen.
// 3) create instegram/pinterst/other-app, based on the class.
// Use scss in all cases
var Car =
/** @class */
function () {
  function Car(name, imgSrc) {
    this.name = name;
    this.imgSrc = imgSrc;
  }

  return Car;
}();

var cars = [new Car("mazda", "https://belgorod.masmotors.ru/colors/mazda-6/10.png"), new Car("Lada", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Lada_2107_aka_Lada_Riva_October_1995_1452cc.jpg/420px-Lada_2107_aka_Lada_Riva_October_1995_1452cc.jpg"), new Car("ford", "https://3dnews.ru/assets/external/illustrations/2022/04/28/1064840/ford_01.jpg"), new Car("mercedes", "https://www.carscoops.com/wp-content/uploads/webp/2023/02/2022-Mercedes-CLS-1024x576.webp"), new Car("Jeep", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2018_Jeep_Wrangler_Sahara_Unlimited_Multijet_2.1_Front.jpg/458px-2018_Jeep_Wrangler_Sahara_Unlimited_Multijet_2.1_Front.jpg"), new Car("volvo", "https://cas.volvocars.com/image/dynamic/MY23_2217/246/exterior-v2/48/70700/RC0000/R17C/TC05/_/2G03/TP02/LR02/JT02/GR03/T101/TJ01/NP02/TM02/_/_/EV02/JB0B/T21B/LF01/_/VP07/_/FH02/T006/_/_/_/default.jpg?market=us&client=gox-graph%7Cpdps&angle=4&w=1920&bg=descriptive-studio"), new Car("lexus", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lexus_LC500_at_races_%282%29.jpg/420px-Lexus_LC500_at_races_%282%29.jpg")];
console.dir(cars);
var test = document.querySelector("#cars"); // console.log(cars)

var carsHTML = cars.map(function (car) {
  return "<div class=\"car\"><p>" + car.name + "</p><img src=\"" + car.imgSrc + "\" alt=\"" + car.name + "\" ></div>"; // return `<p>${car.name}, img: <img src"${car.imgSrc}"></img></p>`;
}).join(" "); // console.log(carsHTML);

if (test) {
  test.innerHTML = carsHTML;
}