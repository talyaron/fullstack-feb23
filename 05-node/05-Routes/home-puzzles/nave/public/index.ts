
interface Task {
    title: string;
  description: string;
  status: string;
    id?:string;
  }
  getTask();

  async function handleAddTask(event: any) {
    try {
      event.preventDefault();
      const title = event.target.title.value;
      const description = event.target.description.value;
      const status = event.target.status.value;
      if (!title || !description || !status) {
        throw new Error('Please complete all fields');
      }
  
      const tasks: Task = { title, description, status };
  
      const response = await fetch('/API/task/add-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tasks)
      });
  
      const result = await response.json();
      console.log(result);
  
  
    } catch (error) {
      console.error(error);
    }
  
  }
  async function getTask() {
    try {
      const response = await fetch('/API/task/get-task')
      const results = await response.json();
      const { tasks } = results;
      if (!Array.isArray(tasks)) throw new Error("tasks are not array");
      console.log(tasks)
      console.log(results)
      return tasks;
  
    } catch (error) {
      console.error(error);
      return []
    }
  }
  function renderTaskHTML(task: Task) {
    try {
      const html = `<div class="task">
      <h1>${task.title}</h1>
     <h3>${task.description}</h3>
        <p>status: ${task.status}</p>
        <form id="${task.id}" onsubmit="handleUpdateTask(event)">
          <input type="text" name="title"  value="${task.title}" placeholder="title" />
          <button type="submit">Update</button>
        </form>
        <button onclick="handleDeleteTask('${task.id}')">Delete</button>
      </div>`
      return html;
    } catch (error) {
      console.error(error)
      return ""
    }
  }
  function renderTasks(tasks: Task[], HTMLElement: HTMLDivElement) {
    try {
      if (!HTMLElement) throw new Error("HTMLElement not found")
      console.log(tasks)
      if (!Array.isArray(tasks)) throw new Error("tasks are not array");
      const tasksHTML = tasks.map(task => renderTaskHTML(task)).join("")
      HTMLElement.innerHTML = tasksHTML;
    } catch (error) {
      console.error(error)
    }
  }
  async function handleGetTasks() {
    const tasks = await getTask();
  
    const root = document.querySelector('#root');
    renderTasks(tasks, root as HTMLDivElement);
  
  
  }
  
  async function handleDeleteProduct(id:string){
    try {
      const response = await fetch('/API/task/delete-task', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
      });
      const result = await response.json();
      console.log(result);
      const {tasks} = result;
  
      renderTasks(tasks, document.querySelector('#root') as HTMLDivElement);
  
    } catch (error) {
      console.error(error)
    }
  }
  
  async function handleUpdateTaskDescription(ev:any){
    try {
      ev.preventDefault();
      const Description = ev.target.Description.value;
      const id = ev.target.id;
      console.log(id, Description)
  
      const response = await fetch('/API/task/update-task-description', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, Description})
      });
  
      const result = await response.json();
      console.log(result);
      const {tasks} = result;
      renderTasks(tasks, document.querySelector('#root') as HTMLDivElement);
  
    } catch (error) {
      console.error(error)
    }
  }
  







// interface task {
//   title: string;
//   description: string;
//   status: string;
// }

// class User {
//   id?: string;
//   constructor(
//     public userName: string,
//     public password: string,
//     public phoneNumber: string,
//     public email: string
//   ) {
//     this.id = `id-${new Date().getTime()}-${Math.random()}`;
//   }
  
// }
// let currentUser: User | null = null;
// async function handleLoginSubmit(event: any) {
//   try {
//       event.preventDefault();
//       const selectedUser: HTMLSelectElement = document.querySelector("#user") || new HTMLSelectElement();
//       if (!selectedUser) throw new Error("User not found")
//       const userId = selectedUser.value;
//       const password = event.target.password.value;

//       if (!userId || !password) throw new Error("Please complete all fields")
//       const response = await fetch('/API/users/get-users')
//       const results = await response.json();
//       const { users } = results;
//       if (!Array.isArray(users)) throw new Error("users are not array");
//       const user = users.find((user) => user.id === userId);
//       if (!user) throw new Error("User not found");
//       if (user.password !== password) {
//           alert("Password is incorrect");
//           throw new Error("Password is incorrect");
//       }
//       currentUser = user;
//       renderUserPage(document.querySelector('#root') as HTMLDivElement, user);
//   }
//   catch (error) {
//       console.error(error);
//   }
// }


