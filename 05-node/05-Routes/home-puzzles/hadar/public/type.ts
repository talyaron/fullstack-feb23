interface Task {
  text: string;
  id?: string;
}
// get tasks from sserver, and render to screen.

async function handleStart() {

  //get tasks from server.
  const tasks = await gettasks();

  //render tasks to screen
  rendertasks(tasks ,document.querySelector('#root'));

}

handleStart();  

async function handleAddTask(event: any) {
  try {
    event.preventDefault();
    const text = event.target.title.value;
    const task: Task = { text };

    const response = await fetch("/API/products/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function gettasks() {
  try {
    const response = await fetch("/API/products/get-products");
    const results = await response.json();
    const { products } = results;
    if (!Array.isArray(products)) throw new Error("products are not array");
    console.log(products);
    console.log(results);
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function renderTaskHTML(task: Task) {
  try {
    const html = `<div class="task">
        <h3>${task.text}</h3>
        <form id="${task.id}" onsubmit="handleUpdateProduct(event)">
          <button type="submit">Update</button>
        </form>
        <button onclick="handleDeleteProduct('${task.id}')">Delete</button>
      </div>`;
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

function rendertasks(tasks: Task[], HTMLElement: HTMLDivElement) {
  try {
    if (!HTMLElement) throw new Error("HTMLElement not found");
    console.log(tasks);
    if (!Array.isArray(tasks)) throw new Error("products are not array");
    const tasksHTML = tasks.map((product) => renderTaskHTML(product)).join("");
    HTMLElement.innerHTML = tasksHTML;
  } catch (error) {
    console.error(error);
  }
}

async function handleGetTasks() {
  const tasks = await gettasks();

  const root = document.querySelector("#root");
  rendertasks(tasks, root as HTMLDivElement);
}

async function handleDeletetask(id: string) {
  try {
    const response = await fetch("/API/delete-task", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();
    console.log(result);
    const { tasks } = result;

    rendertasks(tasks, document.querySelector("#root") as HTMLDivElement);
  } catch (error) {
    console.error(error);
  }
}

async function handleUpdatetask(ev: any) {
  try {
    ev.preventDefault();
    const id = ev.target.id;
    console.log(id);

    const response = await fetch("/API/update-task-description", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const result = await response.json();
    console.log(result);
    const { products } = result;
    rendertasks(products, document.querySelector("#root") as HTMLDivElement);
  } catch (error) {
    console.error(error);
  }
}
