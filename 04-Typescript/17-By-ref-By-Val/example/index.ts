let x = 45;
let y = x;

console.log(x, y); // 45 45

x = 100;
console.log(x, y)


let a = { x: 45 };
let b = a;

console.log(a.x, b.x);

a.x = 100;
console.log(a.x, b.x);

interface Student {
    name: string;
    year: number

}

const students: Student[] = [
    { name: "Yevgeny", year: 2023 },
    { name: "Shalom", year: 2022 },
    { name: "Gili", year: 2021 }
]

const student2021 = students.find(student => student.year === 2021)
console.log(student2021)

students[2].year = 2024;

const studentGili = students[2];

// if (student2021)
//     student2021.year = 2022;

studentGili.year = 2025;

console.log(student2021)

console.log(students);

