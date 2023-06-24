
// 1) Create a student object with the following properties: name, gender, mathMidTermGrade, historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.

// 2) Implement a method within the object that calculates the average grade of the student by utilizing the available grades (make use of the 'this' keyword).

// 3) Additionally, create a list of grades for multiple courses and include a method that calculates the average grade across all courses. You can utilize arrays and arrays of grades for this purpose. Also, implement a method that provides the grade for a specific subject based on the provided information (consider using arrays and indexing). 


interface Car{
    name:string;
    company:string;
    year:number;
    color:string;
    mil:number;
    carage:Function
}
const tomcar:Car={
    name:"cx5",
    company:"mazda",
    year:2014,
    color:"red",
    mil:100000,
    carage:function():number{
        return new Date().getFullYear()-this.year;
    }
}
console.log(tomcar)
console.log(tomcar.carage())
