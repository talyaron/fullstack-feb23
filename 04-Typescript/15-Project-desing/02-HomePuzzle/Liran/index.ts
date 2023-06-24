let workerId = 0;
class Employee {
    id: number;
    constructor(public firstName: string, public lastName: string) {
        this.id = workerId++;
    }
};

class CheckInOut {
    constructor(public employee: Employee, public day: string, public start: string, public end: string | null) { }

};

const w1 = new Employee("AVIV", "FREWT");
const w2 = new Employee("ELI", "GORDON");
const w3 = new Employee("AVIVA", "SGTR");
const w4 = new Employee("RAMI", "GORDON");
const w5 = new Employee("ALIZA", "GKIU");
const w6 = new Employee("VIKA", "GRE");
const w7 = new Employee("ADI", "SAF");
const w8 = new Employee("RON", "CLFB");
const w9 = new Employee("HAVIV", "GORDON");
const w10 = new Employee("ELI", "GFDSGF");
const w11 = new Employee("ELI", "WQE");

const hoursDB: CheckInOut[] = [];
const employees: Employee[] = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11];
let workers: Employee[] = [];

for (let i = 0; i < 28; i++) {
    employees.forEach(elem => {
        const checkInOut = new CheckInOut(elem, `${i + 1 < 10 ? "0" + (i + 1) : i + 1}.1.23`, "07:00", "17:00");
        hoursDB.push(checkInOut);
    })
}

for (let i = 0; i < 28; i++) {
    employees.forEach(elem => {
        const checkInOut = new CheckInOut(elem, `${i + 1 < 10 ? "0" + (i + 1) : i + 1}.6.23`, "07:00", "17:00");
        hoursDB.push(checkInOut);
    })
}


for (let i = 0; i < 5; i++) {
    const checkInOut = new CheckInOut(employees[i+1], `${i + 1 < 10 ? "0" + (i + 1) : i + 1}.3.23`, "07:00", "16:25");
    hoursDB.push(checkInOut);
}


