import express from "express";
const app = express();
const port = process.env.PORT || 3000;



//static files
app.use(express.static("public"));

//body
app.use(express.json());

//router to products

// get router from userRouter
import userRouter from "./API/users/userRouter";
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter)

import tasksRouter from "./API/tasks/tasksRoutes";
app.use("/API/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
