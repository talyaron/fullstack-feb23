enum TaskStatus {
    done = "done",
    todo = "todo"
}

interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}


async function handleGetTasks() {
    try {

        const response = await fetch('/API/task/get-tasks');
        //conver response to json data
        const { tasks } = await response.json();
        console.log(tasks);
        renderTasks(tasks, document.querySelector("#tasks"));
    } catch (error) {
        console.error(error);
    }
}

handleGetTasks();

async function handeleAddTask(ev: any) {
    try {
        ev.preventDefault();
        const title = ev.target.elements.title.value;
        const description = ev.target.elements.description.value;
        const newTask = { title, description };
        const response = await fetch('/API/task/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        });
        const { tasks } = await response.json();
        console.log(tasks);

        renderTasks(tasks, document.querySelector("#tasks"));
    } catch (error) {
        console.error(error);
    }
}

async function handleUpdateStatus(status: TaskStatus, id: string) {
    try {

        console.log(status);

        const body = { id, status };
        const result = await fetch('/API/task/update-tasks-status', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const { tasks } = await result.json();
        console.log(tasks);
        renderTasks(tasks, document.querySelector("#tasks"));
    } catch (error) {
        console.error(error);
    }
}

function renderTask(task: Task) {
    try {
        const html = task.status === TaskStatus.todo
            ? `<li class = "list" onclick="handleUpdateStatus('done', '${task.id}')">${task.title} - ${task.description} - ${task.status}</li>`
            :
            `<li class = "list" style="background-color:lightgray;" onclick="handleUpdateStatus('todo', '${task.id}')">${task.title} - ${task.description} - ${task.status}</li>`;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}

function renderTasks(tasks: Task[], DIVElem: HTMLDivElement) {
    try {
        if (!DIVElem) throw new Error("no div element");
        let html = "<ul>";
        html += tasks.map(task => renderTask(task)).join("");
        html += "</ul>";

        DIVElem.innerHTML = html;
    } catch (error) {
        console.error(error);
        return "";
    }
}