// # Goal: #
// Work Time clock.
// every workerr, can set entrance time , and exit time.

// ## Levels ##
// 1) the system can show every workers entrance and exit times, in a table.

const id = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// workers.
class Workerr {
    id: string;
    constructor(public name: string, public email: string) {
        this.id = id();
    }
}

const workers: Workerr[] = [];

// entrance and exit times.
class Movment {
    id: string;
    constructor(public entrance: number, public exit: number, public dayliHours: number) {
        this.id = id();
    }
}

const movments: Movment[] = [];

//join classes
class MovmentWorkerr {
    constructor(public workerr: Workerr, public movment: Movment) { }
}

const movmentWorkers: MovmentWorkerr[] = [];


// view controlers
// register user
function renderRegisterWorkerr(
    rootElement: HTMLElement | null
) {
    try {
        if (!rootElement) throw new Error("Missing root element");

        const html = `
        <div class="register">
        <form onsubmit="handleRegisterWorkerr(event)">
          <input type="text" name="name" id="name" placeholder="name" required>
          <input type="text" name="email" id="email" placeholder="email" required>
          
          <label for="entrance">entrance</label>
          <input type="time" name="entrance" id="entrance" required>
          <label for="exit">exit</label>
          <input type="time" name="exit" id="exit" required>

          <input type="submit" value="register">
        </form>
        </div>`;

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

renderRegisterWorkerr(document.querySelector("#register"));

function renderMovmentWorkerr(
    workerr: Workerr | any,
    movment: Movment | any,
    rootElement: HTMLElement | any
) {
    try {
        const html = `
        <div class="workwrDitels">
            <h2>${workerr.name}</h2>
            <div class="ditels">
              <p> Entrance time is: ${movment.entrance}</p>
              <p> Exit time is: ${movment.exit}</p>
                <p> Dayli hours is: ${movment.dayliHours}</p>
            </div>
        </div>`;

        if (!rootElement) throw new Error("no root element");

        rootElement.innerHTML += html;
    } catch (error) {
        console.error(error);
    }
}

// view->model controlers
function handleRegisterWorkerr(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const email = ev.target.elements.email.value;

        const workerr = new Workerr(name, email);
        //add to model
        workers.push(workerr);

        const entrance = ev.target.elements.entrance.value;
        const exit = ev.target.elements.exit.value;

        const dayliHours = (): number => {
            const entrance = parseFloat(ev.target.elements.entrance.value);
            const exit = parseFloat(ev.target.elements.exit.value);
            const dailyHours = exit - entrance;
            return dailyHours;
        };


        const movment = new Movment(entrance, exit, dayliHours());
        //add to model
        movments.push(movment);

        renderMovmentWorkerr(workerr, movment, document.querySelector("#MovmentWorker"));

        console.log(name, email, entrance, exit, dayliHours());
    } catch (error) {
        console.error(error)
    }
}

// 2) The system can log different users (use select input).
//    the system can calculate the user monthly total hours.
// 3) the user can see all workers times, serach for workerr, and show each workerr total times.
//    the user could edit entrance details.