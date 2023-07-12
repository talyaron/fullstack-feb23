setInterval(()=>{
document.body.style.backgroundColor = getRandomColor()

},1000)

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function getRandomNumbers(){
    return Math.floor(Math.random()*100) 
}

const boxes:NodeListOf<HTMLDivElement> = document.querySelectorAll('.box')  

console.dir(boxes)

boxes.forEach(box=>{
    setInterval(()=>{
        box.style.backgroundColor = getRandomColor()
        box.style.top = (getRandomNumbers())+"vh"
        box.style.left = (getRandomNumbers())+"vw"
        },1000)
    
})



// const colors:string[] = ["red","green","pink","blue"]

// let count = 0

// document.addEventListener("click",() =>{
//     if (count === colors.length) count = 0;
//     document.body.style.backgroundColor = colors[count];
//     count++
// });

// class Student{

//     name:string;
//     yOb:number;

//     constructor(name:string,yOb:number){
//         this.name = name;
//         this.yOb = yOb
//     }

//      getAge(){
//         return new Date().getFullYear() - this.yOb;
//      }

// };

// const students: Student[] = [
//     new Student("shlomi",1999),
//     new Student("Farhat",1900),
// ];

// const root = document.querySelector("#root");

// const studentsHTML = students.map((student)=>{
//     return `<p>${student.name}, age: ${student.getAge()}<p>` ;
// })
//  .join(" ");

//  console.dir(studentsHTML)

// if (root){
//     root?.innerHTML = studentsHTML;
// }
// console.dir(root)






// // 1. Render the names on the screen (DOM).
// // 2. Render images and texts to the screen.
// // 3. create instegram/pinterst/other-app, based on the class.

// // Use scss in all cases


// // create car class (or any other class you like, flowers, houses, movise...);

// // the class should have name, imgSrc (link to an image).

// class Car{
//     manufacturer:string
//     model:string
//     imgSrc:string
//     constructor(manufacturer:string,model:string,imgSrc:string){
//         this.manufacturer = manufacturer
//         this.model = model
//         this.imgSrc = this.imgSrc
        
//     }
// }

// // create an array of this class.

// const cars:Car[] = [
//     new Car("Audi","Q8","https://cdn-2.motorsport.com/images/amp/63vxpl7Y/s1000/ferrari-vision-gran-turismo-1.jpg"),
//     new Car("Lexus","SUV","https://cars.usnews.com/static/images/Auto/izmo/i159615470/2023_lexus_gx_angularfront.jpg"),
//     new Car("Jeep","Grand Cherokee","https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/2022/grand-cherokee/trims/2022-All-New-Grand-Cherokee-Laredo-Vehicle-Lineup-All-Breakpoints.jpg.image.1440.jpg")
// ]

// const main = document.querySelector("#root");
// const carsHTML = cars.map(car=>{

//     return `<p>${car.manufacturer},${car.model}
//     <img src=${car.imgSrc} />`
// })
// .join(" ");

// if (main){
//     main.innerHTML = carsHTML;
// }