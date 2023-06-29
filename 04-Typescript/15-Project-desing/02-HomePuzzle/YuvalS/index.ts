//create unice ID

const uid = function () {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

class WorKer {
    constructor(public fullName: string, public workerNumber:number) {
        
    }
}
const worKers: WorKer[] = [];
worKers.push(new WorKer("Yuval Shtaingos", 1))
worKers.push(new WorKer("Adi Shetach", 2))

    



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

class WorkerHours {
    constructor(public worker: WorKer, public hoursD: HoursDaily, public month: number) {}
  

    }


const workerHours: WorkerHours[] = [];


function renderRegisterWorker(rootElement: HTMLElement | null) {
    try {
      const html = `
          <form onsubmit="handleRegisterWorker(event)">
          <h2>Register</h2>
              <label for="fullName">Full name</label>
              <input type="text" name="fullName" id='fullName' placeholder="full Name" required>
              <label for="workerNumber">Worker Number</label>
              <input type="text" name="workerNumber" id='workerNumber' placeholder="Worker Number" required>
            
        </select>
              <input type="submit" value="Register First Time">
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

  function renderChooseWorker(rootElement: HTMLElement | null) {
    try {
      const html = `
          <form onsubmit="handleChooseWorker(event)">
          <h2>Worker</h2>
          <label for="Worker">Worker</label>
          <input type="text" name="Worker" id="Worker" placeholder="Your Full Name" required>
              
              
          </input>
              <input type="submit" value="Log-in">
          </form>`;
  
      if (!rootElement) throw new Error("No root element");
  
      rootElement.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }


function handleChooseWorker(ev: any) {
    try {
      ev.preventDefault();
      let workerChosen = ev.target.Worker.value;

      const workerLg :WorKer|undefined= worKers.find(function (worker) {
        return String(worker.fullName) === String(workerChosen);  });
    if (!workerLg){
        alert('Employee NOt Exists');
        workerChosen=null;
        throw new Error("Employee NOt Exists")}
      
      const rootWorkerChosen: any = document.querySelector("#greeting");
    if (rootWorkerChosen) rootWorkerChosen.innerHTML = `<h3>Hello ${workerChosen} please enter your working hours today.</h3>`;
      

    
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

  function handleRegisterhours(ev: any) {
    try {
      ev.preventDefault();
      const enterance = ev.target.enterance.value;
      const exit = new Date (ev.target.exit.value);
      if (!enterance || !exit)
      throw new Error("Missing Hours");
      const month = (exit.getMonth() + 1);
      console.log(month)
  
      const hoursDay = new HoursDaily(enterance, exit);
      hoursD.push(hoursDay);
      const dailyhours = hoursDay.calculateDailyHoures();
      const rootDailyhours: any = document.querySelector("#dailyhours");
    if (rootDailyhours) rootDailyhours.innerHTML = `<h1>You Worked Today: ${dailyhours} hours</h1>`;
    
      
    } catch (error) {
      console.error(error);
    }
  }

  
  

 
  renderRegisterWorker(document.querySelector("#register"));
  renderChooseWorker(document.querySelector("#login"));
  renderCalculateDailyHours(document.querySelector("#calculate"));