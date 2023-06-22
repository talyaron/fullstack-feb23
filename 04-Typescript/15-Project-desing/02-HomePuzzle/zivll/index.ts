// # Goal: #
// Work Time clock.
// every worker, can set entrance time , and exit time.

// ## Levels ##
// 1) the system can show every workers entrance and exit times, in a table
// 2) The system can log different users (use select input). the system can calculate the user monthly total hours
// 3) the user can see all workers times, serach for worker, and show each worker total times. the user could edit entrance details

// <select name="username" id="username">
//           <option value="userId"></option>
//         </select>
const uid = function () {
  return Math.round(Math.random() * 1000000);
};

class Employee {
  id: number;
  constructor(public userName: string) {
    this.id = uid();
  }
}
const employees: Employee[] = [
  new Employee(`זיו ללונק`),
  new Employee(`סיגל ברדה`),
  new Employee(`אבי ארונסון`),
  new Employee(`נטלי אוחיון`),
];

renderEmployees(document.querySelector(`#selectEmployee`));
renderLogInButton(document.querySelector(`.new-log`));

class NewLog {
  constructor(
    public userId: number,
    public date?: string,
    public signIn?: string,
    public signOut?: string
  ) {}
}
const logsById: NewLog[] = [];

function hundleEmployeeSelected(ev: any) {
  const employeeIdSelectedId = ev.target.previousSibling.value;
  console.dir(employeeIdSelectedId);
}
function renderEmployees(rootElement: HTMLElement | null) {
  const html = `<label for="username">יש לבחור עובד מהרשימה</label><br>
  <select name="username" id="username">${employees.map((employee) => {
    return `<option value="${employee.id}">${employee.userName}</option>`;
  })}</select><button onclick="hundleEmployeeSelected(event)" value="">הצג נוכחות</button>`;
  if (!rootElement) throw new Error(`missing HTML container`);
  rootElement.innerHTML = html;
}
function renderLogoutButton(rootElement: HTMLElement | null) {
  const html = `<button class="btn-log" onclick="hundleUsersLogOut(event)">החתמת יציאה</button>`;
  if (!rootElement) throw new Error(`rootElement is missing`);
  rootElement.innerHTML = html;
}
function renderLogInButton(rootElement: HTMLElement | null) {
  const html = `<button class="btn-log" id="new-log" onclick="hundleUsersLog(event)">החתמת כניסה</button>`;
  if (!rootElement) throw new Error(`rootElement is missing`);
  rootElement.innerHTML = html;
}
function hundleUsersLog(ev: any) {
  const userId: number = ev.target.parentElement.children[2].children[2].value;
  const date = currentDateToDispaly();
  const signIn = currentTimeToDispaly();
  const signOut = currentTimeToDispaly();
  logsById.push({ userId, date, signIn });
  console.log(logsById);
  renderLogoutButton(document.querySelector(".new-log"));
}
function hundleUsersLogOut(ev: any) {
  const userId: number = ev.target.parentElement.children[2].children[2].value;
  const date = currentDateToDispaly();
  const signIn = currentTimeToDispaly();
  const signOut = currentTimeToDispaly();
  logsById.push({ userId, date, signOut });
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
