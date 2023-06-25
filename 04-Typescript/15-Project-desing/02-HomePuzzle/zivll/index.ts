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
class User {
  constructor(
    public userId: number,
    public date?: string,
    public signIn?: string,
    public signOut?: string
  ) {}
}
const logsById: NewLog[] = [];
const user: User[] = [];

function hundleEmployeeSelected(ev: any) {
  console.dir(ev);
  const employeeId = ev.target.form[0].value;
  // const date = ev.target.value;
  logsById.forEach((employee) => {
    if (employee.userId === employeeId)
      user.push(
        new User(
          employee.userId,
          employee.date,
          employee.signIn,
          employee.signOut
        )
      );
  });
  debugger;

  user.forEach((workday) => {
    if (workday.signIn === undefined) {
      delete workday.signIn;
    }
  });
  user.forEach((workday) => {
    if (workday.signOut === undefined) {
      delete workday.signOut;
    }
  });
  let html = `<thead>
    <tr>
      <th>תאריך</th>
      <th>שעת כניסה</th>
      <th>שעת יציאה</th>
    </tr>
  </thead>`;

  user.forEach((workday) => {
    html += `<tr>
  <td>תאריך: ${workday.date}</td>
  <td>שעת כניסה: ${workday.signIn}</td>
  <td>שעת יציאה: ${workday.signOut}</td>
</tr>`;
  });

  const rootTable = document.querySelector(`#employeeTimeClockTable`);
  if (!rootTable) throw new Error(`table div is missing`);
  rootTable.innerHTML = `<table>${html}</table>`;
}
function renderEmployees(rootElement: HTMLElement | null) {
  const html = `<form onsubmit="handleSubmit(event)"><label for="username">יש לבחור עובד מהרשימה</label><br>
  <select name="username" id="username" onchange="switchingUser()">${employees.map(
    (employee) => {
      return `<option value="${employee.id}">${employee.userName}</option>`;
    }
  )}</select><br><label for="date">כאן ניתן לבחור תאריך ספציפי</label><br><input type="date" name="date" id="date" onchange="switchingUser()" /><br><input type="submit" value="הצג נוכחות" onclick="hundleEmployeeSelected(event)"> </form>
  `;
  // <button onclick="hundleEmployeeSelected(event)" value="">הצג נוכחות</button>
  if (!rootElement) throw new Error(`missing HTML container`);
  rootElement.innerHTML = html;
}
function renderLogInButton(rootElement: HTMLElement | null) {
  const html = `<button class="btn-log" id="new-log" onclick="hundleUsersLogin(event)">החתמת כניסה</button>`;
  if (!rootElement) throw new Error(`rootElement is missing`);
  rootElement.innerHTML = html;
}
function renderLogoutButton(rootElement: HTMLElement | null) {
  const html = `<button class="btn-log" onclick="hundleUsersLogOut(event)">החתמת יציאה</button>`;
  if (!rootElement) throw new Error(`rootElement is missing`);
  rootElement.innerHTML = html;
}
function hundleUsersLogin(ev: any) {
  // console.log(ev);
  const userId: number =
    ev.target.parentElement.parentElement.children[2].children[0].children[2]
      .value;
  let date: string | undefined;
  if (
    ev.target.parentElement.parentElement.children[2].children[0].children[6]
      .value === ""
  ) {
    date = currentDateToDispaly();
  } else {
    date =
      ev.target.parentElement.parentElement.children[2].children[0].children[6]
        .value;
  }
  const signIn = currentTimeToDispaly();
  logsById.push({ userId, date, signIn });
  renderLogoutButton(document.querySelector(".new-log"));
  console.log(date);
}
function hundleUsersLogOut(ev: any) {
  const userId: number =
    ev.target.parentElement.parentElement.children[2].children[0].children[2]
      .value;
  let date: string | undefined;
  if (
    ev.target.parentElement.parentElement.children[2].children[0].children[6]
      .value === ""
  ) {
    date = currentDateToDispaly();
  } else {
    date =
      ev.target.parentElement.parentElement.children[2].children[0].children[6]
        .value;
  }
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
  renderLogInButton(document.querySelector(`.new-log`));
}
function handleSubmit(ev) {
  ev.preventDefault();

  console.dir(ev);
}
