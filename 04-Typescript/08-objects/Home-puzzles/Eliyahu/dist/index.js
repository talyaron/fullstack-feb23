// interface Stusents {
//     name: string,
//     gender: string,
//     mathMidTermGrade: number,
//     historyMidTermGrade: number,
//     mathFinalTermGrade: number,
//     historyFinalTermGrade: number
//     avgGrade: Function
// }
var g1 = {
    course: 'math',
    grade: 90
};
var g2 = {
    course: 'english',
    grade: 95
};
var g3 = {
    course: 'math',
    grade: 68
};
var g4 = {
    course: 'english',
    grade: 89
};
var g5 = {
    course: 'english',
    grade: 70
};
var grades = [g1, g2, g3, g4, g5];
function allAvg(unit) {
    try {
        var sum = 0;
        for (var i = 0; i < unit.length; i++) {
            sum = sum + unit[i].grade;
        }
        return "The average of all grades is " + sum / unit.length;
    }
    catch (error) {
        console.error(error);
        return;
    }
}
var spcCourse = prompt('For which course you want get the average?');
function courseAvg(course, unit) {
    try {
        if (!course)
            throw new Error('Name of course is not input');
        var sum = 0;
        var j = 0;
        for (var i = 0; i < unit.length; i++) {
            if (course === unit[i].course) {
                sum = sum + unit[i].grade;
                j++;
            }
        }
        return "The average of " + spcCourse + " grades is " + sum / j;
    }
    catch (error) {
        console.error(error);
        return;
    }
}
console.log(allAvg(grades));
console.log(courseAvg(spcCourse, grades));
