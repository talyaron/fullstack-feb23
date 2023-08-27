// import { Task } from "../API/tasks/tasksModels";


class Task {
    id: string
    constructor(
        public user: string,
        public title: string,
        public description: string,
        public status: string
    ) {
        this.id = Math.random().toString()
    }
}

const toDoRoot = document.querySelector('#toDoTasks') as HTMLDivElement
const doingRoot = document.querySelector('#doingTasks') as HTMLDivElement
const doneRoot = document.querySelector('#doneTasks') as HTMLDivElement

async function gatTasks() {
    try {
        const response = await fetch('API/tasks/get-tasks')
        const result = await response.json()
        const { tasks } = result
        if (!Array.isArray(tasks)) throw new Error("tasks is not array");
        return tasks;

    } catch (error) {
        console.error(error.massage);
    }
}



async function handleAddTask(ev: any, user: string, status: string) {
    try {
        ev.preventDefault()
        const title = ev.target.title.value
        const description = ev.target.description.value
        console.log(description);
        if (!user || !status || !title || !description) throw new Error("Please complete all details");
        console.log(user);
        console.log(status);
        console.log(title);

        const task = new Task(user, title, description, status)

        const response = await fetch('/API/tasks/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const result = await response.json()
        const { tasks } = result
        console.log(tasks);


    } catch (error) {
        console.error(error)
    }
}


async function handleDeleteTask(id: string) {
    try {
        const response = await fetch('API/tasks/delete-task', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        const result = await response.json()
        const { tasks } = result

    } catch (error) {
        console.error(error.massage);
    }
}

async function handleUpdateTaskTitle(ev: any) {
    try {
        ev.preventDefault()
        const title = ev.target.title.value
        const id = ev.target.id

        const response = await fetch('API/tasks/update-task-title', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, id })
        })

        const result = await response.json()
        const { tasks } = result
    } catch (error) {
        console.error(error.massage);
    }
}

async function handleUpdateTaskDescription(ev: any) {
    try {
        ev.preventDefault()
        const description = ev.target.description.value
        const id = ev.target.id

        const response = await fetch('API/tasks/update-task-description', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description, id })
        })

        const result = await response.json()
        const { tasks } = result
    } catch (error) {
        console.error(error.massage);
    }
}

async function handleUpdateTaskStatus(taskStatus: string, taskId: string) {
    try {
        const status = taskStatus
        const id = taskId

        const response = await fetch('API/tasks/update-task-status', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status, id })
        })

        const result = await response.json()
        const { tasks } = result
    } catch (error) {
        console.error(error.massage);
    }
}

function renderAddTask(status: string) {
    try {
        const html = `<form onsubmit="handleAddTask(ev, 'eli', '${status}')">
        <input type="text" name="title" placeholder="Title" required>
        <textarea name="description" cols="21" rows="5" placeholder="Description" required></textarea>
        <button type="submit">ADD</button>
    </form>`

      
        switch (status) {
            case 'toDo':
                toDoRoot.innerHTML = html
                break;
            case 'doing':
                doingRoot.innerHTML = html
                break;
            case 'done':
                doneRoot.innerHTML = html
                break;
        }
    } catch (error) {
        console.error(error.massage);
    }
}


function renderTaskHtml(task: Task, rootElement:HTMLDivElement) {
    try {
        const html = `<div class = "task">
        <div class = "task_header">
        <h3>${task.title}</h3>
        <button onclick="renderUpdateTaskTitle()">Edit</button>
        </div>
        <div class = "task_body">
        <p>${task.description}</p>
        <button onclick="renderUpdateTaskDescription()">Edit</button>
        </div>
        <button onclick="handleDeleteTask(${task.id})">Delete</button>
        </div>`

        rootElement.innerHTML = html
    } catch (error) {
        console.error(error.massage);
    }
}



