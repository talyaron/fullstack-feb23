const employees: Employee[] = [];
const selectedUser;
const employeeEntries: string[] = []



const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const date = new Date();


console.log(date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));

// ---- MODEL -----
class EmployeeEntries {
    //name
    //date
    //enter
    //exit
    constructor(public name: string, public date: string, public enter: string, public exit: string,) {
        //    this.name = activeUser.name

    }
}

class Employee {
    //id,name,timein,timeout,date
    id: string

    constructor(public name: string, public entries: {}) {
        this.id = uid();


    }

}


// --- Controller

function writeEntrance() {
    try {
        const enter = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        const tmp = new Date();
    
        var x = new EmployeeEntries(selectedUser.name, tmp.toLocaleDateString(), enter, "");
        // console.log(x)
        var index = employees.findIndex(p => p.name === selectedUser.name);
        employees[index].entries.push({ date: x.date, enter});
        var findDate = selectedUser.entries.find(f => f.date ===x.date)
        console.log(findDate);
        renderEmployeesWorkHours()
        // console.log(employees)
        
    } catch (error) {
        console.error(error)
    }
 
}





function writeExit() {
    const exit = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    // console.log(exit)
    const tmp = new Date();
    console.log(employees.find(function (obj) { return obj == selectedUser; }));
    var index = employees.findIndex(p => p.name === selectedUser.name);
    var dateIndex = employees[index].entries.findIndex(p => p.date === tmp.toLocaleDateString())
    employees[index].entries[dateIndex].exit = exit;
    renderEmployeesWorkHours()

    // employees[index].entries.exit = exit;


    // console.log(z)
}

employees = [
    new Employee('Jack', [{ date: '22.6.2023', enter: '16:00', exit: '23:00' }]),
    new Employee('Bob', [{ date: '24.6.2023', enter: '15:30', exit: '23:00' }]),
    new Employee('Steve', [{ date: '24.6.2023', enter: '20:14', exit: '23:00' }])
    new Employee('Ralph', [
        { date: "22.6.2023", enter: '16:00', exit: "22:00" },
        { date: "23.6.2023", enter: '16:00', exit: "22:00" }]
    }];)
    
];
selectedUser = employees[0];
// const worker1 = new Employee('John')
// console.log(worker1)
// employees.push(worker1);
// const test: Employee = new Employee("Martin")
// console.log(test)
// employees.push(test);
// console.dir(employees)


// employees.push(new Employee(name,timeIn,timeOut))
// if(!employees) throw new Error('no array')

// View
function renderEmployees(emp: Employee, root: any) {
    try {
        const html = `
        <label for="workers">Choose a worker: </label>
        <select id="workSel" name="workers" onchange="selected()">
        ${emp.map(employee => {
            return `<option id="${employee.id}"value="${employee.name}">${employee.name}</option>`
        })}
        
         </select>   <button onclick="writeEntrance()">Enter</button>
         <button onclick="writeExit()">Exit</button>
        `
        root.innerHTML = html
    } catch (error) {
        console.error(error)
    }

}
const workersDiv = document.querySelector('#workers')
const renderHours = document.querySelector('#renderHours')

renderEmployees(employees, workersDiv);

function selected() {
    activeUser = document.getElementById("workSel");
    var selectedId = activeUser.options[activeUser.selectedIndex].id;
    selectedUser = employees.find(employee => employee.id === selectedId);
    console.log(selectedUser.id);
    renderEmployeesWorkHours();

    return selectedUser;
}

function renderEmployeesWorkHours() {
    let html = "<table>"
    html+="<tr><th>Name</th><th>Date</th><th>Enter time:</th><th>Exit time:</th></tr>"
    html += selectedUser.entries.map(entries => {
        return (`
       <tr>
       <td>${selectedUser.name}</td>
       <td>${entries.date}</td>
       <td>${entries.enter}</td>
       <td>${entries.exit}</td>
       </tr>
       `) }).join('') // add closing parenthesis and join
           html += "</table>"

        console.log(html)
        renderHours.innerHTML = html;

    }
