interface Car{
    company:string,
    year:number,
    model:string,
    millage:number,
    color:string, 
    fuelConsamption:number
}

const shiransCar:Car = {
    company:"Audi",
    year:2020,
    model:"Q3",
    millage:10000,
    color:"yellow", 
    fuelConsamption:11.9
}

const alexsCar:Car = {
    company:"MG",
    year:2019,
    model:"HMS",
    millage:30687,
    color:"metalic", 
    fuelConsamption:10.3
}



function tripConsamption(car:Car,trip:number):number | undefined{
    try {
        return trip/car.fuelConsamption
    } catch (error) {
        console.error(error)
        return undefined
    }
}

console.log(tripConsamption(alexsCar,123))

console.log(`you need ${tripConsamption(shiransCar,1000)} Liters`)