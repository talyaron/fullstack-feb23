const employees: [] = [];
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
    constructor(public name:string, public date: string, public enter: string, public exit: string,) {
    //    this.name = activeUser.name

    }
}

class Employee {
    //id,name,timein,timeout,date
    id: number
    constructor(public name: string) {
        this.id = uid();


    }

}


// --- Controller

function writeEntrance() {
    const enter = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const tmp = new Date();
   
    var x = new EmployeeEntries( selectedUser.name,tmp.toLocaleDateString(), enter, "");
   console.log(x)
   employeeEntries.push(x)


}
function writeExit() {
    const exit = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    // console.log(exit)
    const tmp = new Date();
    console.log(employees.find(function (obj) { return obj == selectedUser; }));

  
    // console.log(z)
}

employees = [
    new Employee('Jack'),
    new Employee('Bob'),
    new Employee('Steve')
];
const activeUser = employees[0];
const worker1 = new Employee('John')
console.log(worker1)
employees.push(worker1);
const test: Employee = new Employee("Martin")
console.log(test)
employees.push(test);
console.dir(employees)


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

renderEmployees(employees, workersDiv);

function selected() {
    activeUser = document.getElementById("workSel");
    var selectedId = activeUser.options[activeUser.selectedIndex].id;
    selectedUser = employees.find(employee => employee.id === selectedId);
    console.log(selectedUser.id);
    return selectedUser;
}

