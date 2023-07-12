/*create object of type Cars.

with the following properties: company, year, model, millage, color, fuelConsamption (km/l);


create a function that gets Car, and trip, and returns the how many litters were consumed in the trip.*/
var newCar = {
    company: "volvo",
    year: 2018,
    model: "xc60",
    millage: 20000,
    color: "white",
    fuelConsamption: 10
};
var trip = 200;
function calcFuelConsamption(car, trip) {
    try {
        var fuelConstsm = trip / car.fuelConsamption;
        return fuelConstsm;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
console.log(calcFuelConsamption(newCar, trip));
