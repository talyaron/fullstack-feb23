const arrayLength: number = 5
let arr:string[] = Array(arrayLength).fill(undefined);
let i=0
arr.forEach(pic => {
    let m= prompt("please provide a link to your picture")
    if(m){
    arr.splice(i,1,m)}
    i++
})
console.log(arr)

const root = document.querySelector("#root");
let picturesHTML= `<div class='wrapper'>`;
picturesHTML+= arr.map(picture => {
    return `<img class="img" src=${picture} alt="">`
}).join(" ");
picturesHTML += `</div>`;
if (root) {
    root.innerHTML = picturesHTML;
  }