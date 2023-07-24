const usernnameBar = document.querySelector(".signIn__userName")! as HTMLElement
const passwordBar = document.querySelector(".signIn__password")! as HTMLElement

const keyboardSound1 = new Audio("../dist/media/type effect 1.mp3") as HTMLAudioElement
const keyboardSound2 = new Audio("../dist/media/type effect 2.mp3") as HTMLAudioElement

usernnameBar.addEventListener("keypress", (ev: any) => {
    keyboardSound1.play();
})
passwordBar.addEventListener("keypress", (ev: any) => {
    keyboardSound2.play();
})

function register(){
    window.location.href = "../register/registerPage.html"
}
function handleProfile(ev:any){
    try {
        ev.preventDefault()
        const tryUserName = ev.target.userName.value;
        const tryPassword = ev.target.Password.value;
        profileCheck(tryUserName,tryPassword);

    } catch (error) {
        console.error(error);
    }
}
function profileCheck(tryUserName, tryPassword){
const profiles = localStorage.getItem("profiles")!
const profilesSTR:profile[] = JSON.parse(profiles);
profilesSTR.forEach(prof => {
    if(prof.username===tryUserName && prof.password===tryPassword){
        return prof.id;
    }
})
}