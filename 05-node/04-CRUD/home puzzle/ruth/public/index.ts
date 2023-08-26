import { Task } from "../API/tasks/taskModel";

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
      <form class="tasksListDiv__task" id ="${
        task.id
      }" onchange = "handelChangeTask(event)" >
      <input type="checkbox" class="checkMark" name ="isDone" ${
        task.isDone ? "checked" : ""
      }>
      <input type="text" class="taskNameInList" name="taskNameInList" placeholder="" value="${
        task.name
      }">
      <input type="time" class="taskTimeInList" name="taskTimeInList" placeholder="" value="${
        task.time
      }">
        <button  onclick="sayHallo(event)" > update </button>
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
        return `<form class="tasksListDiv__task" id ="${
          task.id
        }" onchange = "handelChangeTask(event)" >
          <input type="checkbox" class="checkMark" name ="isDone" ${
            task.isDone ? "checked" : ""
          }>
      <input type="text" class="taskNameInList" name="taskNameInList" placeholder="" value="${
        task.name
      }">
      <input type="time" class="taskTimeInList" name="taskTimeInList" placeholder="" value="${
        task.time
      }">
      <button  onclick="sayHallo(event)" > update </button>
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
    console.log("focus");

    input.classList.add("focused");
  });
  input.addEventListener("blur", () => {
    console.log("focus");

    input.classList.remove("focused");
  });
});

inputsTime.forEach((input) => {
  input.addEventListener("focus", () => {
    console.log("focus");

    input.classList.add("focused");
  });
  input.addEventListener("blur", () => {
    console.log("focus");

    input.classList.remove("focused");
  });
});

async function handleAllDoneTasks() {
  const response = await fetch("/API/get-all-done-tasks");
  const { doneTasks } = await response.json();
  renderAllTask(doneTasks);
}

async function handleAllTasks() {
  const response = await fetch("/API/get-all-tasks");
  const { tasks } = await response.json();
  renderAllTask(tasks);
}
