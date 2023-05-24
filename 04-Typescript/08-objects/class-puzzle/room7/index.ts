
interface Car {
    company: string;
    year: number;
    model: string;
    millage: number;
    color: string;
    fuelConsamption:number;
  }

  function createCar(company:string, year:string, model:string, millage:string, color:string, fuelConsamption:string):Car | undefined{
    try {
        let yearTemp:number
        let millageTemp:number
        let fuelConsamptionTemp:number
        // debugger;
        if(!company)throw new Error("Missing car Company")
        if(!year)throw new Error("Missing car year")
        else{
             yearTemp = Number(year);
            if(isNaN(yearTemp))throw new Error("Missing car year")
        }
        if(!model)throw new Error("Missing car model")
        if(!millage)throw new Error("Missing car millage")
        else{
            millageTemp = Number(millage);
            if(isNaN(millageTemp))throw new Error("Missing car model")
        }
        if(!color)throw new Error("Missing car Color")
        if(!fuelConsamption)throw new Error("Missing car Company")
        else{
            fuelConsamptionTemp = Number(fuelConsamption);
            if(isNaN(fuelConsamptionTemp))throw new Error("Missing car fuel Consamption")
        }
        const carID:Car = {company,year:yearTemp,model,millage:millageTemp,color,fuelConsamption:fuelConsamptionTemp}
        return carID
    } catch (error) {
        console.error(error)
        return undefined
    }
  }

  function calculateFuel(kmFromStart:number, fuleConsumption:number):number{
    return kmFromStart/fuleConsumption;
  }

  let carsArray:Car[] = new Array(3);
  for(let i =0; i<3; i++){
    const companyName = prompt("Enter company name:")
    const year = prompt("Enter year:")
    const carModel = prompt("Enter car model:")
    const carMillage = prompt("Enter car millage:")
    const carColor = prompt("Enter car color:")
    const fuleC = prompt("Enter car fuel consumption:")
    const singleCar:Car = createCar(companyName!, year!,carModel!, carMillage!,carColor!,fuleC!)!;
    carsArray[i] = singleCar
  }

  for(let i =0; i<3; i++){
    const fuleTotalUse = calculateFuel(carsArray[i].millage, carsArray[i].fuelConsamption);
    console.log(`The ${carsArray[i].company} ${carsArray[i].model} spent ${fuleTotalUse} liters of fule`);
  }

  for(let i =0; i<3; i++){
    console.log(carsArray[i]);
  }


