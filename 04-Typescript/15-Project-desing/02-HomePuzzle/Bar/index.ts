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
function handleRegisterWorker(ev: any){
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const email = ev.target.elements.email.value;
        // const entrance = ev.target.elements.entrance.value;
        // const exit = ev.target.elements.exit.value;

        const worker = new Worker(name, email);
          //add to model
        workers.push(worker);

        // renderLoggedWorker(worker, document.querySelector("#register"));


        console.log(name, email);
    } catch (error) {
        console.error(error)
    }
}

// view controlers
//register user

renderRegisterWorker(document.querySelector("#register"));

function renderRegisterWorker(rootElement: HTMLElement | null) {
    try {
        if (!rootElement) throw new Error("Missing root element");

        const html = `
        <div class="register">
        <form onsubmit="handleRegisterUser(event)">
          <input type="text" name="name" id="name" placeholder="name" required>
          <input type="text" name="email" id="email" placeholder="email" required>
          
          <label for="entrance">entrance</label>
          <input type="time" name="entrance" id="entrance">
          <label for="exit">exit</label>
          <input type="time" name="exit" id="exit">

          <input type="submit" value="register">
        </form>
        </div>`;

        rootElement.innerHTML = html;
        // return html;
    } catch (error) {
        console.error(error);
    }
}

function calculatDayliHours(entrance: number, exit: number): number | undefined {
    try {
        if (!entrance || !exit) throw new Error("The dittails are missing");
        const dayliHours = exit - entrance;
        return dayliHours;

    } catch (error) {
        console.error(error);
        return undefined;
    }
}

// 2) The system can log different users (use select input).
//    the system can calculate the user monthly total hours.
// 3) the user can see all workers times, serach for worker, and show each worker total times.
//    the user could edit entrance details.