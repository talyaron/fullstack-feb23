var shiran = {
    name: "shiran",
    gender: "Femail",
    mathMidTermGrade: 85,
    historyMidTermGrade: 85,
    mathFinalTermGrade: 95,
    historyFinalTermGrade: 100,
    avg: function calaAVG() {
        try {
            if (!isNaN(this.historyFinalTermGrade) && !isNaN(this.historyMidTermGrade) && !isNaN(this.mathFinalTermGrade) && !isNaN(this.mathMidTermGrade)) {
                return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade
                    + this.historyFinalTermGrade) / 4;
            }
            else
                throw new Error("input is NaN");
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }
};
var moshe = {
    name: "moshe",
    gender: "mail",
    mathMidTermGrade: 89,
    historyMidTermGrade: 70,
    mathFinalTermGrade: 65,
    historyFinalTermGrade: 90,
    avg: function calaAVG() {
        try {
            if (!isNaN(this.historyFinalTermGrade) && !isNaN(this.historyMidTermGrade) && !isNaN(this.mathFinalTermGrade) && !isNaN(this.mathMidTermGrade)) {
                return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade
                    + this.historyFinalTermGrade) / 4;
            }
            else
                throw new Error("input is NaN");
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }
};
var liran = {
    name: "liran",
    gender: "mail",
    mathMidTermGrade: 89,
    historyMidTermGrade: 90,
    mathFinalTermGrade: 95,
    historyFinalTermGrade: 57,
    avg: function calaAVG() {
        try {
            if (!isNaN(this.historyFinalTermGrade) && !isNaN(this.historyMidTermGrade) && !isNaN(this.mathFinalTermGrade) && !isNaN(this.mathMidTermGrade)) {
                return (this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade
                    + this.historyFinalTermGrade) / 4;
            }
            else
                throw new Error("input is NaN");
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }
};
console.log(shiran);
console.log(shiran.avg());
var SudentArray = [];
SudentArray.push(moshe);
SudentArray.push(shiran);
SudentArray.push(liran);
console.log(SudentArray);
function AllStudentAVG(SudentArray) {
    try {
        debugger;
        var avgs = [];
        var count = 0;
        for (var i = 0; i < SudentArray.length; i++) {
            if (SudentArray[i].avg())
                avgs.push(SudentArray[i].avg());
            else
                throw new Error("input is NaN " + SudentArray[i]);
        }
        for (var i = 0; i < avgs.length; i++) {
            count += avgs[i];
        }
        return count / avgs.length + 1;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
var AllSutdentAVG = AllStudentAVG(SudentArray);
console.log(AllSutdentAVG);
