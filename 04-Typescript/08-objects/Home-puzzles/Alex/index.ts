type Course = {
    grades: number[];
  };
  
  function createCourse(grades: number[]): Course {
    return {
      grades: grades,
    };
  }
  
  function getAverageGrade(courses: Course[]): number {
    const totalGrades = courses.flatMap((course) => course.grades);
    const sum = totalGrades.reduce((total, grade) => total + grade, 0);
    return sum / totalGrades.length;
  }
  
  function getGradeForSubject(course: Course, subjectIndex: number): number | undefined {
    if (subjectIndex >= 0 && subjectIndex < course.grades.length) {
      return course.grades[subjectIndex];
    }
    return undefined;
  }
  
  // Create courses with grades
  const mathGrades = [85, 90, 92, 88];
  const scienceGrades = [78, 82, 80, 85, 88];
  const historyGrades = [92, 88, 95];
  
  const mathCourse = createCourse(mathGrades);
  const scienceCourse = createCourse(scienceGrades);
  const historyCourse = createCourse(historyGrades);
  
  // Calculate average grade across all courses
  const allCourses = [mathCourse, scienceCourse, historyCourse];
  const averageGrade = getAverageGrade(allCourses);
  
  console.log(`The average grade across all courses is: ${averageGrade}`);
  
  // Get grade for a specific subject
  const subjectIndex = 2; // Example subject index
  const subjectGrade = getGradeForSubject(mathCourse, subjectIndex);
  
  if (subjectGrade !== undefined) {
    console.log(`The grade for subject ${subjectIndex} is: ${subjectGrade}`);
  } else {
    console.log(`No grade available for subject ${subjectIndex}`);
  }
  