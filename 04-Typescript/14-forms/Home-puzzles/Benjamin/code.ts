const root = document.querySelector("#root");

class Employees {
    constructor(public fname: string, public lname: string, public role: string, public img: string) { }
}
const employeesArray: Employees[] = []
const emp = document.querySelector("#emp") as HTMLDivElement

function handleSubmit(ev: any) {
    ev.preventDefault();
    const fname = ev.target.fname.value
    const lname = ev.target.lname.value
    const role = ev.target.role.value
    const image = ev.target.image.value
    const newEmployee = new Employees(fname, lname, role, image)
    employeesArray.push(newEmployee)
    console.log(fname,lname,role,image)
    renderEmlpoyees(employeesArray)
}
function renderEmlpoyees(array: Employees[]) {
    let employeesHtml = `<div class="wrapper">`
    employeesHtml += array.map(user => {
        return `<div class="emp"><div class="fname">${user.fname}</div><div class="lname">${user.lname}</div><div class="role">${user.role}</div><img class="img" src="${user.img}" alt=""></div>`
    }).join(" ");
    if (root) {
        employeesHtml += `</div>`
        console.log(employeesHtml)
        root.innerHTML = employeesHtml
    }
}
