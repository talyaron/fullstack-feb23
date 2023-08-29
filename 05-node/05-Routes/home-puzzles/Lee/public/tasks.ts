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
    const response = await fetch('/API/Tasks/get-tasks')
    const { tasks } = await response.json()
    console.log(tasks)
    renderTasks (tasks, document.querySelector("#tasks"))
  } catch (error) {
    console.error(error)
  }
}

handleGetTasks()

async function handleAddTask(ev: any) {
  try {
    ev.preventDefault()
    const title = ev.target.elements.title.value;
    const description = ev.target.elements.description.value;
    const newTask = { title, description };
    const response = await fetch('/API/Tasks/add-task', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    const { tasks } = await response.json();
    console.log(tasks);

    renderTasks (tasks, document.querySelector("#tasks"))
  } catch (error) {
    console.error(error)
  }
}

function renderTask(task: Task) {
  try {
    const html = `<li>${task.title} - ${task.description} - ${task.status}</li>`
    return html;
  } catch (error) {
    console.error(error)
    return ""
  }
}

function renderTasks(tasks: Task[], DIVElem: HTMLDivElement) {
  try {
    if (!DIVElem) throw new Error("no div element")
    let html = "<ul>"
    html += tasks.map(task => renderTask(task)).join("")
    html += "<ul>"
    DIVElem.innerHTML = html
  } catch (error) {
    console.error(error)
    return ""
  }
}