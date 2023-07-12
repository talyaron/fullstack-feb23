// # Goal: #
// Work Time clock.
// every worker, can set entrance time , and exit time.

// ## Levels ##
// 1) the system can show every workers entrance and exit times, in a table



// Entities : Hour
// Model

class Hour {
    id:string;
    constructor(public entrance:string, public exit:string){
        const entranceTime = this.convertTimeStringToMinutes(entrance);
        const exitime = this.convertTimeStringToMinutes(exit);
        const sumHours = exitime - entranceTime;
        this.id = this.convertMinutesToTimeString(sumHours)
    }

    convertTimeStringToMinutes(timeString: string):number{
        const [hours, minutes] = timeString.split(':');
        const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
        return totalMinutes;
    }

    convertMinutesToTimeString(minutes: number):string{
        const hours = Math.floor(minutes / 60).toString().padStart(2, "0");
        const mins = (minutes % 60).toString().padStart(2, "0");
        return `${hours}:${mins}`;
    }
}

const hoursArray :Hour[] = new Array;

// view
function handleClockTime(rootElement :HTMLElement | null){
    try {
        const html = `
        <div class="wrapper">
            <form onsubmit="handleClockSubmit(event)">
                <label for="entrance">Entrance time</label>
                <input type="time" name="entrance" id="entrance" placeholder="Entrance time">
                <label for="exit">Exit time</label>
                <input type="time" name="exit" id="exit" placeholder="Exit time">
                <button type="sumbit">Send</button>
            </form>
        </div>`;

        if(!rootElement) throw new Error ("No root element")
        rootElement.innerHTML = html;

    } catch (error) {
        console.error(error)
    }
}

handleClockTime(document.querySelector('#time'))

function renderTotalHours (totalHours:any){
    
    try {
        const totalHoursElement = document.querySelector("#total-hours") as HTMLDivElement;
        if(!totalHours) throw new Error('No event found')
        totalHoursElement.innerHTML = `<h2><b>Total hours worked: ${totalHours}</b></h2>`;
    
    } catch (error) {
        console.error(error)
    }
}

// controller
function handleClockSubmit(ev:any){
    ev.preventDefault()
    const numEntrance = ev.target.entrance.value;
    const numExit = ev.target.exit.value;

    const hour = new Hour(numEntrance, numExit);
    hoursArray.push(hour);

    const totalHoursWorked = hoursArray.reduce((total, hour) => total + parseInt(hour.id) , 0 );
    
    renderTotalHours(totalHoursWorked);
}
















