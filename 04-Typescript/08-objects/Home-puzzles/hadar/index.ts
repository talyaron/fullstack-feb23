interface student{
    name: string,
    gender:string,
    mathMidTermGrade:number,
    historyMidTermGrade:number,
    mathFinalTermGrade:number,
    historyFinalTermGrade:number,
    average: Function;
    averagehis:Function;
    averagemath:Function;
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
    },
    averagehis:function(){
        return(this.historyFinalTermGrade+this.historyMidTermGrade)/2;
    },
    averagemath:function(){
        return(this.mathFinalTermGrade+this.mathMidTermGrade)/2;
    }
}
console.log(hadar. averagehis())
console.log(hadar. averagemath())
console.log(hadar.average())