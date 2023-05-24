//  Write a JavaScript function that returns the negative number of a number.
//    Example:
//    x = 32243;
//    Expected Output: -32243;

// function negative(number: number | null): number {

//     try {
//         return -number;

//     } catch (error) {
//         console.error(error)
//         return undefined;
//     }
// }
// console.log(negative(32243));


// Write a function to convert Celsius to Fahrenheit





const degrees = Number(prompt("convert celsius to fahrenheit")) 


function convertToFahrenheit(degrees) {

    try {
        return Math.floor(degrees * (9/5) + 32);

    } catch (error) {
        console.error(error)
        return undefined;
        
    }
  }

  console.log(convertToFahrenheit(degrees));



// Create a function that gets the gender of the user and height of the user.
// The function returns the height of the user relative to his gender. For example, the user's height is 170cm, and the gender is male.
// The average height of males is 174cm, and the function return -4
