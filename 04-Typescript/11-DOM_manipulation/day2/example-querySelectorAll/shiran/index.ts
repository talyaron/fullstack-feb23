function GetRandomNumber(max:number){
    return Math.floor( Math.random()*max)
}

function getRndomColor(){
    debugger;
    const AllNumbers='0123456789ABCDEF';
    let color="#"
    for(let i=0; i<6; i++)
    {
        color+=AllNumbers[Math.floor( Math.random()*10)];
    }
    return color;
}
const boxes:NodeListOf<HTMLDivElement> = document.querySelectorAll(".box") 
console.dir(boxes)

setInterval(()=>{
    boxes.forEach((box)=>{
        box.style.backgroundColor=getRndomColor();
        box.style.position="absolute"
        box.style.left= `${GetRandomNumber(100)}vw`
        box.style.top= `${GetRandomNumber(100)}vh`
     
    },1000)
})