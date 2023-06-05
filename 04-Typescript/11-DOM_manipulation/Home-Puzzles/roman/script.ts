// create car class (or any other class you like, flowers, houses, movise...);

// the class should have name, imgSrc (link to an image).

// create an array of this class.

// 1) Render the names on the screen (DOM).
// 2) Render images and texts to the screen.
// 3) create instegram/pinterst/other-app, based on the class.

// Use scss in all cases


class Car {
    name: string;
    imgSrc: string;
    constructor(name: string, imgSrc: string) {
        this.name = name;
        this.imgSrc = imgSrc;

    }
}

const cars = [

    new Car("volvo", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/XC60/9469/1676369308531/front-left-side-47.jpg?tr=w-456"),
    new Car("lexus", "https://kyiv-west.lexus.ua/uploads/media/dc_car_gallery/0001/38/thumb_37974_dc_car_gallery_new_slider.jpeg.webp"),
    new Car("mercedes", "https://www.carscoops.com/wp-content/uploads/webp/2023/02/2022-Mercedes-CLS-1024x576.webp"),
    new Car("ford", "https://3dnews.ru/assets/external/illustrations/2022/04/28/1064840/ford_01.jpg"),
    new Car("mazda", "https://belgorod.masmotors.ru/colors/mazda-6/10.png"),
    new Car("Jeep","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2018_Jeep_Wrangler_Sahara_Unlimited_Multijet_2.1_Front.jpg/458px-2018_Jeep_Wrangler_Sahara_Unlimited_Multijet_2.1_Front.jpg"),
    new Car("Lada","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Lada_2107_aka_Lada_Riva_October_1995_1452cc.jpg/420px-Lada_2107_aka_Lada_Riva_October_1995_1452cc.jpg"),
    new Car("volvo", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/XC60/9469/1676369308531/front-left-side-47.jpg?tr=w-456"),
    new Car("lexus", "https://kyiv-west.lexus.ua/uploads/media/dc_car_gallery/0001/38/thumb_37974_dc_car_gallery_new_slider.jpeg.webp"),
    new Car("mercedes", "https://www.carscoops.com/wp-content/uploads/webp/2023/02/2022-Mercedes-CLS-1024x576.webp"),
    new Car("ford", "https://3dnews.ru/assets/external/illustrations/2022/04/28/1064840/ford_01.jpg"),
    new Car("mazda", "https://belgorod.masmotors.ru/colors/mazda-6/10.png"),
    new Car("Jeep","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2018_Jeep_Wrangler_Sahara_Unlimited_Multijet_2.1_Front.jpg/458px-2018_Jeep_Wrangler_Sahara_Unlimited_Multijet_2.1_Front.jpg"),
    new Car("Lada","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Lada_2107_aka_Lada_Riva_October_1995_1452cc.jpg/420px-Lada_2107_aka_Lada_Riva_October_1995_1452cc.jpg")
]

console.dir(cars)

var test = document.querySelector("#cars")
// console.log(cars)

const carsHTML = cars
  .map((car) => {
    return `<div class="car"><p>${car.name}</p><img src="${car.imgSrc}" alt="Girl in a jacket" ></div>`
    // return `<p>${car.name}, img: <img src"${car.imgSrc}"></img></p>`;
  })
  .join(" ");

// console.log(carsHTML);
if (test) {
  test.innerHTML = carsHTML;
}
