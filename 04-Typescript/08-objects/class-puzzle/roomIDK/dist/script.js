// create object of type Cars.
var mazda = {
    company: "Mazda",
    year: 2017,
    model: "3",
    millage: 5000,
    color: "Red",
    fuelConsamption: 12,
    trip: 480
};
var suzuki = {
    company: "Suzuki",
    year: 1988,
    model: "samurai",
    millage: 100000,
    color: "yellow",
    fuelConsamption: 10,
    trip: 100
};
function callCar(vehicle) {
    try {
        var fuelUsed = vehicle.trip / vehicle.fuelConsamption;
        return fuelUsed;
    }
    catch (error) {
        return undefined;
    }
}
console.log(callCar(mazda));
var divide = mazda.trip / mazda.fuelConsamption;
console.error('%c ' + divide + '', 'background: black; font-size: 100px; color:lime; padding: 10px; margin: auto; 10px;text-shadow: 3px 3px 0 rgb(255,0,0, 0.5); border-radius: 50px;');
