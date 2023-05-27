// // 1) Create a student object with the following
// //  properties: name, gender, mathMidTermGrade,
// // historyMidTermGrade, mathFinalTermGrade, and historyFinalTermGrade.

// // interface Student {
// //   name: string;
// //   gender: string;
// //   mathMidTermGrade: number;
// //   historyMidTermGrade: number;
// //   mathFinalTermGrade: number;
// //   historyFinalTermGrade: number;
// // }

// // const student: Student = {
// //   name: 'Yotam',
// //   gender: 'Male',
// //   mathMidTermGrade: 90,
// //   historyMidTermGrade: 82,
// //   mathFinalTermGrade: 90,
// //   historyFinalTermGrade: 80,
// // };

// // console.log(student);

// // 2) Implement a method within the object that calculates

interface Student {
  name: string;
  gender: string;
  nested: {
    mathMidTermGrade: number;
    historyMidTermGrade: number;
    mathFinalTermGrade: number;
    historyFinalTermGrade: number;
  };
  getAverageGrade(): number;
}

const student = {
  name: 'Yotam',
  gender: 'Male',
  allGrades: {
    mathMidTermGrade: 90,
    historyMidTermGrade: 80,
    mathFinalTermGrade: 95,
    historyFinalTermGrade: 85,
  },
  getAverageGrade: function (): number {
    const mathGrade =
      this.allGrades.mathMidTermGrade + this.allGrades.mathFinalTermGrade;
    const historyGrade =
      this.allGrades.historyMidTermGrade + this.allGrades.historyFinalTermGrade;
    return (mathGrade + historyGrade) / 4;
  },
};

console.log(student.getAverageGrade());

// // 3) Additionally, create a list of grades for multiple courses and include a method that calculates the average
// //  grade across all courses. You can utilize arrays and arrays of grades for this purpose.
// //   Also, implement a method that provides the grade for a specific subject based on the provided information
// //    (consider using arrays and indexing).
