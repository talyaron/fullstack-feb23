interface Car{
    //properties
    company:string,
    year:number,
    model:string,
    millage:number,
    color:string, 
    fuelConsamption:number,
    //methods
    calculateFuelConsumption:Function,
    ageOfCar:Function
}

const shiransCar:Car = {
    company:"Audi",
    year:2020,
    model:"Q3",
    millage:10000,
    color:"yellow", 
    fuelConsamption:11.9,
    calculateFuelConsumption:tripConsamption,
    ageOfCar:function(){
        return new Date().getFullYear() - this.year;
    }
}

const alexsCar:Car = {
    company:"MG",
    year:2019,
    model:"HMS",
    millage:30687,
    color:"metalic", 
    fuelConsamption:10.3,
    calculateFuelConsumption:tripConsamption,
    ageOfCar:function(){
        return new Date().getFullYear() - this.year;
    }
}

//methods (funcrtions in objects)

function tripConsamption(trip:number):number | undefined{
    try {
        return trip/this.fuelConsamption
    } catch (error) {
        console.error(error)
        return undefined
    }
}

console.log(alexsCar.calculateFuelConsumption(123))

// console.log(`you need ${tripConsamption(shiransCar,1000)} Liters`)

console.log(shiransCar.calculateFuelConsumption(100))

console.log(shiransCar.ageOfCar())
console.log(alexsCar.ageOfCar())

