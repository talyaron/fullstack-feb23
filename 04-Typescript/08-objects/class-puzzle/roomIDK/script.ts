// create object of type Cars.

// with the following properties: company, year, model, millage, color, fuelConsamption (km/l);

// create a function that gets Car, and trip, and returns the how many litters were consumed in the trip.
//100k kilometer range


interface Cars {
    company: string
    year: number
    model: string
    millage: number
    color: string
    fuelConsamption: number
    trip: number
}


const mazda: Cars = {
    company: "Mazda",
    year: 2017, 
    model: "3", 
    millage: 5000, 
    color: "Red",
    fuelConsamption: 12,
    trip: 480
}

const suzuki: Cars = {
    company: "Suzuki",
    year: 1988, 
    model: "samurai", 
    millage: 100000, 
    color: "yellow",
    fuelConsamption: 10, 
    trip: 100
}

function callCar(vehicle: Cars): number | undefined{
    try {
        const fuelUsed = vehicle.trip/vehicle.fuelConsamption
        return fuelUsed
    } catch (error) {
        console.error(error)
        return undefined
    }
}
console.log(callCar(mazda));

const divide = mazda.trip / mazda.fuelConsamption
console.error('%c ' + divide +'', 'background: black; font-size: 100px; color:lime; padding: 10px; margin: auto; 10px;text-shadow: 3px 3px 0 rgb(255,0,0, 0.5); border-radius: 50px;')
