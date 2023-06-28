//create unice ID

const uid = function () {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

class WorKer {
    constructor(public fullName: string, public workerNumber:number) {
        
    }
}
const worKers: WorKer[] = [];


class HoursDaily{
    id: string;
    constructor(public enterance: any, public exit: any) {
        this.id = uid();

    }
    calculateDailyHoures(): number| undefined{
        try {
            
            const  exitHour  = new Date (this.exit);
            const enterHour = new Date (this.enterance);
            const exitHourMiliS =  exitHour.getTime();
            const enterHourMiliS = enterHour.getTime();
            console.log(exitHourMiliS, enterHourMiliS)
            if (!enterHour || !exitHour)
        throw new Error("Missing enterance or exit");
        const dailyhours:number = ((exitHourMiliS - enterHourMiliS) / 3600000);
        console.log(dailyhours)
        return dailyhours;
        
        } catch (error) {
            console.error(error);
            return undefined;  
        }
    }
    
}

const hoursD: HoursDaily[] = [];

//     join classes

class WorkerHoursDaily {
    constructor(public worker: WorKer, public hoursD: any) {}
  

    }


const workerHours: WorkerHoursDaily[] = [];


function renderRegisterWorker(rootElement: HTMLElement | null) {
    try {
      const html = `
          <form onsubmit="handleRegisterWorker(event)">
              <label for="fullName">Full name</label>
              <input type="text" name="fullName" id='fullName' placeholder="full Name" required>
              <label for="workerNumber">Worker Number</label>
              <input type="text" name="workerNumber" id='workerNumber' placeholder="Worker Number" required>
            
        </select>
              <input type="submit" value="Register">
          </form>`;
  
      if (!rootElement) throw new Error("No root element");
  
      rootElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }

  // view->model controlers
function handleRegisterWorker(ev: any) {
    try {
      ev.preventDefault();
      const fullName = ev.target.fullName.value;
      const workerNumber = ev.target.workerNumber.value;

      if (!fullName || !workerNumber)
      throw new Error("Couldnt find THE WORKER");

      const worker = new WorKer(fullName, workerNumber);
  
      //add to model
      worKers.push(worker);
      console.log(worKers)
     
      
  
      
    } catch (error) {
      console.error(error);
    }
  }

  function handleRegisterhours(ev: any) {
    try {
      ev.preventDefault();
      const enterance = ev.target.enterance.value;
      const exit = ev.target.exit.value;
      if (!enterance || !exit)
      throw new Error("Missing Hours");
  
      const hoursDay = new HoursDaily(enterance, exit);
      hoursD.push(hoursDay);
      const dailyhours = hoursDay.calculateDailyHoures();
      const rootDailyhours: any = document.querySelector("#dailyhours");
    if (rootDailyhours) rootDailyhours.innerHTML = `<h1>You Worked Today: ${dailyhours} hours</h1>`;
    
      
    } catch (error) {
      console.error(error);
    }
  }

  function renderCalculateDailyHours(rootElement: HTMLElement | null) {
    try {
      const html = `
      <form onsubmit="handleRegisterhours(event)">
      <label for="enterance">enterance</label>
      <input type="datetime-local" name="enterance" id="'enterance" required>
      <label for="exit">exit</label>
      <input type="datetime-local" name="exit" id="exit" required>
      <input type="submit" value="Calculate">
  </form>`;
  
      if (!rootElement) throw new Error("No root element");
  
      rootElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
  

 
  renderRegisterWorker(document.querySelector("#register"));
  renderCalculateDailyHours(document.querySelector("#calculate"));