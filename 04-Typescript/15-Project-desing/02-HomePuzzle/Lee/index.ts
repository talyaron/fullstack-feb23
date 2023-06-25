const uid = function () {
    return Math.round(Math.random() * 1000000)
}


class Employee {
    id: number;
    constructor(public userName: string) {
        this.id = uid();
      }
}

const employees: Employee[] = [
    new Employee("Lee Dekel"),
    new Employee("May Cohen"),
    new Employee("Adi Yaish"),
    new Employee("Tal Winter")
]

renderEmployees(document.querySelector("#employee"));
renderLogInButton(document.querySelector(".addLog"));

class AddLog {
    constructor(
        public userId: number,
        public date?: string,
        public signIn?: string,
        public signOut?: string

    ) {}
}
class User {
    constructor(
        public userId: number,
        public date?: string,
        public signIn?: string,
        public signOut?: string

    ){}

}

const logsById: AddLog[] = [];
const user: User[] = [];



function hundleEmployeeSelected (ev: any) {
    
    try {
        const employeeId = ev.target.parentElement.children[2].value;
        logsById.forEach((employee) => {
            if (employee.userId === employeeId)
            new User(
                employee.userId,
                employee.date,
                employee.signIn,
                employee.signOut
            );
        })

       
    } catch (error) {
        console.error(error)
    }


console.dir(user);


const html = `<table>
<thead>
  <tr>
    <th>Sunday</th>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</tbody>
</table>
`;

const rootTable = document.querySelector(`#employeeTotal`);
if (!rootTable) throw new Error(`table div is missing`);
rootTable.innerHTML = html;
}

function renderEmployees(rootElement: HTMLElement | null) {
    const html = `<label for="username">Choose Employee</label><br>
    <select name= "username" id="username" onchange="switchingUser()">${employees.map(
        (employee) => {
            return `<option value="${employee.id}">${employee.userName}</option>`;
        }
    )}
    </select><br><label for="date">Date</label><br><input type="date" name="date" id="date" onchange="switchingUser()" /><br><button onclick="hundleEmployeeSelected(event)" value="">Set date</button>`;
    if (!rootElement) throw new Error(`missing HTML container`);
    rootElement.innerHTML = html;
  }
  function renderLogInButton(rootElement: HTMLElement | null) {
    const html =  `<button class="btn-log" id="addLog" onclick="hundleUsersLogin(event)">Clock in</button>`;
    if (!rootElement) throw new Error(`rootElement is missing`);
    rootElement.innerHTML = html;
  }
  function renderLogoutButton(rootElement: HTMLElement | null) {
    const html = `<button class="btn-log" onclick="hundleUsersLogOut(event)">Clock out</button>`;
    if (!rootElement) throw new Error(`rootElement is missing`);
    rootElement.innerHTML = html;
  }

  function handleUsersLogin(ev: any) {
    const userId: number =
    ev.target.parentElement.parentElement.children[2].children[2].value;
    const date = currentDateToDispaly();
    const signIn = currentTimeToDispaly();
    logsById.push({userId, date, signIn});
  }
  function hundleUsersLogOut(ev: any) {
    const userId: number =
      ev.target.parentElement.parentElement.children[2].children[2].value;
    const date = currentDateToDispaly();
    const signOut = currentTimeToDispaly();
    logsById.push({ userId, date, signOut });
    ev.target.classList.add("clicked");
  }
  function currentTimeToDispaly() {
    try {
      if (new Date().getMinutes() < 10) {
        return `${new Date().getHours()}:0${new Date().getMinutes()}`;
      }
      return `${new Date().getHours()}:${new Date().getMinutes()}`;
    } catch (error) {
      console.error(error);
    }
  }
  function currentDateToDispaly() {
    try {
      return `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`;
    } catch (error) {
      console.error(error);
    }
  }
  
  function switchingUser(ev) {
    renderLogInButton(document.querySelector(`.addLog`));
  }