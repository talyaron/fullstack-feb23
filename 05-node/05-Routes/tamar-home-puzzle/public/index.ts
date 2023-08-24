interface Task {
    title: string;
    description: string;
    status: string;
    id?:string
}

async function getTasks () {
    try {
        const response = await fetch('/API/tasks/get-tasks')
        const result = await response.json()
        const {tasks} = result
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