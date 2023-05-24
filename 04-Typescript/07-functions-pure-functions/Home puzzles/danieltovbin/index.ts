// # Level 1

// 1. Write a JavaScript function that returns the negative number of a number.
//    Example:
//    x = 32243;
//    Expected Output: -32243;


// task 1(1)
// function positiv (numPosToNeg :number) :number {
//     return numPosToNeg * (-1);
// } 
// console.log(positiv(300));



// 2. Write a function to convert Celsius to Fahrenheit

// task 1(2)

// const celsius :string | null = prompt("type a number in Celsius", "0");
// function CelToFahr () :number {
//     const x :number = parseInt(celsius);
//     const y :number = x * 2 + 30;
//     return y;
// }
// console.log(CelToFahr()); 







// # Level 2

// 1. Create a function that gets the gender of the user and height of the user.
//    The function returns the height of the user relative to his gender. For example, the user's height is 170cm, and the gender is male.
//    The average height of males is 174cm, and the function return -4

// task 2
const firstQuestion :string | null = prompt('Hey, what is your gender?');
const secondQuestion : string | null = prompt("what is your height in cm?");
const height :number = parseInt(secondQuestion);
console.log(height);
function grade (): string | null {
    try{
        if(firstQuestion === "woman") {
            try{
                const averageWo :number = 170;
                if(height < averageWo) {
                    return "you are " + (averageWo - height) + " cm less than the average height";
                }
                if(height == averageWo) {
                    return "you are on the average height";
                }
                if(height > averageWo) {
                    return "you are " + (height - averageWo) + " cm more than the average height";
                }
            }
            catch(error){
                console.log(error);
            }
        }
        if(firstQuestion === "man") {
            try{
                const averageMa :number = 180;
                if(height < averageMa) {
                    return "you are " + (averageMa - height) + " cm less than the average height";
                }
                if(height == averageMa) {
                    return "you are on the average height";
                }
                if(height > averageMa) {
                    return "you are " + (height - averageMa) + " cm more than the average height";
                }
            }
            catch(error){
                console.log(error);
            }
        }


    }
    catch(error){
        console.log(error);
    }

}
console.log(grade())

// # Level 3

// 1. Write a function to reverse a number. For example, the function gets 123 and returns 321




// const a = "123";
// console.log(a.split(""))
// const c = a.split("") 
// console.log(c.reverse()) 
// const d = c.join("")
// console.log(d)
// const b = parseInt(d)
// console.log(b);


// Find exercises for js functions and complete them.
// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php