// # Level 3

//  Write a function to reverse a number. For example, the function gets 123 and returns 321

const num = Number(prompt("enter number"));

function reversedNum(num) {
    try {
        
        if(isNaN(num))throw new Error("Not a number! Enter NUMBER type input only!");

    return (
      parseFloat(//convert to float type after modifying
        num
          .toString()//convert to string type
          .split('')//split the value of num , and create array from single digits
          .reverse()//reverse the order of positions un the array
          .join('')//convert array to string
      ) * Math.sign(num)
    )                 
  }
 catch (error) {
    console.error(error)
    return undefined; 
}
}
console.log(reversedNum(num))