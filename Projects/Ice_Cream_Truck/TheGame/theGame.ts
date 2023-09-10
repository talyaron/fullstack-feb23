
const p2 =  localStorage.getItem("player")
if(p2){
    console.log(p2);
    
    const y = JSON.parse(p2)
    console.log(y);
    const name = y.name
    console.log(name);

    const p3 = new Player (name, 0)
    console.log(p3);
}




