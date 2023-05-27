;
;
/* main */
var get = true;
var studentsArray = new Array();
var index = 0;
while (get) {
    var studentName = prompt("Enter student name:");
    var studentId = prompt("Enter student ID:");
    var studentDOB = prompt("Enter student date of birth DD.MM.YY:");
    var student = createStudent(studentName, studentId, studentDOB);
    if (student !== undefined) {
        studentsArray[index] = student;
        index++;
    }
    get = confirm("Add another student?");
}
/*printing students grades list + Average*/
var i = 0;
while (studentsArray[i] != undefined) {
    document.write("Student Name: <strong>" + studentsArray[i].name + "</strong><br>");
    for (var j = 0; j < studentsArray[i].courses.length; j++) {
        if (studentsArray[i].courses[j].printCourseGrades() !== undefined)
            document.write(studentsArray[i].courses[j].printCourseGrades() + "<br>");
    }
    document.write("Student average grade is: " + studentsArray[i].getStudentAvg() + "<br>");
    i++;
}
/*print average in specific course*/
var className = "English";
i = 0;
var sum = 0;
var cnt = 0;
debugger;
while (studentsArray[i] != undefined) {
    for (var j = 0; j < studentsArray[i].courses.length; j++) {
        if (studentsArray[i].courses[j].courseName == className) {
            sum += studentsArray[i].courses[j].courseAverageGrade();
            cnt++;
        }
    }
    i++;
}
if (cnt)
    document.write("Average grade in " + className + " is: " + sum / cnt + "<br>");
else
    document.write("No grades in " + className + " course<br>");
/* FUNCTIONS */
/*Course */
function courseAverageGrade() {
    try {
        if (this == null)
            throw new Error("Empty object");
        if (this == undefined)
            throw new Error("Undefined object");
        var sum_1 = 0;
        for (var i_1 = 0; i_1 < this.grades.length; i_1++) {
            sum_1 += this.grades[i_1];
        }
        return sum_1 / this.grades.length;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function printCourseGrades() {
    try {
        if (this == null)
            throw new Error("Empty object");
        if (this == undefined)
            throw new Error("Undefined object");
        document.write("Course: " + this.courseName + "<br>");
        document.write("Grades:");
        for (var i_2 = 0; i_2 < this.grades.length; i_2++) {
            if (this.grades[i_2] !== undefined)
                document.write(this.grades[i_2] + " ");
        }
        document.write("<br>Average grade: " + this.courseAverageGrade() + "<br>");
    }
    catch (error) {
        console.error(error);
    }
}
function getCourseAvg(courseName) {
    for (var i_3 = 0; i_3 < this.courses.length; i_3++) {
        if (courseName == this.courses[i_3].name) {
            return this.courses[i_3].courseAverageGrade(this.courses);
        }
    }
}
function createCourse(courseName) {
    try {
        if (courseName == null || courseName == undefined)
            throw new Error("Missing Course name");
        var grades = new Array();
        var add = true;
        var index_1 = 0;
        while (add) {
            grades[index_1] = Number(prompt("Enter grade:"));
            add = confirm("Add more?");
            index_1++;
        }
        var course = { courseName: courseName, grades: grades, courseAverageGrade: courseAverageGrade, printCourseGrades: printCourseGrades };
        return course;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
/* Student */
function getStudentAvg() {
    var sum = 0;
    for (var i_4 = 0; i_4 < this.courses.length; i_4++) {
        sum += this.courses[i_4].courseAverageGrade(this.courses);
    }
    return sum / this.courses.length;
}
function createStudent(studentName, studentId, studentDOB) {
    try {
        if (!studentName)
            throw new Error("Missing Student name");
        if (!studentId)
            throw new Error("Missing Student ID");
        if (!studentDOB)
            throw new Error("Missing Student dafe of birth");
        var add = true;
        var courses = [];
        var index_2 = 0;
        while (add) {
            var courseName = prompt("Enter Course name:");
            var course = createCourse(courseName);
            if (course !== undefined) {
                courses[index_2] = course;
                index_2++;
            }
            add = confirm("Add another course?");
        }
        var student = { name: studentName, id: studentId, dateOfBirth: studentDOB, courses: courses, getCourseAvg: getCourseAvg, getStudentAvg: getStudentAvg };
        return student;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
