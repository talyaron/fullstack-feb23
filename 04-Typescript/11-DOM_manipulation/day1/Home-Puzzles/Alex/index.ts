// 1. Render the names on the screen (DOM).
// 2. Render images and texts to the screen.
// 3. create instegram/pinterst/other-app, based on the class.

// Use scss in all cases


// create car class (or any other class you like, flowers, houses, movise...);

// the class should have name, imgSrc (link to an image).

class Car{
    manufacturer:string
    model:string
    imgSrc:string
    constructor(manufacturer:string,model:string,imgSrc:string){
        this.manufacturer = manufacturer
        this.model = model
        this.imgSrc = this.imgSrc
        
    }
}

// create an array of this class.

const cars:Car[] = [
    new Car("Audi","Q8","https://imgd.aeplcdn.com/1200x900/n/cw/ec/34470/audi-q8-front-view4.jpeg?q=75"),
    new Car("Lexus","SUV","https://cars.usnews.com/static/images/Auto/izmo/i159615470/2023_lexus_gx_angularfront.jpg"),
    new Car("Jeep","Grand Cherokee","https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2022/grand-cherokee/trims/2022-All-New-Grand-Cherokee-Laredo-Vehicle-Lineup-All-Breakpoints.jpg.image.1440.jpg")
]

const main = document.querySelector("#main");