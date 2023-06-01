const userNmae = "Bar";
class Student{
   
    constructor(public name:string, public last:string, public average:number){

    }
}
const bar = new Student("Bar", "Yaron",98);
const roman = new Student("Roman", "R",100)

console.log(bar);
const students:Array<any> = [bar, roman]

students.forEach(function(student){
    console.log(student.name, student.average)
})

const topStudents = students.filter(function(student){
    return student.average >=99
})

console.log(topStudents)