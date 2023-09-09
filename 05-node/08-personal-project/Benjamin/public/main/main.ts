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
        manageDocName(name)

        console.log(name);
        console.log(dateCreatd);
        greeting(name);
        getUserTasks();

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
        const userEmail = email;
        if (!name || !categorie || !time) throw new Error("please complete all fields!")
        const response = await fetch("/API/habits/add-new-habit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, categorie, time, userEmail })
        })
        const data = await response.json();
    } catch (error) {
        console.error(error);
    }
}
function manageDocName(name) {
    const docRoot = document.querySelector("#docRoot") as HTMLElement;
    docRoot.innerHTML = `${name}-HABITER`
}

// get tasks of user

enum Categorie {
    health = "health",
    focus = "focus",
    learn = "learn",
    fun = "fun"
}
enum Time {
    morning = "morning",
    afternoon = "afternoon",
    evening = "evening"
}
enum Status {
    todo = "todo",
    done = "done"
}

class UserTasks {
    constructor(
        public name: string,
        public categorie: Categorie,
        public time: Time,
        public status: Status,
        public email: string
    ) { }
}

async function getUserTasks() {
    try {
        const response = await fetch(`/API/habits/get-user-habits?email=${email}`);
        const data = await response.json();
        printUserTasks(data);


    } catch (error) {
        console.error(error);
    }

}

// print tasks of user
function printUserTasks(arr: UserTasks[]) {
    arr.forEach(obj => {
        if (obj.time === "morning") {
            printTaskByTime(obj, document.querySelector("#morning"))
        }
        if (obj.time === "afternoon") {
            printTaskByTime(obj, document.querySelector("#afternoon"))
        }
        if (obj.time === "evening") {
            printTaskByTime(obj, document.querySelector("#evening"))
        }
    })

}

function printTaskByTime(task: UserTasks, root: HTMLDivElement) {
    const html = `<div onclick="taskDocs('${task.name}','${task.categorie}','${task.status}', ${task})" class="task">
    <h1 class="task__header">${task.name}</h1>
    <h2 class="task__categorie">${task.categorie}</h2>
</div>`
    root.innerHTML += html;
}

function taskDocs(name:string,categorie:string,status:string, task){
    debugger;
    const root = document.querySelector(".taskDocsRoot") as HTMLElement;
    root.style.display = "flex"
    const html = `<div class="taskDoc">
    <h1 class="taskDoc__header">${name}</h1>
    <h2 class="taskDoc__categorie">${categorie}</h2>
    <h2 class="taskDoc__status">${status}</h2>
    <button class="taskDoc__doneBTN" onclick="taskDone(${task})">DONE!</button>
</div>`;
root.innerHTML = html;
document.body.addEventListener("mousedown", () => {
    root.style.display = "none"
})

}

async function taskDone(task){
    const response = await fetch

}
















//  quotes
class Quote {
    constructor(
        public quote: string,
        public author: string,) { }
}


const quotes: Quote[] = [
    new Quote("Believe you can and you're halfway there.", "Theodore Roosevelt"),
    new Quote("The only way to do great work is to love what you do.", "Steve Jobs"),
    new Quote("Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"),
    new Quote("Don't watch the clock; do what it does. Keep going.", "Sam Levenson"),
    new Quote("Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", "Christian D. Larson"),
    new Quote("Success is walking from failure to failure with no loss of enthusiasm.", "Winston Churchill"),
]
function getRandomQuote<Quote>(arr: Quote[]): Quote | undefined {
    debugger;
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
printQuote()
function printQuote() {
    const quote = getRandomQuote(quotes);
    const html = `<h2 class="quoteRoot__quote">${quote.quote}</h2><h2 class="quoteRoot__author">${quote.author}</h2>`
    const quoteRoot = document.querySelector(".quoteRoot") as HTMLDivElement;
    quoteRoot.innerHTML += html;
}
