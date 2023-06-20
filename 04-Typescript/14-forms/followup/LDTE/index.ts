class User{
    constructor(public userName:string, public age:number, public favorite:string, public picture:string ){
        
    }
}

const userArray: User[] = new Array();

function handleSubmit(ev: any) {
    try {
        ev.preventDefault();
        console.dir(ev);
        const username = ev.target.username.value;
        const picture = ev.target.userPic.value;
        const age = ev.target.age.valueAsNumber;
        const vColor = ev.target.favorite.value;
        const user = new User(username, age, vColor, picture);
        userArray.push(user);
        renderCard(user);
    } catch (error) {
        console.error(error);
    }
}

function backgroundC(str: string, id: string) {
    try {
        const bc = document.querySelector(`#${id}`) as HTMLDivElement;
        console.log(bc)
        if (!bc) throw new Error("Error");
        bc.style.backgroundColor = str;

    } catch (error) {
        console.error(error)
    }
}

function renderCard(user: User) {
    try {
        const cards = document.querySelector("#cards");
        if (!cards) throw new Error("Missing information");
        cards.innerHTML += `<div id="${userArray.length}" class="card">
        <div class="userName">Name: ${user.userName}</div>
        <div class="age">Age: ${user.age}</div>
        <img class="image" src="${user.picture}"> </div> `;
        backgroundC(user.favorite, userArray.length);

        
    } catch (error) {
        console.error(error)
    }

}