document.body.style.background = "blue";

const colors: string[] = ["red", "green", "yellow", "pink"];

let count = 0;

document.addEventListener("click", () => {
  if (count === colors.length) count = 0;
  console.log("click");
  document.body.style.background = colors[count];
  count++;
});

class Student {
  name: string;
  yearOfBirth: number;
  constructor(name: string, yearOfBirth: number) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
  }

  getAge() {
    return new Date().getFullYear() - this.yearOfBirth;
  }
}

const students: Student[] = [
  new Student("Itizk", 2000),
  new Student("Sara", 2004),
  new Student("Nave",1998),
  new Student("Alex",1991),
];

const root = document.querySelector("#root");
const studntsHTML = students
  .map((student) => {
    return `<p>${student.name}, age: ${student.getAge()}</p>`;
  })
  .join(" ");

console.log(studntsHTML);
if (root) {
  root.innerHTML = studntsHTML;
}
