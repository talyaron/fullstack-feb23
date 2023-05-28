interface Student {
    name: string;
    gender: string;
    allGrades: {
      mathMidTermGrade: number;
      historyMidTermGrade: number;
      mathFinalTermGrade: number;
      historyFinalTermGrade: number;
    };
    getAverageGrade(): number;
    getGradeForSubject(subject: string): number;
  }
  
  const student: Student = {
    name: 'lior',
    gender: 'Male',
    allGrades: {
      mathMidTermGrade: 85,
      historyMidTermGrade: 98,
      mathFinalTermGrade: 75,
      historyFinalTermGrade: 95,
    },
    getAverageGrade: function (): number {
      const mathGrade = this.allGrades.mathMidTermGrade + this.allGrades.mathFinalTermGrade;
      const historyGrade = this.allGrades.historyMidTermGrade + this.allGrades.historyFinalTermGrade;
      const averageGrade = (mathGrade + historyGrade) / 4;
      return averageGrade;
    },
    getGradeForSubject: function (subject: string): number {
      switch (subject) {
        case 'math':
          return (this.allGrades.mathMidTermGrade + this.allGrades.mathFinalTermGrade) / 2;
        case 'history':
          return (this.allGrades.historyMidTermGrade + this.allGrades.historyFinalTermGrade) / 2;
        default:
          return 0;
      }
    },
  };
  
  console.log(student.getAverageGrade());
  console.log(student.getGradeForSubject('math'));
  console.log(student.getGradeForSubject('history'));
  