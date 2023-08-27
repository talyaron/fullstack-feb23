// You are building a basic task manager application. Each task has a unique ID, a title, a description, and a status (either "To-Do,"  "Done"). Your task is to implement the CRUD operations for managing tasks.

// **Exercise Tasks:**

// 1. **Create:**
//    Implement a function/method that allows the user to create a new task. The function should take input for the task's title, description, and status. It should assign a unique ID to the task and add it to the list of tasks.

// 2. **Read:**
//    Implement a function/method that allows the user to view tasks. The function should provide options to view all tasks, tasks by status, or a specific task by its ID.

// 3. **Update:**
//    Implement a function/method that allows the user to update a task. The function should take the task's ID as input and provide options to update the title, description, or status of the task.

// 4. **Delete:**
//    Implement a function/method that allows the user to delete a task. The function should take the task's ID as input and remove the task from the list of tasks.
// -----------------------------------------------------------------------------


class Task {
    title: string;
    category: string;
    status: string;
    id?: string;

    constructor({ title, category, status, id }) {
        this.title = title;
        this.category = category;
        this.status = status;
        this.id = id;
    }
}



function newTaskBtnClicked() {
    const newTaskWindowRoot = document.querySelector(".newTaskWindow") as HTMLElement;
    newTaskWindowRoot.style.opacity = "1"
    newTaskWindowRoot.style.top = "20vh"
}
async function handleNewTask(event: any) {
    try {
        event.preventDefault();
        const title = event.target.title.value;
        const category = event.target.category.value;
        const status = "todo"
        if (!title || !category) {
            throw new Error("Please complete all fields");
        }
        const task: Task = { title, category, status }
        const response = await fetch("/API/add-task", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });



    } catch (error) {
        console.error(error);
    }

}

getTasks();
handleGetTasks();
async function getTasks() {
    try {
        const response = await fetch("/API/get-tasks");
        const results = await response.json();
        const { tasks } = results;
        console.log(tasks);
        return tasks;
    } catch (error) {
        console.error(error);
    }
}



function renderTasks(tasks: Task[], HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found");
        console.log(tasks);
        if (!Array.isArray(tasks)) throw new Error("tasks are not array");
        const tasksHTML = tasks
            .map((task) => renderTaskHTML(task))
            .join("");
        HTMLElement.innerHTML = tasksHTML;
    } catch (error) {
        console.error(error);
    }
}

function renderTaskHTML(task: Task) {
    try {
        const html = `<div class="task" data-task-id="${task.id}">
        <h3 class="task__header">${task.title}</h3>
        <p class="task__Category">${task.category}</p>
        <form onsubmit="updateStatus(event, '${task.id}')">
        <select id="status" name="status" aria-placeholder="status">
                <option value="todo">todo</option>
                <option value="doing">doing</option>
                <option value="done">done</option>
                <input type="submit">
            </select>
        </form>    
        <button class="task__delete" onclick="handleDeletetask('${task.id}')">Delete</button>
      </div>`;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}

async function handleGetTasks() {

    const tasks: Task[] = await getTasks();
    const root = document.querySelector("#todoROOT");
    renderTasks(tasks, root as HTMLDivElement);
}

// --------------------------------
// update Status
async function updateStatus(event: any, id) {
    try {
        event.preventDefault();
        const status = event.target.status.value;

        const response = await fetch("/API/change-status", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, status }),
        });

        const result = await response.json();
        debugger;
        const { task , previousID} = result;
    
        renderTask(task, document.querySelector(`#${status}ROOT`));
        handleDeletetask(previousID)
    } catch (error) {
        console.error(error);
    }


}
function renderTask(task: Task, HTMLElement: HTMLDivElement) {
    try {
        if (!HTMLElement) throw new Error("HTMLElement not found");

        const tasksHTML = renderTaskHTML(task);
        HTMLElement.innerHTML = tasksHTML;
       

    } catch (error) {
        console.error(error);
    }
}

async function handleDeletetask(id) {
    try {
        const response = await fetch("/API/delete-task", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id}),
        })
        
        const result = await response.json();
        const {tasks, status} = result;
        renderTasks(tasks, document.querySelector(`#${status}ROOT`) as HTMLDivElement )




    } catch (error) {
        console.error(error);
    }
    
}
