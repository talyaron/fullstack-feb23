// MVC - Model View Controller

//data (Model)
class User {
    id: string;
    constructor(public userName: string, public yearOfBirth: number, public color: string, public picture: string) {
        this.id = `id-${Math.random()}`;
    }
    age() {
        const age = new Date().getFullYear() - this.yearOfBirth;
        return age;
    }
}
//keep all users
const userArray: User[] = new Array();





//GUI (view) - get from user

//controler - handle the data and add to the model
function handleSubmit(ev: any) {
    try {
        ev.preventDefault();
        console.dir(ev);
        const username = ev.target.username.value;
        const picture = ev.target.userPic.value;
        const yearOfBirth = ev.target.yearOfBirth.valueAsNumber;
        const color = ev.target.color.value;
        const user = new User(username, yearOfBirth, color, picture); //instance of user

<<<<<<< HEAD:04-Typescript/14-forms/example-video/index.ts
        //get data and store in in the users' array
        userArray.push(user);

        //render the data to the DOM
        // model (users) -> controler (renderCards) -> view (renderCard)
        renderCards(userArray, document.querySelector("#cards"));
        
=======
        //get data and store it in the users' array
        userArray.push(user);

        //render the data to the DOM
        renderCards(userArray, document.querySelector("#cards"));

>>>>>>> main:04-Typescript/14-forms/followup/tal/index.ts
    } catch (error) {
        console.error(error);
    }
}

//controler - handle the data and render to the DOM
function renderCards(users: User[], element: HTMLElement | null) {
    try {
        if (!element) throw new Error("element is not defined");
        const html = users.map((user) => renderCard(user)).join(" "); //users.map go all over the array, and randerCard is go unside every cell to render it

        element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}
<<<<<<< HEAD:04-Typescript/14-forms/example-video/index.ts

//controler - handle the data and create html string
=======
//
>>>>>>> main:04-Typescript/14-forms/followup/tal/index.ts
function renderCard(user: User) {
    try {
        const html =
            `<div id="${user.id}" class="card" style="background-color:${user.color}">
                    <div class="userName">Name: ${user.userName}</div>
                    <div class="age">Age: ${user.age()}</div>
                    <img class="image" src="${user.picture}">
            </div> `;
        return html

    } catch (error) {
        console.error(error)
    }
}