//mvc
//model
interface Task {
    title: string;
    description: string;
    status?: string;
    id?: string
}

interface User {
    name: string;
    tasks: Task[];
    id?: string;
}

//view (all render function):



//controllers:

async function handleAddTask(event: any) {
    try {
        event.preventDefault()
        const title = event.target.title.value;
        const description = event.target.description.value;
        if (!title || !description) throw new Error("Pleas complete all fields");
        const task: Task = {title, description}

        const response = await fetch('/API/tasks/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        });

        const result = await response.json();
        console.log(result);
        
    } catch (error) {
        console.error(error);
    }
}

async function getTasks() {
    try {
        const response = await fetch('/API/tasks/get-tasks')
        const result = await response.json()
        const { tasks } = result
        if (!Array.isArray(tasks)) throw new Error("tasks are not array")
        console.log(tasks)
        console.log(result)
        return tasks;
    } catch (error) {
        console.error(error)
        return []
    }
}

getTasks();

async function handelGetTasks() {
    const tasks = await getTasks()
    const root = document.querySelector('#root')
    renderTasks(tasks, root as HTMLDivElement)
}

async function handelDeleteTask(id: string) {
    try {
        const response = await fetch('/API/tasks/delet-task', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
          });
          const result = await response.json();
          console.log(result);
          const {products} = result;
      
          renderTasks(products, document.querySelector('#root') as HTMLDivElement);

    } catch (error) {
        console.error(error)
    }
}

async function handleUpdateTaskStatus(ev:any){
    try {
      ev.preventDefault();
      const status = ev.target.ststus.value;
      const id = ev.target.id;
      console.log(id, status)
  
      const response = await fetch('/API/tasks/update-task-status', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, status})
      });
  
      const result = await response.json();
      console.log(result);
      const {products} = result;
      rendertasks(products, document.querySelector('#root') as HTMLDivElement);
  
    } catch (error) {
      console.error(error)
    }
  }