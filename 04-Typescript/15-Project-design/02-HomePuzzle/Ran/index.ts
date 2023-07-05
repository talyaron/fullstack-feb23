// # Goal: #
// Work Time clock.
// every worker, can set entrance time , and exit time.

// ## Levels ##
// 1) the system can show every workers entrance and exit times, in a table
// 2) The system can log different users (use select input). the system can calculate the user monthly total hours
// 3) the user can see all workers times, serach for worker, and show each worker total times. the user could edit entrance details

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
class workers {
    id:string;
    constructor(public name:string) {
        this.id = uid();
    }
}
const workerss:workers[]=[
new workers("Ran yamin"),
new workers("lionel messi")
]

class Clock {
    constructor(public hours:number, public minutes:number, public seconds:number) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}

class EntExt {
    constructor (public Ent:Clock, public Ext:Clock){

    }
}
const EntExtt:EntExt[]=[]

function renderWorkerUser(rootElement: HTMLElement | null) {
        const html = `
        <form onsubmit="handleRegisterWorker(event)">
        <h2>Please enter your full name </h2>
        <select name="name" id="name">
        ${workerss.map((work:any) => {
            return `<option value="${work.id}">${work.name}</option>`
        
        })} 
       </select>  
      </form>`  
      
      rootElement.innerHTML= html;
 
}

renderWorkerUser(document.querySelector("#worker"))

    

