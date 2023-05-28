interface Cars {
    company: string;
    year: number;
    model: string;
    millage: number;
    color: string;
    fuelConsamption: number; //[km/litter]
}

//the objects:

const yeti = {
    company: "skoda",
    year: 2014,
    model: "DTS",
    millage: 350254,
    color: "gray",
    fuelConsamption: 12, //[km/l]
}

const fiesta = {
    company: "ford",
    year: 2000,
    model: "sport",
    millage: 256845,
    color: "white",
    fuelConsamption: 8, //[km/l]
}

const citroen = {
    company: "citroen",
    year: 2009,
    model: "c6",
    millage: 65254,
    color: "blou",
    fuelConsamption: 10,//[km/l]
}

function HowManyLitters (car:Cars, trip:number):number|undefined {
try {
    if(!trip) throw new Error("expected trip number")

    return trip/car.fuelConsamption;

} catch (error) {
    console.log(error)
    return undefined;
}
}

console.log(HowManyLitters(yeti, 235))