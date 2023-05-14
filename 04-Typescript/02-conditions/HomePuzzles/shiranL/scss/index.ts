

document.getElementById("fatIMG").hidden = true;
document.getElementById("thinIMG").hidden = true;
document.getElementById("healthyIMG").hidden = true;

function Myfunc(){
let height =parseInt(document.querySelector("#height").value);
let weight = parseInt(document.querySelector("#weight").value);

let lname =document.querySelector("#lname").value
let fname =document.querySelector("#fname").value 

let result = document.querySelector("#result");

if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    // If both input is valid, calculate the bmi
    else {
  
        // Fixing upto 2 decimal places
        let bmi:number = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.6) {
            result.innerHTML =
            `<span>${lname}</span> אתה רזה מידי איכס! BMI : <span>${bmi}</span>`;

            document.getElementById("healthyIMG").hidden = true;
            document.getElementById("fatIMG").hidden = true;
            document.getElementById("thinIMG").hidden = false;

        }
       
  
        else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 
                `<span>${fname}</span> כל הכבוד משקל תקין  , BMI: <span>${bmi}</span>`;
                document.getElementById("thinIMG").hidden = true;
                document.getElementById("fatIMG").hidden = true;
                document.getElementById("healthyIMG").hidden = false;
  
       } 
        else {
            result.innerHTML =
            `<span>${fname}</span> הגזמת , דלג על ארוחת ערב BMI : <span>${bmi}</span>`;
            document.getElementById("fatIMG").hidden = false;
            document.getElementById("thinIMG").hidden = true;
            document.getElementById("healthyIMG").hidden = true;
        }
       
    }
}



