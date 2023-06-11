 const arr :number[]=[10,20,30,40,45,50,55,60];
 const arr2 :number[]=[130,230,330,430,453,503,553,603];

 const arr3 = arr.concat(arr2);
 const arr4 = arr.map((elm)=> elm*150000)

arr4.forEach((elm: number) => {
    console.log(elm);
  });
  arr.forEach((elm: number) => {
    console.log(elm);
  });
//     arr.forEach((elm:number)=>{
//         if(elm>50)
//             console.log(elm)
//   } )

//   arr.pop();
  
//   arr.forEach((elm: any) => {
//     console.log(elm);
//   });
//   arr.push(100000)

//   arr.forEach((elm: any) => {
//     console.log(elm);
 //   });

// arr.shift();

//   arr.forEach((elm: any) => {
//     console.log(elm);
//   });

//   arr.unshift(10);
//   arr.forEach((elm: any) => {
//     console.log(elm);
//   });
