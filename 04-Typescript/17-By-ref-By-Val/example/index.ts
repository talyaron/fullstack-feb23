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

// copying objects by value

//shalow copy (spread operator)
const c = { ...a, y: "test" };
console.log(c);
c.x = 400;

console.log(c)
console.log(a)

//array;

const myArray = [{ name: "Tal" }, 45];
const myArray2 = [...myArray];
// const myArray2 = JSON.parse(JSON.stringify(myArray));
myArray2[1] = 100;
myArray2[0].name = "Moshe"

console.log(myArray);

//sholow copy to objects in array;

const students2 = students.map(s => {
    return { ...s }
})

console.log(students2)
students2[2].year = 2040;
console.log(students)






