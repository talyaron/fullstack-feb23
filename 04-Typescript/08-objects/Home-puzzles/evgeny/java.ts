
// let pickStudent= prompt("pick a student");



interface student{
    name, 
    gender, 
    mathMidTermGrade, 
    historyMidTermGrade, 
    mathFinalTermGrade,
    historyFinalTermGrade
    calculateAvarage:Function,

}


const evgeny:student={
    name:"evgeny",
    gender:"male", 
    mathMidTermGrade:98, 
    historyMidTermGrade:95, 
    mathFinalTermGrade:100,
    historyFinalTermGrade:91,
    calculateAvarage:avarage,
    
}

const max:student={
    name:"max",
    gender:"male", 
    mathMidTermGrade:50, 
    historyMidTermGrade:80, 
    mathFinalTermGrade:90,
    historyFinalTermGrade:60,
    calculateAvarage:avarage,
}
const students:Array<student>=[evgeny,max];
console.log(students[0])

// if(pickStudent=="evgeny"){
//      console.log(evgeny.calculateAvarage(),"evgeny")
     
//     }
// if(pickStudent=="max"){
//         console.log(max.calculateAvarage(),"max")
//     }
//     else {prompt("you did not pick a sudent from database")}

// function omit(obj, ...props) {
//     const result = { ...obj };
//     props.forEach(function(prop) {
//       delete result[prop];
//     });
//     return result;
//   }
  
// const gradeOnly = omit(evgeny, 'name','gender');


function avarage(){
    try {
       return  (this.mathMidTermGrade+this.mathFinalTermGrade+this.historyFinalTermGrade+this.historyMidTermGrade)/4
    } catch (error) {
        console.error(error)
    }

}
