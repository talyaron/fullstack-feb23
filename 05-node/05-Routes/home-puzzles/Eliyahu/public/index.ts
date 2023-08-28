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

async function getTasks() {
    try {
        const response = await fetch('API/tasks/get-tasks')
        const result = await response.json()
        const { tasks } = result
        if (!Array.isArray(tasks)) throw new Error("tasks is not array");
        renderTasks(tasks)

    } catch (error) {
        console.error(error.massage);
    }
}
getTasks()



async function handleAddTask(ev: any, user: string, status: string) {
    try {
        ev.preventDefault()
        
        const title = ev.target.title.value
        const description = ev.target.description.value
        if (!user || !status || !title || !description) throw new Error("Please complete all details");
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

        renderTasks(tasks)
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
        renderTasks(tasks)

    } catch (error) {
        console.error(error.massage);
    }
}

async function handleUpdateTaskTitle(ev: any) {
    try {
        ev.preventDefault()
        const title = ev.target.title.value
        const description = ev.target.description.value
        const id = ev.target.id

        const response = await fetch('API/tasks/update-task', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title,description, id })
        })

        const result = await response.json()
        const { tasks } = result

        renderTasks(tasks)

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

        renderTasks(tasks)

    } catch (error) {
        console.error(error.massage);
    }
}

function renderAddTask(status: string) {
    try {
        let html = `<form onsubmit="handleAddTask(event, 'eli', '${status}')">
        <input type="text" name="title" placeholder="Title" required>
        <textarea name="description" cols="21" rows="5" placeholder="Description" required></textarea>
        <button type="submit" class="material-symbols-rounded">check</button>
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


function renderTaskHtml(task: Task) {
    try {
        console.log(task.id);
        console.log(`title${task.id}`);
        
        let html = `<div class = "task">
        <div class = "task_header" id="title${task.id}">
        <h3 >${task.title}</h3>
        <button class="material-symbols-rounded" onclick="renderUpdateTask('${task.id}')">Edit</button>
        </div>
        <div class = "task_body">
        <p>${task.description}</p>
        
        </div>`
        switch (task.status) {
            case 'toDo':
                html += `<div class="btns">
                <div></div>
                <button class="material-symbols-rounded" onclick="handleDeleteTask('${task.id}')">Delete</button>
                <button class="material-symbols-rounded" onclick="handleUpdateTaskStatus('doing','${task.id}')">keyboard_double_arrow_right</button>
                </div>
                </div>`
                break;
            case 'doing':
                html += `<div class="btns">
                    <button class="material-symbols-rounded" onclick="handleUpdateTaskStatus('toDo','${task.id}')">keyboard_double_arrow_left</button>
                    <button class="material-symbols-rounded" onclick="handleDeleteTask('${task.id}')">Delete</button>
                    <button class="material-symbols-rounded" onclick="handleUpdateTaskStatus('done','${task.id}')">keyboard_double_arrow_right</button>
                    </div>
                    </div>`
                break;
            case 'done':
                html += `<div class="btns">
                        <button class="material-symbols-rounded" onclick="handleUpdateTaskStatus('doing','${task.id}')">keyboard_double_arrow_left</button>
                        <button class="material-symbols-rounded" onclick="handleDeleteTask('${task.id}')">delete</button>
                        <div></div>
                        </div>
                        </div>`
                break;
        }
        return html
    } catch (error) {
        console.error(error.massage);
    }
}

function renderTasks(tasks: Task[]) {
    try {
        if (!Array.isArray(tasks)) throw new Error("tasks is not array");
        const toDoTasks = tasks.filter(task => task.status === 'toDo')
        const toDoTasksHTML = toDoTasks.map(task => renderTaskHtml(task)).join('')
        toDoRoot.innerHTML = toDoTasksHTML

        const doingTasks = tasks.filter(task => task.status === 'doing')
        const doingTasksHTML = doingTasks.map(task => renderTaskHtml(task)).join('')
        doingRoot.innerHTML = doingTasksHTML

        const doneTasks = tasks.filter(task => task.status === 'done')
        const doneTasksHTML = doneTasks.map(task => renderTaskHtml(task)).join('')
        doneRoot.innerHTML = doneTasksHTML
    } catch (error) {
        console.error(error.massage);
    }
}

function renderUpdateTask(id:string){
    try {
        debugger
        // const currentTask = tasks.find(task=>task.id===id)
        console.log(id);
        // console.log(tasks);
        console.log(`#title${id}`);
        
        // console.log(currentTask.id);
        
        // if(!currentTask) throw new Error("can not find current task");
        
        // let html = `<textarea name="editTitle" id="title${id}" cols="20" rows="1">title</textarea>`
       let html=""
        const editRoot = document.querySelector(`#title${id}`) as HTMLDivElement
        editRoot.innerHTML = html
    } catch (error) {
        console.error(error.massage);
        
    }
}

