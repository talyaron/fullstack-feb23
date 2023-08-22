class Task {
  public id: string;
  constructor(
    public name: string,
    public time: string,
    public isDone: boolean = false,
  ) {
    this.id = require("uuid/v4");
  }
}

async function handleAddTask(event) {
  try {
    event.preventDefault();
    const name = event.target.taskName.value;
    const time = event.target.taskTime.value;

    console.log({ name, time });

    const postInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, time }),
    };

    const response = await fetch("/API/add-task", postInit);

    const { newTask } = await response.json();

    renderTask(
      newTask,
      document.querySelector(".tasksListDiv") as HTMLDivElement,
    );

    event.target.reset();
  } catch (error) {
    console.error(error);
  }
}

function renderTask(
  task: Task,
  root: HTMLDivElement = document.querySelector(".tasksListDiv"),
) {
  try {
    const html = `
    <form class="tasksListDiv__task" id ="${task.id}" onchange = "handelChangeTask(event)" >
    <input type="checkbox" name ="isDone" ${task.isDone ? 'checked' : ''}>
    <input type="text" name="taskName" placeholder="" value="${task.name}">
      <input type="time" name="taskTime" placeholder="" value="${task.time}">
      <button  onclick="sayHallo(event)" > save changes </button>
      <button type="button" onclick = "handleDeleteTask(event)"> delete </button>
    </form>`;
    root.innerHTML += html;
  } catch (error) {
    console.error(error);
  }
}

function renderAllTask(
  tasks: Task[],
  root: HTMLDivElement = document.querySelector(".tasksListDiv"),
) {
  try {
    root.innerHTML = " ";
    root.innerHTML += tasks
      .map((task) => {
        return `<form class="tasksListDiv__task" id ="${task.id}" onchange = "handelChangeTask(event)" >
        <input type="checkbox" name ="isDone" ${task.isDone ? 'checked' : ''}>
    <input type="text" name="taskNameInList" placeholder="" value="${task.name}">
    <input type="time" name="taskTimeInList" placeholder="" value="${task.time}">
    <button  onclick="sayHallo(event)" > save changes </button>
    <button type="button" onclick = "handleDeleteTask(event)"> delete </button>
  </form>`;
      })
      .join(" ");
  } catch (error) {
    console.error(error);
  }
}

async function handleDeleteTask(event) {
  try {
    event.preventDefault();
    const taskId = event.target.parentNode.id;

    const deleteInit = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskId }),
    };

    const response = await fetch("/API/delete-task", deleteInit);
    const { tasks } = await response.json();
    renderAllTask(tasks);
  } catch (error) {
    console.error(error);
  }
}

async function handelChangeTask(event: any) {
  try {
    event.preventDefault();
    console.dir(event.srcElement.form.id);
    console.log(event.target);
    
    const inputChange = event.target.name;
    const inputValue = event.target.value;
    const taskId = event.srcElement.form.id;

    const patchInit = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputChange, inputValue, taskId }),
    };

    const response = await fetch("/API/patch-task", patchInit);
    const { tasks } = await response.json();
    renderAllTask(tasks);
  } catch (error) {
    console.error(error);
  }
}

function sayHallo(event) {
  event.preventDefault();
  console.log("Hallo");
}

const inputsTime = document.querySelectorAll(".taskTimeInList");
const inputsName = document.querySelectorAll(".taskNameInList");

inputsName.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.add("focused");
  });
  input.addEventListener("blur", () => {
    input.classList.remove("focused");
  });
});
inputsTime.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.add("focused");
  });
  input.addEventListener("blur", () => {
    input.classList.remove("focused");
  });
});
