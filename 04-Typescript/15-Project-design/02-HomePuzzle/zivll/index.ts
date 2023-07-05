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
  return Math.round(Math.random() * 1000000).toString();
};

class Employee {
  id: string;
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
    public userId: string,
    public date?: string,
    public signIn?: string,
    public signOut?: string
  ) {}
}
const logsById: NewLog[] = [];
const user: User[] = [];
let userLogs: User[] = [];
const employeeLogs: User[] = [
  new User(employees[0].id, "1/6/2023", "8:00", "16:30"),
  new User(employees[1].id, "1/6/2023", "9:00", "16:50"),
  new User(employees[2].id, "1/6/2023", "9:10", "16:40"),
  new User(employees[3].id, "1/6/2023", "8:00", "17:30"),
  new User(employees[0].id, "2/6/2023", "8:00", "16:30"),
  new User(employees[1].id, "2/6/2023", "9:00", "16:50"),
  new User(employees[2].id, "2/6/2023", "9:10", "16:40"),
  new User(employees[3].id, "2/6/2023", "8:00", "16:30"),
  new User(employees[0].id, "3/6/2023", "8:00", "16:30"),
  new User(employees[1].id, "3/6/2023", "9:00", "16:50"),
  new User(employees[2].id, "3/6/2023", "8:00", "16:30"),
  new User(employees[3].id, "3/6/2023", "8:00", "16:30"),
  new User(employees[0].id, "4/6/2023", "8:00", "16:30"),
  new User(employees[1].id, "4/6/2023", "9:00", "16:50"),
  new User(employees[2].id, "4/6/2023", "8:00", "16:30"),
  new User(employees[3].id, "4/6/2023", "8:00", "16:30"),
  new User(employees[0].id, "5/6/2023", "8:00", "16:30"),
  new User(employees[1].id, "5/6/2023", "9:00", "16:50"),
  new User(employees[2].id, "5/6/2023", "8:00", "16:30"),
  new User(employees[3].id, "5/6/2023", "8:00", "16:30"),
  new User(employees[0].id, "6/6/2023", "8:00", "16:30"),
  new User(employees[1].id, "6/6/2023", "9:00", "16:50"),
  new User(employees[2].id, "6/6/2023", "8:00", "16:30"),
  new User(employees[3].id, "6/6/2023", "8:00", "16:30"),
  new User(employees[0].id, "7/6/2023", "8:00", "16:30"),
  new User(employees[1].id, "7/6/2023", "8:00", "16:30"),
  new User(employees[2].id, "7/6/2023", "8:00", "16:30"),
  new User(employees[3].id, "7/6/2023", "8:00", "16:30"),
  new User(employees[0].id, "8/6/2023", "8:00", "16:30"),
  new User(employees[1].id, "8/6/2023", "8:00", "16:30"),
  new User(employees[2].id, "8/6/2023", "8:00", "16:30"),
  new User(employees[3].id, "8/6/2023", "8:00", "16:30"),
  new User(employees[0].id, "9/6/2023", "8:00", "16:30"),
  new User(employees[1].id, "9/6/2023", "8:00", "16:30"),
  new User(employees[2].id, "9/6/2023", "8:00", "16:30"),
  new User(employees[3].id, "9/6/2023", "8:00", "16:30"),
  new User(employees[0].id, "10/6/2023", "8:00", "16:30"),
  new User(employees[1].id, "10/6/2023", "8:00", "16:30"),
  new User(employees[2].id, "10/6/2023", "8:00", "16:30"),
  new User(employees[3].id, "10/6/2023", "8:00", "16:30"),
  new User(employees[0].id, "11/6/2023", "8:00", "16:30"),
  new User(employees[1].id, "11/6/2023", "8:00", "16:30"),
  new User(employees[2].id, "11/6/2023", "8:00", "16:30"),
  new User(employees[3].id, "11/6/2023", "8:00", "16:30"),
];
function hundleEmployeeSelected(ev: any) {
  console.dir(ev);
  let html: string = `<tr>
  <th>תאריך</th>
  <th>שעת כניסה</th>
  <th>שעת יציאה</th>
</tr>
</thead>`;
  const employeeId = ev.target.form[0].value;
  employeeLogs.forEach((employee) => {
    if (employee.userId === employeeId) {
      html += `<tr><td>תאריך: ${employee.date}</td><td class="flex-td"><p>${employee.signIn} </p><button class="edit-log" onclick="editLoginButton(event)">עריכה</button></td><td class="flex-td"><p>${employee.signOut}</p> <button class="edit-log" onclick="editLogoutButton(event)">עריכה</button></td></tr>`;
    }
    const rootTable = document.querySelector(`#employeeTimeClockTable`);
    if (!rootTable) throw new Error(`table div is missing`);
    rootTable.innerHTML = `<table><thead>
  ${html}</table>`;
  });
}

