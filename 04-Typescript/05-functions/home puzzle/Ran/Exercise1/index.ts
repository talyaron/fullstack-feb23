let gender= String (prompt("הכנס בבקשה את המגדר שלך:"));

function identity (x:string){
      if (x==="male") {
        let gender="hello sir";
        return (gender)
      }
     else if (x==="female"){
         gender="hello miss";
         return (gender)
      }
      else {
        return ("hello")
      }
      
}

const y= identity(gender);
console.log (y)