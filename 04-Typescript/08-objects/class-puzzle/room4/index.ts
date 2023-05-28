interface Car {
  company: string | null;
  model?: string;
  millage: number;
  color?: string;
  fuelConsamption: number;
  trip: number;
}

const skoda: Car = {
  company: `skoda`,
  model: `octavia`,
  millage: 100000,
  color: `black`,
  fuelConsamption: 10,
  trip: 469,
};
const audi: Car = {
  company: `audi`,
  model: `TT`,
  millage: 100000,
  color: `black`,
  fuelConsamption: 10,
  trip: 320,
};

function gasConsumed(Car: Car): number | undefined {
  try {
    const calculateGasConsumed: number = Car.trip / Car.fuelConsamption;
    return calculateGasConsumed;
  } catch (error) {
    console.error();
    return undefined;
  }
}

const x: Car = {
  company: prompt("company"),
  millage: Number(prompt("millage")),
  fuelConsamption: 10,
  trip: Number(prompt("trip")),
};
debugger;
// console.log(x.company);
console.log(`your car fuel consumption is ${gasConsumed(x)}`);
