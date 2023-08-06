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
// ---------------------------
// this function checks that the password don't contain just numbers
function containsLetters(inputString: string): boolean {
    for (let i = 0; i < inputString.length; i++) {
      if (/[A-Za-z]/.test(inputString[i])) {
        return true;
      }
    }
    return false;
  }
//   -------------------------
function passwordCheck(event: any) {
    event.preventDefault();
    let currentPassword = event.target.value;
    if (currentPassword.length >= 8 && containsLetters(currentPassword)) {
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
<<<<<<< Updated upstream:04-Typescript/20-general/Room4-Spotify/login+register/register/register.ts

function redirectPage(){
    window.location.href = "../redirect/redirect.html"
=======
// ----------------------------

class profile {
    constructor(public id: number, public firstName: string, public lastName: string, public username: string, public password: string) { }
}

const profiles = localStorage.getItem("profiles")!
const profilesArr = JSON.parse(profiles);

function registerProfile(ev: any) {
    try {
        ev.preventDefault();
        const firstName = ev.target.firstName.value;
        const lastName = ev.target.lastName.value;
        const username = ev.target.username.value;
        const password = ev.target.password.value;
        profilesArr.push(new profile((profilesArr.length + 1), firstName, lastName, username, password))
        storeProfile();


    } catch (error) {
        console.error(error);
    }


}
function storeProfile(){
    const profilesArrSTR = JSON.stringify(profilesArr);
    localStorage.setItem("profiles", profilesArrSTR)
     const selectedProfile = JSON.stringify(profilesArr.length + 1);
        localStorage.setItem("selectedProfileId",selectedProfile);
        redirectToMain()
>>>>>>> Stashed changes:04-Typescript/20-general/Room4-Spotify/login+register/registerCode.ts
    redirectToMain()
}

function redirectToMain(){
<<<<<<< Updated upstream:04-Typescript/20-general/Room4-Spotify/login+register/register/register.ts
    window.location.href = "../main/main.html"
}
=======
    window.location.href = "mainPage.html"
}
>>>>>>> Stashed changes:04-Typescript/20-general/Room4-Spotify/login+register/registerCode.ts
