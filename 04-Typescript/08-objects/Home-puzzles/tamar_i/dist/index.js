//1
//2
var studentA = {
    name: "bob",
    gender: "mail",
    mathMidTermGrade: 85,
    historyMidTermGrade: 90,
    mathFinalTermGrade: 75,
    historyFinalTermGrade: 90,
    averageGrade: function () {
        try {
            return ((this.mathMidTermGrade + this.historyMidTermGrade + this.mathFinalTermGrade + this.historyFinalTermGrade) / 4);
        }
        catch (error) {
            console.log(error);
            return undefined;
        }
    }
};
console.log(studentA.name + " average grade is " + studentA.averageGrade());
var firstcours = {
    courseName: "physics",
    firstgrade: 70,
    secoundgrade: 80,
    midgrade: 75,
    finalgrade: 96,
    courseAvargeGrade: function () {
        try {
            return ((this.firstgrade + this.secoundgrade + this.midgrade + this.finalgrade) / 4);
        }
        catch (error) {
            console.log(error);
            return undefined;
        }
    }
};
console.log(firstcours.courseName + " average grade is " + firstcours.courseAvargeGrade());
var secoundcours = {
    courseName: "english",
    firstgrade: 90,
    secoundgrade: 62,
    midgrade: 75,
    finalgrade: 82,
    courseAvargeGrade: function () {
        try {
            return ((this.firstgrade + this.secoundgrade + this.midgrade + this.finalgrade) / 4);
        }
        catch (error) {
            console.log(error);
            return undefined;
        }
    }
};
console.log(secoundcours.courseName + " average grade is " + secoundcours.courseAvargeGrade());
var StudentAllCourses = {
    first: firstcours.courseAvargeGrade(),
    secound: secoundcours.courseAvargeGrade(),
    averageAllGrades: function () {
        try {
            return ((this.first + this.secound) / 2);
        }
        catch (error) {
            console.log(error);
            return undefined;
        }
    }
};
console.log(StudentAllCourses.averageAllGrades());
var array_of_all_cources = [firstcours, secoundcours];
console.log(array_of_all_cources[0], array_of_all_cources[1]);
console.log(array_of_all_cources[0].courseName + " average grade is " + array_of_all_cources[0].courseAvargeGrade());
