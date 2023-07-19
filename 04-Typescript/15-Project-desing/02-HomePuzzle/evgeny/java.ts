
// 1) the system can show every workers entrance and exit times, in a table
// 2) The system can log different users (use select input). the system can calculate the user monthly total hours
// 3) the user can see all workers times, serach for worker, and show each worker total times. the user could edit entrance details

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
class worker {
    id: string
    constructor(public name: string, public enterExit, public date, public time) {
        this.id = uid()
    }
    // date(){
    //    return new Date().toLocaleDateString()
    // }
    // time(){
    //     let time=new Date().getHours() + ":" + new Date().getMinutes() ;

    dateUpdate(day, month, year) {
        this.date = new Date(day, month, year)


    }
    timeUpdate(hour, min) {
        this.time = new Date().setUTCHours(hour,min);

    }
    handleBtnTime() {

        try {
            let time = document.querySelector(".workertime__time")


            time?.innerHTML = `
                    <form onsubmit="changeTime(event)">
                    
                    hour:<input type="text" name="newhour" style="width: 1rem;">
                    min:<input type="text" name="newmin" style="width: 1rem;">
                    <button >apply</button>
                    </form>
                    `



        } catch (error) {
            console.error(error)
        }
    }

}


renderLogs(document.querySelector(".wrapper"))
renderForm(document.querySelector(".wrapper"))


let workers: worker[] = []


function handleworker(ev) {

    ev.preventDefault()
    const workername = ev.target.workername.value
    const enterExit = ev.target.enterExit.value
    const date = new Date().toLocaleDateString()
    const time = new Date().getHours() + ":" + new Date().getMinutes()

    let newworker: worker = new worker(workername, enterExit, date, time)
    workers.push(newworker)
    renderworker(newworker)
}


function renderForm(rootElement) {
    try {
        const html = `
        <form onsubmit="handleworker(event)" >
        <input type="text" placeholder="worker name" name="workername">
        <select name="from" id="enterExit">
        <option value="enter">enter</option>
        <option value="exit">exit</option>
        </select>
        <button >submit</button>
        </form>
        
        `;
        
        rootElement.innerHTML += html;
        if (!rootElement) throw new Error("no root element");
    } catch (error) {
        console.error(error)
    }
}

function renderworker(worker: worker) {

    const workerlog: any = document.querySelector('.workerlog')

    const html = `
    <div class="workerlog__worker" id="${worker.id}">
        <div class="workername" >
      
            <p>worker:${worker.name}</p> 
        </div>
        <div class="workerdate">
            <button class="btn btn__date">edit</button>
           
            <p class="workerdate__date">date:${worker.date} </p>
        </div>
        <div class="workertime">
            <button class="btn btn__time" onclick="handleBtnTime(${worker.id})">edit2</button>
            <p class="workertime__time">time:${worker.time}</p>
        </div>
            <p>${worker.enterExit}</p>
        
    </div>`;

    workerlog?.innerHTML += html

}

function handleBtnTime(worker) {
    
    console.log(worker.id)
    
    try {
        let time = document.querySelector(`#${worker.id}`)
        

        time?.innerHTML = `
        <form onsubmit="changeTime(event)">
        
        hour:<input type="text" name="newhour" style="width: 1rem;">
        min:<input type="text" name="newmin" style="width: 1rem;">
        <button >apply</button>
        </form>
        `



    } catch (error) {
        console.error(error)
    }
}

function changeTime(ev) {
    let time = document.querySelector(".workertime__time")

    ev.preventDefault()
    const newmin = ev.target.newmin.value
    const newhour = ev.target.newhour.value
    let html = `
    <p class="workerdate__time">time:${newhour}:${newmin} </p>
    `
    time?.innerHTML = html

}

function renderLogs(rootElement) {
    try {
        const html = `
    <div class="workerlog">
        <div class="workerlog__info">
            <p>name</p> 
            <p>date</p>
            <p>time</p>
            <p>enter/exit</p>
            
        </div>
        
     
    </div>
    `;
        rootElement.innerHTML = html;
        if (!rootElement) throw new Error("no root element");

    } catch (error) {
        console.error(error)
    }
}




