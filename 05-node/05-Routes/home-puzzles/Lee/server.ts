import express from "express";
const app = express();
const port = process.env.PORT || 3000;

//static files
app.use(express.static("public"));

//body
app.use(express.json());


//class Task {title: string, description: string, status: string, id: : string}

import tasksRouter from "./API/Tasks/tasksRouter";
app.use("API/tasks", tasksRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