// async function handleRegisterSubmit(event: any) {
//   try {
//       event.preventDefault();
//       const userName = event.target.userName.value;
//       const password = event.target.password.value;
//       const phoneNumber = event.target.phoneNumber.value;
//       const email = event.target.email.value;
//       if (!userName || !password || !phoneNumber || !email) throw new Error("Please complete all fields")
//       if (await checkIfUserExist(userName)) throw new Error("User already exist");
//       const user = new User(userName, password, phoneNumber, email);
//       const response = await fetch('/API/user/add-user', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(user)
//       });

//       const result = await response.json();
//       console.log(result);



//   } catch (error) {
//       console.error(error);
//   }

// }

// async function checkIfUserExist(userName: string): Promise<boolean> {
//   try {
//       const response = await fetch('/API/user/get-users')
//       const results = await response.json();
//       const { users } = results;

//       if (!Array.isArray(users)) throw new Error("users are not array");
//       const user = users.findIndex((user) => user.userName === userName);
//       if (user !== -1) {
//           alert("Name already exist, please choose another name")
//           return true;
//       }
//       return false;
//   } catch (error) {
//       console.error(error);
//   }
// }

// async function getusers() {
//   try {
//       const response = await fetch('/API/user/get-users')
//       console.log(response)
//       const results = await response.json();

//       const { users } = results;
//       if (!Array.isArray(users)) throw new Error("users are not array");
//       console.log(users)
//       console.log(results)
//       return users;

//   } catch (error) {
//       console.error(error);
//       return []
//   }
// }
// function renderUserPage(HTMLElement: HTMLDivElement, user: User) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       HTMLElement.innerHTML = `<div id="title"></div>
//       <div id="panel"><div id="buttons"></div>
//       <div id="form"></div></div>`
//       renderTitle(document.querySelector('#title') as HTMLDivElement, `Welcome ${user.userName}`)
//       renderUserButtons(document.querySelector('#buttons') as HTMLDivElement, user)
//   } catch (error) {
//       console.error(error)
//   }
// }

// function renderUserButtons(HTMLElement: HTMLDivElement, user: User) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       HTMLElement.innerHTML = `<div id=userUI><button onclick="handleAddTask()">Add Note</button>
//       <button onclick="handleShowNotes()">Show Notes</button>
//       <button onclick="handleUpdatePassword()">Update Password</button>
//       <button onclick="handleUpdateEmail()">Update Email</button>
//       <button onclick="handleDeleteUser()">Delete User</button></div>`
//   } catch (error) {
//       console.error(error)
//   }
// }

// async function handleUpdateEmail() {
//   try {
//       if (!currentUser) throw new Error("User not found")
//       const newEmail = prompt("Please enter new email");
//       if (!newEmail) throw new Error("Please enter new email");
//       const response = await fetch('/API/users/update-user-email', {
//           method: 'PATCH',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ id: currentUser.id, email: newEmail })
//       });
//       const result = await response.json();
//       console.log(result);
//       alert("Email updated successfully");
//       currentUser = null;
//       renderEntrencePanel();
//   } catch (error) {
//       console.error(error)
//   }
// }

// async function handleDeleteUser() {
//   try {
//       if (!currentUser) throw new Error("User not found")
//       const response = await fetch('/API/users/delete-user', {
//           method: 'DELETE',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ id: currentUser.id })
//       });
//       const result = await response.json();
//       console.log(result);
//       currentUser = null;
//       renderEntrencePanel();
//   } catch (error) {
//       console.error(error)
//   }
// }

// async function handleUpdatePassword() {
//   try {
//       if (!currentUser) throw new Error("User not found")
//       const newPassword = prompt("Please enter new password");
//       if (!newPassword) throw new Error("Please enter new password");
//       const response = await fetch('/API/users/update-user-password', {
//           method: 'PATCH',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ id: currentUser.id, password: newPassword })
//       });
//       const result = await response.json();
//       console.log(result);
//       alert("Password updated successfully");
//       currentUser = null;
//       renderEntrencePanel();
//   } catch (error) {
//       console.error(error)
//   }
// }

// function handleAddTask() {
//   try {
//       renderTitle(document.querySelector('#title') as HTMLDivElement, "Add Note")
//       renderAddNoteForm(document.querySelector('#form') as HTMLDivElement)
//   } catch (error) {
//       console.error(error)
//   }
// }

// function renderAddNoteForm(HTMLElement: HTMLDivElement) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       HTMLElement.innerHTML = `<form class=addNoteForm onsubmit="handleAddTaskSubmit(event)">
//       <input type="text" name="title" placeholder="Title" />
//       <input type="text" name="description" placeholder="Description" />
//       <button type="submit">Add</button>
//     </form>`
//   } catch (error) {
//       console.error(error)
//   }
// }

