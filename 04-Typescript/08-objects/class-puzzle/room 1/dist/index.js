var shiransCar = {
    company: "Audi",
    year: 2020,
    model: "Q3",
    millage: 10000,
    color: "pink",
    fuelConsamption: 11.9
};
var alexsCar = {
    company: "MG",
    year: 2019,
    model: "HMS",
    millage: 30687,
    color: "metalic",
    fuelConsamption: 10.3
};
function tripConsamption(car, trip) {
    try {
        return trip / car.fuelConsamption;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(tripConsamption(alexsCar, 1000));
console.log("you need " + tripConsamption(shiransCar, 1000) + " Liters");
