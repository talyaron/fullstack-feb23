import { _Task } from "../API/tasks/tasksModel";

getTasks();

async function handleAddTask(event:any) {
    try {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const status = event.target.status.value;

        if(!title || !description || !status){ 
            throw new Error("Please fill all fields.")
        }
        
        const task: _Task = {title, description, status};

        const response = await fetch('/API/tasks/add-task', 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(task)
        });

        const result = await response.json();
        console.log(result);
        
    } catch (error) {
        console.log(error)
    }
}

async function getTasks() {
    try {
        const response = await fetch('/API/tasks/get-tasks')
        const results = await response.json();
        const { tasks } = results;
        if(!Array.isArray(tasks)) throw new Error("tasks are not array")
        console.log(tasks);
        console.log(results);
        return tasks
    
    } catch (error) {
        console.error(error);
        return []
    }
}

function renderTasksHTML (task : _Task){
    try {
        const html= `
        <div class="task">
           <h2>Title: ${task.title}</h2>
           <p>Description: ${task.description}</p>
           <p>Status: ${task.status}</p>
           <form id="${task.id}" onsubmit="handleUpdateTask(event)">
              <input type="text" name="title" value="${task.title}" placeholder="Title">
              <input type="text" name="description" value="${task.description}" placeholder="Description">
              <input type="text" name="status" value="${task.status}" placeholder="Status">
              <button type="submit">Update</button>
           </form>
           <button class="delete" onclick="handleDeleteTask('${task.id}')">Delete</button>
        </div>
        `
        return html;
    } catch (error) {
        console.error(error);
        return ""
    }
}

function renderTasks(tasks: _Task[], HTMLElement:HTMLDivElement) {
    try {
        if(!HTMLElement) throw new Error("HTMLElement not found")
        console.log(tasks);
        if(!Array.isArray(tasks)) throw new Error ("Tasks are not array")
        const tasksHTML = tasks.map(task=> renderTasksHTML(task)).join("")
    HTMLElement.innerHTML = tasksHTML; 
    } catch (error) {
        console.log(error);
    }
}

async function handleGetTasks(){
    const tasks = await getTasks();

    const root = document.querySelector("#root");
    renderTasks(tasks, root as HTMLDivElement);
}

async function handleDeleteTask(id:string){
    try {
        const response = await fetch("/API/tasks/delete-task", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        });
        const result = await response.json();
        console.log(result);
        const { tasks } = result

        renderTasks(tasks, document.querySelector("#root") as HTMLDivElement)
        
    } catch (error) {
        console.error(error)
    }
}

async function handleUpdateTask(event:any){
    try {
      event.preventDefault();
      const title = event.target.title.value;
      const description = event.target.description.value;
      const status = event.target.status.value;
      const id = event.target.id;
      console.log(id,title,description, status)
  
      const response = await fetch('/API/tasks/update-task', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id,title,description, status})
      });
  
      const result = await response.json();
      console.log(result);
      const {tasks} = result;
      renderTasks(tasks, document.querySelector('#root') as HTMLDivElement);
  
    } catch (error) {
      console.error(error)
    }
  }
