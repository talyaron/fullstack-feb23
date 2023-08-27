import { Task, _Task } from "./tasksModel";

let tasks: Task[] = [];


// Add task controler
// C-create
export const addTask =(req:any , res:any)=>{
    const task: _Task = req.body;
    console.log(task);
    //Add to tasks array
    tasks.push(new Task(task)); //-->add to database
    console.log(tasks);
    res.send({task})
}

// R-read
export const getTasks = (req:any, res:any)=>{
    try {
        res.send({tasks})
    } catch (error) {
        console.error(error)
    }
}

// U-update
// export const updateTaskStatus = (req:any, res:any)=> {
//     try {
//         const { status, id } = req.body;
//         console.log(req.body);
//         if(!status || !id) throw new Error("Please complete all fields");
//         const task = tasks.find((task)=> task.id === id);

//         if(!task) throw new Error("Task not found");
//         task.status = status;
//         res.send({ tasks });
//     } catch (error) {
//         console.error(error);
//         res.send({ error });
//     }
// }

export const updateTask = (req:any, res:any)=> {
    try {
        const {id,title,description, status} = req.body;
        console.log(req.body);
        if(!title || !description || !status || !id) throw new Error("Please complete all fileds");
        const task = tasks.find(task=>task.id === id)

        if(!task) throw new Error("Task not found");
        task.title = title;
        task.description = description;
        task.status = status;
        res.send({tasks});
        
        
    } catch (error) {
        console.error(error)
        res.send({error})
    }
}
// D-delete
export const deleteTask = (req:any, res:any)=>{
    try {
        const { id } = req.body;
        console.log(id);
        tasks = tasks.filter((task) => task.id !==id);
        res.send({ tasks });
    } catch (error) {
        console.error(error)
        res.send({error})
    }
}
