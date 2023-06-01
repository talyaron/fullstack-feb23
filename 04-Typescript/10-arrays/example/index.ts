const userNmae = "Bar";
class Student{
   
    constructor(public name:string, public last:string, public average:number){

    }
}
const bar = new Student("Bar", "Yaron", 99);
const roman = new Student("Roman", "R", 98)

console.log(bar);
const students:Array<Student> = [bar, roman];
console.log(students);

students.forEach(function(student){
    console.log(student.name, student.average)
})

const topStudents = students.filter(function(student){
    return student.average >=99
})

console.log(topStudents)
