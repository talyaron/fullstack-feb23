const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

class Employee {
    id: string;
    constructor(public firstName: string, public lastName: string) {
        this.id = uid()
    }
}
const tal = new Employee("Tal", "Chay")

const employees: Employee[] = [
    new Employee("Eli", "Bin"), tal
]
class Entrace {
    date: Date
    constructor(public employee: Employee) {
        this.date = new Date()
    }
}
const ent1 = new Entrace(tal)
const ent2 = new Entrace(tal)
const ent3 = new Entrace(tal)
ent1.date = new Date('2023-12-17T03:22:00')
ent2.date = new Date('2023-12-10T10:58:00')
ent3.date = new Date('2023-12-11T08:00:00')

const entraces: Entrace[] = [
    ent1, ent2, ent3
]



class Exit {

    date: Date
    constructor(public employee: Employee) {
        this.date = new Date()
    }
}

const ext1 = new Entrace(tal)
const ext2 = new Entrace(tal)
const ext3 = new Entrace(tal)
ext1.date = new Date('2023-12-17T22:24:00')
ext2.date = new Date('2023-12-17T18:04:00')
ext3.date = new Date('2023-12-17T12:00:00')

const exits: Exit[] = [
    ext1, ext2, ext3
]

function renderRegisterEmployee(rootElement: HTMLElement | null) {
    try {
        const html = `
      <h3>If this is your first time here, register: </h3>
      <form onsubmit="handleSignUser(event)">
          <input type="text" name="firstName" placeholder="first name" required>
          <input type="text" name="lastName" placeholder="last name" required>
          <input type="submit" value="Register">
      </form>
      <form onsubmit="handleExistUser(event)">
      <input type="submit" value="I'm already in">
  </form>`;

        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

function addEmployeeToEmployees(firstName: string, lastName: string) {
    const newEmployee = new Employee(firstName, lastName)
    employees.push(newEmployee)
}

function renderAttendanceEmployee(rootElement: HTMLElement | null) {
    try {
        const html = `  <h3>If you've been here before start here:</h3>
        <form onsubmit="handleSetEntrance(event)">
          <select name="fullName" id ="fullName">
          ${employees.map((employee) => {
            return `<option value = "${employee.id}">${employee.firstName} ${employee.lastName}</option>`
        })} </select>
          <input type="submit" value="Entrace">
      </form>
      <form onsubmit="handleSetExit(event)">
          <select name="fullName" id ="fullName">
          ${employees.map((employee) => {
            return `<option value = "${employee.id}">${employee.firstName} ${employee.lastName}</option>`
        })} </select>
          <input type="submit" value="Exit">
      </form>
      `
        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html
    } catch (error) {
        console.error(error);
    }
}



function renderShowAttendanceTable(rootElement: HTMLElement | null) {
    try {
        const html = ` <h3>To show your work clock time </br> choose your name and press 'Show'.</h3>
        <form onsubmit="handleShowAttendanceTable(event)">
          <select name="fullName" id ="fullName">
            ${employees.map((employee) => {
            return `<option value = "${employee.id}">${employee.firstName} ${employee.lastName}</option>`

        })} </select>
          <input type="submit" value="Show">
        </form>
        <h3>To show work clock time </br> of all employees press 'Show All'.</h3>
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

function renderAttendanceTable(employee: Employee, rootElement: HTMLElement | null) {
    try {
        const currentUserEntraces = entraces.filter((entrace) => entrace.employee.id === employee.id)
        const currentUserExits = exits.filter((exit) => exit.employee.id === employee.id)
        let html = `<h3>Hello ${employee.firstName} ${employee.lastName}. Here your work clock time:</h3>
        <table>
         <tr>
           <th>Entrace</th>
           <th>Exit</th>
         </tr>`
        currentUserEntraces.forEach((entrace, index) =>
            html += ` <tr>
         <td>${entrace.date.toLocaleDateString()} ${entrace.date.toLocaleTimeString()}</td>
         <td>${currentUserExits[index].date.toLocaleDateString()} ${currentUserExits[index].date.toLocaleTimeString()}</td>
       </tr>`
        )
        html += `</table>`
        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html

    } catch (error) {
        console.error(error);

    }
}

function renderAttendanceTableOfAll(rootElement: HTMLElement | null) {
    try {
        let html = `<table>
        <tr>
          <th>Name</th>
          <th>Entrace</th>
          <th>Exit</th>
        </tr>`
        employees.forEach((employee) => {
            const currentUserEntraces = entraces.filter((entrace) => entrace.employee.id === employee.id)
            const currentUserExits = exits.filter((exit) => exit.employee.id === employee.id)
            currentUserEntraces.forEach((entrace, index) =>
                html += ` <tr>
         <td> ${employee.firstName} ${employee.lastName} </td>
         <td>${entrace.date.toLocaleDateString()} ${entrace.date.toLocaleTimeString()}</td>
         <td>${currentUserExits[index].date.toLocaleDateString()} ${currentUserExits[index].date.toLocaleTimeString()}</td>
       </tr>`
            )

        })
        html += `</table>`
        if (!rootElement) throw new Error("No root element");

        rootElement.innerHTML = html

    } catch (error) {
        console.error(error);

    }
}

function renderMonthlyHours(rootElement: HTMLElement | null) {
    try {
        const html = `<h3>To show your monthly attendance hours </br> choose your name and the desired month </br>  and press 'Show'.</h3>
    <form onsubmit="handleCalaulateMonthlyHours(event)">
      <select name="fullName" id ="fullName">
        ${employees.map((employee) => {
            return `<option value = "${employee.id}">${employee.firstName} ${employee.lastName}</option>`
        })} </select>
    <select name ="month" id ="month">
             <option> 1 </option>
             <option> 2 </option>
             <option> 3 </option>
             <option> 4 </option>
             <option> 5 </option>
             <option> 6 </option>
             <option> 7 </option>
             <option> 8 </option>
             <option> 9 </option>
             <option> 10 </option>
             <option> 11 </option>
             <option> 12 </option>
             </select>
        <input type = "submit" value = "Show" >
            </form>`
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
        addEmployeeToEmployees(firstname, lastname)
        renderAttendanceEmployee(document.querySelector("#attendance"))
        renderShowAttendanceTable(document.querySelector("#tableButtons"))
        renderMonthlyHours(document.querySelector("#monthlyHoursButtons"))


        console.log(employees);
    } catch (error) {
        console.error(error);
    }
}
function handleExistUser(ev: any) {
    try {
        ev.preventDefault();
        renderAttendanceEmployee(document.querySelector("#attendance"))
        renderShowAttendanceTable(document.querySelector("#tableButtons"))
        renderMonthlyHours(document.querySelector("#monthlyHoursButtons"))


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
        if (!employee) throw new Error("couldn't find this employee")
        const entrace = new Entrace(employee)
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
        if (!employee) throw new Error("couldn't find this employee")
        const exit = new Exit(employee)
        exits.push(exit)
        console.log(exits);

    } catch (error) {
        console.error(error);

    }
}

function handleShowAttendanceTable(ev: any) {
    try {
        ev.preventDefault();
        const thisEmployee = ev.target.fullName.value;
        const employee = employees.find((employee) => employee.id === thisEmployee)
        if (!employee) throw new Error("couldn't find this employee")

        renderAttendanceTable(employee, document.querySelector("#table"))
    } catch (error) {
        console.error(error);

    }
}

function handleShowTableOfAll(ev: any) {
    try {
        ev.preventDefault();
        renderAttendanceTableOfAll(document.querySelector("#table"))
    } catch (error) {
        console.error(error);

    }
}

function handleCalaulateMonthlyHours(ev: any) {
    try {
        ev.preventDefault();
        const thisEmployee = ev.target.fullName.value;
        const month = ev.target.month.value;
        const employee = employees.find((employee) => employee.id === thisEmployee)
        if (!employee) throw new Error("couldn't find this employee")
        const currentUserEntraces = entraces.filter((entrace) => entrace.employee.id === employee.id)
        const currentUserMonthlyEntraces = currentUserEntraces.filter((entrace) => (entrace.date.getMonth() + 1) == month)
        const currentUserExits = exits.filter((exit) => exit.employee.id === employee.id)
        const currentUserMonthlyExits = currentUserExits.filter((exit) => (exit.date.getMonth() + 1) == month)
        let sumMonthlyHours = 0
        let sumMonthlyMinutes = 0
        currentUserMonthlyEntraces.forEach((entrace, index) => {
            sumMonthlyHours += currentUserMonthlyExits[index].date.getHours() - entrace.date.getHours()
            {
                if (currentUserMonthlyExits[index].date.getMinutes() < entrace.date.getMinutes()) {
                    sumMonthlyMinutes += 60 - (entrace.date.getMinutes() - currentUserMonthlyExits[index].date.getMinutes())
                    sumMonthlyHours--
                } else {
                    sumMonthlyMinutes += currentUserMonthlyExits[index].date.getMinutes() - entrace.date.getMinutes()
                }
            }
        })
        const monthlyAttendance: any = document.querySelector("#monthlyHours")
        if (monthlyAttendance)
            if (sumMonthlyMinutes < 10) {
                monthlyAttendance.innerHTML = `Your working hours in this month are: ${sumMonthlyHours}:0${sumMonthlyMinutes}`
            } else {
                monthlyAttendance.innerHTML = `Your working hours in this month are: ${sumMonthlyHours}:${sumMonthlyMinutes}`
            }


        console.log(sumMonthlyHours);
        console.log(sumMonthlyMinutes);




    } catch (error) {
        console.error(error);

    }
}
renderRegisterEmployee(document.querySelector("#register"))




const eeee = new Date()
const currentTime = eeee.toLocaleTimeString()
const currentDate = eeee.toLocaleDateString()
console.log(currentTime);
console.log(currentDate);

console.log(employees)
