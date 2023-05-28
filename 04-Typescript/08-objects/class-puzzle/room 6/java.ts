// company, year, model, millage, color, fuelConsamption



// const userCar= prompt("enter the car company")
// const tripKM= prompt("enter the trip distince")
const userCar= "audi"
const tripKM= 100



interface Cars{
    company:string;
    year?:number;
    model?:string;
    milage:number;
    color?:string;
    Consamption:number;
    calFuel:Function
} 


const audi:Cars={
    company:"audi",
    year:2022,
    model:"tt",
    milage:12000,
    color:"purple",
    Consamption:12,
    calFuel:carConsumption
}
const lada:Cars={
    company:"lada",
    year:1945,
    model:"vodka",
    milage:1200000,
    color:"brown rust",
    Consamption:1,
    calFuel:carConsumption
}


carConsumption(tripKM)



// Create a function that gets the car and trip and returns how many litters of gas were consumed in the trip.

function carConsumption(trip:number){
    
    
   return trip/this.fuelConsamption

}


// function carConsumption(Cars:Cars){
//     Cars.company=userCar
//     trip=tripKM

//     let answer=trip/car.fuelConsamption

//     return answer
// }

