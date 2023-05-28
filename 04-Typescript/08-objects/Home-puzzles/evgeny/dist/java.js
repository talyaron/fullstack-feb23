// let pickStudent= prompt("pick a student");
var evgeny = {
    name: "evgeny",
    gender: "male",
    mathMidTermGrade: 98,
    historyMidTermGrade: 95,
    mathFinalTermGrade: 100,
    historyFinalTermGrade: 91,
    calculateAvarage: avarage
};
var max = {
    name: "max",
    gender: "male",
    mathMidTermGrade: 50,
    historyMidTermGrade: 80,
    mathFinalTermGrade: 90,
    historyFinalTermGrade: 60,
    calculateAvarage: avarage
};
var students = [evgeny, max];
console.log(students[0]);
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
function avarage() {
    try {
        return (this.mathMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade + this.historyMidTermGrade) / 4;
    }
    catch (error) {
        console.error(error);
    }
}
