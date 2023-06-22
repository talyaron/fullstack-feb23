// # Goal: #
// Work Time clock.
// every worker, can set entrance time , and exit time.

// ## Levels ##
// 1) the system can show every workers entrance and exit times, in a table.

// entrance and exit times.
class Movment {
    id: string;
    constructor(public entrance: number, public exit: number) {
        this.id = Date.now().toString(32) + Math.random().toString(16);
    }

    calculatDayliHours(): number | undefined {
        try {
            if (!this.entrance || this.entrance) throw new Error("The dittails are missing");
            const dayliHours = this.exit - this.entrance;
            return dayliHours;

        } catch (error) {
            console.error(error);
            return undefined;
        }
    }
}

const movments: Movment[] = [];

// workers.
class Worker {
    id: string;
    constructor(public name: string, public email: string) {
        this.id = Date.now().toString(32) + Math.random().toString(16);
    }
}

const workers: Worker[] = [];

//join classes
class MovmentWorker {
    constructor(public worker: Worker, public movment: Movment) { }
}

const movmentWorkers: MovmentWorker[] = [];

// view->model controlers
function handleRegisterUser(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const email = ev.target.elements.email.value;
        // const entrance = ev.target.elements.entrance.value;
        // const exit = ev.target.elements.exit.value;

        const worker = new Worker(name, email);
        //add to model
        workers.push(worker);

        renderLoggedWorker(worker, document.querySelector("#register"));


        console.log(name, email);
    } catch (error) {
        console.error(error)
    }
}

// view controlers
//register user
function renderRegisterWorker(rootElement: HTMLElement | null) {
    try {
        if (!rootElement) throw new Error("Missing root element");

        const html = `
        <form onsubmit="handleRegisterUser(event)">
          <input type="text" name="name" id="name" placeholder="name" required>
          <input type="text" name="email" id="email" placeholder="email" required>
          <input type="submit" value="register">
        </form>`;

        rootElement.innerHTML = html;
        // return html;
    } catch (error) {
        console.error(error);
    }
}

renderRegisterWorker(document.querySelector("#register"));

function renderLoggedWorker(
    worker: Worker,
    rootElement: HTMLElement | null) {
    try {
        const html = `<h2>Hello ${worker.name}</h2>
        <form onsubmit="handleRegisterUser(event)">
          <select name="entrance" id="entrance" placeholder="entrance">
            <option value="1">1</option>
            
          </select>
          <select name="exit" id="exit" placeholder="exit"></select>
        </form>`;

        if (!rootElement) throw new Error("no root element");

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// 2) The system can log different users (use select input).
//    the system can calculate the user monthly total hours.
// 3) the user can see all workers times, serach for worker, and show each worker total times.
//    the user could edit entrance details.