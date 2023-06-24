//create unice ID

const uid = function () {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

class WorKer {
    id: string;
    constructor(public fullName: string) {
        this.id = uid();
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
            
            const exitHoure = this.exit.getTime();
            const enterHour = this.enterance.getTime();
            console.log(exitHoure)
            if (!enterHour || !exitHoure)
        throw new Error("Missing enterance or exit");
        const dailyhours = (Math.abs(exitHoure - enterHour) / 360000);
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
    constructor(public worker: WorKer, public hoursD: HoursDaily) {}
}




function renderRegisterWorker(rootElement: HTMLElement | null) {
    try {
      const html = `
          <form onsubmit="handleRegisterWorker(event)">
              <label for="fullname">Full name</label>
              <input type="text" name="fullName" id='fullName' placeholder="full name" required>
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
  
      const worker = new WorKer(fullName);
  
      //add to model
      worKers.push(worker);
     
      
  
      
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
    if (rootDailyhours) rootDailyhours.innerHTML = dailyhours;
    
      
    } catch (error) {
      console.error(error);
    }
  }

  function renderCalculateDailyHours(rootElement: HTMLElement | null) {
    try {
      const html = `
      <form onsubmit="handleRegisterhours(event)">
      <label for="enterance">enterance</label>
      <input type="time" name="enterance" id="'enterance" required>
      <label for="exit">exit</label>
      <input type="time" name="exit" id="exit" required>
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