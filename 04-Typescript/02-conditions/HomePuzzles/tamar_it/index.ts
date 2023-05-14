const userAge:number = 12;

if (userAge > 16){
    console.log("You can buy alcohol");
}
else {
    console.log("You can not buy alcohol");
}

const gender:string|null = prompt("What is your gender?");

if ( gender == "mail"){
    document.write(" אתה בחור כארז! ")
}
else {
    if (gender == 'femal'){
        document.write(" את בחורה מקסימה")
    }
    else{
        document.write(" Unspecified gender ")
    }
}

const height:number = parseInt( prompt("Please enter your height in meters(m)"));
const weight:number = parseInt( prompt("Please enter your weight in kg"));

let bmi = weight / (height * height);

document.write(" your BMI is " bmi);