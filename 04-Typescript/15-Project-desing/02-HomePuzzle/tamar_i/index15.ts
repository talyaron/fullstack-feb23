//model
//worker personal details
//time clock

class TimeClock {
    //entart time
    //exit time
    constructor(public entaryTime: any, public exitTime: any) { }

}

const timeCloceArr: TimeClock[] = [];

class Employ {
    constructor(public firstName: string, public lastName: string, public idNumber: number) { }
}

const workers: Employ[] = [];

//join classes

class WorkerTimeClock {
    constructor(public worker: Employ, public timeClock: TimeClock) { }
}

const workerTimes: WorkerTimeClock[] = [];

//view controlers
//worker info
function renderHandleWorker(rootElement: HTMLElement | null) {
    console.dir(rootElement);
    try {
        const html = `
            <form onsubmit="handleWorker(event)">
                <label for="firstName">First name</label>
                <input type="text" name="firstName" id='firstName' placeholder="first name" required>
                <label for="lastName">Last name</label>
                <input type="text" name="lastName" id="lastName" placeholder="last name" required>
                <label for="IDnumber">ID Number</label>
                <input type="number" name="IDnumber" id="IDnumber" required>
                <input type="submit" value="LogIn">        
            </form>
        `
        if (!rootElement) throw new Error("No root element");
        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

renderHandleWorker(document.querySelector("#register"));

function handleWorker(ev: any) {
    try {
        ev.preventDefault();
        const firstName: string = ev.target.firstName.value;
        const lastName: string = ev.target.lastName.value;
        const idNumber: number = ev.target.IDnumber.value;

        const worker = new Employ(firstName, lastName, idNumber);

        //add to array
        workers.push(worker);

        //seich in view
        renderLoggedUser(worker, document.querySelector("#register"));

    } catch (error) {
        console.error(error);
    }
}

function renderLoggedUser(
    worker: Employ,
    rootElement: HTMLElement | null
) {
    try {
        const html = `<h2>Hello ${worker.firstName}</h2>`;
        if (!rootElement) throw new Error("no root element");

        rootElement.innerHTML = html;
        renderHandleTimeClock(document.querySelector("#register"));
    } catch (error) {
        console.error(error);
    }
}

function renderHandleTimeClock(rootElement: HTMLElement | null) {
    try {
        const html = `
        <form onsubmit="handletimeclock(event)">
            <h2>your time cloke for today:</h2>
            <label for="entary">start time</label>
            <input type="datetime-local" name="entary" id="entary">
            <label for="exit">exit time</label>
            <input type="datetime-local" name="exit" id="exit">
            <input type="submit" value="Add">
        </form>`;

        if (!rootElement) throw new Error("no root elemant");

        rootElement.innerHTML = html;
        
    } catch (error) {
        console.error(error);
    }
}

function handletimeclock(ev: any) {
    try {
        console.dir(ev);
        console.log(ev);
        ev.preventDefault();

        //get entary time
        const entaryTime = ev.target.entary.value;

        //get exit time
        const exitTime = ev.target.exit.value;

        console.log(entaryTime, exitTime);

        const timeCloceWorker = new TimeClock(entaryTime, exitTime);

        timeCloceArr.push(timeCloceWorker);

        renderTimeClock(timeCloceArr,timeCloceWorker, document.querySelector("#register"));

    } catch (error) {
        console.error(error);
    }
}

function renderTimeClock(timeCloceArr: TimeClock[] ,timeClockWorker: TimeClock ,rootElement: HTMLElement | null){
    try {
        let html = `
        <table id="timeTable">
            <tr> <!--row-->
                <th>entary time</th>  <!--colum-->
                <th>exit time</th>
                <th>total hours</th>
            </tr>
            <tr>
                <td>${timeClockWorker.entaryTime}</td>
                <td>${timeClockWorker.exitTime}</td>
                <td>${calculatHours(timeClockWorker)}</td>
            </tr>`;
        timeCloceArr.forEach(element => {
           html += `
           <tr>
            <td>${timeClockWorker.entaryTime}</td>
            <td>${timeClockWorker.exitTime}</td>
            <td>${calculatHours(timeClockWorker)}</td>
           </tr>`     
            });
        html += `</table>`;
        

        if (!rootElement) throw new Error("no root elemant");

        rootElement.innerHTML = html;
       
    } catch (error) {
        console.error(error);
    }
}

function calculatHours(timeClockWorker: TimeClock){
    try {
        const start = Date.parse((timeClockWorker.entaryTime).valueOf() as string); //get tomestamp of entary time
        const end = Date.parse((timeClockWorker.exitTime).valueOf() as string); //get tomestamp of entary time
        let totalHours: number | undefined = NaN;
        if (start < end){
            totalHours = Math.floor((end - start)/1000/60/60); //mikkisecound
        }
        return totalHours;
    } catch (error) {
      console.error(error);  
    }
}