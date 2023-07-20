const submitButton = document.querySelector("#registerSubmit") as HTMLElement
const passwordINS = document.querySelector("#passwordINS") as HTMLElement

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }

    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=> observer.observe(el))

function passwordCheck(event:any){
    event.preventDefault();
    let currentPassword = event.target.value;
    if(currentPassword.length>=8){
        debugger;
        submitShow();

    }
    else{
        submitHide()
    }
}
function submitShow(){
    submitButton.style.opacity= "1";
    passwordINS.style.display= "none";

}
function submitHide(){
    submitButton.style.opacity= "0";
    passwordINS.style.display= "block";

}