//mvc
//model
//import { User } from "../API/users/usersModel";
//import { Task } from "../API/tasks/tasksModel";
interface Task {
    title: string;
    description: string;
    status?: string;
    id?: string
}

interface User {
    name: string;
    tasks: Task[];
    id?: string;
}


//view (all render function):


//show single task
function renderTaskToHTML(task: Task) {
    try {
        const html = `<div class="task">
                        <h3 class="task__title">${task.title}</h3>
                        <p class="task__description">${task.description}</p> 
                        <p class="task__status">${task.status}</p>
                        <form id="${task.id}" onsubmit="handleUpdateTask(event)">
                            <input type="text" name="title" value="${task.title}" plasceholder="title" />
                            <input type="text" name="description" value="${task.description}" plasceholder="description" />
                            <input type="text" name="status" value="${task.status}" plasceholder="ststus" />
                            <select name="status" id="status-select">
                                <option value="to-do">To-Do</option>
                                <option value="done">Done</option>
                                <br><br>
                                <input type="text" name="status" value="${task.status} placeholder="Change">
                            </select>
                            <button type="submit">Update</button>
                        </form>
                        <button onclick="handelDeleteTask('${task.id}')">Delete</button>
                      </div>`
    } catch (error) {
        console.error(error)
    }
}

//show all tasks
function renderTasks(tasks: Task[], HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLDivElement) throw new Error("HTMLElement not found");
        console.log(tasks);
        if (!Array.isArray(tasks)) throw new Error("tasks are not array");
        const tasksHTML = tasks.map(task => renderTaskToHTML(task)).join("")
        HTMLElement.innerHTML = tasksHTML;
    } catch (error) {
        console.error(error)
    }
}

//controllers:

//users

async function getUsers() {
    try {
        const response = await fetch('/API/users/get-users')
        const result = await response.json()
        const { users } = result
        if (!Array.isArray(users)) throw new Error("users are not array")
        console.log(users)
        console.log(result)
        return users;
    } catch (error) {
        console.error(error)
        return []
    }
}

//get the specific user we want
async function handelGetUser(ev: any) {
    try {
        ev.preventDefault()
        const name = ev.target.name.value;
        const id = ev.target.id;
        console.log(id, name)
        if (!name) throw new Error("please select your name");
        
        const users = await getUsers();
        if (!users) throw new Error("no users found");
        console.log(users)

        const user = users.find((user) => user.id === id); //find the selected user
        const root = document.querySelector('#userTasksRoot')
        renderTasks(user.tasks, root as HTMLDivElement)
    } catch (error) {

    }
}


//tasks
async function handleAddTask(event: any) {
    try {
        event.preventDefault()
        const title = event.target.title.value;
        const description = event.target.description.value;
        if (!title || !description) throw new Error("Pleas complete all fields");
        const task: Task = { title, description }

        const response = await fetch('/API/tasks/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });

        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.error(error);
    }
}

export async function getTasks() {
    try {
        const response = await fetch('/API/tasks/get-tasks')
        const result = await response.json()
        const { tasks } = result
        if (!Array.isArray(tasks)) throw new Error("tasks are not array")
        console.log(tasks)
        console.log(result)
        return tasks;
    } catch (error) {
        console.error(error)
        return []
    }
}

async function handelGetTasks() {
    const tasks = await getTasks()
    const root = document.querySelector('#userTasksRoot')
    renderTasks(tasks, root as HTMLDivElement)
}

async function handelDeleteTask(id: string) {
    try {
        const response = await fetch('/API/tasks/delet-task', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        });
        const result = await response.json();
        console.log(result);
        const { products } = result;

        renderTasks(products, document.querySelector('#userTasksRoot') as HTMLDivElement);

    } catch (error) {
        console.error(error)
    }
}

//update all task data
async function handleUpdateTask(ev: any) {
    try {
        ev.preventDefault();
        const title = ev.target.title.value;
        const description = ev.target.description.value;
        const status = ev.target.ststus.value;
        const id = ev.target.id;
        console.log(id, title, description, status)

        const response = await fetch('/API/tasks/update-task-status', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, status })
        });

        const result = await response.json();
        console.log(result);
        const { products } = result;
        renderTasks(products, document.querySelector('#userTasksRoot') as HTMLDivElement);

    } catch (error) {
        console.error(error)
    }
}