function renderEmployees(rootElement: HTMLElement | null) {
  const html = `<form onsubmit="handleSubmit(event)"><label for="username">יש לבחור עובד מהרשימה</label><br>
  <select name="username" id="username" onchange="switchingUser()">${employees.map(
    (employee) => {
      return `<option value="${employee.id}">${employee.userName}</option>`;
    }
  )}</select><br><label for="date">כאן ניתן לבחור תאריך ספציפי</label><br><input type="date" name="date" id="date" onchange="switchingUser(), selectingDate(event)" /><br><input type="submit" value="הצג נוכחות" onclick="hundleEmployeeSelected(event)"> </form>
  `;
  if (!rootElement) throw new Error(`missing HTML container`);
  rootElement.innerHTML = html;
}
function renderLogInButton(rootElement: HTMLElement | null) {
  // const html = `<button class="btn-log" id="new-log" onclick="hundleUsersLogin(event)">החתמת כניסה</button>`;
  // if (!rootElement) throw new Error(`rootElement is missing`);
  // rootElement.innerHTML = html;
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
  const button = document.querySelector(`button`);
  if (!button) throw new Error(`no buttons on document`);
  button.disabled = true;
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
function changingDateToisplay(dateFromBrowser) {
  return `${dateFromBrowser.target.valueAsDate.getDate()}/${
    dateFromBrowser.target.valueAsDate.getMonth() + 1
  }/${dateFromBrowser.target.valueAsDate.getFullYear()}`;
}
function switchingUser(ev) {
  renderLogInButton(document.querySelector(`.new-log`));
}
function handleSubmit(ev) {
  ev.preventDefault();

  console.dir(ev);
}

function selectingDate(date) {
  const employeeId = date.target.form[0].value;
  console.dir(employeeId);
  let html: string = `<tr>
  <th>תאריך</th>
  <th>שעת כניסה</th>
  <th>שעת יציאה</th>
</tr>
</thead>`;
  const newDate = changingDateToisplay(date);
  employeeLogs.forEach((employee) => {
    if (employee.userId === employeeId && newDate === employee.date) {
      html += `<tr><td>תאריך: ${employee.date}</td><td class="flex-td"><p>${employee.signIn} </p><button class="edit-log" onclick="editLoginButton(event)">עריכה</button>
      </td><td class="flex-td"><p>${employee.signOut} </p><button class="edit-log" onclick="editLogoutButton(event)">עריכה</button>
      </td></tr>`;
    }
  });
  const rootTable = document.querySelector(`#employeeTimeClockTable`);
  if (!rootTable) throw new Error(`table div is missing`);
  rootTable.innerHTML = `<table><thead>
  ${html}</table>`;
}

function editLoginButton(currentLog) {
  try {
    console.dir(currentLog);
    const date =
      currentLog.target.parentElement.parentElement.children[0].textContent.replace(
        "תאריך: ",
        ""
      );
    const newLog: string | null = `${prompt(`מה השעה החדשה שברצונך לעדכן?`)} `;
    currentLog.target.previousSibling.firstChild.data = newLog;
    const employeeId =
      currentLog.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement.children[2].firstChild[0].value;
    console.dir(employeeId);
    employeeLogs.forEach((employee) => {
      if (employee.userId === employeeId && date === employee.date) {
        employee.signIn = newLog;
        console.dir(employee.signIn);
      }
    });
  } catch (error) {
    console.error(error);
    return;
  }
}
function editLogoutButton(currentLog) {
  try {
    console.dir(currentLog);
    const date =
      currentLog.target.parentElement.parentElement.children[0].textContent.replace(
        "תאריך: ",
        ""
      );

    const newLog: string | null = `${prompt(`מה השעה החדשה שברצונך לעדכן?`)} `;
    currentLog.target.previousElementSibling.firstChild.data = newLog;
    const employeeId =
      currentLog.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement.children[2].firstChild[0].value;
    console.dir(employeeId);
    employeeLogs.forEach((employee) => {
      if (employee.userId === employeeId && date === employee.date) {
        employee.signOut = newLog;
        console.dir(employee.signOut);
      }
    });
  } catch (error) {
    console.error(error);
    return;
  }
}

// const uid = function () {
//   return Math.round(Math.random() * 1000000);
// };

// class Employee {
//   id: number;
//   constructor(public userName: string) {
//     this.id = uid();
//   }
// }
// const employees: Employee[] = [
//   new Employee(`זיו ללונק`),
//   new Employee(`סיגל ברדה`),
//   new Employee(`אבי ארונסון`),
//   new Employee(`נטלי אוחיון`),
// ];

// renderEmployees(document.querySelector(`#selectEmployee`));
// renderLogInButton(document.querySelector(`.new-log`));

// class NewLog {
//   constructor(
//     public userId: number,
//     public date?: string,
//     public signIn?: string,
//     public signOut?: string
//   ) {}
// }
// class User {
//   constructor(
//     public userId: number,
//     public date?: string,
//     public signIn?: string,
//     public signOut?: string
//   ) {}
// }
// const logsById: NewLog[] = [];
// const user: User[] = [];
// let userLogs: User[] = [];
// function hundleEmployeeSelected(ev: any) {
//   console.dir(ev);
//   const employeeId = ev.target.form[0].value;
//   // const date = ev.target.value;
//   logsById.forEach((employee) => {
//     if (employee.userId === employeeId)
//       user.push(
//         new User(
//           employee.userId,
//           employee.date,
//           employee.signIn,
//           employee.signOut
//         )
//       );
//   });

//   user.forEach((workday) => {
//     if (workday.signIn === undefined) {
//       delete workday.signIn;
//     }
//   });
//   user.forEach((workday) => {
//     if (workday.signOut === undefined) {
//       delete workday.signOut;
//     }
//   });

//   for (let i = 1; i < user.length; i++) {
//     let tempUsers;
//     if (user[i].date === user[i - 1].date) {
//       tempUsers = Object.assign(user[i - 1], user[i]);
//       userLogs.push(tempUsers);
//       // delete user[i], user[i - 1];
//     } else {
//       userLogs.push(user[i]);
//     }
//   }
//   for (let i = 0; i < userLogs.length; i++) {
//     if (userLogs[i] === userLogs[i - 1]) {
//       delete userLogs[i];
//     }
//   }
//   console.dir(userLogs);

//   let html = `<thead>
//     <tr>
//       <th>תאריך</th>
//       <th>שעת כניסה</th>
//       <th>שעת יציאה</th>
//     </tr>
//   </thead>`;

//   userLogs.forEach((workday) => {
//     html += `<tr>
//   <td>תאריך: ${workday.date}</td>
//   <td>שעת כניסה: ${workday.signIn}</td>
//   <td>שעת יציאה: ${workday.signOut}</td>
// </tr>`;
//   });

//   const rootTable = document.querySelector(`#employeeTimeClockTable`);
//   if (!rootTable) throw new Error(`table div is missing`);
//   rootTable.innerHTML = `<table>${html}</table>`;
//   debugger;
//   userLogs.length = 0;
// }
// function renderEmployees(rootElement: HTMLElement | null) {
//   const html = `<form onsubmit="handleSubmit(event)"><label for="username">יש לבחור עובד מהרשימה</label><br>
//   <select name="username" id="username" onchange="switchingUser()">${employees.map(
//     (employee) => {
//       return `<option value="${employee.id}">${employee.userName}</option>`;
//     }
//   )}</select><br><label for="date">כאן ניתן לבחור תאריך ספציפי</label><br><input type="date" name="date" id="date" onchange="switchingUser()" /><br><input type="submit" value="הצג נוכחות" onclick="hundleEmployeeSelected(event)"> </form>
//   `;
//   // <button onclick="hundleEmployeeSelected(event)" value="">הצג נוכחות</button>
//   if (!rootElement) throw new Error(`missing HTML container`);
//   rootElement.innerHTML = html;
// }
// function renderLogInButton(rootElement: HTMLElement | null) {
//   const html = `<button class="btn-log" id="new-log" onclick="hundleUsersLogin(event)">החתמת כניסה</button>`;
//   if (!rootElement) throw new Error(`rootElement is missing`);
//   rootElement.innerHTML = html;
// }
// function renderLogoutButton(rootElement: HTMLElement | null) {
//   const html = `<button class="btn-log" onclick="hundleUsersLogOut(event)">החתמת יציאה</button>`;
//   if (!rootElement) throw new Error(`rootElement is missing`);
//   rootElement.innerHTML = html;
// }
// function hundleUsersLogin(ev: any) {
//   // console.log(ev);
//   const userId: number =
//     ev.target.parentElement.parentElement.children[2].children[0].children[2]
//       .value;
//   let date: string | undefined;
//   if (
//     ev.target.parentElement.parentElement.children[2].children[0].children[6]
//       .value === ""
//   ) {
//     date = currentDateToDispaly();
//   } else {
//     date =
//       ev.target.parentElement.parentElement.children[2].children[0].children[6]
//         .value;
//   }
//   const signIn = currentTimeToDispaly();
//   logsById.push({ userId, date, signIn });
//   renderLogoutButton(document.querySelector(".new-log"));
//   console.log(date);
// }
// function hundleUsersLogOut(ev: any) {
//   const userId: number =
//     ev.target.parentElement.parentElement.children[2].children[0].children[2]
//       .value;
//   let date: string | undefined;
//   if (
//     ev.target.parentElement.parentElement.children[2].children[0].children[6]
//       .value === ""
//   ) {
//     date = currentDateToDispaly();
//   } else {
//     date =
//       ev.target.parentElement.parentElement.children[2].children[0].children[6]
//         .value;
//   }
//   const signOut = currentTimeToDispaly();
//   logsById.push({ userId, date, signOut });
//   ev.target.classList.add("clicked");
//   const button = document.querySelector(`button`);
//   if (!button) throw new Error(`no buttons on document`);
//   button.disabled = true;
// }

// function currentTimeToDispaly() {
//   try {
//     if (new Date().getMinutes() < 10) {
//       return `${new Date().getHours()}:0${new Date().getMinutes()}`;
//     }
//     return `${new Date().getHours()}:${new Date().getMinutes()}`;
//   } catch (error) {
//     console.error(error);
//   }
// }
// function currentDateToDispaly() {
//   try {
//     return `${new Date().getDate()}/${
//       new Date().getMonth() + 1
//     }/${new Date().getFullYear()}`;
//   } catch (error) {
//     console.error(error);
//   }
// }

// function switchingUser(ev) {
//   renderLogInButton(document.querySelector(`.new-log`));
// }
// function handleSubmit(ev) {
//   ev.preventDefault();

//   console.dir(ev);
// }
