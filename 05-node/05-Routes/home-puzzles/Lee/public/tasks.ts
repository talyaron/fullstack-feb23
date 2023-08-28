async function handleGetTasks(){
    try {
      const response = await fetch('/API/Tasks/get-tasks') 
      const { tasks } = await response.json()
      console.log(tasks)
    } catch (error) {
      console.error(error)
    }
  }
  handleGetTasks()
  
  async function handleAddTask(ev:any){
    try {
      ev.preventDefault()
      const title = ev.target.elements.title.value;
      const description = ev.target.elements.description.value;
      const newTask = {title, description};
      const response = await fetch ('/API/Tasks/add-task', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newTask)
      })
      const { tasks } = await response.json();
      console.log(tasks);
      
    } catch (error) {
      console.error(error)
    }   
  }

  