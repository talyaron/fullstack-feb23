
// const arr = [21,`k`,4,6767,4,342,4,6,1,8,88,6]
// const arrStr = [`ee`,`el`,`bjh`,`gg`]
// const map= arr.map(elm => elm+`t`)
// console.log(map);

// const some = arrStr.some(elm => elm.length==1)
// console.log(some);

const array1 = [1, 2, 3, 4];

const initialValue = 0;
debugger;
const x = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
    );
    
console.log(x);

