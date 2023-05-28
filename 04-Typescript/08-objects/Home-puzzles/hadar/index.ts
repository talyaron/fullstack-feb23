interface student{
    name: string,
    gender:string,
    mathMidTermGrade:number,
    historyMidTermGrade:number,
    mathFinalTermGrade:number,
    historyFinalTermGrade:number,
    average: Function
}

const hadar:student={
    name: "hadar",
    gender:"female",
    mathMidTermGrade:90,
    historyMidTermGrade:80,
    mathFinalTermGrade:70,
    historyFinalTermGrade:60,
    average: function(){
        return (this.mathMidTermGrade+ this.historyMidTermGrade+ this.mathFinalTermGrade+ this.historyFinalTermGrade)/4;
    }
}

console.log(hadar.average())