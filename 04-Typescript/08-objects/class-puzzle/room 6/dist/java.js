// company, year, model, millage, color, fuelConsamption
var userCar = prompt("enter the car company");
var tripKM = prompt("enter the trip distince");
var audi = {
    company: "audi",
    year: 2022,
    model: "tt",
    milage: 12000,
    color: "purple",
    fuelConsamption: 12
};
var lada = {
    company: "lada",
    year: 1945,
    model: "vodka",
    milage: 1200000,
    color: "brown rust",
    fuelConsamption: 1
};
carConsumption(userCar, tripKM);
// Create a function that gets the car and trip and returns how many litters of gas were consumed in the trip.
function carConsumption(car, trip) {
    var answer = trip / car.fuelConsamption;
    return answer;
}
// function carConsumption(Cars:Cars){
//     Cars.company=userCar
//     trip=tripKM
//     let answer=trip/car.fuelConsamption
//     return answer
// }
