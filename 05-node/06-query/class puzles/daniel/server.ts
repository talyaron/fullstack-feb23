import express from 'express';
const app = express()
const port = process.env.PORT || 3008;

// Static files
app.use(express.static('public'));
app.use(express.json()); 

// // // router to tasks
// // import tasksRouter from "./API/tasks/tasksRouter";
// // // tells express to use tasksRouter on the initial route "/API/tasks"
// // app.use("/API/tasks", tasksRouter)

import router from "./API/img/imgRouter";
app.use("/API/img", router);

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})

