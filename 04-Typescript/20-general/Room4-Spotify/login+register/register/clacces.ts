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