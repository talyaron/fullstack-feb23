interface Course {
    courseName: string;
    grades: number[];
    courseAverageGrade: Function;
    printCourseGrades: Function;
};

interface Student {
    name: string
    id: string
    dateOfBirth: string
    courses: Course[];
    getCourseAvg: Function;
    getStudentAvg: Function;
};


/* main */
let get = true;
let studentsArray: Student[] = new Array();
let index = 0;
while (get) {
    const studentName = prompt("Enter student name:")
    const studentId = prompt("Enter student ID:")
    const studentDOB = prompt("Enter student date of birth DD.MM.YY:")
    const student = createStudent(studentName, studentId, studentDOB);
    if (student !== undefined) {
        studentsArray[index] = student;
        index++;
    }
    get = confirm("Add another student?")
}

/*printing students grades list + Average*/ 
let i = 0;
while (studentsArray[i] != undefined) {
    document.write(`Student Name: <strong>${studentsArray[i].name}</strong><br>`)
    for (let j = 0; j < studentsArray[i].courses.length; j++) {
        if (studentsArray[i].courses[j].printCourseGrades() !== undefined)
            document.write(`${studentsArray[i].courses[j].printCourseGrades()}<br>`)
    }
    document.write(`Student average grade is: ${studentsArray[i].getStudentAvg()}<br>`)
    i++;
}

/*print average in specific course*/
const className = "English";
i  = 0;
let sum = 0;
let cnt = 0;
debugger;
while (studentsArray[i] != undefined) {
    for (let j = 0; j < studentsArray[i].courses.length; j++) {
        if (studentsArray[i].courses[j].courseName == className){
            sum+= studentsArray[i].courses[j].courseAverageGrade();
            cnt++;
        }
    }
    i++;
}
if(cnt)
    document.write(`Average grade in ${className} is: ${sum/cnt}<br>`)
else     document.write(`No grades in ${className} course<br>`)



/* FUNCTIONS */

/*Course */

function courseAverageGrade(): number | undefined {
    try {
        if (this == null) throw new Error("Empty object")
        if (this == undefined) throw new Error("Undefined object")
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    } catch (error) {
        console.error(error);
        return undefined
    }
}

function printCourseGrades(): void {
    try {
        if (this == null) throw new Error("Empty object")
        if (this == undefined) throw new Error("Undefined object")
        document.write(`Course: ${this.courseName}<br>`)
        document.write(`Grades:`)
        for (let i = 0; i < this.grades.length; i++) {
            if(this.grades[i] !== undefined)
                document.write(`${this.grades[i]} `)
        }
        document.write(`<br>Average grade: ${this.courseAverageGrade()}<br>`)

    } catch (error) {
        console.error(error)
    }

}

function getCourseAvg(courseName: string): number | undefined {
    for (let i = 0; i < this.courses.length; i++) {
        if (courseName == this.courses[i].name) {
            return this.courses[i].courseAverageGrade(this.courses);
        }
    }
}

function createCourse(courseName: string | null): Course | undefined {
    try {
        if (courseName == null || courseName == undefined) throw new Error("Missing Course name")
        let grades: number[] = new Array();
        let add = true;
        let index = 0;
        while (add) {
            grades[index] = Number(prompt("Enter grade:"))
            add = confirm("Add more?")
            index++;
        }
        const course: Course = { courseName , grades, courseAverageGrade, printCourseGrades }
        return course;
    } catch (error) {
        console.error(error)
        return undefined
    }

}

/* Student */

function getStudentAvg(): number | undefined {
    let sum = 0;
    for (let i = 0; i < this.courses.length; i++) {
        sum += this.courses[i].courseAverageGrade(this.courses);
    }
    return sum / this.courses.length;
}

function createStudent(studentName: string | null, studentId: string | null, studentDOB: string | null): Student | undefined {
    try {
        if (!studentName) throw new Error("Missing Student name")
        if (!studentId) throw new Error("Missing Student ID")
        if (!studentDOB) throw new Error("Missing Student dafe of birth")
        let add = true;
        let courses: Course[] = [];
        let index = 0
        while (add) {
            const courseName = prompt("Enter Course name:")
            let course = createCourse(courseName);
            if (course !== undefined) {
                courses[index] = course;
                index++;
            }
            add = confirm("Add another course?")
        }
        const student: Student = { name: studentName, id: studentId, dateOfBirth: studentDOB, courses, getCourseAvg, getStudentAvg }
        return student;
    } catch (error) {
        console.error(error)
        return undefined
    }
}

