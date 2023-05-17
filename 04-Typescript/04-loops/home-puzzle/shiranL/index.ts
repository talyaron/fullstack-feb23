let countX = prompt("X הכנס")
let countY = prompt("Y הכנס")


if (countX && countY ) {
    debugger
    let countXnumber =parseInt(countX)
    let countYnumber =parseInt(countY)


    console.log(`the loop will run ${countYnumber} times and calculate sum from 1 to ${countXnumber} `);
   for (let y = 0; y < countYnumber; y++) {
    let calc:number=0
    let bigString=""

    for (let x = 1; x <= countXnumber; x++) {
      
      if (countXnumber == x) {
        bigString += x 
      }
      else{
        bigString += x + "+"
      }
       
        calc+=x
        
    }
    console.log(`${bigString}`);
    console.log(`sum : ${calc}`);

  
   }
   
   
   


}

