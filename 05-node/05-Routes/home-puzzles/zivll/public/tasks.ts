interface Task {
  title: string;
  description: string;
  status?: string;
  id?: string;
}

async function handleAddTask(ev: any) {
  try {
    ev.preventDefault();
    const task = {
      title: ev.target.title.value,
      description: ev.target.description.value,
    };
    // const status = ev.target.status;
    const response = await fetch("/API/tasks/add-tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const { tasks } = await response.json();
    renderTasks(tasks, document.querySelector("#tasks"));
  } catch (error) {
    console.error(error);
  }
}
async function handleGetTasks() {
  try {
    const response = await fetch("/API/tasks/get-tasks");
    const result = await response.json();
    const { tasks } = result;
    renderTasks(tasks, document.querySelector("#tasks"));
  } catch (error) {
    console.error(error);
  }
}
handleGetTasks();
async function handleUpdateTask(element) {
  try {
    const task = {
      id: element,
    };
    const response = await fetch("/API/tasks/update-tasks", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const result = await response.json();
    const { tasks } = result;
    renderTasks(tasks, document.querySelector("#tasks"));
  } catch (error) {
    console.error(error);
  }
}
async function handleDeleteTask(taskId) {
  try {
    const task = {
      id: taskId,
    };

    const response = await fetch("/API/tasks/delete-tasks", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const result = await response.json();
    const { tasks } = result;
    renderTasks(tasks, document.querySelector("#tasks"));
  } catch (error) {
    console.error(error);
  }
}
function renderTaskHTML(tasks: Task[]): string {
  try {
    const html = tasks
      .map(
        (task) =>
          `<div class="task" id="${task.id}"><strong><p>title:</strong> ${task.title}</p><p><strong>description:</strong> ${task.description}</p><p><strong>id:</strong> ${task.id}</p><p class="${task.status}"><strong>status:</strong> ${task.status}</p><button class="button-28"onclick="handleUpdateTask('${task.id}')">Change task status</button><button class="button-24"onclick="handleDeleteTask('${task.id}')">Delete task</button></div>`
      )
      .join("");
    return html;
  } catch (error) {
    console.error(error);
  }
}
function renderTasks(tasks: Task[], HTMLDivElement: HTMLDivElement) {
  try {
    const html: string = renderTaskHTML(tasks);
    HTMLDivElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}
