import express from "express";
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.json());


import tasksRouter from './API/tasks/tasksRouter'

app.use('/API/tasks', tasksRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  