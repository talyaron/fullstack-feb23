

// create object of type Cars.

// with the following properties: company, year, model, millage, color, fuelConsamption (km/l);


// create a function that gets Car, and trip, and returns the how many litters were consumed in the trip.


interface Cars {
    company: string,
    year: number,
    model: string,
    millage: number,
    color: string,
    fuelConsamption: number
};

const mercedes :Cars = {
    company: "Mercedes",
    year: 2012,
    model: "SLS",
    millage: 80000,
    color: "black",
    fuelConsamption: 10
}

const toyota :Cars= {
    company: "Toyota",
    year: 2017,
    model: "corolla",
    millage: 120000,
    color: "white",
    fuelConsamption: 20
}

const trip = Number (prompt("how much kilometers was your last trip"))
const type :string | null = prompt("choose between Toyota and Mercedes");


function fuelConsamption(typeOfCar :Cars, trip :number ) :number | undefined {
    try {
        if (isNaN(trip)) {
            throw new Error ("The trip is not a number, please write a number")
        }
        const fuelConsumed :number = trip / typeOfCar.fuelConsamption;
        return fuelConsumed;
    } catch (error) {
        console.error(error) 
        return undefined
    }
}

console.log(fuelConsamption(mercedes, trip));
