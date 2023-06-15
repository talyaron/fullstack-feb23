
const dog:HTMLDivElement|null= document.querySelector(".box");
const boneDrop:HTMLDivElement|null=document.querySelector(".boneDrop");
const wrapper:HTMLDivElement|null= document.querySelector(".wrapper");
const bonesEaten:HTMLDivElement|null=document.querySelector(".boneEaten");
let count = 0;

wrapper!.addEventListener("transitionend", () => {
    boneDrop!.innerHTML = "";
    removeBone()
    countCounter()
    
});

function clicked (event){
    
    if( dog!.offsetLeft<event.clientX){
        
        dog!.style.transform= "scale( 1)";
    }
    if ( dog!.offsetLeft>event.clientX){
        
        dog!.style.transform= "scale(-1, 1)";
    }
    return dogMove(event),addBone(event),count++;
};

function dogMove(event){
    dog!.style.left=`${event.clientX}px`
    dog!.style.top=`${event.clientY}px`
    dog!.style.transition=" 3s"
};

function countCounter(){
    bonesEaten!.innerHTML=`your dog has eaten ${count} bones`
   
};

function addBone(event){
    boneDrop!.innerHTML=`<img src="https://i.etsystatic.com/15536434/r/il/f478ff/2462002336/il_fullxfull.2462002336_iimi.jpg" height="50em" width="50rem" alt="">`
    boneDrop!.style.left=`${event.clientX}px`
    boneDrop!.style.top=`${event.clientY}px`
};

function removeBone(){
    boneDrop!.innerHTML=""
};