let selectedWorker: Employee;
/** render function **/
function renderLoggedEmplyoee(
    employee: Employee,
    rootElement: HTMLElement | null
) {
    try {
        const html = `<h2>Hello ${employee.firstName}</h2>
        <form onclick="handleSign(event)">
        <input type="button" id="checkIn" value="Check In">
        <input type="button" id="CheckOut" value="Check Out">
        <input type="button" id="Monthlyhours" value="Calculate Monthly Hours">
    </form>`

        if (!rootElement) throw new Error("no root element");

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function renderMain(rootElement: HTMLElement | null) {
    try {
        const html = `<h2>${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}</h2>
        <form onclick="handleCheckInOut(event)">
        <input type="button" id="NewEmployee" value="New Employee">
        <input type="button" id="CheckInOut" value="Check InOut">
        <input type="button" id="admin" value="Administrator">
    </form>`;
        if (!rootElement) throw new Error("no root element");

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function renderEmployeeList(rootElement: HTMLElement | null, hide: boolean) {
    try {
        let cntEmployees = 1;
        let html;
        if (hide) {
            html = ``;
        }
        else {

            html = `<form onsubmit="handleSelectEmployee(event)">
              <select id="employeeList">
              ${employees.map((employee) => {
                return `<option name="Ename" value="${cntEmployees++}">${employee.firstName} ${employee.lastName}</option>`;
            })}
                </select>
                <input type="submit" value="Sign">
              </form>`;
        }

        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function renderAdmin(rootElement: HTMLElement | null, hide: boolean) {
    try {
        if (!rootElement) throw new Error("No root element");
        let html;
        if (hide) {
            html = ``;
        }
        else {
            html = `<form onsubmit="handleFillter(event)">
                    <h3>Search</h3>
                  <label for="firstName">First name</label>
                  <input type="text" name="sfirstName" id='sfirstName' placeholder="first name">
                  <label for="lastName">Last name</label>
                  <input type="text" name="slastName" id="'slastName" placeholder="last name">
                  <label for="id">Worker ID</label>
                  <input type="text" name="sworkerId" id="'sworkerId" placeholder="worker Id">
                  <label for="month">Month</label>
                  <input type="text" name="smonth" id="'smonth" placeholder="Month">
                  <input type="submit" value="Filter">
              </form>`;
        }

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function renderSearch(rootElement: HTMLElement | null, firstName: string | null, lastName: string | null, id: number, month: string | null, hide: boolean) {
    try {
        if (!rootElement) throw new Error("No root element");
        let html = ``;
        if (!hide) {
            let fName = "first name";
            let lName = "last name";
            let wId: number | null = null;

            if ((firstName !== "" && lastName !== "") || !(isNaN(id))) {
                const worker = employees.find(elem => (elem.firstName == firstName && elem.lastName == lastName) || elem.id == id);
                if (worker === undefined) {
                    alert("Worker not found");
                    renderTable(document.querySelector("#table"), null, null, null, null, true);

                }
                else {
                    fName = worker.firstName;
                    lName = worker.lastName;
                    wId = worker.id;
                    renderTable(document.querySelector("#table"), null, null, wId, month, false);
                }
            }
            else if (firstName !== "" && firstName !== null) {
                let length = workers.length
                for (let i = 0; i < length; i++)workers.pop();
                employees.forEach(elem => {
                    if (elem.firstName == firstName)
                        workers.push(elem);
                });
                renderTable(document.querySelector("#table"), firstName.toUpperCase(), null, null, null, false);
            }
            else if (lastName !== "" && lastName !== null) {
                let length = workers.length
                for (let i = 0; i < length; i++)workers.pop();
                employees.forEach(elem => {
                    if (elem.lastName == lastName)
                        workers.push(elem);
                });
                renderTable(document.querySelector("#table"), null, lastName.toUpperCase(), null, null, false);
            }
            else if (month) {
                renderTable(document.querySelector("#table"), null, null, null, month, false);
            }

            html += `<form onsubmit="handleUpdate(event)">
                      <label for="firstName">First name</label>
                      <input type="text" name="ufirstName" id="ufirstName" placeholder="${fName}">
                      <label for="lastName">Last name</label>
                      <input type="text" name="ulastName" id="ulastName" placeholder="${lName}">
                      <label for="id">Worker ID</label>
                      <input type="text" readOnly name="uworkerId" id="uworkerId" value="${wId}">
                      <input type="submit" value="Update">
                  </form>`;

        }

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function renderTable(rootElement: HTMLElement | null, firstName: string | null, lastName: string | null, id: number | null, month: string | null, hide: boolean) {
    try {

        if (!rootElement) throw new Error("No root element");
        let html = ``;
        let worker: Employee | undefined;
        
        if (!hide) {
            if (id === null && month === null) {
                html = `<h2>Employees List</h2>
                     <table style="width:75%">
                     <tr>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Emplyoee ID</th>
                     </tr>`;

                workers.forEach(elem => {
                    if ((elem.firstName == firstName && lastName == null) || (firstName == null && elem.lastName == lastName)) {
                        html += `<tr>
                          <th>${elem.firstName}</th>
                          <th>${elem.lastName}</th>
                          <th>${elem.id}</th>
                        </tr>`
                    }
                })
            }
            else if (firstName === null && lastName === null && id === null && month) {
                if (hoursDB !== null) {
                    html = `<h2>Employee working hours</h2>
                     <table style="width:75%">
                     <tr>
                     <th>Date</th>
                     <th>Name</th>
                     <th>Check In</th>
                     <th>Check Out</th>
                     </tr>`;
                    hoursDB.forEach(elem => {
                        const fullDate = elem.day.split(`.`)
                        if (fullDate[1] == month) {
                            html += `<tr>
                             <th>${elem.day}</th>
                             <th>${elem.employee.firstName + " " + elem.employee.lastName}</th>
                             <th>${elem.start}</th>
                             <th>${elem.end}</th>
                           </tr>`
                        }
                    })
                }
            }
            else {
                worker = employees.find(elem => elem.id == id);
                if (worker !== undefined) {
                    html = `<h2>Employee working hours</h2>
                     <table style="width:75%">
                     <tr>
                     <th>Date</th>
                     <th>Check In</th>
                     <th>Check Out</th>
                     </tr>`;

                    if (month) {
                        hoursDB.forEach(elem => {
                            const monthIndx = elem.day.split(`.`)
                            if (elem.employee.id == id && monthIndx[1] == month) {
                                html += `<tr>
                              <th>${elem.day}</th>
                              <th>${elem.start}</th>
                              <th>${elem.end}</th>
                            </tr>`
                            }
                        })

                    }
                    else {
                        hoursDB.forEach(elem => {
                            if (elem.employee.id == id) {
                                html += `<tr>
                              <th>${elem.day}</th>
                              <th>${elem.start}</th>
                              <th>${elem.end}</th>
                            </tr>`
                            }
                        })

                    }
                    debugger;
                    const totalMonthHours = calculateMHours(worker,Number(month))
                    html += `</table>
                            <h4>Total monthly working hours: ${Math.floor(totalMonthHours/60)}:${Math.floor(totalMonthHours%60)}`
                }
            }
        }
        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}
function renderRegisterEmployee(rootElement: HTMLElement | null, hide: boolean) {
    try {
        let html;
        if (hide) {
            html = ``;
        }
        else {
            html = `<form onsubmit="handleRegisterEmployee(event)">
                  <label for="firstName">First name</label>
                  <input type="text" name="firstName" id='firstName' placeholder="first name" required>
                  <label for="lastName">Last name</label>
                  <input type="text" name="lastName" id="'lastName" placeholder="last name" required>
                  <input type="submit" value="Register">
              </form>`;
        }

        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function renderCheckInOut(rootElement: HTMLElement | null) {
    try {

        const html = `<form onclick="handleSign(event)">
        <input type="button" id="checkIn" value="Check In">
        <input type="button" id="CheckOut" value="Check Out">
    </form>`;
        // <form onclick="handleSign(event)">
        //       <input type="button" id="checkIn" value="Check In">
        //       <input type="button" id="checkOut" value="Check Out">
        //   </form>`;

        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

/** general function **/
function calculateMHours(worker: Employee, month:Number ) {
    let sumHours = 0;
    debugger;
    hoursDB.forEach(elem => {
        if (worker.id === elem.employee.id) {
            const workDate = elem.day.split('.')
            const workMonth = workDate[1];
            if (elem.start !== null && elem.end !== null && month.toString() == workMonth) {
                const sTime = elem.start.split(':');
                const eTime = elem.end.split(':');
                const hDiff = Math.abs(Number(eTime[0]) - Number(sTime[0]));
                const mDiff = Math.abs(Number(eTime[1]) - Number(sTime[1]));
                sumHours += (Math.floor(hDiff*60 ) + Math.floor((60 % hDiff)) + mDiff);
            }
        }
    })
    return sumHours;
}

/** hundle function **/
function handleRegisterEmployee(ev: any) {
    try {
        ev.preventDefault();
        const firstName: string = ev.target.firstName.value.toUpperCase();
        const lastName: string = ev.target.lastName.value.toUpperCase();
        if (employees.length > 0) {
            employees.forEach(employee => {
                if (firstName == employee.firstName && lastName == employee.lastName) throw new Error("Name already exist in the system")
            })
        }
        const employee = new Employee(firstName, lastName);

        //add to model
        employees.push(employee);

        //control->view
        renderEmployeeList(document.querySelector("#employeesList"), false)
        //renderLoggedEmplyoee(employee, document.querySelector("#register"));

        console.log(firstName, lastName);
    } catch (error) {
        console.error(error);
    }
}

function handleUpdate(ev: any) {
    try {
        ev.preventDefault();

        const firstName: string = ev.target.ufirstName.value.toUpperCase();
        const lastName: string = ev.target.ulastName.value.toUpperCase();
        const id: number = Number(ev.target.uworkerId.value);
        const workerToUpdate = employees.findIndex(elem => elem.id === id)
        if (firstName !== "") {
            employees[workerToUpdate].firstName = firstName;
        }
        if (lastName !== "") {
            employees[workerToUpdate].lastName = lastName;
        }
        alert("Worker updated")
    } catch (error) {
        console.error(error);
    }
}

function handleFillter(ev: any) {
    try {
        ev.preventDefault();

        const firstName: string = ev.target.sfirstName.value.toUpperCase();
        const lastName: string = ev.target.slastName.value.toUpperCase();
        const id: number = ev.target.sworkerId.value !== "" ? Number(ev.target.sworkerId.value) : NaN;
        const month = ev.target.smonth.value;

        if (firstName || lastName || !(isNaN(id)) || month) {
            renderSearch(document.querySelector("#update"), firstName, lastName, id, month, false);
        }

        renderRegisterEmployee(document.querySelector("#register"), true);
        renderEmployeeList(document.querySelector("#employeesList"), false);
    } catch (error) {
        console.error(error);
    }
}

function handleSign(ev: any) {
    try {
        ev.preventDefault();
        const action = ev.target.value;
        const tempEmp = hoursDB.find(elem => elem.employee.id === selectedWorker.id);
        if (action === "Check In") {
            if (tempEmp !== undefined) {
                alert("Already checked in for today");

            }
            else {


                const day = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;
                const start = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
                const pStart = start.split(`:`)

                pStart.forEach(element => {
                    if (Number(element) < 10) element = "0" + element;
                });
                const newSign = new CheckInOut(selectedWorker, day, start, null);
                hoursDB.push(newSign);
                alert(`Checked In: ${pStart[0]}:${pStart[1]}:${pStart[2]}`);
                renderRegisterEmployee(document.querySelector("#register"), false);
                renderEmployeeList(document.querySelector("#employeesList"), true);
            }
        }
        else if (action === "Check Out") {
            if (tempEmp === undefined) alert("Didn't checked in for today");
            else if (tempEmp?.end !== null) {
                alert("Already checked out for today");
            }
            else {

                const empIndx = hoursDB.findIndex(elem => elem.employee.id === selectedWorker.id);
                const end = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
                const pend = end.split(`:`)
                pend.forEach(element => {
                    if (Number(element) < 10) element = "0" + element;
                });
                hoursDB[empIndx].end = end;
                alert(`Checked Out: ${pend[0]}:${pend[1]}:${pend[2]}`);
            }
        }
        else {
            if (tempEmp?.end !== null) {
                const res = calculateMHours(selectedWorker,new Date().getMonth() + 1);
                const hours = Math.floor(res / 60);
                const minutes = res % 60;
                alert(`Hi ${selectedWorker.firstName} you worked ${hours}:${minutes} hours this month`)
            }
        }
        renderRegisterEmployee(document.querySelector("#register"), true);
        renderEmployeeList(document.querySelector("#employeesList"), false);
    } catch (error) {
        console.error(error);
    }
}

function handleCheckInOut(ev: any) {
    try {
        ev.preventDefault();
        console.dir(ev);
        const action = ev.target.id;
        if (action === "NewEmployee") {
            renderRegisterEmployee(document.querySelector("#register"), false);
            renderEmployeeList(document.querySelector("#employeesList"), true);
            renderAdmin(document.querySelector("#administrator"), true)
            renderTable(document.querySelector("#table"), null, null, null, null, true);

        }
        else if (action === "CheckInOut") {
            {
                if (employees.length < 1) alert("NO Emplyoees");
            }
            renderRegisterEmployee(document.querySelector("#register"), true);
            renderEmployeeList(document.querySelector("#employeesList"), false);
            renderAdmin(document.querySelector("#administrator"), true)
            renderTable(document.querySelector("#table"), null, null, null, null, true);

        }
        else {

            renderRegisterEmployee(document.querySelector("#register"), true);
            renderEmployeeList(document.querySelector("#employeesList"), true);
            renderAdmin(document.querySelector("#administrator"), false)
        }
    } catch (error) {
        console.error(error);
    }
}

function handleSelectEmployee(ev: any) {
    try {
        ev.preventDefault();
        var html: any = document.getElementById("employeeList");
        if (!html) throw new Error("No list");
        var text = html.options[html.selectedIndex].text;
        renderEmployeeList(document.querySelector("#employeesList"), true);
        renderRegisterEmployee(document.querySelector("#register"), true)

        const workerName = text.split(' ');
        const worker: Employee | undefined = employees.find(elem => elem.firstName == workerName[0] && elem.lastName == workerName[1]);
        if (worker === undefined) throw new Error("No Employee");
        selectedWorker = worker;
        renderLoggedEmplyoee(worker, document.querySelector("#register"))
    } catch (error) {
        console.error(error);
    }
}


renderMain(document.querySelector("#main"));
