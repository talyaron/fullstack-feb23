
function handleSubmit(event) {
    event.preventDefault();
    const EmployeeName = event.target.name.value;
    const EmployeeEnter = event.target.EnterTime.value;
    const EmployeeExit = event.target.ExitTime.value;
    renderImages(EmployeeName, EmployeeEnter, EmployeeExit);
}
class s {
    constructor(public EmployeeName: string, public EmployeeEnter: number, public EmployeeExit: number)

}
const sArr: s[] = []

function renderImages(
    EmployeeName: string,
    EmployeeEnter: number,
    EmployeeExit: number
) {
    const root = document.querySelector(`#root`) as HTMLElement;
    if (root) {

        const html = `
        <table>
        <tr>
            <td>First name</td>
            <td>entrance time</td>
            <td>leaving time </td>
            </tr>
            <td>${EmployeeName} </td>
            <td>${EmployeeEnter}</td>
            <td>${EmployeeExit} </td>
            </tr>
        </table>`;
        // console.log(EmployeeEnter)
        // console.log(EmployeeExit)
        root.innerHTML += html;
    }
}
