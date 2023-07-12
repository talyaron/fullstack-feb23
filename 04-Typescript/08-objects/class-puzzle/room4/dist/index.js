var skoda = {
    company: "skoda",
    model: "octavia",
    millage: 100000,
    color: "black",
    fuelConsamption: 10,
    trip: 469
};
var audi = {
    company: "audi",
    model: "TT",
    millage: 100000,
    color: "black",
    fuelConsamption: 10,
    trip: 320
};
function gasConsumed(Car) {
    try {
        var calculateGasConsumed = Car.trip / Car.fuelConsamption;
        return calculateGasConsumed;
    }
    catch (error) {
        console.error();
        return undefined;
    }
}
var x = {
    company: prompt("company"),
    millage: Number(prompt("millage")),
    fuelConsamption: 10,
    trip: Number(prompt("trip"))
};
debugger;
// console.log(x.company);
console.log("your car fuel consumption is " + gasConsumed(x));
