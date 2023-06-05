var Motorcycle = /** @class */ (function () {
    function Motorcycle(name, price, imj) {
        this.name = name;
        this.price = price;
        this.imgSrc = imj;
    }
    Motorcycle.prototype.getPrice = function () {
        return this.price;
    };
    return Motorcycle;
}());
var motorcycles = [
    new Motorcycle("Kawasaki", 65000, "https://www.motorcyclesdirect.co.uk/upload/images/--2023%20Kawasaki/Ninja%201000SX/NINJA%201000SX%20GREEN.png"),
    new Motorcycle("Benelli", 100000, "https://www.motorcyclesdirect.co.uk/upload/images/--Benelli/2022%20Leoncino%20800%20Trail/Benelli%20Leoncino%20800%20Trail.png"),
    new Motorcycle("Suzuki", 60000, "https://www.motorcyclesdirect.co.uk/upload/images/--2022%20Suzuki/GSX-S1000/gsx-s1000_m2_ysf_right.png"),
    new Motorcycle("Aprilia", 70000, "https://www.motorcyclesdirect.co.uk/upload/images/--2023%20Aprilia/35%20RS660%20BLACK.png"),
    new Motorcycle("Royal Enfield", 40000, "https://www.motorcyclesdirect.co.uk/upload/images/--2023%20Royal%20Enfield/Thunder/Rocker%20Red.png"),
];
var main = document.querySelector("body > div.Main");
var inputs = document.querySelector("#Search");
var button = document.querySelector(".btnSearch");
var selectMoto = document.querySelector("#motorcycles");
selectMoto.addEventListener("change", function () {
    if (!!inputs)
        inputs.value = selectMoto.value;
});
if ((inputs === null || inputs === void 0 ? void 0 : inputs.value) === "")
    inputs.value = "Kawasaki";
if (button) {
    button.addEventListener("click", function () {
        var input = inputs;
        var search = input.value;
        var motorcycleHTML = motorcycles
            .filter(function (motorcycle) {
            return motorcycle.name.toLowerCase().includes(search.toLowerCase());
        })
            .map(function (motorcycle) {
            return "<div><p>" + motorcycle.name + ", price: " + motorcycle.getPrice() + "</p><img src=\"" + motorcycle.imgSrc + "\"></div><hr style=\"border: 2px solid white; width:100%; position: relative; top: 100px; margin: 20px; right:10px;\">";
        })
            .join(" ");
        if (main) {
            main.innerHTML = motorcycleHTML;
        }
    });
}
