function createCourse(grades) {
    return {
        grades: grades
    };
}
function getAverageGrade(courses) {
    var totalGrades = courses.flatMap(function (course) { return course.grades; });
    var sum = totalGrades.reduce(function (total, grade) { return total + grade; }, 0);
    return sum / totalGrades.length;
}
function getGradeForSubject(course, subjectIndex) {
    if (subjectIndex >= 0 && subjectIndex < course.grades.length) {
        return course.grades[subjectIndex];
    }
    return undefined;
}
// Create courses with grades
var mathGrades = [85, 90, 92, 88];
var scienceGrades = [78, 82, 80, 85, 88];
var historyGrades = [92, 88, 95];
var mathCourse = createCourse(mathGrades);
var scienceCourse = createCourse(scienceGrades);
var historyCourse = createCourse(historyGrades);
// Calculate average grade across all courses
var allCourses = [mathCourse, scienceCourse, historyCourse];
var averageGrade = getAverageGrade(allCourses);
console.log("The average grade across all courses is: " + averageGrade);
// Get grade for a specific subject
var subjectIndex = 2; // Example subject index
var subjectGrade = getGradeForSubject(mathCourse, subjectIndex);
if (subjectGrade !== undefined) {
    console.log("The grade for subject " + subjectIndex + " is: " + subjectGrade);
}
else {
    console.log("No grade available for subject " + subjectIndex);
}
