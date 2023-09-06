function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}

const email = getEmailFromQuery();
getUserData()
async function getUserData() {
    try {
        const response = await fetch(`/API/users/get-user?email=${email}`);
        const data = await response.json();
        console.log(data)
        const name = data[0].name;
        const dateCreatd = data[0].createdAt;

        console.log(name);
        console.log(dateCreatd);
        greeting(name);

    } catch (error) {
        console.error(error);
    }
}

async function greeting(name) {
    try {
        const root = document.querySelector('#nameGreetingRoot');
        const html = `hello ${name} have a great day of habits!`;
        root.innerHTML = html;

    } catch (error) {
        console.error(error);
    }

}
function openDocs() {
    const docsRoot = document.querySelector(".docs") as HTMLDivElement;
    docsRoot.style.display = "block";
    document.body.addEventListener("mousedown", () => {
        docsRoot.style.display = "none";
    })
}
function newHabit() {
    const newHabitRoot = document.querySelector(".newHabit") as HTMLDivElement;
    newHabitRoot.style.display = "flex"

}
async function handleNewHabit(ev: any) {
    try {
        ev.preventDefault();
        debugger;
        const newHabitRoot = document.querySelector(".newHabit") as HTMLDivElement;
        newHabitRoot.style.display = "none"

        const name = ev.target.name.value;
        const categorie = ev.target.categorie.value;
        const time = ev.target.time.value;
        const response = await fetch("/API/habits/add-new-habit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, categorie, time })
        })
        const data = await response.json();
    } catch (error) {
        console.error(error);
    }

}