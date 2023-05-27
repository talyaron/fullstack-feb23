// create object of type Cars.
;
var mercedes = {
    company: "Mercedes",
    year: 2012,
    model: "SLS",
    millage: 80000,
    color: "black",
    fuelConsamption: 10
};
var toyota = {
    company: "Toyota",
    year: 2017,
    model: "corolla",
    millage: 120000,
    color: "white",
    fuelConsamption: 20
};
var trip = Number(prompt("how much kilometers was your last trip"));
var type = prompt("choose between Toyota and Mercedes");
function fuelConsamption(typeOfCar, trip) {
    try {
        if (isNaN(trip)) {
            throw new Error("The trip is not a number, please write a number");
        }
        var fuelConsumed = trip / typeOfCar.fuelConsamption;
        return fuelConsumed;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(fuelConsamption(mercedes, trip));
