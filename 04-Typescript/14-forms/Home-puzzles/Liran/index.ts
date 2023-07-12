class User {
    userID: number = userIdNumber++;
    constructor(public userName: string, public age: number, public favorite: string, public picture: string) {
    }
}
let userIdNumber = 1;
let allowDelete = false;
const userArray: User[] = new Array();

function handleSubmit(ev: any) {
    try {

        ev.preventDefault();
        console.dir(ev);
        if (ev.target.id == "Input") {

            const username = ev.target.username.value;
            const picture = ev.target.userPic.value;
            const age: number = new Date().getFullYear() - ev.target.age.valueAsNumber;
            const vColor = ev.target.favorite.value;
            const user = new User(username, age, vColor, picture);
            userArray.push(user);
            renderCard(user, false, null);
        }
        else {
            const userNameToUpdate = ev.target.usernameToUpdate.value;
            const user: User | undefined = userArray.find(element => element.userName === userNameToUpdate);
            if (user === null || user == undefined) throw new Error("Error");
            const userId = user.userID;
            const userProfile = document.querySelector(`#card${userId}`) as HTMLDivElement;
            if (userProfile === null) throw new Error("Error");

            if (!allowDelete) {
                const newUsername = ev.target.newUsername.value;
                if (newUsername !== null && newUsername !== undefined && newUsername !== "") {
                    user.userName = newUsername;
                }
                const picture = ev.target.newUserPic.value;
                if (picture !== null && picture !== undefined && picture !== "") {
                    user.picture = picture;
                }
                const newAge: number = ev.target.newAge.valueAsNumber;
                if (newAge !== null && newAge !== undefined && !isNaN(newAge)) {
                    user.age = new Date().getFullYear() - newAge;
                }
                const vColor = ev.target.newFavorite.value;
                if (vColor !== null && vColor !== undefined && vColor !== "") {
                    user.favorite = vColor;
                }
                debugger;
                userProfile.innerHTML = "";
                renderCard(user, true, userProfile);
            }
            else {
                 userProfile.innerHTML = "";
                const deleteUser = userArray.findIndex(element => element.userID === userNameToUpdate);
                userArray.splice(deleteUser, 1);
            }
        }
    } catch (error) {
        console.error(error);
    }
}

function backgroundC(str: string, id: string) {
    try {

        const bc = document.querySelector(`#card${id}`) as HTMLDivElement;
        console.log(bc)
        if (!bc) throw new Error("Error");
        bc.style.backgroundColor = str;
        bc.style.color = (parseInt(str) / (2)).toString();

    } catch (error) {
        console.error(error)
    }
}

function renderCard(user: User, update: boolean, userCard: HTMLDivElement | null) {
    try {
        let cards: HTMLDivElement | null;
        if (update) {
            cards = userCard;
        }
        else {

            cards = document.querySelector("#cards");
        }
        if (!cards) throw new Error("Missing information");
        cards.innerHTML += `<div id="card${user.userID}" class="card">
            <div">
                <div class="userName">Name: ${user.userName}</div>
                <div class="age">Age: ${user.age}</div>
            <img class="image" src="${user.picture}">
        </div> </div> `;
        backgroundC(user.favorite, user.userID.toString());

    } catch (error) {
        console.error(error)
    }

}

function checkDelete(ev: any) {
    try {
        if (ev.target.checked === true)
            allowDelete = true;
        else
            allowDelete = false;

    } catch (error) {
        console.error(error)

    }


}