// async function handleShowNotes() {
//   try {
//       debugger;
//       renderTitle(document.querySelector('#title') as HTMLDivElement, "Show Notes")
//       renderNotes(document.querySelector('#form') as HTMLDivElement)
//   } catch (error) {
//       console.error(error)
//   }
// }

// async function renderNotes(HTMLElement: HTMLDivElement) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       const response = await fetch('/API/note/get-notes')
//       const results = await response.json();
//       console.log(response);
//       const { notes } = results;
//       if (!Array.isArray(notes)) throw new Error("notes are not array");
//       let notesHTML = ``;
//       notesHTML += notes.map(note => renderNoteHTML(note)).join("")
//       console.log(notesHTML);
//       HTMLElement.innerHTML = notesHTML;
//   } catch (error) {
//       console.error(error)
//   }
// }

// function renderNoteHTML(task: task) {
//   try {
//       debugger;
//       const html = `<div class="task">
//       <h3>${task.title}</h3>
//       <p>${task.description}</p>
//       <p>${task.status}</p>
//       <button onclick="handleDeleteTask('${task.title}')">Delete</button>
//     </div>`
//       return html;
//   } catch (error) {
//       console.error(error)
//       return ""
//   }
// }


// async function handleAddTaskSubmit(event: any) {
//   try {
//       event.preventDefault();
//       const title = event.target.title.value;
//       const description = event.target.description.value;
//       if (!title || !description) throw new Error("Please complete all fields")
//       if (!currentUser) throw new Error("User not found")
//       const status = "To-Do";
//       const userID = currentUser.id;
//       const note = { title: title, description: description, status: status, id: userID };
//       const response = await fetch('/API/note/add-note', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(note)
//       });

//       const result = await response.json();
//       console.log(result);

//   } catch (error) {
//       console.error(error);
//   }
// }





// function renderEntrencePanel() {
//   try {

//       renderTitle(document.querySelector('#title') as HTMLDivElement, "Welcome to NoteList")
//       renderFirstButtons(document.querySelector('#buttons') as HTMLDivElement)
//   } catch (error) {
//       console.error(error)
//   }
// }

// function renderTitle(HTMLElement: HTMLDivElement, title: string) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       HTMLElement.innerHTML = `<h1>${title}</h1>`
//   } catch (error) {
//       console.error(error)
//   }
// }

// function renderFirstButtons(HTMLElement: HTMLDivElement) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       HTMLElement.innerHTML = `<div><button onclick="handleLogin()">Login</button>
//       <button onclick="handleRegister()">Register</button></div>`
//   } catch (error) {
//       console.error(error)
//   }
// }

// function handleLogin() {
//   try {
//       renderTitle(document.querySelector('#title') as HTMLDivElement, "Login")
//       renderLogin(document.querySelector('#panel') as HTMLDivElement);
//   } catch (error) {
//       console.error(error)
//   }
// }

// function handleRegister() {
//   try {
//       renderTitle(document.querySelector('#title') as HTMLDivElement, "Register")
//       renderRegister(document.querySelector('#form') as HTMLDivElement);
//   } catch (error) {
//       console.error(error)
//   }
// }

// async function renderLogin(HTMLElement: HTMLDivElement) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       const users = await getusers();
//       let html = `<form class=loginForm onsubmit="handleLoginSubmit(event)">
//       <select id="user">`
//       html += users.map(user => `<option value="${user.id}">${user.userName}</option>`).join("");
//       html += `</select> 
//       <input type="password" name="password" placeholder="Password" />
//       <button type="submit">Go</button>
//     </form>`
//       HTMLElement.innerHTML = html;
//   } catch (error) {
//       console.error(error)
//   }
// }

// function renderRegister(HTMLElement: HTMLDivElement) {
//   try {
//       if (!HTMLElement) throw new Error("HTMLElement not found")
//       HTMLElement.innerHTML = `<form class=registerForm onsubmit="handleRegisterSubmit(event)">
//       <input type="text" name="userName" placeholder="User Name" />
//       <input type="password" name="password" placeholder="Password" />
//       <input type="text" name="phoneNumber" placeholder="Phone Number" />
//       <input type="text" name="email" placeholder="Email" />
//       <button type="submit">Sign up</button>
//     </form>`
//   } catch (error) {
//       console.error(error)
//   }
// }

// renderEntrencePanel()