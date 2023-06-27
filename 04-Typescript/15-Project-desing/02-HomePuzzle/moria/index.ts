class WorkLog {
    workerName: string;
    hours: number;

    constructor(workerName: string, hours: number) {
        this.workerName = workerName;
        this.hours = hours;
    }
}
const workers: WorkLog[] = [];


function renderWorkersHours(rootElement: HTMLElement | null) {
    try {
        const html = `
        <form onsubmit="handleRegisterWorker(event)">
            <label for="firstName">First name</label>
            <input type="text" name="firstName" id='firstName' placeholder="first name" required>
            <label for="hours">Last name</label>
            <input type="number" name="hours" id="'hours" placeholder="hours" required>
            <input type="submit" value="Register">
        </form>`;

        if (!rootElement) throw new Error("No root element")

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}
renderWorkersHours(document.querySelector("#WorkersHours"));


function renderLoggedWorker(workers: WorkLog, rootElement: HTMLElement | null) {
    try {
        const html = `<h2>Hello ${workers.workerName} you worked for ${workers.hours} hours today</h2>`;
        if (!rootElement) throw new Error("no root element");

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}

// view->model controlers
function handleRegisterWorker(ev: any) {
    try {
        ev.preventDefault();
        const firstName = ev.target.firstName.value;
        const hours = ev.target.hours.value;

        const newWorker = new WorkLog(firstName, hours);

        //add to model
        workers.push(newWorker);

        //control->view 
        renderLoggedWorker(newWorker, document.querySelector("#WorkersHours"))

        console.log(firstName, hours)
    } catch (error) {
        console.error(error)
    }
}