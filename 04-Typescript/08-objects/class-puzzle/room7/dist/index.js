function createCar(company, year, model, millage, color, fuelConsamption) {
    try {
        var yearTemp = void 0;
        var millageTemp = void 0;
        var fuelConsamptionTemp = void 0;
        // debugger;
        if (!company)
            throw new Error("Missing car Company");
        if (!year)
            throw new Error("Missing car year");
        else {
            yearTemp = Number(year);
            if (isNaN(yearTemp))
                throw new Error("Missing car year");
        }
        if (!model)
            throw new Error("Missing car model");
        if (!millage)
            throw new Error("Missing car millage");
        else {
            millageTemp = Number(millage);
            if (isNaN(millageTemp))
                throw new Error("Missing car model");
        }
        if (!color)
            throw new Error("Missing car Color");
        if (!fuelConsamption)
            throw new Error("Missing car Company");
        else {
            fuelConsamptionTemp = Number(fuelConsamption);
            if (isNaN(fuelConsamptionTemp))
                throw new Error("Missing car fuel Consamption");
        }
        var carID = { company: company, year: yearTemp, model: model, millage: millageTemp, color: color, fuelConsamption: fuelConsamptionTemp };
        return carID;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function calculateFuel(kmFromStart, fuleConsumption) {
    return kmFromStart / fuleConsumption;
}
var carsArray = new Array(3);
for (var i = 0; i < 3; i++) {
    var companyName = prompt("Enter company name:");
    var year = prompt("Enter year:");
    var carModel = prompt("Enter car model:");
    var carMillage = prompt("Enter car millage:");
    var carColor = prompt("Enter car color:");
    var fuleC = prompt("Enter car fuel consumption:");
    var singleCar = createCar(companyName, year, carModel, carMillage, carColor, fuleC);
    carsArray[i] = singleCar;
}
for (var i = 0; i < 3; i++) {
    var fuleTotalUse = calculateFuel(carsArray[i].millage, carsArray[i].fuelConsamption);
    console.log("The " + carsArray[i].company + " " + carsArray[i].model + " spent " + fuleTotalUse + " liters of fule");
}
for (var i = 0; i < 3; i++) {
    console.log(carsArray[i]);
}
