//create unice ID

const uid = function () {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

class WorKer {
    id: string;
    constructor(public fullName: string, public enterance: any, public exit: any) {
        this.id = uid();
    }

    calculateDailyHoures(): number| undefined{
        try {
            const enterHour = this.enterance
            const exitHour = this.exit
            if (!enterHour || !exitHour)
        throw new Error("Missing enterance or exit");
        const dailyhr = exitHour - enterHour;
        return dailyhr;
        } catch (error) {
            console.error(error);
            return undefined;  
        }
    }

//     calculatemonthlyHoures(): number| undefined{
//         try {
//             let totalm:number = 0;
//             totalm += this.dayTotal
            
//             if (!totalm)
//         throw new Error("Missing hours");
//         totalm = this.monthTotal
//         return totalm
        
//         } catch (error) {
//             console.error(error);
//             return undefined;  
//         }
//     }
// }
}

const worKers: WorKer[] = [];

function renderRegisterWorker(rootElement: HTMLElement | null) {
    try {
      const html = `
          <form onsubmit="handleRegisterUser(event)">
              <label for="fullname">Full name</label>
              <input type="text" name="fullName" id='fullName' placeholder="full name" required>
              <label for="enter">enter</label>
              <input type="time" name="enter" id="'enter" placeholder="last name" required>
              <label for="exit">exit</label>
              <input type="time" name="exit" id="exit" required>
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
      const enter = ev.target.enter.value;
      const exit = ev.target.exit.value;
  
      const worker = new WorKer(fullName, enter, exit);
  
      //add to model
      worKers.push(worker);
  
      //control->view
      
  
      console.log(fullName, enter, exit);
    } catch (error) {
      console.error(error);
    }
  }

  function

  renderRegisterWorker(document.querySelector("#register"));
