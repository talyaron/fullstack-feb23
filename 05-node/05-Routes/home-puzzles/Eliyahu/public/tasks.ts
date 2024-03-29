
const toDoRoot = document.querySelector('#toDoTasks') as HTMLDivElement
const doingRoot = document.querySelector('#doingTasks') as HTMLDivElement
const doneRoot = document.querySelector('#doneTasks') as HTMLDivElement

async function getTasks() {
    try {
        const response = await fetch('API/tasks/get-tasks')
        const result = await response.json()
        const { usersTasks } = result
        if (!Array.isArray(usersTasks)) throw new Error("tasks is not array");
        renderTasks(usersTasks)
    } catch (error) {
        console.error(error.massage);
    }
}

getTasks()
const emailUser = window.location.search.toString().replace('?email=', '')

async function handleAddTask(ev: any, status: string) {
    try {
        ev.preventDefault()

        const task = {
            title: ev.target.title.value,
            description: ev.target.description.value,
            status,
            emailUser
        }
        if (!status || !task.title || !task.description) throw new Error("Please complete all details");

        const response = await fetch('/API/tasks/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const result = await response.json()
        const { usersTasks } = result
        console.log(usersTasks);

        renderTasks(usersTasks)

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
        const { usersTasks } = result
        renderTasks(usersTasks)

    } catch (error) {
        console.error(error.massage);
    }
}

async function handleUpdateTask(ev: any) {
    try {
        ev.preventDefault()
        const title = ev.target.editTitle.value
        const description = ev.target.editDescription.value
        const id = ev.target.id

        const response = await fetch('API/tasks/update-task', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description, id })
        })

        const result = await response.json()
        const { usersTasks } = result

        renderTasks(usersTasks)

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
        const { usersTasks } = result

        renderTasks(usersTasks)

    } catch (error) {
        console.error(error.massage);
    }
}

function renderAddTask(status: string) {
    try {
        let html = `<form onsubmit="handleAddTask(event, '${status}')">
        <input type="text" name="title" placeholder="Title" required>
        <textarea name="description" cols="21" rows="5" placeholder="Description" required></textarea>
        <div>
        <button type="submit" class="material-symbols-rounded">check</button>
        <button onclick="getTasks()" class="material-symbols-rounded">close</button>
        </div>
        </form>`


        switch (status) {
            case 'toDo':
                toDoRoot.innerHTML += html
                break;
            case 'doing':
                doingRoot.innerHTML += html
                break;
            case 'done':
                doneRoot.innerHTML += html
                break;
        }

    } catch (error) {
        console.error(error.massage);
    }
}


function renderTaskHtml(task) {
    try {

        let html = `<div class = "task" id="task${task.id}">
        <div class = "task_header">
        <h3 >${task.title}</h3>
        <button class="material-symbols-rounded" onclick="renderUpdateTask('${task.title}','${task.description}','${task.id}')">Edit</button>
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

function renderTasks(usersTasks) {
    try {
        if (!Array.isArray(usersTasks)) throw new Error("usersTasks is not array");

        const userTasks = usersTasks.filter(userTask => userTask.user.email === emailUser)
        if (!Array.isArray(userTasks)) throw new Error("userTasks");

        const toDoTasks = userTasks.filter(element => element.task.status === 'toDo')
        const toDoTasksHTML = toDoTasks.map(usertask => renderTaskHtml(usertask.task)).join('')
        toDoRoot.innerHTML = toDoTasksHTML

        const doingTasks = userTasks.filter(element => element.task.status === 'doing')
        const doingTasksHTML = doingTasks.map(usertask => renderTaskHtml(usertask.task)).join('')
        doingRoot.innerHTML = doingTasksHTML

        const doneTasks = userTasks.filter(element => element.task.status === 'done')
        const doneTasksHTML = doneTasks.map(usertask => renderTaskHtml(usertask.task)).join('')
        doneRoot.innerHTML = doneTasksHTML

        if(emailUser==='admin@gmail.com'){
            const toDoTasks = usersTasks.filter(element => element.task.status === 'toDo')
        const toDoTasksHTML = toDoTasks.map(element =>  '<p style="font-weight: bold; margin-bottom: 2px;"> User:' + element.user.name +'</p>' + renderTaskHtml(element.task)).join('')
        toDoRoot.innerHTML = toDoTasksHTML

        const doingTasks = usersTasks.filter(element => element.task.status === 'doing')
        const doingTasksHTML = doingTasks.map(element =>  '<p style="font-weight: bold; margin-bottom: 2px;"> User:' + element.user.name +'</p>' + renderTaskHtml(element.task)).join('')
        doingRoot.innerHTML = doingTasksHTML

        const doneTasks = usersTasks.filter(element => element.task.status === 'done')
        const doneTasksHTML = doneTasks.map(element => '<p style="font-weight: bold; margin-bottom: 2px;"> User:' + element.user.name +'</p>' + renderTaskHtml(element.task)).join(``)
        doneRoot.innerHTML = doneTasksHTML
        }
    } catch (error) {
        console.error(error.massage);
    }
}



function renderUpdateTask(title: string, description: string, id: string) {
    try {
        let html = `<div class="edit">
        <form id="${id}" onsubmit="handleUpdateTask(event)">
        <label for="${title}">Edit Title</label>
        <textarea name="editTitle" id="${title}" cols="20" rows="1">${title}</textarea>
        <label for="${description}">Edit Description</label>
        <textarea name="editDescription" id="${description}" cols="20" rows="1">${description}</textarea>
        <button type="submit" class="material-symbols-rounded">check</button>
        </div>`
        const editRoot = document.querySelector(`#task${id}`) as HTMLDivElement
        editRoot.innerHTML = html
    } catch (error) {
        console.error(error.massage);

    }
}

async function renderNav() {
    try {
        const email = { emailUser }

        if (emailUser === 'admin@gmail.com') {
            const html = `<div class="nav">
        <p>Admin</p>
        <a class="logout material-symbols-rounded" href="./index.html">Logout</a>
    </div>`
            const root = document.querySelector('#nav') as HTMLDivElement
            root.innerHTML = html

        }
        const response = await fetch('/API/users/get-user-name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        })

        const result = await response.json()
        const { error, userName } = result
        if (error) throw new Error("Some of details are incorrect");

        const html = `<div class="nav">
        <p>${userName}</p>
        <a class="logout material-symbols-rounded" href="./index.html">Logout</a>
    </div>`
        const root = document.querySelector('#nav') as HTMLDivElement
        root.innerHTML = html
    } catch (error) {
        console.error(error.massage);

    }
}

renderNav()