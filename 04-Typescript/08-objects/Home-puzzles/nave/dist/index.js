var student = {
    name: 'lior',
    gender: 'Male',
    allGrades: {
        mathMidTermGrade: 85,
        historyMidTermGrade: 98,
        mathFinalTermGrade: 75,
        historyFinalTermGrade: 95
    },
    getAverageGrade: function () {
        var mathGrade = this.allGrades.mathMidTermGrade + this.allGrades.mathFinalTermGrade;
        var historyGrade = this.allGrades.historyMidTermGrade + this.allGrades.historyFinalTermGrade;
        var averageGrade = (mathGrade + historyGrade) / 4;
        return averageGrade;
    },
    getGradeForSubject: function (subject) {
        switch (subject) {
            case 'math':
                return (this.allGrades.mathMidTermGrade + this.allGrades.mathFinalTermGrade) / 2;
            case 'history':
                return (this.allGrades.historyMidTermGrade + this.allGrades.historyFinalTermGrade) / 2;
            default:
                return 0;
        }
    }
};
console.log(student.getAverageGrade());
console.log(student.getGradeForSubject('math'));
console.log(student.getGradeForSubject('history'));
