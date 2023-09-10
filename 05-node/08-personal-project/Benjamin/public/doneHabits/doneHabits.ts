

function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}

const email = getEmailFromQuery();
console.log(email)


getDoneHabits()
async function getDoneHabits() {
    debugger;
    const response = await fetch(`/API/habits/getDoneHabits?email=${email}`);
    const data = await response.json();
    console.log(data)
    exportData(data)
}

class DoneHabit {
    constructor(
        public name: string,
        public categorie: string,
        public timeDone: Date

    ) { }
}
function exportData(data: DoneHabit[]) {
    data.forEach(obj => {
        const name = obj.name;
        const categorie = obj.categorie;
        const date = obj.timeDone;
        console.log(date)
        const root = document.querySelector(".doneHabits") as HTMLDivElement;
        renderData(name, categorie, date, root)
    })
}
function renderData(name, categorie, date: Date, root: HTMLDivElement) {
    console.log(name, categorie, date)
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const html = `<div class="doneHabits__habit">
    <h1 class="doneHabits__habit__header">${name}</h1>
    <h2 class="doneHabits__habit__categorie">${categorie}</h2>
    <h2 class="doneHabits__habit__date">${day}/${month}/${year}</h2>
</div>`
    root.innerHTML += html;

}
function backToMain(){
    window.location.href = `../main/main.html?email=${email}`;
}