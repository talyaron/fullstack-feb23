const submitButton = document.querySelector("#registerSubmit") as HTMLElement
const passwordINS = document.querySelector("#passwordINS") as HTMLElement

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }

    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

function passwordCheck(event: any) {
    event.preventDefault();
    let currentPassword = event.target.value;
    if (currentPassword.length >= 8) {
        debugger;
        submitShow();

    }
    else {
        submitHide()
    }
}
function submitShow() {
    submitButton.style.opacity = "1";
    passwordINS.style.display = "none";

}
function submitHide() {
    submitButton.style.opacity = "0";
    passwordINS.style.display = "block";

}
// ----------------------------
class profile {
    constructor(public id: number, public firstName: string, public lastName: string, public username: string, public password: string) { }
}
const profilesArr: profile[] = [];
function registerProfile(ev: any) {
    try {
        ev.preventDefault();
        const firstName = ev.target.firstName.value;
        const lastName = ev.target.lastName.value;
        const username = ev.target.username.value;
        const password = ev.target.password.value;
        profilesArr.push(new profile((profilesArr.length + 1), firstName, lastName, username, password))
        console.log(profilesArr);
        storeProfile();


    } catch (error) {
        console.error(error);
    }


}
function storeProfile(){
    const profilesArrSTR = JSON.stringify(profilesArr);
    localStorage.setItem("profiles", profilesArrSTR)
    redirectPage()
}
function redirectPage(){
    window.location.href = "../redirect/redirect.html"
    redirectToMain()
}

function redirectToMain(){
    window.location.href = "../main/main.html"
}