

// // 3) Additionally, create a list of grades for multiple courses and include a method that calculates the average grade across all courses. You can utilize arrays and arrays of grades for this purpose. Also, implement a method that provides the grade for a specific subject based on the provided information (consider using arrays and indexing).

// interface Student {
//   name: string,
//   gender: string,
//   spanish: number,
//   history: number,
//   math: number,
//   english: number,
//   getAverage: Function,
 
// }

// const studentB: Student = {
//   name: "Linor Monir",
//   gender: "female",
//   spanish: 80,
//   history: 75,
//   math: 95,
//   english: 85,
//   getAverage: gradesAverage,
// };

const getAverage = arr => {
  // const reducer = (total, currentValue) => total + currentValue;
  const sum = arr.reduce((total, currentValue) => total + currentValue); 
  return sum;
}

getAverage([80,75,95,85]);


// function gradesAverage(spanish:number, history:number, math:number, english:number):number | undefined 
// {
//   try {
//     return (this.spanish+this.history+this.math+this.english) / 4;
//   } catch (error) {
//     console.error(error);
//     return undefined;
//   }
// }

// console.log(studentB.calculateAverage());

