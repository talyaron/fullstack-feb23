// company, year, model, millage, color, fuelConsamption



const userCar= prompt("enter the car company")
const tripKM= prompt("enter the trip distince")



interface Cars{
    company:string;
    year?:number;
    model?:string;
    milage:number;
    color?:string;
    fuelConsamption:number;
    
} 


const audi:Cars={
    company:"audi",
    year:2022,
    model:"tt",
    milage:12000,
    color:"purple",
    fuelConsamption:12,
    
}
const lada:Cars={
    company:"lada",
    year:1945,
    model:"vodka",
    milage:1200000,
    color:"brown rust",
    fuelConsamption:1,
    
}


carConsumption(userCar,tripKM)

// Create a function that gets the car and trip and returns how many litters of gas were consumed in the trip.

function carConsumption(car:Cars,trip:number){
    
    
    let answer=trip/car.fuelConsamption
    
  return answer
}

// function carConsumption(Cars:Cars){
//     Cars.company=userCar
//     trip=tripKM

//     let answer=trip/car.fuelConsamption

//     return answer
// }

