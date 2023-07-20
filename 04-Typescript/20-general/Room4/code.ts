const usernnameBar = document.querySelector(".signIn__userName")! as HTMLElement
const passwordBar = document.querySelector(".signIn__password")! as HTMLElement

const keyboardSound1 = new Audio("./dist/type effect 1.mp3") as HTMLAudioElement
const keyboardSound2 = new Audio("./dist/type effect 2.mp3") as HTMLAudioElement

usernnameBar.addEventListener("keypress", (ev: any) => {
    keyboardSound1.play();
})
passwordBar.addEventListener("keypress", (ev: any) => {
    keyboardSound2.play();
})

function register(){
    window.location.href = "registerPage.html"
}