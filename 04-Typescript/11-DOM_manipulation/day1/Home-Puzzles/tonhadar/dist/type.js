var Car = /** @class */ (function () {
    function Car(name, urlimg) {
        this.name = name;
        this.urlimg = urlimg;
    }
    return Car;
}());
var arr = [
    new Car("mazda", "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc0048.jpg?w=976&h=549"),
    new Car("audi", "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc0048.jpg?w=976&h=549"),
    new Car("ford", "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/09/ttsc0048.jpg?w=976&h=549")
];
var hadar = document.querySelector(".tom");
var inr = arr.map(function (Car) { return "<div> " + Car.name + " </br><p> <img src =" + Car.urlimg + "</p> </div>"; }).join(" ");
hadar.innerHTML = inr;
