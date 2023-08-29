import express from "express";
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.json());


import tasksRouter from './API/tasks/tasksRouter'
import userRouter from './API/users/userRouter'
app.use('/API/tasks', tasksRouter)
app.use('/API/users', userRouter)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  