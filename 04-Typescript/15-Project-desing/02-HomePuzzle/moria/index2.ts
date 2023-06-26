const root = document.querySelector(`#root`) as HTMLElement;
function handleSubmit(event) {
    event.preventDefault();
    const EmployeeName = event.target.name.value;
    const EmployeeEnter = event.target.EnterTime.value;
    const EmployeeExit = event.target.ExitTime.value;
    // renderImages(EmployeeName, EmployeeEnter, EmployeeExit)
    const worker = new s(EmployeeName, EmployeeEnter, EmployeeExit);
    renderLoggedWorker(worker, root);
}
//-----------
class s {
    EmployeeName: string;
    EmployeeEnter: number;
    EmployeeExit: number;
    constructor(EmployeeName: string, EmployeeEnter: number, EmployeeExit: number) {
        this.EmployeeName = EmployeeName,
            this.EmployeeEnter = EmployeeEnter,
            this.EmployeeExit = EmployeeExit
    }
}
const sArr: s[] = []

function renderLoggedWorker(workers: s, rootElement: HTMLElement | null) {
    try {
        const html = `<h2>Hello ${workers.EmployeeName} you worked from ${workers.EmployeeEnter} until ${workers.EmployeeExit}</h2>`;
        if (!rootElement) throw new Error("no root element");


        root.innerHTML += html;
    } catch (error) {
        console.error(error)
    }
}


//----------
// function render(
//     EmployeeName: string,
//     EmployeeEnter: number,
//     EmployeeExit: number
// ) {
//     const root = document.querySelector(`#root`) as HTMLElement;
//     if (root) {

//         const html = `
//         <table>
//         <tr>
//             <td>First name</td>
//             <td>entrance time</td>
//             <td>leaving time </td>
//             </tr>
//             <td>${EmployeeName} </td>
//             <td>${EmployeeEnter}</td>
//             <td>${EmployeeExit} </td>
//             </tr>
//         </table>`;
//         // console.log(EmployeeEnter)
//         // console.log(EmployeeExit)
//         root.innerHTML += html;
//     }
// }
