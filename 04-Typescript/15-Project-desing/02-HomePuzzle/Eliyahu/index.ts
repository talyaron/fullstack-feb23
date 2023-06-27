const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

class Employee {
    id: string;
    constructor(public firstName: string, public lastName: string, public houresWork: number) {
        this.id = uid()
    }
}

const employees: Employee[] = [
    new Employee("Eli", "Bin", 0),
    new Employee("Yoni", "Jim", 0),
    new Employee("Sara", "Levi", 0)
]

class Entrace {

    constructor(public employee: Employee, public month: number, public date: number, public hours: number, public minutes: number) {
    }
}

const entraces: Entrace[] = []


class Exit {

    constructor(public employee: Employee, public month: number, public date: number, public hours: number, public minutes: number) {
    }
}

const exits: Exit[] = []

function renderRegisterEmployee(rootElement: HTMLElement | null) {
    try {
        const html = `
      <h2>If this is your first time here, register: </h2>
      <form onsubmit="handleSignUser(event)">
          <input type="text" name="firstName" placeholder="first name" required>
          <input type="text" name="lastName" placeholder="last name" required>
          <input type="submit" value="Register">
      </form>`;

        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

function renderEntraceEmployee(rootElement: HTMLElement | null) {
    try {
        const html = `  <h2>If you've been here before start here:</h2>
        <form onsubmit="handleSetEntrance(event)">
          <select name="fullName" id ="fullName">
          ${employees.map((employee) => {
            return `<option value = "${employee.id}">${employee.firstName} ${employee.lastName}</option>`
        })} </select>
          <input type="submit" value="Entrace">
      </form>`
        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html
    } catch (error) {
        console.error(error);
    }
}

function renderExitEmployee(rootElement: HTMLElement | null) {
    try {
        const html = `<form onsubmit="handleSetExit(event)">
          <select name="fullName" id ="fullName">
          ${employees.map((employee) => {
            return `<option value = "${employee.id}">${employee.firstName} ${employee.lastName}</option>`
        })} </select>
          <input type="submit" value="Exit">
      </form>`
        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html
    } catch (error) {
        console.error(error);
    }
}

function renderShowEntracesExitsTable(rootElement: HTMLElement | null) {
    try {
        const html = ` <h2>To show your work clock time choose your name and press 'Show'.</h2>
        <form onsubmit="handleShowEntracesExitsTable(event)">
          <select name="fullName" id ="fullName">
            ${employees.map((employee) => {
              return `<option value = "${employee.id}">${employee.firstName} ${employee.lastName}</option>`
          })} </select>
          <input type="submit" value="Show">
        </form>
        <h2>To show work clock time of all employees press 'Show All'.
        <form onsubmit="handleShowTableOfAll(event)">
        <input type="submit" value="Show All">
        </form>
        `
        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html
    } catch (error) {
        console.error(error);
    }
}

function renderEntracesExitsTable (employee:Employee,rootElement: HTMLElement | null){
    try {
        const thisEntraces = entraces.filter ((entrace)=>entrace.employee.id===employee.id)
        const thisExits = exits.filter ((exit)=>exit.employee.id===employee.id)
        let html = `<h3>Hello ${employee.firstName} ${employee.lastName}. Here your work clock time:</h3>
        <table>
         <tr>
           <th>Entrace</th>
           <th>Exit</th>
         </tr>`
         thisEntraces.forEach((entrace, index)=> 
         html += ` <tr>
         <td>${entrace.date}/${entrace.month} ${entrace.hours}:${entrace.minutes}</td>
         <td>${thisExits[index].date}/${thisExits[index].month} ${thisExits[index].hours}:${thisExits[index].minutes}</td>
       </tr>`
       )
         html +=`</table>`
        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html
 
    } catch (error) {
        console.error(error);
        
    }
}

function renderEntracesExitsTableOfAll (rootElement: HTMLElement | null){
    try {
        let html=`<table>
        <tr>
          <th>Name</th>
          <th>Entrace</th>
          <th>Exit</th>
        </tr>`
        employees.forEach((employee)=>{
        const thisEntraces = entraces.filter ((entrace)=>entrace.employee.id===employee.id)
        const thisExits = exits.filter ((exit)=>exit.employee.id===employee.id)
         thisEntraces.forEach((entrace, index)=> 
         html += ` <tr>
         <td> ${employee.firstName} ${employee.lastName} </td>
         <td>${entrace.date}/${entrace.month} ${entrace.hours}:${entrace.minutes}</td>
         <td>${thisExits[index].date}/${thisExits[index].month} ${thisExits[index].hours}:${thisExits[index].minutes}</td>
       </tr>`
       )
         
        })
        html +=`</table>`
        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html
 
    } catch (error) {
        console.error(error);
        
    }
}

function handleSignUser(ev: any) {
    try {
        ev.preventDefault();
        const firstname = ev.target.firstName.value
        const lastname = ev.target.lastName.value
        const employee = new Employee(firstname, lastname, 0)
        employees.push(employee)
        console.log(employees);
    } catch (error) {
        console.error(error);
    }
}

function handleSetEntrance(ev: any) {
    try {
        ev.preventDefault();
        const thisEmployee = ev.target.fullName.value;
        const employee = employees.find((employee) => employee.id === thisEmployee)
        const month = new Date().getMonth() + 1;
        const date = new Date().getDate();
        const hour = new Date().getHours();
        const minute = new Date().getMinutes();
        if (!employee) throw new Error("couldn't find this employee")
        const entrace = new Entrace(employee, month, date, hour, minute)
        entraces.push(entrace)
        console.log(entraces);

    } catch (error) {
        console.error(error);

    }
}


function handleSetExit(ev: any) {
    try {
        ev.preventDefault();
        const thisEmployee = ev.target.fullName.value;
        const employee = employees.find((employee) => employee.id === thisEmployee)
        const month = new Date().getMonth() + 1;
        const date = new Date().getDate();
        const hour = new Date().getHours();
        const minute = new Date().getMinutes();
        if (!employee) throw new Error("couldn't find this employee")
        const exit = new Exit(employee, month, date, hour, minute)
        exits.push(exit)
        console.log(exits);

    } catch (error) {
        console.error(error);

    }
}

function handleShowEntracesExitsTable(ev:any){
    try {
        ev.preventDefault();
        const thisEmployee = ev.target.fullName.value;
        const employee = employees.find((employee) => employee.id === thisEmployee)
        if (!employee) throw new Error("couldn't find this employee")
        renderEntracesExitsTable(employee,document.querySelector("#table2"))
    } catch (error) {
        console.error(error);
        
    }
} 

function handleShowTableOfAll(ev:any){
    try {
        ev.preventDefault();
        renderEntracesExitsTableOfAll(document.querySelector( "#table2"))
    } catch (error) {
        console.error(error);
        
    }
}

renderRegisterEmployee(document.querySelector("#register"))
renderEntraceEmployee(document.querySelector("#entrace"))
renderExitEmployee(document.querySelector("#exit"))
renderShowEntracesExitsTable(document.querySelector("#table"))






console.log(employees)
