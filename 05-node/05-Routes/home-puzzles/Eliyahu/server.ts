import express from "express";
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.json());


import tasksRouters from './API/tasks/tasksRouters'

app.use('./API/tasks/tasksRouters.ts', tasksRouters)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  